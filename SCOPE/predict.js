// let a=4
// function fun(){
//     let a=5
//     console.log(a)
// }
// fun()


let a = 100;

function App() {
  console.log("1", a);  // ❓ //100
  let a = 42;
  console.log("2", a);  // ❓ //42
  {
    var v = 100;
  }
  console.log("3", v);  // ❓ //error
}

if(true){
    var z=2;
}
console.log(z)

