const Home = () => {
    const handleClick = () => {
        console.log('hello, Ninjaa');
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }

    return (  
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {
                handleClickAgain('joel')
            }}>Click Me Again</button>
        </div>
    );
}
 
export default Home;