import axios, { AxiosRequestConfig } from 'axios'

const defaultConfig: AxiosRequestConfig = {
  timeout: 10000,
}

const instance = axios.create(defaultConfig)

type ExtendConfig = AxiosRequestConfig | undefined

const http = {
  /**
   * GET
   * @param url - 请求地址
   * @param data - Params Object
   * @param extend - 附加配置选项
   */
  get: function (url: string, data: AxiosRequestConfig['params'] = {}, extend: ExtendConfig) {
    return instance.get(url, {
      params: data,
      ...extend,
    })
  },

  /**
   * POST
   * @param url - 请求地址
   * @param data - Request Body
   * @param extend - 附加配置选项
   */
  post: function (url: string, data: AxiosRequestConfig['params'] = {}, extend: ExtendConfig) {
    return instance.post(
      url,
      {
        ...data,
      },
      {
        ...extend,
      }
    )
  },

  /**
   * PUT
   * @param url - 请求地址
   * @param data - Request Body
   * @param extend - 附加配置选项
   */
  put: function (url: string, data: AxiosRequestConfig['params'] = {}, extend: ExtendConfig) {
    return instance.put(
      url,
      {
        ...data,
      },
      {
        ...extend,
      }
    )
  },

  /**
   * POST
   * @param url - 请求地址
   * @param extend - 附加配置选项
   */
  delete: function (url: string, extend: ExtendConfig) {
    return instance.delete(url, {
      ...extend,
    })
  },
}

// 拦截请求
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    // console.log('request err: ', error) // for debug
    return Promise.reject(error)
  }
)

// 拦截响应
instance.interceptors.response.use(
  async (res) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return res
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log('response err: ', error)
    return Promise.reject(error)
  }
)

export default http
