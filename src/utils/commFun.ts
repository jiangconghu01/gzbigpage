/**
 * @description 获取对应年月之前n个月的月份数组
 * @param {Number,String} c_year 年份
 * @param {Number,String} c_month 月份
 * @param {Number} n 数组月份数量
 * @param {String} split 分隔符
 * @param {Boolean} short_year 年份是否两位简写
 * @return {Array} 年月的数组
 */
type datePart = number | string
export function getMonthsArr(c_year: datePart, c_month: datePart, n = 12, c_split = '', short_year = false): string[] {
  const dataArr: string[] = []
  const x = n
  const split = c_split
  const data = new Date(Number(c_year), Number(c_month) - 1)
  const year = data.getFullYear()
  data.setMonth(data.getMonth() + 1, 1) //获取到当前月份,设置月份
  for (let i = 0; i < x; i++) {
    data.setMonth(data.getMonth() - 1) //每次循环一次 月份值减1
    let m: datePart = data.getMonth() + 1
    m = m < 10 ? split + '0' + m : split + m
    const y = short_year ? (year + '').slice(-2) : year
    dataArr.unshift(y + '' + m)
  }
  return dataArr
}
export interface TypeDateDay {
  date: string
  week: string
  time: string
}
export function getFormatDate(): TypeDateDay {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const wk = date.getDay()
  const week = weeks[wk]
  return { date: year + '年' + month + '月' + day + '日 ', week, time: hours + ':' + minutes + ':' + seconds }
}
export type OneArgVoidFun<T> = (arg: T) => void
