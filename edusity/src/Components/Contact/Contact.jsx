import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6db8f2a7-699a-4607-9106-1f2090fbe408");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully..");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
       <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon} allt=""/></h3>
        <p>We’re starting off this list with our very own page. 
            Help Scout's contact page shows how contact us forms can help
             you provide an effortless support experience. The clean design 
             and well-organized layout of the page make it easy for visitors to
             find the help they need.
        </p>
        <ul>
            <li><img src={mail_icon} alt=""/>Contact@contactus.com</li>
            <li><img src={phone_icon} alt=""/>+1 123-456-7890</li>
            <li><img src={location_icon} alt=""/>77 Massachuestt Ave,Campbridge<br/>MA 02139,United States</li>
        </ul>
       </div>
       <div className='contact-col'>
            <form onSubmit={onSubmit}>
              <label>Your Name</label>
              <input type="text" name='name' placeholder='Enter Your name' required/>
              <label>Phone Number</label>
              <input type="tel" name='phone' placeholder='Enter Your Mobile number' required/>
              <label>Write Your Message Here</label>
              <textarea name='message' rows="6" placeholder='Ener your Message' required></textarea>
              <button type="submit" className='btn dark-btn'>Submit Now<img src={white_arrow} alt=""/></button>
            </form>
            <span>{result}</span>
       </div>
       </div>
  )
}

export default Contact