import React from 'react';
import './Contact.css'

function Contact(){
    return(
        <div className='contact' id="contact">
            <h3>お問い合わせ</h3>
            <h2>Contact</h2>
            <div className="row">
                <a href="#"><ion-icon name="mail-outline" class="ion2"></ion-icon></a>
                <a href="#"><ion-icon name="logo-twitter" class="ion2"></ion-icon></a>
                <a href="#"><ion-icon name="logo-github" class="ion2"></ion-icon></a>
            </div>
        </div>

    );
}

export default Contact;