import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
        { title: 'School Project', body: 'lorem ipsum...', author: 'mario', id: 4 },
        { title: 'Leavers party!', body: 'lorem ipsum...', author: 'yoshi', id: 5 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 6 }
      ])
    
        const handleClick = () => {

         }
    return (  
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs"/> 
        </div>
    );
}
 
export default Home;