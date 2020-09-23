import { h, render } from 'preact'
import { SpeedController } from './components/SpeedController'

const App = () => <SpeedController />

render(<App />, document.getElementById('root') as Element)
