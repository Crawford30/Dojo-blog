import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const  [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent page from being refreshing
        setIsLoading(true);

        const blog = {title, body, author };
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog),
        }).then(() => {
            console.log('New Blog Added');
            setIsLoading(false);
            // history.go(-1);
            navigate('/');
        })

    };
    return ( 
        <div className="create">
            <h2>Add A New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                 type="text"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 required/>

              <label>Blog Body:</label>
               <textarea 
               value={body}
               onChange={(e) => setBody(e.target.value)}
               required></textarea>

               <label>Blog Author:</label>
               <select
               value={author}
               onChange={(e) => setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
               </select>
               {!isLoading && <button>Add Blog</button>}
               {isLoading && <button disabled>Adding Blog...</button>}

             {/* <p>{title}</p>
             <p>{body}</p> */}
            </form>

        </div>
     );
}
 
export default Create;