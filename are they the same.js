function comp(array1, array2) {
    // Assigning a new array for the squared values of each element in array1
    squaredArray = []

    // Using a for loop to take the square of each element in array1 then pushing it to squaredArray to be compared with array2
    for (i = 0; i <= array1.length - 1; i++) {
        sq = array1[i] * array1[i]
        squaredArray.push(sq)
    }
    // console.log(squaredArray)
    // console.log(array2)

    // Initializing a counter for counting if there is an element not found from squaredArray in array2
    counter = 0

    // Using a for loop to iterate each element in squaredArray
    for (i = 0; i <= squaredArray.length - 1; i++) {

        // Initializing j for array2 condition in while loop
        j = 0
        while (squaredArray[i] != array2[j]) {
            j++
            if (j > squaredArray.length) {
                counter++
                break;
            }
        }
    }

    // Setting the condition to output true if all elements are found in array2, counter is 0, and 1 if there an element in squaredArray that is not found in array2
    if (counter == 0) {
        console.log(true)
    } else {
        console.log(false)
    }

    console.log(counter)
}
comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])