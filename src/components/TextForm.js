import React, {useState} from 'react'


export default function TextForm(props) {

  const UpperCaseClick = ()=>{
    console.log("Uppercase BTN Clicked")
    let newText = text.toUpperCase();
    setText(newText)
  }
  const LowerCaseClick = ()=>{
    console.log("Lowercase BTN Clicked")
    let newText = text.toLowerCase();
    setText(newText)
  }
  const ClearClick = ()=>{
    console.log("Lowercase BTN Clicked")
    let newText = (" ");
    setText(newText)
  }
  
  const handleOnChange = (event)=>{
    
    console.log("On Change")
    setText(event.target.value)
  }

  
  
  const [text, setText] = useState('Enter Text Here');
  return (
    <>
      <div className="container my-3 text-white">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control transparent-input" onChange={handleOnChange} value={text} id="inputBox" rows="8">
        </textarea>
        </div>
        <button onClick={UpperCaseClick} className="btn btn-light m-2">Convert To Uppercase</button>
        <button onClick={LowerCaseClick} className="btn btn-light m-2">Convert To Lowercase</button>
        <button onClick={ClearClick} className="btn btn-light m-2">Clear Text</button>
      </div>
      <div className="container my-5 text-white row">
        <div className='col-sm'>
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").filter((str) => str !== '').length} Words and {text.length} Characters</p>
          <p>{text.split(".").length -1 } Sentences</p>
          <p>{0.008 * text.split(" ").length} : Minutes Will Take To Read.</p>
        </div>
        <div className='col-sm'>
          <h2>Preview Text</h2>
          <p className="rounded - border border-dark py-3 px-3 pb-4 shadow p-5 mb-5 bg-dark rounded ">{text}</p>
        </div>
      </div>
    </>
  )
}
