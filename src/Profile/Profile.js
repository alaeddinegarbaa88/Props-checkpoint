import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProfileImg from './ProfileImg'

function Profile(props){
    
    
    const fullName = props.fullName;
    const bio = props.bio
    const profession = props.profession
    const link =props.link
    return(
<Card style={{ width: '18rem' }}>
    
    <Card.Body>
        <Card.Title>{fullName}</Card.Title>
        <ProfileImg link = {link}/>
        <span>{profession}</span>
        <Card.Text>
        {bio}
        </Card.Text>
        <Button variant="primary">Let's visit</Button>
    </Card.Body>
    </Card>
    )
}

export default Profile;