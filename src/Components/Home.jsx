<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import "../components/styles.css"

function Home() {
    const location = useLocation();
    
    useEffect(() => {
        alert(localStorage.getItem("useride"));      
    }, []);

      const handleBtnclick = () => {       
            localStorage.setItem("useride","");
    };


=======
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../components/styles.css";

function Home() {
    const location = useLocation();

    useEffect(() => {
        alert(localStorage.getItem("msg"));
    }, []);

    const handlebtnclick = () => {
        localStorage.removeItem("msg");  
        alert("Storage cleared");
    };

>>>>>>> a01e39803c9bce75640236baf0478f8123f2389d
    return (
        <>
            <div className="head">
                <Link to="/" state={{ course: "CSE1" }}>Main</Link>
                <Link to="/home" state={{ course: "CSE2" }}>Home</Link>
                <Link to="/about" state={{ course: "CSE3" }}>About</Link>
                <Link to="/contact" state={{ course: "CSE4" }}>Contact</Link>

                <h1>This is home page</h1>
            </div>
<<<<<<< HEAD
            <p>Message: {location.state?.course}</p>
            <button onClick={handleBtnclick} class="glass-btn">Clear LocalStorage</button>
=======

            <p>I'm belongs to --- {location.state?.course}</p>

            <button onClick={handlebtnclick} className="glass-btn">
                Clear Storage
            </button>
>>>>>>> a01e39803c9bce75640236baf0478f8123f2389d
        </>
    );
}

export default Home;