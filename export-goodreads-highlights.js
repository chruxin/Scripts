/**
 * Export a user's reading highlights from a Goodreads page.
 * Change `highlightStartMarker` and `highlightEndMarker` to customize your export format.
 * 
 * How to use:
 * Open DevTools on the Goodreads page, copy the script below and paste into the Console tool,
 * then press enter.
 */

const highlightStartMarker = '' // e.g. '> ' for quote in Markdown
const highlightEndMarker = '\n\n'

let resultText = ''

const highlightElements = document.getElementsByClassName('noteHighlightTextContainer__highlightText')
for (let highlightElement of highlightElements) {
  if (highlightElement.childElementCount === 1) {
    // only one child that contains the full text
    resultText += `${highlightStartMarker}${highlightElement.childElements()[0].textContent}${highlightEndMarker}`
  } else if (highlightElement.childElementCount === 3) {
    const lastChild = highlightElement.childElements()[2]
    if (lastChild.textContent === '...more') {
      // click to show the full text
      lastChild.click()
      // child elements updated. now the second one contains the full text
      resultText += `${highlightStartMarker}${highlightElement.childElements()[1].textContent}${highlightEndMarker}`
    }
  }
}

console.log('---------------------------------')
console.log(resultText)
