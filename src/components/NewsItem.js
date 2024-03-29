import React from 'react'



const NewsItem =(props)=> {
  
  
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
       <div className="card" >
       <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
       style={{zIndex:'1', left:'90%'}}>
             {source}
              <span className="visually-hidden">unread messages</span>
            </span>
              <img src={imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title"
              >{title}... </h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
             
        </div>
        
       </div>
      
      </div>


    )
  
}

export default NewsItem;




// import React, { Component } from 'react'

// export class NewsItem extends Component {
  
//   render() {
//     let {title,description,imageUrl,newsUrl}=this.props;
//     return (
//       <div className="my-3">
//        <div className="card" >
//               <img src={imageUrl} className="card-img-top" alt="..."/>
//               <div className="card-body">
//               <h5 className="card-title">{title}...</h5>
//               <p className="card-text">{description}...</p>
//               <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
//         </div>
        
//        </div>
      
//       </div>


//     )
//   }
// }

// export default NewsItem;
