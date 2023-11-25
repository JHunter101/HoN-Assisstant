import { dataBase } from 'dataBase.js';

interface Squad {
  id: string;
  recruit: { front: string; back: string };
  contents: { front: string; back: string }[];
  available_slots: {
    'M1': number,
    'M2': number,
    'D1': number,
    'D2': number,
    'G1': number,
    'G2': number,
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
  const availableSquads: ArmyDatabase = {};

  for (const box of gameState['boxes-setting']) {
    for (const [platoonKey, platoon] of Object.entries(
      database[gameState['army-setting']][box],
    )) {
      availableSquads[platoonKey] = platoon;
    }
  }

  localStorage.setItem(
    'available_recruitment',
    JSON.stringify(availableSquads),
  );
  return availableSquads;
}

function createOptions(
  platoonOptions: HTMLDivElement,
  optionType: string,
  optionSize: string,
  squadList: {[id: string]: Squad},
  platoonKey: string,
) {
  let optionsDiv = document.createElement('div');
  optionsDiv.classList.add('option-size-' + optionSize, optionType);
  optionsDiv.classList.add('platoon-options-' + platoonKey);
  optionsDiv = appendSquads(optionsDiv, squadList);
  platoonOptions.appendChild(optionsDiv);
  return platoonOptions;
}

function appendSquads(
  parentDiv: HTMLDivElement,
  squadList: {[id: string]: Squad},
  platoonOptions: HTMLDivElement = document.createElement('div'),
) {
  for (const [id, squad] of Object.entries(squadList)) {
    let squadDiv = document.createElement('div');
    squadDiv.classList.add('squad');
    squadDiv.id = id;
    squadDiv.addEventListener('click', () => toggleAllWithClass('id'));

    const squadIMGbox = document.createElement('div');
    squadIMGbox.classList.add('squadIMGbox');
    // Append image to box

    squadDiv.appendChild(squadIMGbox);

    // TODO: Add squad to selection
    squadDiv = appendFireTeams(squadDiv, id, squad['contents']);
    if (platoonOptions != document.createElement('div')) {
      squadDiv.appendChild(platoonOptions);
    }
    parentDiv.appendChild(squadDiv);
  }

  return parentDiv;
}

function appendFireTeams(
  squadDiv: HTMLDivElement,
  id: string,
  contents: { front: string; back: string }[],
) {
  for (const [i, fireTeam] of contents.entries()) {
    const ftDiv = document.createElement('div');
    ftDiv.classList.add('fire-team-box');
    ftDiv.id = 'fire-team-' + id;

    const ftFrontDiv = document.createElement('div');
    ftFrontDiv.classList.add('fire-team', 'ft-front');
    ftFrontDiv.id = 'fire-team-' + id + '-' + i + '-ft-front'; // Use the index 'i' here
    ftFrontDiv.textContent = fireTeam.front; // TODO: IS IMAGE
    ftFrontDiv.addEventListener('dblclick', () =>
      toggle_elem('fire-team-' + id + '-' + i + '-ft-front'),
    );
    ftFrontDiv.addEventListener('dblclick', () =>
      toggle_elem('fire-team-' + id + '-' + i + '-ft-back'),
    );

    const ftBackDiv = document.createElement('div');
    ftBackDiv.classList.add('fire-team', 'ft-back', 'hidden');
    ftBackDiv.id = 'fire-team-' + id + '-' + i + '-ft-back'; // Use the index 'i' here
    ftBackDiv.textContent = fireTeam.back; // TODO: IS IMAGE
    ftBackDiv.addEventListener('dblclick', () =>
      toggle_elem('fire-team-' + id + '-' + i + '-ft-front'),
    );
    ftBackDiv.addEventListener('dblclick', () =>
      toggle_elem('fire-team-' + id + '-' + i + '-ft-back'),
    );

    ftDiv.appendChild(ftFrontDiv);
    ftDiv.appendChild(ftBackDiv);
    squadDiv.appendChild(ftDiv);
  }

  return squadDiv;
}

function constructPlatoons(availableSquads: ArmyDatabase) {
  const recruiter = document.getElementById('recruiter');

  const genericPlatoon = availableSquads['1generic']
  
  if (recruiter) {
    for (const [platoonKey, platoon] of Object.entries(availableSquads)) {
      let platoonDiv =
        (document.getElementById(platoonKey) as HTMLDivElement) ||
        document.createElement('div');

      platoonDiv.id = 'platoon-' + platoonKey;
      platoonDiv.classList.add('platoon');

      let platoonOptionsDiv = document.createElement('div');
      platoonOptionsDiv.classList.add('platoon-options');
      platoonOptionsDiv.classList.add('platoon-options-' + platoonKey);
      platoonOptionsDiv.classList.add('hidden');

      for (const optionSize of ['2', '1']) {
        for (const optionType of ['ft-vehicle', 'ft-inf', 'gear']) {
          platoonOptionsDiv = createOptions(
            platoonOptionsDiv,
            optionType,
            optionSize,
            platoon[optionType][optionSize],
            platoonKey,
          );

          if (platoonKey != '1generic') {
            platoonOptionsDiv = createOptions(
              platoonOptionsDiv,
              optionType,
              optionSize,
              genericPlatoon[optionType][optionSize],
              '1generic',
            );
          }
        }
      }

      for (const recType of ['rc-plat', 'rc-hero']) {
        for (const [, squadList] of Object.entries(platoon[recType])) {
          platoonDiv = appendSquads(platoonDiv, squadList, platoonOptionsDiv);
        }
      }

      recruiter.appendChild(platoonDiv);
    }
  }
}

function resetArmy() {
  clearBox('builder');
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

function setup() {
  resetArmy();
  const gameState: GameState = resetGameState();
  gameState['main-setting'] = getInputElementValue('main-setting');
  gameState['boxes-setting'] = getSelectElementValue('boxes-setting');
  gameState['army-setting'] = getInputElementValue('army-setting');
  gameState['army-value'] = parseInt(
    getInputElementValue('army-value') as string,
  );
  gameState['other-restrictions'] = getSelectElementValue('other-restrictions');

  const availableSquads = buildRecDatabase(dataBase, gameState);
  constructPlatoons(availableSquads);
  unhide_elem('second');
}
