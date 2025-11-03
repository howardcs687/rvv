const profile = '/pictures/jdPicture.webp';
import './rantCardStyles.css';

function Rant1(){
return(
    <div className="rant-card">
        <img className="rant-img" src={profile} alt="Profile Picture"></img>
        <h2 className='rant-title'>Jaydee</h2>
        <p className='rant-desc'>When girls kiss; it's normal. But when I kiss the homies-</p>
    </div>
);
}
export default Rant1;
