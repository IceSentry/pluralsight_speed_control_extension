/*global chrome*/

export const setSyncColor = (color: string) => {
  chrome.storage.sync.set({ color })
}
