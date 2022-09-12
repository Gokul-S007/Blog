import BlogList from "./BlogList";
import useFetch from "./useFetch";



const Home = () => {
     
    const {Data:blogs,ispending,error} = useFetch('http://localhost:8000/blogs');
    
    return ( 
        <div className="Homepage">
            {error && <div>{error} </div>}
            {ispending && <div>Please wait!</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
            
        </div>
     );
}
 
export default Home;