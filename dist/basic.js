"use strict";
function toggle_elem(elem) {
    const element = document.getElementById(elem);
    if (element) {
        if (element.classList.contains('hidden')) {
            unhide_elem(elem); // If hidden, unhide the element
        }
        else {
            hide_elem(elem); // If visible, hide the element
        }
    }
}
function unhide_elem(elem) {
    const element = document.getElementById(elem);
    if (element)
        element.classList.remove('hidden');
}
function hide_elem(elem) {
    const element = document.getElementById(elem);
    if (element)
        element.classList.add('hidden');
}
function clearBox(elem) {
    document.getElementById(elem).innerHTML = '';
}
// Helpers
function getInputElementValue(id) {
    const inputElement = document.getElementById(id);
    return inputElement.value;
}
function getSelectElementValues(id) {
    const selectElement = document.getElementById(id);
    const selectedOptions = Array.from(selectElement.selectedOptions).map((option) => option.value);
    return selectedOptions;
}
function toggleAllWithClass(elem) {
    const clickedElement = document.getElementById(elem);
    if (clickedElement) {
        // Get the combination of class names of the clicked element
        const classNames = Array.from(clickedElement.classList).join('.');
        const elementsToToggle = document.querySelectorAll(`.${classNames}`);
        // Toggle the visibility for each matching element
        elementsToToggle.forEach((element) => {
            toggle_elem(element.id);
        });
    }
}
function resetArmy() {
    clearBox('builder');
    const recruiter = document.getElementById('recruiter');
    if (recruiter) {
        recruiter.innerHTML = '';
    }
}
function mergeNestedDictionaries(target, source) {
    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (target[key] &&
                typeof target[key] === 'object' &&
                !Array.isArray(target[key])) {
                // If the property is a nested object, recursively merge
                target[key] = mergeNestedDictionaries(target[key], source[key]);
            }
            else {
                // Otherwise, assign the value directly
                target[key] = source[key];
            }
        }
    }
    return target;
}
