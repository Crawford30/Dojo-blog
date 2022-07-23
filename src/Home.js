const Home = () => {
    const handleClick = (e) => {
        console.log('hello, Ninjaa', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return (  
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => {
                handleClickAgain('joel', e)
            }}>Click Me Again</button>
        </div>
    );
}
 
export default Home;