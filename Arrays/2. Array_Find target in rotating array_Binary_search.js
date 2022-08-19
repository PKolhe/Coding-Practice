/* 
Statement:
We’re given a sorted integer array, nums and an integer value, target. 
The array is rotated by some arbitrary number. Search the target in this array. 
If the target does not exist then return -1.
Our task is to find the target in an already rotated array. 
Input: 
nums = [6, 7, 1, 2, 3, 4, 5]
target = 3
output:
target 3 found at 4th index in rotating array.

Note: Rotating array is nothing but a sorted array from middle which means we need to 
find out target from sorted array we can use binary search algo here.
*/ 

let binarySearchRotated = function(nums, target) {
    start = 0;
    end = nums.length - 1;
  
    if (start > end){
      return -1;
    }
  
    while (start <= end){
        
      // Finding the mid using floor division  
      mid = start + Math.floor((end - start) / 2);
      
      // Target value is present at the middle of the array
      if (nums[mid] == target){
        return mid;
      }
      
      // start to mid is sorted
      if (nums[start] <= nums[mid]){
        if(nums[start] <= target && target < nums[mid]){
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
      // mid to end is sorted
      else{
        if(nums[mid] < target && target <= nums[end]){
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
    return -1;
  };
  
/*function binarySearchRotated(nums, start, end, target) {
    if (end >= start) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] == target) {
            return mid;
        }
      
        // start to mid is sorted
      if (nums[start] <= nums[mid]){
        if(nums[start] <= target && target < nums[mid]){
          end = mid - 1;
          return binarySearchRotated(nums, start, mid - 1, target);
        } else {
          start = mid + 1;
          return binarySearchRotated(nums, mid + 1, end, target);
        }
      }
      // mid to end is sorted
      else{
        if(nums[mid] < target && target <= nums[end]){
          start = mid + 1;
          return binarySearchRotated(nums, mid + 1, end, target);
        } else {
          end = mid - 1;
          return binarySearchRotated(nums, start, mid - 1, target);
        }
      }
    }
    return -1;
  }*/
  
  let targetList = [3,6,3,6];
  let numsList = [[6, 7, 1, 2, 3, 4, 5], [6, 7, 1, 2, 3, 4, 5], [4, 5, 6, 1, 2, 3], [4, 5, 6, 1, 2, 3]];
  
  for(let i =0; i< targetList.length; i++){
    console.log((i + 1) + ". Rotated array: " + numsList[i]);
    //console.log("   target " + targetList[i] +  " found at index " + binarySearchRotated(numsList[i], targetList[i]));
    console.log("   target " + targetList[i] +  " found at index " + binarySearchRotated(numsList[i], 0, numsList[i].length - 1, targetList[i]));
    console.log("----------------------------------------------------------------------------------------------------\n");
  }
  
  // This function is used to show sample input/output in html file only.
  function getOutput() {
    let input = "Rotated Array:\t" + numsList[3] + "\nTarget:\t" +targetList[3];
    //For recusive function
    //let output = "target " + targetList[1] +  " found at index " + binarySearchRotated(numsList[3], 0, numsList[3].length - 1, targetList[3]);
    let output = "target " + targetList[3] +  " found at index " + binarySearchRotated(numsList[3], targetList[3]);
    
    document.getElementById('inputVal').value = input;
    document.getElementById('outputVal').value = output;
}