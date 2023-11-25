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

function getSelectElementValue(id: string): string[] {
  const inputElement = document.getElementById(id) as HTMLSelectElement;
  const selectedOptions = Array.from(inputElement.selectedOptions);
  const values = selectedOptions.map((option) => option.value);
  return values;
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
