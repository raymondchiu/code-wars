// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// My Solution
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((sum, num) => sum + num,0) + arr2.reduce((sum, num) => sum + num, 0) 
  }