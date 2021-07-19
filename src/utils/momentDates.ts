import moment from "moment"

export const dateToDay = (date: Date) => {
  return moment(date).format('dddd');
}

export const dateToUnix = (date: Date) => {
  return moment(date).unix();
}