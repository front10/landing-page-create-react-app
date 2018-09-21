import React, { Component } from 'react';
import './App.css';

import {
    Hero,
    Navbar,
    Team,
    Sponsors,
    Footer,
    Social,
    Image,
    Button,
    Header,
    Container,
    Section,
    Video,
    Column,
    ContactInfo,
    Row,
    Code,
    ContactUs,
    Features,
    Copyright
} from "@front10/landing-page-book/dist/components";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@front10/landing-page-book/dist/components/Hero/style.css";
import "@front10/landing-page-book/dist/components/Social/style.css";
import "@front10/landing-page-book/dist/components/ImageList/style.css";
import "@front10/landing-page-book/dist/components/Section/style.css";
import "@front10/landing-page-book/dist/components/Footer/style.css";
import "@front10/landing-page-book/dist/components/Video/style.css";
import "@front10/landing-page-book/dist/components/Row/style.css";
import "@front10/landing-page-book/dist/components/Column/style.css";
import "@front10/landing-page-book/dist/components/ContactInfo/style.css";
import "@front10/landing-page-book/dist/components/Code/style.css";
import "@front10/landing-page-book/dist/components/Navbar/style.css";
import "@front10/landing-page-book/dist/components/ContactUs/style.css";
import "@front10/landing-page-book/dist/components/Features/style.css";


//theme for code
import "codemirror/theme/oceanic-next.css";

import team from "./data/team.json";
import sponsors from "./data/sponsors.json";
import features from "./data/features.json";
import { navBarCode, heroCode, importStyles, importThemes } from "./data/code";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar
                    className="mb-2"
                    companyLink="https://front10.com"
                    companyLogo="logo.png"
                    companyName="Front10"
                    expand="sm"
                    fixed={true}
                    transparent={true}
                    rightItems={[
                        {
                            title: "Services"
                        },
                        {
                            title: "Contact"
                        }
                    ]}
                />
                <Hero
                    opacity={0}
                    image="background.svg"
                    overlayColor="#d43131"
                    particles={true}
                    particlesParams={{
                        move: {
                            speed: 2
                        }
                    }}
                >
                    <Container>
                        <Image
                            alt="Cool car"
                            className="w-25"
                            src="/front10-without-name.svg"
                        />
                        <Header className="display-3 text-white">landing-page-book</Header>
                        <div className="mb-5 mt-5">
                            <Button
                                className="btn btn-primary btn-lg pl-5 pr-5 pt-2 pb-2"
                                href="https://front10.com/"
                            >
                                Getting started...
          </Button>
                        </div>
                        <Social type="facebook" url="https://landing-page-book.front10.com/" />
                        <Social type="twitter" url="https://landing-page-book.front10.com/" />
                        <Social type="linkedin" url="https://landing-page-book.front10.com/" />
                    </Container>
                </Hero>
                <Image
                    className="clouds-background"
                    alt="This is an image example"
                    src="/clouds.png"
                    width={640}
                />
                <Section subTitle="We show you what we do ..." title="Welcome">
                    <Container>
                        <Video source="https://youtu.be/dCrLwWdju68" />
                    </Container>
                </Section>
                <Section subTitle="We provide easy code ..." title="Our code" gray>
                    <Container>
                        <Row>
                            <Column className="col col-md-3">
                                <Header type="h5" borderBottom>
                                    How to use ?
            </Header>
                                <p>You can import components from many ways.</p>
                            </Column>
                            <Column className="col col-md-9">
                                <div className="mb-3">
                                    <Code
                                        readOnly
                                        theme="oceanic-next"
                                        languageCode="jsx"
                                        code={importStyles}
                                        showheader={false}
                                        showfooter={false}
                                        lineNumbers={false}
                                    />
                                </div>
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
                                    Navbar.jsx
            </Header>
                                <p>Component used to create a navigation bar component</p>
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
                            </Column>
                        </Row>
                        <Row className="mt-5">
                            <Column className="col col-md-3">
                                <Header type="h5" borderBottom>
                                    Hero.jsx
            </Header>
                                <p>Component used to create a cool hero in view</p>
                            </Column>
                            <Column className="col col-md-9">
                                <Code
                                    readOnly
                                    theme="oceanic-next"
                                    languageCode="jsx"
                                    code={heroCode}
                                    showheader={false}
                                    showfooter={false}
                                    lineNumbers={false}
                                />
                            </Column>
                        </Row>
                    </Container>
                </Section>
                <Section subTitle="These are our members" title="Team">
                    <Container>
                        <Team
                            showBorder={false}
                            members={team}
                            socials={["facebook", "linkedin", "twitter"]}
                        />
                    </Container>
                </Section>
                <Section subTitle="These are our sponsors" title="Sponsors" gray>
                    <Container className="text-center">
                        <Sponsors gray sponsors={sponsors} />
                    </Container>
                </Section>
                <Section subTitle="Features are available" title="Features">
                    <Container>
                        <Features
                            features={features}
                            imageCircle={false}
                            showBorder={false}
                            showSubtitle={true}
                        />
                    </Container>
                </Section>
                <Footer>
                    <Row>
                        <Column className="col-sm-12 col-md">
                            <Copyright showAllRightText={false} text="Front10, Inc" />
                        </Column>
                        <Column className="col-sm-12 col-md mt-3 mt-md-0">
                            <Image
                                alt="Front 10 logo"
                                src="https://front10.com/img/logos/logo-main.png"
                                width={100}
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
