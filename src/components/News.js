import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";





const News =(props)=> {
 
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  
  

//method 2 Using Fetch API to populate  NewsItems


let newpage = async() =>{
  props.setProgress(10);
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}add&page=${page}&pageSize=${props.pageSize}`;
   
  setLoading(true);
  let data=await fetch(url);
  props.setProgress(50);
  let parsedData=await data.json();
  console.log(parsedData);

  setArticles(parsedData.articles)
  setTotalResults(parsedData.totalResults)
  setLoading(false)
  props.setProgress(100)
}

useEffect(()=>{
 newpage();
//eslint-disable-next-line
},[])



// const handlePreviousclick = async ()=>{

//   setPage(page-1);
//   newpage();
// }


// const handleNextclick = async()=>{

//   setPage(page-1);
//   newpage();
// }




const fetchMoreData=async()=>{
    
 
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}add&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1);
  setLoading(true); 
  let data=await fetch(url);
  let parsedData=await data.json();
  setArticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.totalResults);
  setLoading(false);
};


 
    return (
      <div className="container">
        <h1 className="text-center">Today's-Top Headlines</h1>
        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
      <div className="container">
       
       <div className="row">
       {articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
           <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://www.bostonherald.com/wp-content/uploads/2022/11/AP22324581784390.jpg?w=1024&h=682"} newsUrl={element.url?element.url:""} author={element.author}
           date={element.publishedAt} source={element.source.name}/>
        </div>

       })}
       </div>
       </div>
       </InfiniteScroll>


     
      </div>
    )
  
}

 

News.defaultProps = {
  country:"in",
  pageSize:5,
}
News.propTypes = {
 country:PropTypes.string,
 pageSize:PropTypes.number,
}


















// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";




// export class News extends Component {
 
//   static defaultProps = {
//     country:"in",
//     pageSize:5,
//   }
//   static propTypes = {
//    country:PropTypes.string,
//    pageSize:PropTypes.number,
//   }
//   constructor(props){
//     super(props);
//     console.log("hello i am a constructor");
//       this.state={
//       articles: [],
//       loading: false,
//       page:1,
//       totalResults:0
//     }

//  }

// //method 2 Using Fetch API to populate  NewsItems

// async componentDidMount(){
//     this.props.setProgress(10);
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f3b9c3bea16a43b884ca724291823add&page=1&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true})
//   let data=await fetch(url);
//     this.props.setProgress(50);
//   let parsedData=await data.json();
//   console.log(parsedData);
//     this.setState({articles: parsedData.articles,
//     totalResults:parsedData.totalResults,
//   loading:false});
//     this.props.setProgress(100);
// }


// handlePreviousclick = async ()=>{
//     this.props.setProgress(10);
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}add&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
//   let data = await fetch(url);
//     this.props.setProgress(50);
//   let parsedData=await data.json();
//     this.setState({
//     page:this.state.page-1,
//     articles: parsedData.articles,
//     loading:false
    
//   })
//     this.props.setProgress(100);
// }

// handleNextclick = async()=>{

//     this.props.setProgress(10);
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.this.props.country}&category=${this.this.props.category}&apiKey=${this.props.apiKey}add&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//    // setState({loading:true});
//   let data = await fetch(url);
//     this.props.setProgress(50);
//   let parsedData=await data.json();
 
//     this.setState({
//     page:this.state.page+1,
//     articles: parsedData.articles,
//     loading:false
    
//   })
//     this.props.setProgress(100);
 
// }


// fetchMoreData=async()=>{
//     this.setState({page:this.state.page+1});
//   const url=`https://newsapi.org/v2/top-headlines?country=${this.this.props.country}&category=${this.this.props.category}&apiKey=${this.this.props.apiKey}add&page=${this.state.page+1}&pageSize=${this.this.props.pageSize}`;
//     this.setState({loading:true});
//   let data=await fetch(url);
//   let parsedData=await data.json();
//     this.setState({
//     articles:this.state.articles.concat(parsedData.articles),
//     totalResults:parsedData.totalResults,
//     loading:false,
//   })

// }


//   render() {
//     return (
//       <div className="container">
//         <h1 className="text-center">Today's-Top Headlines</h1>
//         {/* {this.state.loading && <Spinner/>} */}

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length!==this.state.totalResults}
//           loader={<Spinner/>}
//         >
//       <div className="container">
       
//        <div className="row">
//        {this.state.articles.map((element)=>{
//           return <div className="col-md-4" key={element.url}>
//            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://www.bostonherald.com/wp-content/uploads/2022/11/AP22324581784390.jpg?w=1024&h=682"} newsUrl={element.url?element.url:""}/>
//         </div>

//        })}
//        </div>
//        </div>
//        </InfiniteScroll>


//        {/* Previous Next Buttons */}
//        {/* <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousclick}> &larr; Previous</button>
//           <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark"  onClick={this.handleNextclick}>Next &rarr;</button>
//        </div>
//       */}
//       </div>
//     )
//   }
// }
 export default News
