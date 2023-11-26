import { dataBase } from './dataBase.js';
function buildRecDatabase(database, gameState) {
    const armySetting = gameState['army-setting'];
    const boxesSetting = gameState['boxes-setting'];
    const availableSquads = {};
    for (const box of boxesSetting) {
        if (dataBase[armySetting] && dataBase[armySetting][box]) {
            const platoonData = database[armySetting][box];
            for (const [platoonKey, platoon] of Object.entries(platoonData)) {
                if (!availableSquads[platoonKey]) {
                    availableSquads[platoonKey] = platoon;
                }
                else {
                    availableSquads[platoonKey] = mergeNestedDictionaries(availableSquads[platoonKey], platoon);
                }
            }
        }
    }
    const serializedSquads = JSON.stringify(availableSquads);
    localStorage.setItem('available_recruitment', serializedSquads);
    return availableSquads;
}
function appendOptions(platoonOptions, optionType, optionSize, squadList, platoonKey) {
    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('platoon-options-group', `option-size-${optionSize}`, optionType, `platoon-options-${platoonKey}`);
    appendSquads(optionsDiv, squadList);
    platoonOptions.appendChild(optionsDiv);
    return platoonOptions;
}
function appendSquads(parentDiv, squadList, platoonOptions = document.createElement('div')) {
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
function appendTileIMGbox(parentDiv, id, tileElement, isFT = false, index = '') {
    const createImgBox = (suffix) => {
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
function appendFireTeams(squadDiv, id, contents) {
    for (const [i, fireTeam] of contents.entries()) {
        squadDiv = appendTileIMGbox(squadDiv, id, fireTeam, true, String(i));
    }
    return squadDiv;
}
function constructPlatoons(availableSquads) {
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
                var _a, _b;
                const squadList = (_a = platoon[optionType]) === null || _a === void 0 ? void 0 : _a[optionSize];
                if (squadList) {
                    platoonOptionsDiv = appendOptions(platoonOptionsDiv, optionType, optionSize, squadList, platoonKey);
                }
                const genericSquadList = (_b = genericPlatoon[optionType]) === null || _b === void 0 ? void 0 : _b[optionSize];
                if (genericSquadList && platoonKey !== 'generic') {
                    platoonOptionsDiv = appendOptions(platoonOptionsDiv, optionType, optionSize, genericSquadList, 'generic');
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
function createOrUpdateDiv(id, className) {
    const existingDiv = document.getElementById(id);
    const div = existingDiv || document.createElement('div');
    div.id = 'platoon-' + id;
    div.classList.add(className);
    return div;
}
function resetGameState() {
    return {
        'main-setting': '',
        'boxes-setting': [],
        'army-setting': '',
        'army-value': 999999999,
        'other-restrictions': [],
    };
}
window.setup = function setup() {
    resetArmy();
    const gameState = resetGameState();
    gameState['main-setting'] = getInputElementValue('main-setting');
    gameState['boxes-setting'] = getSelectElementValues('boxes-setting');
    console.log(gameState['boxes-setting']);
    gameState['army-setting'] = getInputElementValue('army-setting');
    gameState['army-value'] = parseInt(getInputElementValue('army-value'));
    gameState['other-restrictions'] =
        getSelectElementValues('other-restrictions');
    const availableSquads = buildRecDatabase(dataBase, gameState);
    constructPlatoons(availableSquads);
    hide_elem('main-menu');
    unhide_elem('second');
};
