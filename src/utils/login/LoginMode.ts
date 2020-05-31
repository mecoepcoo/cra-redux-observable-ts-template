export type TLoginOptions = Partial<IInnerLoginOptions | IOuterLoginOptions>

export interface IInnerLoginOptions {
  url: string
}

export interface IOuterLoginOptions {
  url: string
}

export interface ILoginMode {
  login(options?: TLoginOptions): void
}

class InnerLoginMode implements ILoginMode {
  login(options: IInnerLoginOptions) {
    // ...
  }
}

class OuterLoginMode implements ILoginMode {
  login(options: IOuterLoginOptions) {
    // ...
  }
}

class BridgeLoginMode implements ILoginMode {
  login() {
    // ...
  }
}

export { InnerLoginMode, OuterLoginMode, BridgeLoginMode }
