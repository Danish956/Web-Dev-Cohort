// // let a ="hello"
// // console.log(`world ${a}`)



// // let a =`hello
// // jhhjhjk
// // nbnbnmb `
// // console.log(a)

// let a=4
// let b=9
// console.log(`the sum of a and b is ${a+b}`)

function maskCard(cardNumber) {
  // Step 1: Get the last 4 digits
  let lastFour = cardNumber.slice(-4);

  // Step 2: Create a masked string with '*'
  let masked = '*'.repeat(cardNumber.length - 4);

  // Step 3: Return combined string
  return masked + lastFour;
}

console.log(maskCard("1234567812345678"));