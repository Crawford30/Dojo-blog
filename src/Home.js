import { useState } from "react";
const Home = () => {
  const [name, setName] = useState('mario');

    const handleClick = () => {
        setName('Joel');
     
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return (  
        <div className="home">
            <h2>Home page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => {
                handleClickAgain('joel', e)
            }}>Click Me Again</button>
        </div>
    );
}
 
export default Home;