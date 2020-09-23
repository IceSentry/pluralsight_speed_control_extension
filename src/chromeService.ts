/*global chrome*/

export const executeScriptOnPage = (code: string): Promise<unknown[]> => {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id as number
      chrome.tabs.executeScript(
        tabId,
        {
          code,
        },
        (result) => resolve(result)
      )
    })
  })
}

export const setPlayerSpeed = (speed: number) => {
  executeScriptOnPage(`
  (function () {
    const playerSettings = localStorage.getItem('ps-embeddable-player-settings')
    if (playerSettings) {
      const localPlayerSettings = JSON.parse(playerSettings)
      localPlayerSettings.playbackSpeed = ${speed}
      localStorage.setItem(
        'ps-embeddable-player-settings',
        JSON.stringify(localPlayerSettings)
      )
    }
  })()`)
}

export const getPlayerSpeed = async () => {
  const result = await executeScriptOnPage(`
  (function () {
    const playerSettings = localStorage.getItem('ps-embeddable-player-settings')
    if (playerSettings) {
      const localPlayerSettings = JSON.parse(playerSettings)
      return localPlayerSettings.playbackSpeed
    }
  })()`)
  return result[0] as number
}

export const reloadActiveTab = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0]?.id as number)
  })
}
