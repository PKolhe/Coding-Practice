/*
Problem Statement:
Given an integer array and a window of size w, find the current maximum value 
in the window as it slides through the entire array.
Note: If the window size is greater than the array size, we will consider 
the entire array as a single window.

Sample input:
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
window_size = 3

Expected output:
[3, 4, 5, 6, 7, 8, 9, 10] 
*/

let findMaxSlidingWindow = function(nums, windowSize) {
    let result = [];
    
    // Return empty list
    if(nums.length == 0) {
      return result;
    }
    // If window_size is greater than the array size,
    // set the window_size to nums.size()
    if (windowSize > nums.length) {
      windowSize = nums.length;
    }
    // Initializing doubly ended queue for storing indices using array
    let window = [];
  
    //find out max for first window
    for (let i = 0; i < windowSize; i++) {
      // For every element, remove the previous smaller elements from window
      while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
        window.pop();
      } 
      // Add current element at the back of the queue
      window.push(i);
    }
    // Appending the largest element in the window to the result
    result.push(nums[window[0]])
    
    for (let i = windowSize; i < nums.length; i++) {
      // remove all numbers that are smaller than current number
      // from the tail of list
      while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
        window.pop();
      }
      
      // Remove first index from the window deque if 
      // it doesn't fall in the current window anymore
      if (window.length > 0 && (window[0] <= i - windowSize)) {
        window.shift();
      }
      // Add current element at the back of the queue
      window.push(i);
      result.push(nums[window[0]]);
    } 
    return result;
  };
  
  let targetList = [3,2,1,2];
  let numsList = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67], [4, 5, 6, 1, 2, 3], [9, 5, 3, 1, 6, 3]];
  
  for (let i=0; i< numsList.length; i++){
    console.log((i + 1) + ". Original list:\t" + numsList[i]);
    console.log("Window size:\t\t" +  targetList[i]);
    let res = findMaxSlidingWindow(numsList[i], targetList[i]);
    console.log("Max:\t" +  res); 
    console.log("-----------------------------------------------------------------------------------------------------\n")
  }
  
  // This function is used to show sample input/output in html file only.
  function getOutput() {
    let input = "Original list:\t" + numsList[0] +"\nWindow size:\t"+  targetList[0]
    let output = "Max:\t" + findMaxSlidingWindow(numsList[0], targetList[0]);
    document.getElementById('inputVal').value = input;
    document.getElementById('outputVal').value = output;
  }