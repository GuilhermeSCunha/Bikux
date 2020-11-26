import "./ButtonIcon.scss";

function ButtonIcon (props) {

    const {Icon, Action} = props;

    return (
        <button className = "button-icon" onClick = {Action}>
            <img className = "icon" src={Icon} alt="icone"/> 
        </button>
    );
}

export default ButtonIcon;