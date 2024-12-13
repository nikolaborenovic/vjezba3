import './contacts.style.css'
import ContactsImg from '../../assets/user.png'
import Button from '../../components/Button/Button'

const Contact = () => {
    return(
        <div className='contact_holder'>
            <div className='contact_info'>
                <div className='contact_info_text'>
                    <h2>Get in touch</h2>
                    <p>Use our contact form for all information requests or contact us directly using contact information below.</p>
                    <p>Feel free to contact us via email or phone</p>
                </div>
                <div className='contact_info_list'>
                    <div className='contact_location_phone'>
                        <img src={ContactsImg}/>
                        <div className='address_phone'>
                            <h3>Our Office Location</h3>
                            <p>The Interior Design Studio Company</p>
                            <p>The Courtyard, Al Quoz 1, Colorado US</p>
                        </div>
                    </div>
                        <div className='contact_location_phone'>
                            <img src={ContactsImg}/>
                            <div className='address_phone'>
                                <h3>Phone (Landline)</h3>
                                <p>123-456-789</p>
                            </div>
                        </div>
                    
                </div>
            </div>
            <div className='contact_form'>
                <h2>Get started with a free quotation</h2>
                <form className='contact_form_input'>
                    <label htmlFor='name' className='contact_info_input'>
                        <span>Name</span>
                        <input type='text' name='name' placeholder='Enter your name'/>
                    </label>
                    <label htmlFor='email' className='contact_info_input'>
                        <span>Email</span>
                        <input type='text' name='email' placeholder='Enter valid email address'/>
                    </label>
                    <label htmlFor='message' className='contact_info_input'>
                        <span>Message</span>
                        <textarea type='text' name='message' placeholder='Enter your message'/>
                    </label>
                    <label htmlFor='checkbox'>
                        <input type='checkbox'/>
                        <span>Click to accept <span className='terms_of_service'>Terms of Service</span></span>
                    </label>
                    <Button
                    label='Submit your request'
                    textColour='white'
                    backgroundColor='#e74c3c'
                    borderRadius='10px'
                    />
                </form>
            </div>
        </div>
    )
}

export default Contact;