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

function getOffsetHeight(element) {
  return element.offsetHeight;
}

function getOffsetWidth(element) {
  return element.offsetWidth;
}

function getAspectRatio(element) {
  return element.offsetWidth / element.offsetHeight;
}

function getViewportDimensions() {
  var width = Math.max(document.documentElement.clientWidth, document.body.clientWidth);
  var height = Math.max(document.documentElement.clientHeight, document.body.clientHeight);
  return { width, height };
}

function getCentered(element) {
  var rect = element.getBoundingClientRect();
  var scrollLeft = rect.left + (element.offsetParent ? element.offsetParent.scrollLeft : 0);
  var scrollTop = rect.top + (element.offsetParent ? element.offsetParent.scrollTop : 0);
  return {
    x: scrollLeft + (element.offsetWidth - rect.width) / 2,
    y: scrollTop + (element.offsetHeight - rect.height) / 2
  };
}

function getScrollDimensions(element) {
  return { width: element.scrollWidth, height: element.scrollHeight };
}

function getViewportPercentage(element) {
  var viewportDimensions = getViewportDimensions();
  var elementDimensions = { width: element.offsetWidth, height: element.offsetHeight };
  var aspectRatio = getAspectRatio(element);
  var viewportAspectRatio = viewportDimensions.width / viewportDimensions.height;
  var percentageWidth = (1 - Math.abs((viewportAspectRatio - aspectRatio) / (aspectRatio + viewportAspectRatio))) * 100;
  var percentageHeight = 100 / (1 + (viewportAspectRatio / aspectRatio));
  return { width: percentageWidth, height: percentageHeight }
}