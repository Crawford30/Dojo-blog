import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    //data:blogs grab the data but call it blog
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    //   ]);



    // const [blogs, setBlogs] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [name, setName] = useState('mario');
    // const [error, setError] = useState(null);
    
       
        //  const handleDelete = (id) => {
        //     const newBlogs = blogs.filter(blog => blog.id  !== id);
        //     setBlogs(newBlogs);
        // };

        // useEffect(() => {
        //     fetch('http://localhost:8000/blogs')
        //     .then(res => {
        //         if(!res.ok){
        //             throw Error('Data not fetched');

        //         }
        //        return res.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //         setBlogs(data);
        //         setIsLoading(false);
        //         setError(null);
                

        //     })
        //     .catch((err) => {
        //         setIsLoading(false);
        //         setError(err.message);
        //         console.log(err.message);

        //     });
        //     console.log('use effect');
        //     console.log(name);
        // }, [name]);

        // useEffect(() => {
        //     console.log('use effect');
        //     console.log(blogs);
        // }, []);

    return (  
        <div className="home">
           {/* <BlogList blogs={blogs} title="All Blogs"/>  */}
           {/* {blogs &&  <BlogList blogs={blogs.filter((blog) =>  blog.author === 'mario') } title="Mario's Blogs" handleDelete={handleDelete}/>} */}
           {error && <div>{error}</div>}

           {isLoading && <div>Loading...</div>}


           {blogs &&  <BlogList blogs={blogs} title="Mario's Blogs" />}
          
        </div>
    );
}
 
export default Home;