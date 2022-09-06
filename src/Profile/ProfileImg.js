import Card from 'react-bootstrap/Card';

function ProfileImg(props){
    
    const link = props.link;
    
    return(
<Card.Img variant="top" src={link} />

    )
}
export default ProfileImg;