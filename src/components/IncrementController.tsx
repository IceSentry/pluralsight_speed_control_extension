import { h } from 'preact'
import { useEffect, useState } from 'preact/compat'

export const IncrementController = () => {
  const [increment, setIncrement] = useState(0.25)

  const onChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value
    setIncrement(parseInt(value, 10))
  }

  useEffect(() => {
    // TODO save to localstorage
  }, [increment])

  return (
    <input type="number" step="0.05" value={increment} onChange={onChange} />
  )
}
