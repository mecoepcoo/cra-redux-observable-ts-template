import React from 'react'
import { RootState } from '@/redux/root'
import { useSelector, useDispatch } from 'react-redux'
import { updateCounter } from '@/redux/modules/counter'

const counterStep = 1

// 组件函数名一定要大写
const CounterComponent: React.FC<any> = (props: any) => {
  const { count } = useSelector((state: RootState) => state.counter)

  const dispatch = useDispatch()

  const decrement = () => {
    dispatch(updateCounter(-counterStep))
  }

  const increment = () => {
    dispatch(updateCounter(counterStep))
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button type="button" onClick={decrement}>
        -
      </button>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  )
}

export default CounterComponent
