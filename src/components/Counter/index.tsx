import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCounter } from '@/redux/modules/counter'
// types
import { RootState } from '@/types/store'
// styles
import style from './index.module.less'

const counterStep = 1

type Props = {
  // some props
}

// 组件函数名一定要大写
const CounterComponent: React.FC<Props> = (props: Props) => {
  const { count } = useSelector((state: RootState) => state.counter)

  const dispatch = useDispatch()

  const handleDecrement = () => {
    dispatch(updateCounter(-counterStep))
  }

  const handleIncrement = () => {
    dispatch(updateCounter(counterStep))
  }

  return (
    <div className="App">
      <h1 className={style.title}>{count}</h1>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  )
}

export default CounterComponent
