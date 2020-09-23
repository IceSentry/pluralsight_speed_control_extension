import { h, render } from 'preact'
import ColorPicker from './components/ColorPicker'
import { setSyncColor } from './utils'

const App = () => <ColorPicker setColor={setSyncColor} />

render(<App />, document.getElementById('root') as Element)
