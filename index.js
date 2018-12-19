// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return {
    ...driver,
    [key] : value,
  }
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = {
    ...driver
  }
  
  delete newDriver[key];
  
  return newDriver;
}