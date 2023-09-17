import { useState } from "react";


function Filter() {

    let characters = ['goku', 'gohan','vegeta', 'beerus', 'goten', 'trunks' ];

    let [inputVal, setInputVal] = useState('');

    function handleChange(e){
        setInputVal(e.target.value)
    }
let filteredCharacters = characters.filter(v => v.includes(inputVal))
  return (
    <div className="App">

<h1>filter Component</h1>
        <input onChange={handleChange} />
      
     {filteredCharacters.map(v =>{
        return (
            <h1>{v}</h1>
        )
     })}
    </div>
  );
}

export default Filter;
