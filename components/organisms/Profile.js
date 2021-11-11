import Relocation from "./Relocation";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph.js";
import Container from "../layout/Container";
import Carousel from "../molecules/Carousel";
import IconObject from "../molecules/IconObject";
import Card from "../molecules/Card";

const cards = [
  {
    title: "JavaScript",
    subtitle: ` `,
    items: ["JavaScript including ES2015", "JavaSCript MV* frameworks"],
  },
  {
    title: "React",
    subtitle: `${new Date().getFullYear() - 2020} years experience`,
    items: ["latest version in react", ""],
  },
  {
    title: "Next.js",
    subtitle: `${new Date().getFullYear() - 2020} years experience`,
    items: ["server side renderer", "JAM STACK"],
  },
];

const skills = [
  { title: "TypeScript", text: "For build with more control" },
  { title: "Tailwind", text: "For build some diferent" },
  { title: "Sass", text: "For more control in css" },
  { title: "Testing", text: "Because all should be secure" },
  { title: "Redux, Redux-thunk", text: "For admin the data" },
  { title: "Graphql", text: "The information is important" },
  { title: "Firebase", text: "For build web applications faster" },
  { title: "Gastby", text: "Is comming..." },
];

const formation = [
  { title: "Sena", text: "Programing curse" },
  { title: "platzi", text: "Wep development" },
  { title: "self-taught study", text: "Last features in web development" },
  { title: "Colombo americano", text: "English Curse " },
];

const books = [
  {
    title: "The Pragmatic Programmer",
    text: "",
  },
  {
    title: "JavaScript Data Structures and Algorithms",
    text: "",
  },
  {
    title: "clean code",
    text: "",
  },
  {
    title: "El libro negro del programador",
    text: "",
  },
  {
    title: "JavaScript for human",
  },
  {
    title: "The css definitive guide",
  },
];

const Profile = () => {
  return (
    <Container>
      <div className="profile">
        <div className="relocation">
          <Relocation />
        </div>
        <Heading size="md" isCentered>
          <strong>Personal</strong> profile
        </Heading>

        <IconObject icon="language" title="Language" />
        <div className="languages">
          <IconObject
            flag="🇪🇸"
            title="Spanish"
            type="secondary"
            text="Native"
          />
          <IconObject
            flag="🇬🇧"
            title="English"
            type="secondary"
            text="B1 level"
          />
        </div>

        <Paragraph>
          Michael sinisterra is a front-end developer with a passion for
          creating experiences in the web.
        </Paragraph>
        <Paragraph>
          In general, in his career, he has seen how with JavaScript we can
          create things that the user loves to use. This is great because we can
          create tools and create experiences that the user can connect .
        </Paragraph>
        <Paragraph>
          I loves to interacting with the tech community and that's why i am
          always looking for new opportunities. Also i have a passion for
          learning new things and i'm always looking ways to create new tech
          community .
        </Paragraph>
        <Paragraph>
          I also enjoys mentoring. I trying to help people to learn new things
          and share with others.
        </Paragraph>
        <Paragraph>
          My favorites CSS colors are tomato, rebeccapurple, and papayawhip.
        </Paragraph>
        <br />
        <hr />
        <Heading size="md" isCentered>
          <strong>My</strong> knowledge <strong>and </strong> tools
        </Heading>

        <Carousel
          items={[
            {
              title: "Expertise",
              content: (
                <div className="cards">
                  {cards.map((card, index) => (
                    <Card {...card} isInverted={index % 2 !== 0} />
                  ))}
                </div>
              ),
            },
            {
              title: "Skills",
              content: (
                <div className="skills">
                  {skills.map((skill) => (
                    <IconObject icon="diamond-alt" {...skill} />
                  ))}
                </div>
              ),
            },
            {
              title: "Formation",
              content: (
                <div className="skills">
                  {formation.map((skill) => (
                    <IconObject icon="diamond-alt" {...skill} />
                  ))}
                </div>
              ),
            },
            {
              title: "Favorites books",
              content: books.map((books) => (
                <IconObject icon="diamond-alt" {...books} />
              )),
            },
          ]}
        />
      </div>
      <style jsx>{`
        .profile {
          padding: 50px 0 40px;
        }

        .relocation {
          margin-bottom: 50px;
        }

        .languages {
          display: flex;
          flex-direction: column;
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          gap: 0 30px;
        }

        @media (min-width: 1140px) {
          .languages {
            flex-direction: row;
            grid-gap: 20px;
          }

          .cards {
            justify-content: space-between;
          }
          .skills {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-gap: 20px 0px;
            padding: 3rem, 2rem;
          }
        }
      `}</style>
    </Container>
  );
};

export default Profile;
