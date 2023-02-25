import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>Content shared on website is for information purpose only for CMPD</p>
      <div>
        {" "}
        <input className="email_input" type="text" placeholder="Enter your email"/>
        <input className="submit_btn button" type={'button'} value={'SUBMIT'}/>
      </div>
    </div>
  );
};

export default Contact;
