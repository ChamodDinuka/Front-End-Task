import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {Card} from './card'
import './viewBook.css'

require('dotenv').config();

function ViewBook() {
    
    const [dataSet, setDataSet] = useState();
    useEffect(() => {
        
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

export default ViewBook
