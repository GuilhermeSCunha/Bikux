import "./jobCard.scss";

function JobCard (props) {
    const {Title, jobImage, jobDescription} = props;

    return (
        <div className = "job-card-container">
            <header>
                <img src={jobImage} alt="company logo, or some visual representation of the job"/>
                <div className = "badges-and-title-container">
                    <h2 className = "title">{Title}</h2>
                    <div className = "badges-container">
                        <div className = "badge"></div>
                        <div className = "badge"></div>
                        <div className = "badge"></div>
                    </div>
                </div>
            </header>
            <p className = "job-description">{jobDescription}</p>
            <div className = "buttons-container">
                <button>ssss</button> 
                <button>ssss</button>
                <button>ssss</button>
            </div>
        </div>
    );
}

export default JobCard;