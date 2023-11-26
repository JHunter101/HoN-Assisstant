import { dataBase } from './dataBase.js';

interface Squad {
  id: string;
  recruit: { front: string; back: string };
  contents: { recruit: { front: string; back: string } }[];
  available_slots: {
    M1: number;
    M2: number;
    D1: number;
    D2: number;
    G1: number;
    G2: number;
  };
  type: string;
  subtype: string;
  size: number;
  slots: string;
  source: string;
  box: string;
  faction: string;
  cost: number;
  platoon: string;
  orders: number;
}

interface Database {
  [faction: string]: {
    [box: string]: {
      [platoon: string]: {
        [type: string]: {
          [subtype: string]: {
            [id: string]: Squad;
          };
        };
      };
    };
  };
}

interface ArmyDatabase {
  [platoon: string]: {
    [type: string]: {
      [subtype: string]: {
        [id: string]: Squad;
      };
    };
  };
}

interface GameState {
  'main-setting': string;
  'boxes-setting': string[];
  'army-setting': string;
  'army-value': number;
  'other-restrictions': string[];
}

function buildRecDatabase(database: Database, gameState: GameState) {
  const armySetting = gameState['army-setting'];
  const boxesSetting = gameState['boxes-setting'];

  const availableSquads: ArmyDatabase = {};

  for (const box of boxesSetting) {
    if (dataBase[armySetting] && dataBase[armySetting][box]) {
      const platoonData = database[armySetting][box];
      for (const [platoonKey, platoon] of Object.entries(platoonData)) {
        if (!availableSquads[platoonKey]) {
          availableSquads[platoonKey] = platoon;
        } else {
          availableSquads[platoonKey] = mergeNestedDictionaries(
            availableSquads[platoonKey],
            platoon,
          );
        }
      }
    }
  }

  const serializedSquads = JSON.stringify(availableSquads);
  localStorage.setItem('available_recruitment', serializedSquads);

  return availableSquads;
}

function appendOptions(
  platoonOptions: HTMLDivElement,
  optionType: string,
  optionSize: string,
  squadList: { [id: string]: Squad },
  platoonKey: string,
) {
  const optionsDiv = document.createElement('div');
  optionsDiv.classList.add(
    'platoon-options-group',
    `option-size-${optionSize}`,
    optionType,
    `platoon-options-${platoonKey}`,
  );

  appendSquads(optionsDiv, squadList);

  platoonOptions.appendChild(optionsDiv);
  return platoonOptions;
}

function appendSquads(
  parentDiv: HTMLDivElement,
  squadList: { [id: string]: Squad },
  platoonOptions: HTMLDivElement = document.createElement('div'),
) {
  for (const [id, squad] of Object.entries(squadList)) {
    const squadDiv = document.createElement('div');
    let mainRecruit = document.createElement('div');
    squadDiv.classList.add('squad');
    squadDiv.id = id;
    squadDiv.addEventListener('dblclick', () => toggleAllWithClass('id'));

    mainRecruit.classList.add('main-recruit');
    mainRecruit.id = 'main-recruit-' + id;

    mainRecruit = appendTileIMGbox(mainRecruit, id, squad, false, '');
    mainRecruit = appendFireTeams(mainRecruit, id, squad['contents']);

    squadDiv.appendChild(mainRecruit);

    if (platoonOptions != document.createElement('div')) {
      squadDiv.appendChild(platoonOptions);
    }
    parentDiv.appendChild(squadDiv);
  }

  return parentDiv;
}

function appendTileIMGbox(
  parentDiv: HTMLDivElement,
  id: string,
  tileElement: { recruit: { front: string; back: string } },
  isFT = false,
  index = '',
): HTMLDivElement {
  const createImgBox = (suffix: 'front' | 'back'): HTMLDivElement => {
    const imgBox = document.createElement('div');
    imgBox.id = `${isFT ? 'ft' : 'squad'}-${id}-${index}-${suffix}`;
    {
      isFT
        ? imgBox.classList.add('small-img-box')
        : imgBox.classList.add('large-img-box');
    }
    if (suffix === 'back') {
      imgBox.classList.add('hidden');
    }

    const tileIMG = document.createElement('img');
    tileIMG.src = tileElement.recruit[suffix];
    tileIMG.height = 100;
    imgBox.appendChild(tileIMG);

    imgBox.addEventListener('click', () => {
      toggle_elem(`${isFT ? 'ft' : 'squad'}-${id}-${index}-front`);
    });
    imgBox.addEventListener('click', () => {
      toggle_elem(`${isFT ? 'ft' : 'squad'}-${id}-${index}-back`);
    });

    return imgBox;
  };

  const tileIMGBox = document.createElement('div');
  tileIMGBox.classList.add(isFT ? 'ft-img-box' : 'squad-img-box');
  tileIMGBox.id = `${isFT ? 'ft' : 'squad'}-${id}-${index}`;

  tileIMGBox.appendChild(createImgBox('front'));
  tileIMGBox.appendChild(createImgBox('back'));

  parentDiv.appendChild(tileIMGBox);

  return parentDiv;
}

function appendFireTeams(
  squadDiv: HTMLDivElement,
  id: string,
  contents: { recruit: { front: string; back: string } }[],
): HTMLDivElement {
  for (const [i, fireTeam] of contents.entries()) {
    squadDiv = appendTileIMGbox(squadDiv, id, fireTeam, true, String(i));
  }
  return squadDiv;
}

function constructPlatoons(availableSquads: ArmyDatabase) {
  const recruiter = document.getElementById('recruiter');

  if (!recruiter) {
    return;
  }

  const genericPlatoon = availableSquads['generic'];

  for (const [platoonKey, platoon] of Object.entries(availableSquads)) {
    let platoonDiv = createOrUpdateDiv(platoonKey, 'platoon');

    let platoonOptionsDiv = createOrUpdateDiv(platoonKey, 'platoon-options');
    platoonOptionsDiv.classList.add('hidden');

    ['2', '1'].forEach((optionSize) => {
      ['ft-vehicle', 'ft-inf', 'gear'].forEach((optionType) => {
        const squadList = platoon[optionType]?.[optionSize];

        if (squadList) {
          platoonOptionsDiv = appendOptions(
            platoonOptionsDiv,
            optionType,
            optionSize,
            squadList,
            platoonKey,
          );
        }

        const genericSquadList = genericPlatoon[optionType]?.[optionSize];
        if (genericSquadList && platoonKey !== 'generic') {
          platoonOptionsDiv = appendOptions(
            platoonOptionsDiv,
            optionType,
            optionSize,
            genericSquadList,
            'generic',
          );
        }
      });
    });

    for (const recType of ['rc-plat', 'rc-hero']) {
      if (platoon[recType]) {
        for (const [, squadList] of Object.entries(platoon[recType])) {
          platoonDiv = appendSquads(platoonDiv, squadList, platoonOptionsDiv);
        }
      }
    }

    recruiter.appendChild(platoonDiv);
  }
}

function createOrUpdateDiv(id: string, className: string): HTMLDivElement {
  const existingDiv = document.getElementById(id) as HTMLDivElement;
  const div = existingDiv || document.createElement('div');

  div.id = 'platoon-' + id;
  div.classList.add(className);

  return div;
}

function resetGameState(): GameState {
  return {
    'main-setting': '',
    'boxes-setting': [],
    'army-setting': '',
    'army-value': 999999999,
    'other-restrictions': [],
  };
}

(window as any).setup = function setup() {
  resetArmy();
  const gameState: GameState = resetGameState();
  gameState['main-setting'] = getInputElementValue('main-setting');
  gameState['boxes-setting'] = getSelectElementValues('boxes-setting');
  console.log(gameState['boxes-setting']);
  gameState['army-setting'] = getInputElementValue('army-setting');
  gameState['army-value'] = parseInt(
    getInputElementValue('army-value') as string,
  );
  gameState['other-restrictions'] =
    getSelectElementValues('other-restrictions');
  const availableSquads = buildRecDatabase(dataBase, gameState);
  constructPlatoons(availableSquads);
  hide_elem('main-menu');
  unhide_elem('second');
};
