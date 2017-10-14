function produceDrivingRange (blockRange) {
  return function (startingBlock, endingBlock) {
    const rangeCompare = blockRange - Math.abs(parseInt(endingBlock) - parseInt(startingBlock));
    if (rangeCompare === 0) {
      return 'exactly within range';
    } else if (rangeCompare > 0) {
      return `within range by ${rangeCompare}`
    } else if (rangeCompare === -1) {
      return `${Math.abs(rangeCompare)} block out of range`
    } else {
      return `${Math.abs(rangeCompare)} blocks out of range`
    }
  };
}

function produceTipCalculator (tipPercentage) {
  return function (total) {
    return total * tipPercentage;
  };
}

function createDriver () {
  let driverId = 0;
  return class {
    constructor (name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
