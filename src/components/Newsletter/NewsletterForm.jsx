import PropTypes from "prop-types";
import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) =>{
    let email;
    const submit = (e) => {
        e.preventDefault();
        email && email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        });
        let emailInput = document.getElementById("mc-form-email");
        emailInput.value = "";
    };
    // Change Handaler
    const inputChangedHandler = (e) => {
         console.log(e.target.value);
    }
    
    return (
        <div className="newsletter-form" data-aos="fade-up" data-aos-delay="300">
            <form>
                <input id="mc-form-email" className="email" type="email" onChange={(e)=>inputChangedHandler(e)} ref={node => (email = node)} placeholder="Ente your email" name="mail" />
                <button className="btn btn-primary btn-hover-secondary" onClick={submit}>Subscribe</button>
            </form>
            {status === "sending" && (
                <div style={{ color: "#3498db", fontSize: "12px" }}>sending...</div>
            )}
            {status === "error" && (
                <div
                style={{ color: "#e74c3c", fontSize: "12px" }}
                dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                style={{ color: "#2ecc71", fontSize: "12px" }}
                dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
        </div>
    )
}

CustomForm.propTypes = {
    status: PropTypes.oneOf(["sending", "error", "success"]),
    message: PropTypes.string,
    onValidated: PropTypes.func
}

const NewsletterForm = (props) => {
    return (
        <MailchimpSubscribe
            url={props.mailchimpUrl}
            render={({ subscribe, status, message }) => (
            <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
            />
            )}
        />
    )
}

NewsletterForm.propTypes = {
  mailchimpUrl: PropTypes.string
};

export default NewsletterForm;

