import { useState } from "react";
const Home = () => {
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Joel');
        setAge(80);
     
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return (  
        <div className="home">
            <h2>Home page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => {
                handleClickAgain('joel', e)
            }}>Click Me Again</button>
        </div>
    );
}
 
export default Home;