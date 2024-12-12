import '../home.style.css'
import Button from '../../../components/Button/Button'

const SectionFive = () => {
    return(
        <div className='section_five_holder'>
            <div className='section_five_email_submit'>
                <h2>Product Information</h2>
                <div className='section_five_email_input'>
                    <input placeholder='Enter Your Email Here'/>
                    <Button
                    label='Get Product Information'
                    />
                </div>
            </div>
            <div className='section_five_main'>
                <div className='section_five_main_info'>
                    <h2>Feature your best sellers.</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <div className='section_five_main_list'>
                    <ul>
                        <li>There are many variations of passages of Lorem Ipsum</li>
                        <li>There are many variations of passages of Lorem Ipsum</li>
                        <li>There are many variations of passages of Lorem Ipsum</li>
                    </ul>
                    <ul>
                        <li>There are many variations of passages of Lorem Ipsum</li>
                        <li>There are many variations of passages of Lorem Ipsum</li>
                        <li>There are many variations of passages of Lorem Ipsum</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SectionFive;