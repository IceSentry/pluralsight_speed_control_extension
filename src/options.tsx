import { Fragment, h, render } from 'preact'
import { SpeedController } from './components/SpeedController'
import { IncrementController } from './components/IncrementController'

const App = () => {
  return (
    <Fragment>
      <IncrementController />
      <SpeedController />
    </Fragment>
  )
}

render(<App />, document.getElementById('root') as Element)
