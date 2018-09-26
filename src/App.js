import React, { Component } from 'react';

import {
    Hero,
    Team,
    Sponsors,
    Footer,
    Social,
    Image,
    Header,
    Container,
    Section,
    Video,
    Column,
    Row,
    Code,
    ContactUs,
    Features,
    Copyright,
    GithubButton,
    BuiltWith
} from "@front10/landing-page-book/dist/components";

//core
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

//front10 components
import "@front10/landing-page-book/dist/themes/default/index.css";
//theme for code
import "codemirror/theme/oceanic-next.css";
import "./App.css";

import AnimatedHero from "./components/hero";

import team from "./data/team.json";
import sponsors from "./data/sponsors.json";
import features from "./data/features.json";
import particles from "./data/particles.json";
import build from "./data/build.json";
import { navBarCode, importThemes } from "./data/code";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Hero opacity={1} overlayColor="#212529" particlesParams={particles}>
                    <Container>
                        <Image src="images/logo/front10.png" width="80" alt="Front10 logo" />
                        <Header className="main-header">Landing Page Book</Header>
                        <Header className="main-subheader">React components to build!</Header>
                        <div className="mt-5">
                            <GithubButton
                                btnType="star"
                                btnText="Stars"
                                username="front10"
                                repository="landing-page-book"
                            />
                            <GithubButton
                                btnType="download"
                                btnText="Download"
                                username="front10"
                                repository="landing-page-book"
                            />
                        </div>
                        <AnimatedHero />
                    </Container>
                </Hero>
                <Section
                    subTitle="Landing page book is the professional choice for developers"
                    title="FEATURES"
                >
                    <Container>
                        <Features
                            features={features}
                            imageCircle={false}
                            showBorder={false}
                            showSubtitle={true}
                        />
                    </Container>
                </Section>
                <Section
                    subTitle="One Look Is Worth A Thousand Words"
                    title="WHAT WE DO"
                    gray
                >
                    <Container>
                        <Video source="https://youtu.be/dCrLwWdju68" />
                    </Container>
                </Section>
                <Section subTitle="Very fast and easy to use" title="OUR CODE">
                    <Container>
                        <Row>
                            <Column className="col col-md-3">
                                <Header type="h5" borderBottom>
                                    How to use ?
            </Header>
                                <p>You can import our components of easy from.</p>
                            </Column>
                            <Column className="col col-md-9">
                                <div>
                                    <Code
                                        readOnly
                                        theme="oceanic-next"
                                        languageCode="jsx"
                                        code={importThemes}
                                        showheader={false}
                                        showfooter={false}
                                        lineNumbers={false}
                                    />
                                </div>
                            </Column>
                        </Row>
                        <Row className="mt-5">
                            <Column className="col col-md-3">
                                <Header type="h5" borderBottom>
                                    App.js
            </Header>
                                <p>An example used to create a beautiful hero component</p>
                            </Column>
                            <Column className="col col-md-9">
                                <Code
                                    readOnly
                                    theme="oceanic-next"
                                    languageCode="jsx"
                                    code={navBarCode}
                                    showheader={false}
                                    showfooter={false}
                                    lineNumbers={false}
                                />
                                <div className="mt-3">
                                    <Hero
                                        backgroundColor="#212529"
                                        header="Front10"
                                        minHeight="400px"
                                        subHeader="Rewriting the world with React"
                                        image="images/hero/map-image.png"
                                        particlesParams={{
                                            particles: {
                                                shape: {
                                                    type: "star",
                                                    stroke: {
                                                        width: 1,
                                                        color: "#fff"
                                                    }
                                                },
                                                line_linked: {
                                                    enable: false
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </Column>
                        </Row>
                    </Container>
                </Section>
                <Section subTitle="Used tecnologies and frameworks" title="BUILD WITH" gray>
                    <Container className="text-center BuildWith">
                        <BuiltWith companies={build} />
                    </Container>
                </Section>
                <Section subTitle="These are our members" title="TEAM">
                    <Container>
                        <Team
                            showBorder={false}
                            members={team}
                            socials={["facebook", "linkedin", "twitter"]}
                        />
                    </Container>
                </Section>
                <Section gray>
                    <Container className="text-center">
                        <Sponsors gray sponsors={sponsors} />
                    </Container>
                </Section>
                <Hero
                    image="images/hero/map-image.png"
                    opacity={0}
                    particles={false}
                    backgroundColor="#212529"
                    minHeight="75vh"
                >
                    <Container className="text-center">
                        <Header className="Contact-Header">BOOK A FREE CONSULTATION</Header>
                        <Header type="h3" className="Contact-Subheader mb-5">
                            Our Headquarters in Miami, FL.
        </Header>
                        <ContactUs />
                    </Container>
                </Hero>
                <Footer>
                    <Row>
                        <Column className="col-sm-12 col-md">
                            <Copyright showAllRightText={false} text="Front10, Inc" />
                        </Column>
                        <Column className="col-sm-12 col-md mt-3 mt-md-0">
                            <Image
                                alt="Front 10 logo"
                                src="https://front10.com/img/logos/logo-main.png"
                                width="100"
                            />
                        </Column>
                        <Column className="col-sm-12 col-md mt-3 mt-md-0">
                            <Social gray type="twitter" url="https://front10.com" />
                            <Social gray type="facebook" url="https://front10.com" />
                            <Social gray type="linkedin" url="https://front10.com" />
                        </Column>
                    </Row>
                </Footer>
            </div>
        );
    }
}

export default App;
