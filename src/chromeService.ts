/*global chrome*/

export const setSyncColor = (color: string) => {
  chrome.storage.sync.set({ color })
}

export const executeScriptOnPage = (code: string): Promise<unknown[]> => {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id as number
      chrome.tabs.executeScript(
        tabId,
        {
          code,
        },
        (result) => {
          resolve(result)
        }
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
  const speed = await executeScriptOnPage(`
  (function () {
    const playerSettings = localStorage.getItem('ps-embeddable-player-settings')
    if (playerSettings) {
      const localPlayerSettings = JSON.parse(playerSettings)
      return localPlayerSettings.playbackSpeed
    }
  })()`)
  return speed[0] as number
}

export const refreshPage = () => {
  executeScriptOnPage(`(function () {
    location.reload()
  })`)
}
