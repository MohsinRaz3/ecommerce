import React from 'react';
import emailjs from 'emailjs-com';



export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'easecad_temp', e.target, 'user_6mr5fSgvuwTQKwgjIHfUV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
      <div>
          <div>
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    
                    <div className="col-8 form-group pt-2 mx-auto">
                    <br/>
                    <input type="text" className='form-control' placeholder='Name' name="name" />
                    </div>

                    <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className='form-control' placeholder='Email Address' name="email" />
                    </div>

                    <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className='form-control' placeholder='Subject' name="subject" />
                    </div>

                    <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className='form-control' id="" cols="30" rows="8" placeholder='Your message' name="message" />
                    </div>

                    <div className="col-8 pt-2 mx-auto">
                    <input type="submit" className='btn btn-info' value="Send Message" />
                    </div>
                </div>

            </form>
        </div>
    </div>
  );
}