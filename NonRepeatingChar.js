function firstNonRepeatingLetter(s) {
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

    console.log(findDuplicates(s.split(''))) // All duplicates
    console.log([...new Set(findDuplicates(s.split('')))]) // Unique duplicates
      // Add your code here
    }

firstNonRepeatingLetter('abcdee')