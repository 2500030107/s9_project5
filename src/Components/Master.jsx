<<<<<<< HEAD
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import "../components/styles.css"

function Master() {
    const location = useLocation();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");


    const handleBtnclick = () => {       
            navigate("/home", { state: { course: message } });        
    };

    return (
=======
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../components/styles.css";

function Master() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const goHome = () => {
        navigate("/home", { state: { course: message } }); };
    const goAbout = () => {
        navigate("/about", { state: { course: message } }); };
    const goContact = () => {
        navigate("/contact", { state: { course: message } }); };
    const goByUserChoice = () => {
        const page = message.toLowerCase().trim();
        if (page === "home") {
            navigate("/home", { state: { course: message } });}
        else if (page === "about") {
            navigate("/about", { state: { course: message } });}
        else if (page === "contact") {
            navigate("/contact", { state: { course: message } });}
        else {alert("Please enter valid page name");}
    };
return (
>>>>>>> a01e39803c9bce75640236baf0478f8123f2389d
        <>
            <div className="head">
                <Link to="/" state={{ course: message }}>Main</Link>
                <Link to="/home" state={{ course: message }}>Home</Link>
                <Link to="/about" state={{ course: message }}>About</Link>
<<<<<<< HEAD
                <Link to="/Contact" state={{ course: message }}>Contact</Link>
                <br></br>
=======
                <Link to="/contact" state={{ course: message }}>Contact</Link>

                <br />
>>>>>>> a01e39803c9bce75640236baf0478f8123f2389d
                <h1>This is the main page u know!!!!</h1>
            </div>

            <input
                type="text"
<<<<<<< HEAD
                placeholder="Enter Message"
                style={{ width: 400, height: 100, padding: 50, color: "blue", backgroundColor: "yellow", fontSize: 20 }}
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                    localStorage.setItem("useride", e.target.value);
                }}

            />
            <button onClick={handleBtnclick} class="glass-btn">Go to home</button>
=======
                placeholder="Enter Message OR Page Name"
                style={{
                    width: 400,
                    height: 100,
                    padding: 20,
                    color: "blue",
                    backgroundColor: "yellow",
                    fontSize: 20
                }}
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                    localStorage.setItem("msg", e.target.value);
                }}
            />

            <br /><br />

            <button onClick={goHome} className="glass-btn">
                Go to Home
            </button>

            <button onClick={goAbout} className="glass-btn">
                Go to About
            </button>

            <button onClick={goContact} className="glass-btn">
                Go to Contact
            </button>

            <br /><br />

            <button onClick={goByUserChoice} className="glass-btn">
                Navigate By User Input
            </button>
>>>>>>> a01e39803c9bce75640236baf0478f8123f2389d
        </>
    );
}

export default Master;