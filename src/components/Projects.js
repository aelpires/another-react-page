import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            tittle: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg1,
        },
        {
            tittle: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg2,
        },
        {
            tittle: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg3,
        },
        {
            tittle: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg1,
        },
        {
            tittle: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg2,
        },
        {
            tittle: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg3,
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <p>Sint elit proident amet Lorem cupidatat dolore mollit veniam exercitation reprehenderit nulla veniam proident adipisicing. Id commodo do id nulla excepteur pariatur ipsum. Laborum dolore est nostrud ipsum minim esse reprehenderit consequat.</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-intems-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab one</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                  projects.map((project, index) => {
                                                    return (
                                                     <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                    )
                                                  })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">Non in amet excepteur minim tempor commodo adipisicing tempor.</Tab.Pane>
                                        <Tab.Pane eventKey="third">Culpa in do sit aliqua proident aute irure est sit.</Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="backgroundImgRight"></img>
        </section>
    )
}