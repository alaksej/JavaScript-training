function swap(A, i, j) {
  var tmp = A[i];
  A[i] = A[j];
  A[j] = tmp;
}

function insertionSort(A) {
  for (var i = 0; i < A.length; i++) {
    var j = i;
    while (j >= 0 && A[j-1] > A[j]) {
      swap(A, j, j-1);
      j--;
    }
  }
}

console.log("InsertionSort tests:");
var A = [ 3, 4, 7, 2, 8];
console.log(A);
insertionSort(A);
console.log(A);
var A = [ 0 ];
console.log(A);
insertionSort(A);
console.log(A);
var A = [ -1, -1, 0, -4, -4 ];
console.log(A);
insertionSort(A);
console.log(A);
console.log("=================================");


function quickSortBase(A, lo, hi) {
    if (lo < hi) {
      var p = partition(A, lo, hi);
      quickSortBase(A, lo, p - 1);
      quickSortBase(A, p + 1, hi);
    }
}

function quickSort(A) {
  quickSortBase(A, 0, A.length - 1);
}

function partition(A, lo, hi) {
  var pivot = A[hi];
  var i = lo;
  for (var j = lo; j < hi; j++) {
    if (A[j] <= pivot) {
      swap(A, i, j);
      i++;
    }
  }
  swap(A, i, hi);
  return i;
}

console.log("quickSort tests:");
var A = [ 3, 4, 7, 2, 8];
console.log(A);
quickSort(A);
console.log(A);
var A = [ 0 ];
console.log(A);
quickSort(A);
console.log(A);
var A = [ -1, -1, 0, -4, -4 ];
console.log(A);
quickSort(A);
console.log(A);
console.log("=================================");

function mergeSort(A) {
  var len = A.length;
  if (len <= 1) {
    return A;
  }
  var left = [];
  var right = [];
  for (var i  = 0; i < len; i++) {
    var x = A[i];
    if (i < len/2) {
      left.push(x);
    }
    else {
      right.push(x);
    }
  }

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

function merge(left, right) {
  var result = [];
  var i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    }
    else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}
console.log("mergeSort tests:");
var A = [ 3, 4, 7, 2, 8];
console.log(A);
console.log(mergeSort(A));
var A = [ 0 ];
console.log(A);
console.log(mergeSort(A));
var A = [ -1, -1, 0, -4, -4 ];
console.log(A);
console.log(mergeSort(A));
console.log("=================================");

function bubbleSort(A) {
  for (var i = 0; i < A.length; i++) {
    for (var j = i; j < A.length; j++) {
      if (A[i] > A[j]) {
        swap(A, i, j);
      }
    }
  }
}
console.log("bubbleSort tests:");
var A = [ 3, 4, 7, 2, 8];
console.log(A);
bubbleSort(A);
console.log(A);
var A = [ 0 ];
console.log(A);
bubbleSort(A);
console.log(A);
var A = [ -1, -1, 0, -4, -4 ];
console.log(A);
bubbleSort(A);
console.log(A);
console.log("=================================");
