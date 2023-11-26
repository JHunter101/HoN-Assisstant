import { dataBase } from './dataBase.js';
function buildRecDatabase(database, gameState) {
    const availableSquads = {};
    for (const box of gameState['boxes-setting']) {
        for (const [platoonKey, platoon] of Object.entries(database[gameState['army-setting']][box])) {
            availableSquads[platoonKey] = platoon;
        }
    }
    localStorage.setItem('available_recruitment', JSON.stringify(availableSquads));
    return availableSquads;
}
function createOptions(platoonOptions, optionType, optionSize, squadList, platoonKey) {
    let optionsDiv = document.createElement('div');
    optionsDiv.classList.add('option-size-' + optionSize, optionType);
    optionsDiv.classList.add('platoon-options-' + platoonKey);
    optionsDiv = appendSquads(optionsDiv, squadList);
    platoonOptions.appendChild(optionsDiv);
    return platoonOptions;
}
function appendSquads(parentDiv, squadList, platoonOptions = document.createElement('div')) {
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
function appendFireTeams(squadDiv, id, contents) {
    for (const [i, fireTeam] of contents.entries()) {
        const ftDiv = document.createElement('div');
        ftDiv.classList.add('fire-team-box');
        ftDiv.id = 'fire-team-' + id;
        const ftFrontDiv = document.createElement('div');
        ftFrontDiv.classList.add('fire-team', 'ft-front');
        ftFrontDiv.id = 'fire-team-' + id + '-' + i + '-ft-front'; // Use the index 'i' here
        ftFrontDiv.textContent = fireTeam.front; // TODO: IS IMAGE
        ftFrontDiv.addEventListener('dblclick', () => toggle_elem('fire-team-' + id + '-' + i + '-ft-front'));
        ftFrontDiv.addEventListener('dblclick', () => toggle_elem('fire-team-' + id + '-' + i + '-ft-back'));
        const ftBackDiv = document.createElement('div');
        ftBackDiv.classList.add('fire-team', 'ft-back', 'hidden');
        ftBackDiv.id = 'fire-team-' + id + '-' + i + '-ft-back'; // Use the index 'i' here
        ftBackDiv.textContent = fireTeam.back; // TODO: IS IMAGE
        ftBackDiv.addEventListener('dblclick', () => toggle_elem('fire-team-' + id + '-' + i + '-ft-front'));
        ftBackDiv.addEventListener('dblclick', () => toggle_elem('fire-team-' + id + '-' + i + '-ft-back'));
        ftDiv.appendChild(ftFrontDiv);
        ftDiv.appendChild(ftBackDiv);
        squadDiv.appendChild(ftDiv);
    }
    return squadDiv;
}
function constructPlatoons(availableSquads) {
    const recruiter = document.getElementById('recruiter');
    const genericPlatoon = availableSquads['generic'];
    if (recruiter) {
        for (const [platoonKey, platoon] of Object.entries(availableSquads)) {
            let platoonDiv = document.getElementById(platoonKey) ||
                document.createElement('div');
            platoonDiv.id = 'platoon-' + platoonKey;
            platoonDiv.classList.add('platoon');
            let platoonOptionsDiv = document.createElement('div');
            platoonOptionsDiv.classList.add('platoon-options');
            platoonOptionsDiv.classList.add('platoon-options-' + platoonKey);
            platoonOptionsDiv.classList.add('hidden');
            for (const optionSize of ['2', '1']) {
                for (const optionType of ['ft-vehicle', 'ft-inf', 'gear']) {
                    if (platoon[optionType] && platoon[optionType][optionSize]) {
                        console.log(platoonKey, optionType, optionSize);
                        platoonOptionsDiv = createOptions(platoonOptionsDiv, optionType, optionSize, platoon[optionType][optionSize], platoonKey);
                    }
                    if (genericPlatoon[optionType] &&
                        genericPlatoon[optionType][optionSize]) {
                        if (platoonKey != 'generic') {
                            platoonOptionsDiv = createOptions(platoonOptionsDiv, optionType, optionSize, genericPlatoon[optionType][optionSize], 'generic');
                        }
                    }
                }
            }
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
}
function resetArmy() {
    clearBox('builder');
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
    // gameState['main-setting'] = getInputElementValue('main-setting');
    // gameState['boxes-setting'] = getSelectElementValue('boxes-setting');
    // gameState['army-setting'] = getInputElementValue('army-setting');
    // gameState['army-value'] = parseInt(
    //   getInputElementValue('army-value') as string,
    // );
    // gameState['other-restrictions'] = getSelectElementValue('other-restrictions');
    gameState['main-setting'] = 'HoN-v1';
    gameState['boxes-setting'] = ['hon-core'];
    gameState['army-setting'] = 'US';
    gameState['army-value'] = 999999999;
    gameState['other-restrictions'] = [];
    const availableSquads = buildRecDatabase(dataBase, gameState);
    constructPlatoons(availableSquads);
    unhide_elem('second');
};
