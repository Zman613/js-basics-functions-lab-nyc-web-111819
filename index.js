// Code your solution in this file!
function distanceFromHqInBlocks(start) {
  let distance
  if (start < 42) {
    distance = 42 - start
  } else if (start > 42) {
    distance = start - 42
  } else {
    distance = 0
  }
  return distance
}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks(start) * 264
}

function distanceTravelledInFeet(start, end) {
  let distance
  if (start < end) {
    distance = end - start
  } else if (start > end) {
    distance = start - end
  } else {
    distance = 0
  }
  return distance * 264
}

function calculatesFarePrice(start, end) {
  let distance = (distanceTravelledInFeet(start, end))
  if (distance <= 400) {
    return 0
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02
  } else if (distance <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}