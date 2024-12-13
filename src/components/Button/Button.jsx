import './button.style.css'

const Button = ({label, textColour, backgroundColor, borderRadius, handleClick}) => {
    return(
        <button className='default_button'
        style={{
            backgroundColor: backgroundColor,
            color: textColour,
            borderRadius: borderRadius
        }}
        onClick={handleClick}
        >{label}</button>
    )
}

export default Button;