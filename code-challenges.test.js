// // // ASSESSMENT 3: Coding Practical Questions with Jest



// // // Please read all questions thoroughly
// // // Pseudo coding is REQUIRED
// // // If you get stuck, please leave comments to help us understand your thought process

// // // Use test driven development to complete the following questions
// // // Add appropriate dependencies: $ yarn add jest

// // // Reminder: The test will call your function
// // // Run the file with the following command: $ yarn jest


// // // --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // // a) Create a test with expect statements for each of the variables provided.

// // // Example input: 6
// // // Expected output: [1, 1, 2, 3, 5, 8]

// // // Example input: 10
// // // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// describe("fibNumbers", () => {
//     it("takes a number > 2 returns an array that length containing numbers of the Fibonacci sequence", () => {
//         expect(fibNumbers(6)).toEqual([1, 1, 2, 3, 5, 8])
//         expect(fibNumbers(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])

//     })
// })

// // ● fibNumbers › takes a number > 2 returns an array that length containing numbers of the Fibonacci sequence
// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.114 s, estimated 1 s
// // Ran all test suites.




// // // b) Create the function that makes the test pass.

// // // ****PSUEDOCODE****
// // //function tht adds first two indexes to equal third and then repeat thru the array
// // // use for loop, control where it starts, run based off given condition
// // // access index w/var i and add as needed
// // // i think i will need to use the .push method to fill the empty array
// // //--> fibonacci output
// // next item is i-1, i-2


//  const fibNumbers = (number) =>{
//      let fibArr = [1,1]
//      for (let i = 1; i < number-1; i++) {
//          fibArr.push(fibArr[i] + fibArr[i-1])
//      }
//      return fibArr
//     }
// // recursion - a function that calls itself until a condition is met
// // returns a function call stack that then executes





// // // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// // // a) Create a test with expect statements for each of the variables provided.


// // Expected output: [-9, 7, 9, 199]


// // Expected output: [-823, 7, 23]


// describe("oddNumbers", () => {
//     it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
//         const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//         const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
//         expect(oddNumbers(fullArr1)).toEqual([-9, 7, 9, 199])
//         expect(oddNumbers(fullArr2)).toEqual([-823, 7, 23])
//     })
// })


// // // ● oddNumbers › takes in an array and returns a new array of only odd numbers sorted from least to greatest
// // // Test Suites: 1 failed, 1 total
// // // Tests:       1 failed, 1 total
// // // Snapshots:   0 total
// // // Time:        0.142 s, estimated 1 s
// // // Ran all test suites.



// // // b) Create the function that makes the test pass.

// // // ****PSEUDOCODE****
// // // function with array as the parameter
// // // use method to filter out only number values
// // // use another method to filter out odd numbers
// // // using modelo for odd number filter
// // // try using typeOf to strictly equal numbers m
// // // --> [-9, 7, 9, 199]
// // // -->  [-823, 7, 23]




// oddNumbers = (array) => {
//     let numArry = array.filter(
//         value => typeof value === 'number')
//      {numOdds = numArry.filter(number => {
//       return number % 2 !==0})
//     }
//     return numSort = numOdds.sort((a, b) => a - b)
//     }
// console.log(oddNumbers(fullArr1))
// console.log(oddNumbers(fullArr2))

// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.


describe("newSum", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []
        expect(newSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(newSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(newSum(numbersToAdd3)).toEqual([])
    })
})


// Expected output: [2, 6, 51, 60]
// Expected output: [0, 7, -1, 11]
// // Expected output: []


// // // ● newSum › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array
// // // Test Suites: 1 failed, 1 total
// // // Tests:       1 failed, 1 total
// // // Snapshots:   0 total
// // // Time:        0.144 s, estimated 1 s
// // // Ran all test suites.

// // // b) Create the function that makes the test pass.

// // ****PSUEDOCODE****
// // //function tht adds  indexes and then repeat thru the array
// // // use for loop 
// // iteration output is the same length as the input map
// // // type of math function 
// // add current value to the anchor and return inside map
// // // maybe  use the .push method to fill the empty array
// // //--> accumalative sum output
// // 

// const newSum = (test) => {
//    let newArray = [] 
//    return test.map((value, index) => {
//        if (index > 0) {
//            return newArray = value + newArray
//            } else {
//                return newArray = value
//            }
//    })
// }

const newSum = (array) => {
    let newArray = []
    return array.map((value, index) => {
      if (index > 0) {
        return newArray = value + newArray
      } else {
          return newArray = value
      }
    })
  }
 
// console.log(newSum(numbersToAdd1))
// console.log(newSum(numbersToAdd2))
