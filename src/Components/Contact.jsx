import { Link , useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../components/contact.css";
import profile from "../assets/profile.jpg";


function Contact() {
     const location = useLocation();
     useEffect(() => {
             alert(localStorage.getItem("useride"));
         }, []);
     
    return (
        <>
            <div className="head">
                <nav className="nav">
                    <Link to="/">Main</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <h1>This is Contact Page</h1>
            </div>

            <div className="contact-container">
                <div className="contact-card">

                    <div className="photo-section">
                        
                        <img src={profile} alt="Profile" />

                    </div>

                    <div className="info-section">
                         <p>I'm belongs to ---CSE4{location.state?.course}</p>
                        <p><span>ID Number:</span> 2500030107</p>
                        <p><span>Name:</span>Jyothika.p</p>
                        <p><span>Phone:</span> 9347457540</p>
                        <p><span>Email:</span> jyo@gmail.com</p>
                        <p><span>Address:</span> Vijayawada , Andhra Pradesh</p>
                        <p><span>Department:</span> CSE</p>
                        <p><span>College:</span>KL UNIVERSITY</p>
                    </div>
                    {/* Message Box */}
        <div className="contact-card message-card">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
</div>
                </div>
            </div>
        </>
    );
}

export default Contact;
