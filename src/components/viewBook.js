import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {Card} from './card'
import './viewBook.css'
import {connect} from 'react-redux'

require('dotenv').config();

function ViewBook(props) {
    
    const [dataSet, setDataSet] = useState();
    useEffect(() => {
        console.log(props.name)
        let tempData=[];
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY}`).then(
            res=>{
                tempData.push(res.data.results.books);
                setDataSet(tempData[0]);
            }
        )
      },[]);
    
    return (
        <>
        <h3 id="title">NYTimes Best Sellers-Hardcover Fiction</h3>
        {dataSet && dataSet.map(data=>{
          return(
          <Card data={data} key={data.rank}/>
          )
        })}
    </>
    )
    
}
const mapStateToProps=(state)=>{
    return{
        name : state.name 
    }
}

export default connect(mapStateToProps)(ViewBook)
