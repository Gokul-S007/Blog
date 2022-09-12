import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,SetTitle] = useState("");
    const [body,SetBody] = useState("");
    const [author,SetAuthor] = useState("Gokul");
    const [ispending,setIsPending] = useState(false);
    const history = useHistory();


    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog ={title ,body , author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            console.log("new blog added");
            setIsPending(false);
            history.push('/');
        })
    }


    return ( 
        <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit={handlesubmit}>
            <label>Blog Title:</label>
            <input type="text" required  value={title}  onChange = {(e) =>  SetTitle(e.target.value)}/>
            <label>Blog Body:</label>
            <textarea value={body}  onChange = {(e) =>  SetBody(e.target.value)} required></textarea>
            <label>Blog Author:</label>
            <select  value={author}  onChange = {(e) =>  SetAuthor(e.target.value)} >
                <option value="Gokul">Gokul</option>
                <option value="Mani">Mani</option>
            </select>
            {!ispending && <button>Add Blog</button>}
            {ispending && <button disabled>Adding Blog..</button>}
        </form>
        </div>
     );
}
 
export default Create;

