import { useState } from "react";
import resumeData from "../resumeData";
import Swal from "sweetalert2";

const Contactus = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

    return(
        <section id="contact">
          <div className="container" style={{display:'flex',width:'80%',justifyContent:'center'}}>
            <div className="form-container" style={{width:'60%',paddingRight:'50px'}}>
              <h2 style={{color:'white'}}>Message Me</h2>
              <form onSubmit={handleSubmit} style={{marginTop:'50px'}}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Phone">Phone Number</label>
                  <input 
                    type="text" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="contact-details">
              <h2 style={{color:'white'}}>Contact Details</h2>
              <p style={{marginTop:'50px', color:'white' , fontSize:'20px'}}><strong style={{fontSize:'20px'}}>Address:</strong> {resumeData.address}</p>
              <p style={{color:'white', fontSize:'20px'}}><strong style={{fontSize:'20px'}}>Email:</strong> {resumeData.email}</p>
              <p style={{color:'white', fontSize:'20px'}}><strong style={{fontSize:'20px'}}>Phone:</strong> {resumeData.mobile}</p>
            </div>
          </div>
        </section>
    )

}

export default Contactus;