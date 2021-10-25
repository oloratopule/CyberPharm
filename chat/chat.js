import emailjs from 'emailjs-com'
import React from 'react'

export default function chat(e) {
    e.preventDefault();

    emailjs.sendForm('service_9dj1o2x', 'template_mz4hjkn', form.current, 'user_FBWeDGGAg4iQ3mRXAhcdj')
        .then((result) => {
            console.log(result.text);
            alert('Message Sent!')
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
}