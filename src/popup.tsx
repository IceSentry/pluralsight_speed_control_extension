import { h, render, Fragment } from 'preact'
import { SpeedController } from './components/SpeedController'
import { ReloadButton } from './components/ReloadButton'

const App = () => {
  return (
    <Fragment>
      <SpeedController />
      <ReloadButton />
    </Fragment>
  )
}

render(<App />, document.getElementById('root') as Element)
