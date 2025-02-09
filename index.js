// Code your solution in this file!
function distanceFromHqInBlocks (cityBlock) {
  if (cityBlock > 42) {
    return cityBlock - 42;
  } else {
    return 42 - cityBlock;
  }
}

function distanceFromHqInFeet(cityBlock){
  return distanceFromHqInBlocks(cityBlock) * 264
}

function distanceTravelledInFeet(pickUp, dropOff){
  if (pickUp < dropOff){
        return (dropOff - pickUp) * 264;
  } else {
        return (pickUp - dropOff) * 264
    }
  }

  function calculatesFarePrice(pickUp, dropOff){
    const distance = distanceTravelledInFeet (pickUp, dropOff);
    
    if (distance <= 400) {
      return 0;
      } else if (distance > 400 && distance <= 2000) {
        return 0.02 *(distance - 400);
      } else if (distance > 2000 && distance < 2500) {
        return 25
      } else {
        return "cannot travel that far";
      }
    }
  