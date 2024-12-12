import './checkout.style.css'

const Checkout = () => {
    return(
        <div>
            <div>
                <h3>Delivery Address</h3>
                <div>
                    <input type='text' placeholder='*First Name'/>
                    <input type='text' placeholder='*Last Name'/>
                </div>
                <p>+ Add Company Address</p>
                <div>
                    <input type='text' placeholder='*Street Address'/>
                    <input type='text' placeholder='*App/Suite/Floor (Optional)'/>
                    <div>
                        <input type='text' placeholder='*City'/>
                        <input type='text' placeholder='*State'/>
                        <input type='text' placeholder='*Zipcode'/>
                    </div>
                    <input type='checkbox'>Use as billing address</input>
                </div>
            </div>
            <div>
                <h3>Contact info</h3>
                <div>
                    <input type='text' placeholder='email'/>
                    <input type='text' placeholder='phone'/>
                </div>
                <div>
                    <p>Your privacy is importaint to us. View our privacy policy here. We will only contact you if there is an issue with your order.</p>
                    <p>We will also look for coupons associated with your email and phone number.</p>
                </div>
                <input type='checkbox'>Get text alerts for your order on your mobile phone</input>
            </div>
            <button>Proceed to Savings & Payments</button>
        </div>
    )
}