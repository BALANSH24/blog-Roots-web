import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div class="contact-form">
                <h2>Get In Touch</h2>
                <form action="">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name"/>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email"/>
                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Write your message here..."></textarea>
                <button type="submit">Send</button>
                </form>
                
                
                
                
                    
                
                
            </div>

                    <section class="contact-info">
                        <h2>Contact Information</h2>
                        <ul>
                            <li><a href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act">balanshagnihotri24@gmail.com</a></li>
                            <li><a href="">+1 (234) 567-890</a></li>
                            <li>Saint Andrews Institute Of Technology And Management</li>
                        </ul>
                    </section>
        </div>
                )
}

                export default Contact
