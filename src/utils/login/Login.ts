import { ILoginMode, TLoginOptions, IInnerLoginOptions } from './LoginMode'
import { InnerLoginMode } from './LoginMode'

class LoginAssistant {
  private _mode: ILoginMode | null = null

  get mode() {
    return this._mode
  }

  setLoginMode(mode: ILoginMode) {
    this._mode = mode
  }

  login(options?: TLoginOptions) {
    if (this._mode === null) {
      // eslint-disable-next-line quotes
      console.warn("You need use 'setLoginMode()' before call 'login()'")
    } else {
      this._mode.login(options)
    }
  }
}

class InnerLoginAssistant extends LoginAssistant {
  constructor() {
    super()
    this.setLoginMode(new InnerLoginMode())
  }
  /**
   * @override
   */
  login(options: IInnerLoginOptions) {
    super.login(options)
  }
}

export { LoginAssistant }
export { InnerLoginAssistant }
