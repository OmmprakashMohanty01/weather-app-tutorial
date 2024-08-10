// Updating the UI


function changeInnerHTML(element, newHtml) {
  element.innerHTML = newHtml;
}

function changeOuterHTML(element, newHtml) {
  element.outerHTML = newHtml;
}

function changeTextContent(element, newText) {
  element.textContent = newText;
}

function addClass(element, className) {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
}

function removeClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
}