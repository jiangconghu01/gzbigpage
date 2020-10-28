// import { createStore, Commit } from 'vuex'

import axios, { AxiosResponse } from 'axios'

export const requestPostData = function<T, U, E>(url: string, param: T): Promise<AxiosResponse<U>> {
  return new Promise<AxiosResponse<U>>((resolve, reject) => {
    axios
      .post(url, param)
      .then((data: AxiosResponse<U>) => {
        resolve(data)
      })
      .catch((err: E | any) => {
        reject(err)
      })
  })
}
export const requestGetData = function<T, U, E>(url: string, param: T): Promise<AxiosResponse<U>> {
  return new Promise<AxiosResponse<U>>((resolve, reject) => {
    axios
      .get(url, param)
      .then((data: AxiosResponse<U>) => {
        resolve(data)
      })
      .catch((err: E | any) => {
        reject(err)
      })
  })
}
