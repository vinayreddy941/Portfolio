/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ob0mcou', 'template_sw1novl', '#contact-form', 'vHWuA73qECr-XfBYr')
        .then(() => {
            contactMessage.textContent = "Message sent successfully ✅";

            setTimeout(() => {
                contactMessage.textContent = ""; 
            }, 5000);
        })

};

contactForm.addEventListener('submit', sendEmail);
