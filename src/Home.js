import { useState , useEffect} from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
        // { title: 'School Project', body: 'lorem ipsum...', author: 'mario', id: 4 },
        // { title: 'Leavers party!', body: 'lorem ipsum...', author: 'yoshi', id: 5 },
        // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 6 }
      ]);

      const [name, setName] = useState('mario');
    
       
         const handleDelete = (id) => {
            const newBlogs = blogs.filter(blog => blog.id  !== id);
            setBlogs(newBlogs);
        };

        useEffect(() => {
            console.log('use effect');
            console.log(name);
        }, [name]);

        // useEffect(() => {
        //     console.log('use effect');
        //     console.log(blogs);
        // }, []);

    return (  
        <div className="home">
           {/* <BlogList blogs={blogs} title="All Blogs"/>  */}
           <BlogList blogs={blogs.filter((blog) =>  blog.author === 'mario') } title="Mario's Blogs" handleDelete={handleDelete}/> 
           <button onClick={() => setName('luigo')}>Change Name</button>
           <p>{name}</p>
        </div>
    );
}
 
export default Home;