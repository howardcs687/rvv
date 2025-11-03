const profile = '/pictures/howardPicture.webp';
import './rantCardStyles.css';

function Rant4(){
return(
    <div className="rant-card">
        <img className="rant-img" src={profile} alt="Profile Picture"></img>
        <h2 className='rant-title'>WardyBrat</h2>
        <p className='rant-desc'>"This isn't learning, it's just memorizing."</p>
    </div>
);
}
export default Rant4;