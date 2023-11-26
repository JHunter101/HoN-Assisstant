function toggle_elem(elem: string): void {
  const element = document.getElementById(elem);
  if (element) {
    if (element.classList.contains('hidden')) {
      unhide_elem(elem); // If hidden, unhide the element
    } else {
      hide_elem(elem); // If visible, hide the element
    }
  }
}

function unhide_elem(elem: string): void {
  const element = document.getElementById(elem);
  if (element) element.classList.remove('hidden');
}

function hide_elem(elem: string): void {
  const element = document.getElementById(elem);
  if (element) element.classList.add('hidden');
}

function clearBox(elem: string): void {
  (document.getElementById(elem) as HTMLInputElement).innerHTML = '';
}

// Helpers
function getInputElementValue(id: string): string {
  const inputElement = document.getElementById(id) as HTMLInputElement;
  return inputElement.value;
}

function getSelectElementValues(id: string): string[] {
  const selectElement = document.getElementById(id) as HTMLSelectElement;
  const selectedOptions = Array.from(selectElement.selectedOptions).map(
    (option) => option.value,
  );
  return selectedOptions;
}

function toggleAllWithClass(elem: string): void {
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

type NestedDictionary = Record<string, any>;

function mergeNestedDictionaries<T extends NestedDictionary>(
  target: T,
  source: T,
): T {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (
        target[key] &&
        typeof target[key] === 'object' &&
        !Array.isArray(target[key])
      ) {
        // If the property is a nested object, recursively merge
        target[key] = mergeNestedDictionaries(target[key], source[key]);
      } else {
        // Otherwise, assign the value directly
        target[key] = source[key];
      }
    }
  }
  return target;
}
