import { h } from 'preact'
import { reloadActiveTab } from '../chromeService'

export const ReloadButton = () => {
  const reload = () => {
    reloadActiveTab()
  }

  return <button onClick={reload}>Refresh</button>
}
