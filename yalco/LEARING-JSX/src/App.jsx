import './App.css'


function ObejctArrayExpressions(){
  const user = {
    name: 'Jane',
    email : 'jane@example.com'
  }
  const colors = ['red', 'green', 'blue']
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <p>Doubleds : {
          numbers.map(n => n *2 ).join(",")
        }</p>
    </div>
  )
}


function BasicExpressions(){
  const name = 'John';
  const age = 25;
  // 불리언 값은 화면에 랜더링될때 문자열로 변환을 시켜야만 에러가 발생하지않는다
  const isAdmin = true;

  return(
    <div>
      <p>{name}</p>
      <p>Age next Year: {age + 1}</p>
      <p>{name + "'s Profile'"}</p>
      <p>{`${name} is ${age} years old`}</p>
      <p>Admin status: {String(isAdmin)}</p>
    </div>
  )

}

function FunctionExpressions(){

  return (
    <div>
      Good {
        (()=>{
          return "Hi";
        })()
      }
    </div>
  )
}


function App() {

  const language = 'JavaScript'

  return (
    <>
      {/* JSX Practices */}
      <h1>JSX</h1>
      <h1>{language}</h1>
      <BasicExpressions></BasicExpressions>
      <ObejctArrayExpressions></ObejctArrayExpressions>
      <FunctionExpressions></FunctionExpressions>
    </>
  )
}

export default App
