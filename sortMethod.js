// as name suggest used to sort array

const arr = [2321, 33, 232, 4656, 7, 3343, 12, 434, 6, 32]
arr
// ascending
const sorted = arr.slice().sort((a, b) => a - b)
sorted
arr

// sort automatically mutates so, we use the slice() to overrule this default action

// descending
const des_sorted = arr.sort((a, b) => b - a)
des_sorted