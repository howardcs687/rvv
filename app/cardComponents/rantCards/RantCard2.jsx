const profile = '/pictures/jdPicture.webp';
import './rantCardStyles.css';

function Rant2(){
return(
    <div className="rant-card">
        <img className="rant-img" src={profile} alt="Profile Picture"></img>
        <h2 className='rant-title'>Jaydee</h2>
        <p className='rant-desc'>MLBB is only fun when you trash talk.</p>
    </div>
);
}
export default Rant2;