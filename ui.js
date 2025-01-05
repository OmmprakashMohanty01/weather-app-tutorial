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

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function hasClass(element, className) {
  return element.classList.contains(className);
}

function removeElement(element) {
  element.remove();
}

function getStyle(element, property) {
  return window.getComputedStyle(element).getPropertyValue(property);
}

function getComputedStyle(element) {
  return window.getComputedStyle(element);
}

function getScrollPosition(element) {
  var rect = element.getBoundingClientRect();
  return {
    x: rect.left + window.pageXOffset,
    y: rect.top + window.pageYOffset
  };
}

function getScrollIntoViewPosition(element) {
  var rect = element.getBoundingClientRect();
  var scrollLeft = element.scrollLeft;
  var scrollTop = element.scrollTop;
  var scrollWidth = element.scrollWidth;
  var scrollHeight = element.scrollHeight;
  return {
    x: rect.left - element.offsetLeft + scrollLeft - (document.documentElement.clientWidth || document.body.clientWidth) / 2,
    y: rect.top - element.offsetTop + scrollTop - (document.documentElement.clientHeight || document.body.clientHeight) / 2
  };
}