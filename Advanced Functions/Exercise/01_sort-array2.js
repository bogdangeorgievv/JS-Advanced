function sortArray(arr, op) {
    const sortArr = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }
    return arr.sort(sortArr[op])
}
sortArray()
