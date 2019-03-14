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

export const buildBarGraphAxes = obj => {
  const objMap = { awake: [], deep: [], light: [], out: [] }

  for (let i = 0; i < obj.length; i++) {
    objMap.awake.push(obj[i].awake || 0)
    objMap.deep.push(obj[i].deep || 0)
    objMap.light.push(obj[i].light || 0)
    objMap.out.push(obj[i].out || 0)
  }
  return objMap
}
