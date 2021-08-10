import React,{ useEffect, useState} from 'react'
import '../card.css'
//const numbers = [2, 1, 3, 4];
function Test (){
    const [Testdata,setTestData] = useState(4);
   
    useEffect(()=>{
        //let a = numbers.map(item=>item)
        //setTestData(numbers);
        console.log("render");
    },[])
    useEffect(()=>{
        //let a = numbers.map(item=>item)
        //setTestData(numbers);
        console.log("data updated");
    },[Testdata])
    function numFunction(){
        setTestData(x=>x+1)
        console.log(Testdata)
    }
    

    return(
        <div  className="navStyle">
        cedjopj
        
        </div>
    )
}
export default Test