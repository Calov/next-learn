import PropTypes from 'prop-types'

function Button({text, link}) {
    return (
        <div className="button">
            {text}
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.link
}

export default Button

