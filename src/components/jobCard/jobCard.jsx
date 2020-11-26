import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Badges from "../Badges/Badges";
import TellFriendIcon from"../../assets/icons/002-indique.png";
import FavoriteIcon from"../../assets/icons/014-favoritar.png";
import SeeMoreIcon from"../../assets/icons/016-seemore.png";
import "./jobCard.scss";

function JobCard (props) {
    const {Title, jobImage, jobDescription, BadgesList} = props;
    
    return (
        <div className = "job-card-container">
            <header>
                <img src={jobImage} alt="logo da empresa"/>
                <div className = "badges-and-title-container">
                    <h2 className = "title">{Title}</h2>
                    <div className = "badges-container">
                        <Badges badgesList = {BadgesList}/>
                    </div>
                </div>
            </header>
            <p className = "job-description">{jobDescription}</p>
            <div className = "buttons-container">
                <ButtonIcon Icon = {TellFriendIcon} Action = {() => console.log("indicou")} /> 
                <ButtonIcon Icon = {FavoriteIcon} Action = {() => console.log("favoritou")} />  
                <ButtonIcon Icon = {SeeMoreIcon} Action = {() => console.log("viu")} /> 
            </div>
        </div>
    );
}

export default JobCard;