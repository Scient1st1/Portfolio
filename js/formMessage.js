emailjs.init({
    publicKey: "TseWx3Vi1Yf2PLWnC",
});
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    var templateParams = {
        email: document.getElementById('email').value,
        reply_to: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    emailjs.send('service_ml6xrby', 'template_pcur2sh', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            let email = document.getElementById('email')
            email.value = '';
            let message = document.getElementById('message');
            message.value = '';
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
   
    
});