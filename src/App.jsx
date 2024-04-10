
import './App.css';
import{useState}from"react"
import InfiniteScroll from "react-infinite-scroll-component"


const style={
  border:"1px solid green",
  margin:12,
  padding:8,
  width:500,
}

const App = () => {
  const[data,setData]=useState(Array.from({length:20}));
  const[hasMore,setHasMore]=useState(true);
  const fetchMoreData=()=>{
    if(data.length<200){
      setTimeout(()=>{
        setData(data.concat(Array.from({length:20})))
      },500)
 }else{
      setHasMore(false)
    }
   }
  return (
     <div className="App">
       <h1>Infinite scroll</h1>
      <InfiniteScroll dataLength={data.length}
       next={fetchMoreData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p>End of the page!!</p>}
        >
        {data.map((item,index)=>{
           return (
           <div style={style}>
            This is a div #{index+1} inside InfiniteScroll
            </div>
           )
        })}
      </InfiniteScroll>
    </div>
  )
}

export default App