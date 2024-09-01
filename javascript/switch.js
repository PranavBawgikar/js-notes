// Example 1
let day = "pizza"

switch(day) {
    case 1:
        console.log("It is Monday")
        break
    case 2:
        console.log("It is Tuesday")
        break
    case 3:
        console.log("It is Wednesday")
        break
    case 4:
        console.log("It is Thursday")
        break
    case 5:
        console.log("It is Friday")
        break
    case 6:
        console.log("It is Saturday")
        break
    case 7:
        console.log("It is Sunday")
        break
    default:
        console.log(`${day} is not a day`)
        break
}

// Example 2
let testScore = 60
let letterGrade

switch(true) {
    case testScore >= 90:
        letterGrade = "A"
        break
    case testScore >= 80:
        letterGrade = "B"
        break
    case testScore >= 70:
        letterGrade = "C"
        break
    case testScore >= 60:
        letterGrade = "D"
        break
    default:
        letterGrade = "F"
        break
}
console.log(letterGrade)
