import React from 'react'
import { RootState } from '@/types/store'
import { useSelector, useDispatch } from 'react-redux'
import { updateCounter } from '@/redux/modules/counter'

import style from './index.module.less'

const counterStep = 1

type Props = {
  // some props
}

// 组件函数名一定要大写
const CounterComponent: React.FC<Props> = (props: Props) => {
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
      <h1 className={style.title}>{count}</h1>
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
