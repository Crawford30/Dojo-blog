import { useState , useEffect} from "react";
import BlogList from "./BlogList";
const Home = () => {
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    //   ]);



    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

      const [name, setName] = useState('mario');
    
       
        //  const handleDelete = (id) => {
        //     const newBlogs = blogs.filter(blog => blog.id  !== id);
        //     setBlogs(newBlogs);
        // };

        useEffect(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
               return res.json();
            })
            .then((data) => {
                console.log(data);
                setBlogs(data);
                setIsLoading(false);

            })
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
           {/* {blogs &&  <BlogList blogs={blogs.filter((blog) =>  blog.author === 'mario') } title="Mario's Blogs" handleDelete={handleDelete}/>} */}

           {isLoading && <div>Loading...</div>}

           {blogs &&  <BlogList blogs={blogs} title="Mario's Blogs" />}
          
        </div>
    );
}
 
export default Home;