// // ASSESSMENT 3: Coding Practical Questions with Jest



// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest


// // --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // a) Create a test with expect statements for each of the variables provided.

// // Example input: 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// // Example input: 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


describe("fibNumbers", () => {
    it("takes a number > 2 returns an array that length containing numbers of the Fibonacci sequence", () => {
        expect(addNumbers(6)).toEqual(1, 1, 2, 3, 5, 8)
        expect(addNumbers(10)).toEqual(1, 1, 2, 3, 5, 8, 13, 21, 34, 55)

    })
})

// // ● fibNumbers › takes a number > 2 returns an array that length containing numbers of the Fibonacci sequence
// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.114 s, estimated 1 s
// // Ran all test suites.




// // b) Create the function that makes the test pass.

// // ****PSUEDOCODE****
// //function tht adds first two indexes to equal third and then repeat thru the array
// // use for loop 
// // some type of math function 
// // i think i will need to use the .push method to fill the empty array
// //--> fibonacci output

 let fibNumbers = [6]
//  for (let i = 0; i < array.length; i++) {
	
//     arrayExample.push(i);


// 	console.log(array);
// }





// // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// // a) Create a test with expect statements for each of the variables provided.


// Expected output: [-9, 7, 9, 199]


// Expected output: [-823, 7, 23]


describe("oddNumbers", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        expect(fullArr1()).toEqual(-9, 7, 9, 199)
        expect(fullArr2()).toEqual(-823, 7, 23)

    })
})


// // ● oddNumbers › takes in an array and returns a new array of only odd numbers sorted from least to greatest
// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.142 s, estimated 1 s
// // Ran all test suites.



// // b) Create the function that makes the test pass.

// // ****PSEUDOCODE****
// // function with array as the parameter
// // use method to filter out only number values
// // use another method to filter out odd numbers
// // using modelo for odd number filter
// // tried using typeOf, maybe using incorrectly
// // --> [-9, 7, 9, 199]
// // -->  [-823, 7, 23]

// const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

const oddNumbers = (array) => {
    
    let newArray = []
        for(let i = 0; i < array.length; i++ ){
          if (array[i] % 2 !== 0 )
        //  ok so running this outputs the odd numbers,
        // true, hey , hola
        // && typeOf (" ") !== 'string'
          newArray.push(array[i])
        }
    return newArray
    
}
    
console.log(oddNumbers(fullArr1))

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.


describe("newSum", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
        expect(numbersToAdd1()).toEqual(2, 4, 45, 9)
        expect(numbersToAdd2()).toEqual(0, 7, -8, 12)
        expect(numbersToAdd3()).toEqual(null)
    })
})

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// // ● newSum › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array
// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.144 s, estimated 1 s
// // Ran all test suites.

// // b) Create the function that makes the test pass.

// ****PSUEDOCODE****
// //function tht adds  indexes and then repeat thru the array
// // use for loop 
// // type of math function 
// // maybe  use the .push method to fill the empty array
// //--> accumalative sum output
