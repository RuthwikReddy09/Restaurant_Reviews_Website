import React from 'react'
function Contact() {
  return (
    <div className='contact'>
      <div className='contactcard'>
        <h1>Contact Us</h1>
        <form action="/" className="form">
          <input type="text" name="username" id="username" placeholder='your name' required/>
          <input type="tel" name="telphone" id="phone" placeholder='Phone Number' pattern="[0-9]{10}"  required/>    
          <textarea name="feedback" id="feedback" cols="30" rows="10" placeholder='Message . . .' required></textarea>
          <button type="submit" id="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
