import Article from "./Components/Article";
import Container from "./Components/Container";
import Hero from "./Components/Hero";
import List from "./Components/List";
import ListItem from "./Components/ListItem";
import Photos from "./Components/Photos";
import Typography from "./Components/Typography";

const App = () => {
  return (
    <>
      <main>
        <Hero heading="The Mind Action Conflict" />
        <Article
          title="Videos"
          videos={[
            "https://www.youtube.com/embed/W7u5GMF1Xxg",
            "https://www.youtube.com/embed/Miv4yUVOGck",
          ]}
        >
          <Typography variant="h2">Biography</Typography>
          <Typography>
            THE MIND ACTION CONFLICT is born out of the urge to leave the mind
            for actions. Singer and founder of the band Elias has a long love
            story with Cuba. Naturally introduced to the island by the mother of
            his child 7 years ago, Elias formed a strong bond to its people and
            their outlook on life. It became a new home away from home.
          </Typography>
          <Typography>
            In Santa Clara’s inclusive atmosphere, with its typical Social Clubs
            and spontaneous jam sessions by local musicians, Elias identified a
            personal longing to dig deep from within and create something new
            and honest. The eclectic fusion between Scandinavian rock traditions
            and the Caribbean collectivistic musical atmosphere ended up
            founding THE MIND ACTION CONFLICT.
          </Typography>
          <Typography>
            <>
              After experimenting with sounds, recording and producing, Elias
              slowly found the core he wished to turn into a band. A sound with
              a larger-than-life-feel. And just like the name, this project is
              about leaving the identity of thoughts for movement of actions. A
              theme that is recurring in both mood and lyrics of the new single{" "}
              <i>”Fantasy”(14th April).</i>
            </>
          </Typography>
          <Typography variant="h2">Social</Typography>
          <List>
            <ListItem>
              <a
                className="text-white"
                href="https://www.facebook.com/TheMindActionConflict"
              >
                Facebook
              </a>
            </ListItem>
            <ListItem>
              <a
                className="text-white"
                href="https://www.instagram.com/themindactionconflict/"
              >
                Instagram
              </a>
            </ListItem>
            <ListItem>
              <a
                className="text-white"
                href="https://www.youtube.com/channel/UC2UNi-XavCcA3RkxVpmiNWQ"
              >
                Youtube
              </a>
            </ListItem>
            <ListItem>
              <a
                className="text-white"
                href="https://open.spotify.com/artist/4VDUa4KGznup8L5AkUXACb?si=V0QxY0YNTIGROciRtEBC0w"
              >
                Spotify
              </a>
            </ListItem>
            <ListItem>
              <a
                className="text-white"
                href="https://music.apple.com/us/artist/the-mind-action-conflict/1636356345"
              >
                Apple Music
              </a>
            </ListItem>
          </List>
        </Article>
        <Container>
          <div className="grid grid-cols-12 gap-4 md:gap-12">
            <div className="col-span-12 md:col-span-6">
              <Typography variant="h2">Members</Typography>
              <ul className="text-white mb-6">
                <li>
                  <strong>Elias Lorenzo</strong> - Vocals, guitar & production
                </li>
                <li>
                  <strong>Mauri R. Chifflet</strong> - Drums
                </li>
                <li>
                  <strong>Morgan Eriksson</strong> - Keys
                </li>
                <li>
                  <strong>Victor Nevin</strong> - Bass
                </li>
                <li>
                  <strong>Filip Magnusson</strong> - Guitar
                </li>
              </ul>
              <Typography variant="h2">Contact</Typography>
              <ul>
                <li>
                  <a
                    href="mailto:elias.berndt@gmail.com"
                    className="flex items-center text-white"
                  >
                    elias.berndt@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:0046702009581"
                    className="flex items-center text-white"
                  >
                    +46 702 00 95 81
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Photos />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default App;
