export const buildAxes = arr => {
  const arrData = { xAxis: [], yAxis: [] }
  if (!arr) {
    return arrData
  }

  for (let i = 0; i < arr.length; i++) {
    arrData.xAxis.push(arr[i][0])
    arrData.yAxis.push(arr[i][1])
  }

  return arrData
}
