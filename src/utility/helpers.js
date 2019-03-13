export const buildAxes = arr => {
  if (!arr) {
    return null
  }
  const arrData = { xAxis: [], yAxis: [] }
  for (let i = 0; i < arr.length; i++) {
    arrData.xAxis.push(arr[i][0])
    arrData.yAxis.push(arr[i][1])
  }

  return arrData
}
