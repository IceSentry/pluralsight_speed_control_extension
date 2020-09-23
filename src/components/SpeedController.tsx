import { h, Fragment } from 'preact'
import { useEffect, useState } from 'preact/compat'
import {
  getPlayerSpeed,
  setPlayerSpeed,
  reloadActiveTab,
} from '../chromeService'

const INCREMENT = 0.25

export const SpeedController = () => {
  const [speed, setSpeed] = useState(1.0)

  useEffect(() => {
    const getSpeed = async () => {
      const value = await getPlayerSpeed()
      setSpeed(value)
    }
    getSpeed()
  }, [])

  useEffect(() => {
    if (speed < 0.5) {
      setSpeed(0.5)
    }
    setPlayerSpeed(speed)
  }, [speed])

  const increaseSpeed = () => {
    setSpeed(speed + INCREMENT)
  }

  const decreaseSpeed = () => {
    setSpeed(speed - INCREMENT)
  }

  const reload = () => {
    reloadActiveTab()
  }

  return (
    <Fragment>
      <button onClick={decreaseSpeed}>{'<<'}</button>
      <input type="number" value={speed} />
      <button onClick={increaseSpeed}>{'>>'}</button>
      <button onClick={reload}>Refresh</button>
    </Fragment>
  )
}
