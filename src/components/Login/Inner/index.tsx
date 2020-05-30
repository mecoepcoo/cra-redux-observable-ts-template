import React from 'react'

import style from './index.module.less'

// web应用内登录组件
const LoginComponent: React.FC = () => {
  return (
    <div className={style.login}>
      <div className={style.formBox}>
        <input type="text" className={style.inputText} placeholder="admin" />
        <input type="password" className={style.inputText} placeholder="password" />
        <div className={`${style.btn} ${style.btnSubmit}`}>登录</div>
      </div>
    </div>
  )
}

export default LoginComponent
