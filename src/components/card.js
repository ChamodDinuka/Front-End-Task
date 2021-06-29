import React from 'react'
import './card.css'

export const Card = (props) => {
    return (
      
      <div className="card" key={props.id}>
        <div className="left">
        <img id="_img" src={props.data.book_image} alt="pic"/>
        </div>
        <div className="right">
          <div className="_header">

            <h3>#{props.data.rank} {props.data.title}</h3>
          </div>
          <div className="_name">
          <p>{props.data.author}</p>
          </div>
          <div className="_description">
          <p>{props.data.description}</p>
          </div>
          {props.data.book_review_link ? 
          <div className="_link">
            <a id="_review" href={props.data.book_review_link}>Read Full Review</a>
          </div>
          : <div ></div>}
        </div>
          
        </div>
        
      
    )
}
