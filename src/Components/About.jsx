import { Link , useLocation } from "react-router-dom"
import { useEffect } from "react";
import "../components/styles.css"


function About() {
    const location = useLocation();
    useEffect(() => {
            alert(localStorage.getItem("useride"));
        }, []);
              const handleBtnclick = () => {       
            localStorage.setItem("useride","");
    };

    
    return (
        <>
            <div className="head">
                <Link to="/">Main</Link>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Contact">Contact</Link>
                <br></br></div>
                <h1>This is the about page u know!!!!</h1> 
                <p>I'm belongs to ---CSE3{location.state?.course}</p>
                <button onClick={handleBtnclick} class="glass-btn">Clear LocalStorage</button>

                                 
           
        </>
    )
}

export default About