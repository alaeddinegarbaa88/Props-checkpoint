import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "./Profile"

function ContainerSys() {
  const APIs = [
    {
      link: "https://m.media-amazon.com/images/M/MV5BMTcwNTg1MzMwM15BMl5BanBnXkFtZTcwNTQyMDgyMg@@._V1_UX214_CR0,0,214,317_AL_.jpg",
      fullName: "James Earl Jones",
      bio: "Widely regarded as the one of greatest stage and screen actors both in his native USA and internationally, James Earl Jones was born on January 17, 1931 in Arkabutla, Mississippi. At an early age, he started to take dramatic lessons to calm himself down. It appeared to work as he has since starred in many films over a 40-year period, beginning with the Stanley Kubrick classic Dr. Folamour ou : Comment j'ai appris à ne plus m'en faire et à aimer la bombe ! (1964). For several movie fans, he is probably best known for his role as Darth Vader in the original Star Wars trilogy (due to his contribution for the voice of the role, as the man in the Darth Vader suit was David Prowse, whose voice was dubbed because of his British West Country accent). In his brilliant course of memorable performances, among others, he has also appeared on the animated series Les Simpson (1989) three times and played Mufasa both in Le Roi Lion (1994) and Le Roi Lion (2019), while he returned too as the voice of Darth Vader in Star Wars : Épisode III - La Revanche des Sith (2005) and Rogue One: A Star Wars story (2016).",
      profession: "Actor",
    },
    {
      link: "https://scoutafrica.net/wp-content/uploads/2022/08/Oprah-Winfrey-Biography-Age-Children-House-Net-worth.jpeg",
      fullName: "Oprah Winfrey",
      bio: "Billionaire media giant and philanthropist Oprah Winfrey is best known for hosting her own popular talk show from 1986 to 2011. Fril there, she launched her own television network, OWN. She's also acted in films including 1985's The Color Purple.",
      profession: "Talk show host",
    },
    {
      link: "https://www.celebrityborn.com/admin/assets/images/people/ReQD2wAHkCAOgzgkYw15_2017_10_30.jpg",
      fullName: "Diego Armando Maradona",
      bio: "Diego Armando Maradona (Spanish: [djego maɾadona]; 30 October 1960 – 25 November 2020) was an Argentine professional football player and manager. Widely regarded as one of the greatest players in the history of the sport, he was one of the two joint winners of the FIFA Player of the 20th Century award.",
      profession: "Football player",
    },
  ];

  return (
    <>
      <Container>
        <Row>
        {APIs.map(({ fullName, link, profession, bio }) => (
            <Col>
              <Profile
                fullName={fullName}
                link={link}
                profession={profession}
                bio={bio}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ContainerSys;
