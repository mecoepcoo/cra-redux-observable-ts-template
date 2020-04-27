import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import CounterComponent from '@/components/Counter'

import './HelloWorldDemoPage.less'

const HelloWorldDemoPage: React.FC<RouteComponentProps> = (routeProps: RouteComponentProps) => {
  console.log(routeProps)
  return (
    <div className="App">
      <CounterComponent />
    </div>
  )
}

export default HelloWorldDemoPage
