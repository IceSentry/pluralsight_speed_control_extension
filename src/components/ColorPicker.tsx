import { h, Fragment } from 'preact'
import { setSyncColor } from '../utils'

type SetColorType = (color: string) => void

const ColorPickerButton = (props: {
  color: string
  setColor: SetColorType
}) => {
  const onClick = () => {
    setSyncColor(props.color)
    props.setColor(props.color)
  }

  return <button style={{ backgroundColor: props.color }} onClick={onClick} />
}

const ColorPicker = (props: { setColor: SetColorType }) => {
  const colors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1']

  return (
    <Fragment>
      {colors.map((x) => (
        <ColorPickerButton color={x} setColor={props.setColor} />
      ))}
      <div>
        <p>Choose a different background color!</p>
      </div>
    </Fragment>
  )
}

export default ColorPicker
