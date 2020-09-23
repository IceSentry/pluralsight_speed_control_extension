import { setSyncColor } from './chromeService'
/*global chrome*/

chrome.runtime.onInstalled.addListener(() => {
  setSyncColor('#3aa757')
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'app.pluralsight.com' },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ])
  })
})
