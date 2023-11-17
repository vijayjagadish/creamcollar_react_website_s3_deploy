import { useState, useRef} from "react";
import $ from "jquery";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

function ContactSections()  {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fgs496c', 'template_l7bqj99', form.current, 'ojS0CkbYhXCWw7nMt')
      .then((result) => {
          console.log(result.text);
          window.alert('Message sent successfully')
          window.location.reload();
      }, (error) => {
          console.log(error.text);
          window.alert(error.text);
          
      });
  };

  // const [name, setName] = useState("");
  // const [result, setResult] = useState("");

  // const handleChange = (e) => {
  //     setName(e.target.value);
  // };
  // var content =''
  // var msg_type=''

  //   const [inputValue1, setInputValue1] = useState('');
  
  //   const handleInputChange1 = (event) => {
  //     setInputValue1(event.target.value);
  //   };
  //   const [inputValue2, setInputValue2] = useState('');
  
  //   const handleInputChange2 = (event) => {
  //     setInputValue2(event.target.value);
  //   };
  //   const [inputValue3, setInputValue3] = useState('');
  
  //   const handleInputChange3 = (event) => {
  //     setInputValue3(event.target.value);
  //   };
  //   const [inputValue4, setInputValue4] = useState('');
  
  //   const handleInputChange4 = (event) => {
  //     setInputValue4(event.target.value);
  //   };
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const form = $(e.target);
  //     $.ajax({
  //         type: "POST",
  //         url: form.attr("action"),
  //         data: form.serialize(),
  //         success(data) {
  //           if(data=='SUCCESS'){
  //             content = 'Thankyou for contacting us, We will contact you soon.';
  //            msg_type ='success';
  //           }
  //         else{
  //           content = 'Sorry for any inconvenience, we can\'t reach the server so that you can try later';
  //           msg_type ='error';
  //         }
  //         setInputValue1('');
  //         setInputValue2('');
  //         setInputValue3('');
  //         setInputValue4('');
  //             setResult(content);
  //             Swal.fire({
               
  //               text: content,
  //               icon: msg_type
  //             });
  //         },
  //     });
  // };
    return (
  <div>
   <section className="contact">
  <div className="container-lg">
    <div className="row">
      <div className="col-12">
        <h1 className="contact-header">Contact Us</h1>
      </div>
      <div className="col-12">
        <div className="contact-section">
          <div className="row gx-5">
            <div className="col-lg-5 mb-lg-0 mb-5">
              <h6 className="contact-title">How can we help?</h6>
              <p className="contact-info">Please reach out to us with your query, our team of experts will be happy to assist you</p>
              <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-lg-12 col-md-4 mb-3">
                    <input type="text" className="form-control clear-button"  name="name" placeholder="Name *"/>
                  </div>
                  <div className="col-lg-12 col-md-4 mb-3">
                    <input  type="email" className="form-control clear-button"  name="email" placeholder="Email *"/>
                  </div>
                  <div className="col-lg-12 col-md-4 mb-3">
                    <input  type="text" className="form-control clear-button"  name="phone" placeholder="Phone number"/>
                  </div>
                  <div className="col-lg-12 mb-3">
                    <textarea className="form-control clear-button"  placeholder="Add your message" name="message" rows="4"></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="btn btn-primary" value="Send">Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-7">
              <h6 className="contact-title">Reach us</h6>
              <div className="d-flex mb-4 flex-sm-row flex-column">
                <div className="flex-fill contact-text">
                  <h6 className="text-grey"><i className="las la-phone-volume me-2"></i> Phone</h6>
                  <p><a className="link-orange" href="tel:+91 87547 04839">+91 87547 04839</a></p>
                </div>
                <div className="flex-fill contact-text">
                  <h6 className="text-grey"><i className="las la-envelope-open-text me-2"></i> Email</h6>
                  <p><a href="mailto:info@creamcollar.com" className="link-orange">info@creamcollar.com</a></p>
                </div>
                <div className="flex-fill contact-text">
                  <h6 className="text-grey"><i className="las la-external-link-square-alt me-2"></i> Social Media</h6>
                  <ul className="leaders-links">
                    <li> <a href=" https://www.linkedin.com/company/creamcollar" target="_blank"><i className="lab la-linkedin-in"></i></a> </li>
                   
                  </ul>
                </div>
              </div>
              <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8968136659273!2d80.2593164!3d13.0422396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526636a92e1baf%3A0x51af4bc90d6e872c!2sWorkafella%20Alwarpet%20-%20Coworking%20Space%20in%20Chennai!5e0!3m2!1sen!2sin!4v1692027069816!5m2!1sen!2sin" width="100%" height="280" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>
  </div> 
    );
  }
  
  export default ContactSections;
  