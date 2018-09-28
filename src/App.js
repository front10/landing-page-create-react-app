import React, { Component } from 'react';

import {
    Hero,
    Team,
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
    Features,
    Copyright,
    GithubButton,
    BuiltWith,
    Gif,
    Backers,
    Donation,
    Link
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
import features from "./data/features.json";
import particles from "./data/particles.json";
import build from "./data/build.json";
import backers from "./data/backers.json";
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
                            <Link
                                className="btn btn-primary btn-started"
                                href="https://front10.com/landing-page-book"
                                target="_blank"
                            >
                                Explore
          </Link>
                            <GithubButton
                                btnType="star"
                                btnText="Stars"
                                username="front10"
                                repository="landing-page-book"
                            />
                        </div>
                        <AnimatedHero />
                    </Container>
                </Hero>
                <Section gray>
                    <Container className="text-center">
                        <Image
                            className="gif-toolbar"
                            src="images/demo/top-bar.svg"
                            alt="Code tool bar"
                        />
                        <Gif autoplay image="images/demo/code.gif" />
                    </Container>
                </Section>
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
                    <Container className="text-center">
                        <Link
                            className="btn btn-primary btn-started"
                            href="https://front10.com/landing-page-book"
                            target="_blank"
                        >
                            Explore
        </Link>
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
                    <Container className="text-center mt-5">
                        <Link
                            className="btn btn-primary btn-started"
                            href="https://front10.com/landing-page-book"
                            target="_blank"
                        >
                            Explore
        </Link>
                    </Container>
                </Section>
                <Section subTitle="Very fast and easy to use" title="OUR CODE">
                    <Container>
                        <Row>
                            <Column className="col col-md-12">
                                <div className="text-center">
                                    <Header type="h5" borderBottom>
                                        How to use ?
                                </Header>
                                    <p>You can import our components of easy from.</p>
                                </div>
                                <Code
                                    readOnly
                                    theme="oceanic-next"
                                    languageCode="jsx"
                                    code={importThemes}
                                    showheader={false}
                                    showfooter={false}
                                    lineNumbers={true}
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column className="col col-md-6 mt-5 code-secondary">
                                <div className="text-center">
                                    <Header type="h5" borderBottom>
                                        App.js
                                </Header>
                                    <p>An example used to create a beautiful hero component</p>
                                </div>
                                <Code
                                    readOnly
                                    theme="oceanic-next"
                                    languageCode="jsx"
                                    code={navBarCode}
                                    showheader={false}
                                    showfooter={false}
                                    lineNumbers={true}
                                />
                            </Column>
                            <Column className="col col-md-6 mt-5">
                                <div className="text-center">
                                    <Header type="h5" borderBottom>
                                        Result
                                </Header>
                                    <p>It's that easy to have a beautiful Hero</p>
                                </div>
                                <div className="mt-3">
                                    <Hero
                                        backgroundColor="#212529"
                                        header="Front10"
                                        minHeight="350px"
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
                        <Row className="mt-5">
                            <Column className="col col-md-3">

                            </Column>
                            <Column className="col col-md-12 text-center">

                            </Column>
                        </Row>
                    </Container>
                    <Container className="text-center mt-4">
                        <Link
                            className="btn btn-primary btn-started"
                            href="https://front10.com/landing-page-book"
                            target="_blank"
                        >
                            Explore
        </Link>
                    </Container>
                </Section>
                <Section subTitle="Used tecnologies and frameworks" title="BUILD WITH" gray>
                    <Container className="text-center BuildWith">
                        <BuiltWith gray companies={build} />
                    </Container>
                </Section>
                <Section subTitle="These are our members" title="TEAM">
                    <Container>
                        <Team
                            showBorder={false}
                            members={team}
                            socials={["linkedin", "twitter"]}
                        />
                    </Container>
                    <Container className="text-center">
                        <Link
                            className="btn btn-primary btn-started"
                            href="https://front10.com/landing-page-book"
                            target="_blank"
                        >
                            Explore
        </Link>
                    </Container>
                </Section>
                <Section subTitle="Who donates us" title="BACKERS" gray>
                    <Container className="text-center">
                        <Backers backers={backers} />
                        <div className="mt-5">
                            <Donation url="https://front10.com" />
                        </div>
                    </Container>
                </Section>
                <Footer>
                    <Row>
                        <Column className="col-sm-12 col-md">
                            <Copyright showAllRightText={false} text="Front10, LLC" />
                        </Column>
                        <Column className="col-sm-12 col-md mt-3 mt-md-0">
                            <Link href="https://front10.com/" target="_blank">
                                <Image
                                    alt="Front 10 logo"
                                    src="https://front10.com/img/logos/logo-main.png"
                                    width="100"
                                />
                            </Link>
                        </Column>
                        <Column className="col-sm-12 col-md mt-3 mt-md-0">
                            <Social gray type="twitter" url="https://twitter.com/front10hello" />
                            <Social
                                gray
                                type="linkedin"
                                url="https://www.linkedin.com/company/front10/"
                            />
                        </Column>
                    </Row>
                </Footer>
            </div>
        );
    }
}

export default App;
