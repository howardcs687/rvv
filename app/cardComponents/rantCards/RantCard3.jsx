const profile = '/pictures/howardPicture.webp';
import './rantCardStyles.css';

function Rant3(){
return(
    <div className="rant-card">
        <img className="rant-img" src={profile} alt="Profile Picture"></img>
        <h2 className='rant-title'>WardyBrat</h2>
        <p className='rant-desc'>MLBB is not fun when you play with randoms.</p>
    </div>
);
}
export default Rant3;