import './App.css'
import ButtonA from './ButtonA'
import ButtonB from './ButtonB'

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

function BooleanExpressions(){
  const test = true;
  // 앞에 값이 참이면 뒤에 값은 그대로 반환됨
  const truthy = <>{test && <h1>it's truthy</h1>}</>

  return (
    <div>
      {test ? (
        <>
          <h2>welcome true</h2>
          <p>Hi - Hi - Hi</p>
        </>
      ) : (
        <>
          <h2>welcome false</h2>
          <p>Bye - Bye - Bye</p>
        </>
      )}
      truthy : {truthy}
    </div>
  )
}

// 리스트 랜더링
// 요소에 key값을 넣어주는 이유는 리액트가 리스트의 변동사항을 빠르게 파악하기위함이다.
function ListLanderings(){
  const fruits = ['apple', 'banana', 'orange']
  const numbers = [1, 2, 3, 4, 5]
  return(
    <>
      <ul>
        {fruits.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
        {
          numbers.filter(n => n % 2 === 0).map((item,index)=>{
            return <li key={index}>{item}</li>  
          })
        }
      </ul>
    </>
  )
}

// contentEditable 속성은 사용자가 텍스트를 입력할 수 있게 해준다.
function InputExpressions(){
  return (
    <>
      <input type='text' spellCheck={true}></input>
      <div contentEditable={true} suppressContentEditableWarning={true} spellCheck={true}>여기에 텍스트를 입력해보삼</div> 
    </>
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
      <BooleanExpressions></BooleanExpressions>
      <ListLanderings></ListLanderings>
      <InputExpressions></InputExpressions>

      {/* 아래의 버튼들은 css Modules를 사용하였다.
       여러개의 css의 동일한 class명이 잇을경우 덮어씌워지는데, 
       이때 cssModule을 사용하게되면 각각의 css파일에서 동일한 class명을 사용해도 충돌이 발생하지 않는다.
       ex) style.button 으로 사용하게되면 실제로 console.log(style)을 찍어보면 {button: "ButtonA_button__1J9Z-"} 이런식으로 나온다.
      */}
      <ButtonA></ButtonA>
      <ButtonB></ButtonB>
    </>
  )
}

export default App
