import React, { Component } from 'react';
import './App.css';

import {
    Hero, Navbar, Team, Sponsors, Footer, Social, Image,
    Button, Header, Container, Section, Video, Column, ContactInfo,
    Row, ContactUs, Features
} from '@front10/landing-page-book/dist/components';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@front10/landing-page-book/dist/components/Hero/style.css';
import '@front10/landing-page-book/dist/components/Social/style.css';
import '@front10/landing-page-book/dist/components/ImageList/style.css';
import '@front10/landing-page-book/dist/components/Section/style.css';
import '@front10/landing-page-book/dist/components/Footer/style.css';
import '@front10/landing-page-book/dist/components/Video/style.css';
import '@front10/landing-page-book/dist/components/Row/style.css';
import '@front10/landing-page-book/dist/components/Column/style.css';
import '@front10/landing-page-book/dist/components/ContactInfo/style.css';
import '@front10/landing-page-book/dist/components/Code/style.css';
import '@front10/landing-page-book/dist/components/Navbar/style.css';
import '@front10/landing-page-book/dist/components/ContactUs/style.css';
import '@front10/landing-page-book/dist/components/Features/style.css';

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
                            title: 'Services'
                        },
                        {
                            title: 'Contact'
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
                        <Header className="display-3 text-white">
                            Easily build your applications with the shortest possible time
                    </Header>
                        <div className="mb-5 mt-5">
                            <Button
                                className="btn btn-primary btn-lg pl-5 pr-5 pt-2 pb-2"
                                href="https://front10.com/"
                            >
                                Go now
                    </Button>
                        </div>
                        <Social
                            type="facebook"
                            url="https://landing-page-book.front10.com/"
                        />
                        <Social
                            type="twitter"
                            url="https://landing-page-book.front10.com/"
                        />
                        <Social
                            type="linkedin"
                            url="https://landing-page-book.front10.com/"
                        />
                    </Container>
                </Hero>
                <Image
                    className="clouds-background"
                    alt="This is an image example"
                    src="/clouds.png"
                    width={640}
                />
                <div className="container">
                    <Section
                        subTitle="We show you what we do ..."
                        title="Welcome"
                    >
                        <Video source="https://youtu.be/dCrLwWdju68" />
                    </Section>
                    <Section
                        subTitle="These are our members"
                        title="About us"
                    >
                        <Team
                            showBorder={true}
                            members={[
                                {
                                    image: 'https://randomuser.me/api/portraits/men/11.jpg',
                                    job: 'Architect',
                                    name: 'Sander',
                                    profile: 'https://front10.com',
                                    summary: 'Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.'
                                },
                                {
                                    image: 'https://randomuser.me/api/portraits/women/2.jpg',
                                    job: 'QA',
                                    name: 'Rachel',
                                    profile: 'https://front10.com',
                                    summary: 'Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.'
                                },
                                {
                                    image: 'https://randomuser.me/api/portraits/women/3.jpg',
                                    job: 'QA',
                                    name: 'Rachel',
                                    profile: 'https://front10.com',
                                    summary: 'Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.'
                                },
                                {
                                    image: 'https://randomuser.me/api/portraits/women/8.jpg',
                                    job: 'QA',
                                    name: 'Rachel',
                                    profile: 'https://front10.com',
                                    summary: 'Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.'
                                }
                            ]}
                            socials={[
                                'facebook',
                                'linkedin',
                                'google',
                                'twitter'
                            ]}
                        />
                    </Section>


                    <Section
                        subTitle="These are our sponsors"
                        title="Sponsors"
                    >
                        <Sponsors
                            gray
                            sponsors={[
                                {
                                    image: 'https://brandongaille.com/wp-content/uploads/2013/07/Acer-Company-Logo.jpg'
                                },
                                {
                                    image: 'https://brandongaille.com/wp-content/uploads/2013/07/Microsoft-Company-Logo1.jpg'
                                },
                                {
                                    image: 'https://brandongaille.com/wp-content/uploads/2013/07/ASUS-Company-Logo.jpg'
                                },
                                {
                                    image: 'https://brandongaille.com/wp-content/uploads/2013/07/Compaq-Company-Logo.jpg'
                                },
                                {
                                    image: 'https://brandongaille.com/wp-content/uploads/2013/07/HP-Company-Logos.jpg'
                                }
                            ]}
                        />
                    </Section>

                    <Section
                        subTitle="This is where we live"
                        title="Where we live"
                    >
                        <Row>
                            <Column className="col col-md-5">
                                <ContactInfo
                                    address="9728 Birchwood St. Navarre, FL 32566"
                                    email="contact@front10.com"
                                    fax="208-658744"
                                    lat={26.5}
                                    lng={-80.2}
                                    locationApiKey="AIzaSyAP5ycGdpjGBUU-u6vZ8fwx_ybbyzgYXfM"
                                    mobile="+001 3521 4587"
                                    phone="+001 3521 4587"
                                    website="www.front10.com"
                                />
                            </Column>
                        </Row>
                    </Section>
                    <Section
                        subTitle="This is where we live"
                        title="Where we live"
                    >
                        <Features
                            features={[
                                {
                                    image: 'images/features/dashboard.png',
                                    link: 'https://front10.com',
                                    linktext: 'See more...',
                                    subtitle: 'Dashboard for Admin',
                                    summary: 'Example of feature text, this component will allow to you to show all your features.',
                                    title: 'Dashboard'
                                },
                                {
                                    image: 'images/features/react.png',
                                    link: 'https://front10.com',
                                    linktext: 'See more...',
                                    subtitle: 'Build with ReactJS',
                                    summary: 'Example of feature text, this component will allow to you to show all your features.',
                                    title: 'ReactJS'
                                },
                                {
                                    image: 'images/features/angular.png',
                                    link: 'https://front10.com',
                                    linktext: 'See more...',
                                    subtitle: 'Powered by Angular 5',
                                    summary: 'Example of feature text, this component will allow to you to show all your features.',
                                    title: 'AngularJS'
                                }
                            ]}
                            imageCircle={false}
                            showBorder={false}
                            showSubtitle={true}
                        />
                    </Section>


                    <Section
                        subTitle="Fill out the form to send us your comments"
                        title="Contact us through the form"
                    >
                        <ContactUs
                            apiUrl="https://maker.ifttt.com/trigger/front10_contactform/with/key/dFOibtTrDh8pCZ9laeYno"
                            mail="john.email@domain.com"
                            mailText="Your email"
                            message="This is my message"
                            name="John"
                            onApiFail={function noRefCheck() { }}
                            onApiSuccess={function noRefCheck() { }}
                            onSubmit={function noRefCheck() { }}
                            phone="2 578 1545"
                            showText={true}
                        />
                    </Section>
                </div>
                {/* END BODY */}

                <Footer
                    copyright="Front10, Inc"
                    sections={[
                        {
                            name: 'Features',
                            sections: [
                                {
                                    name: 'Cool stuff',
                                    url: 'https://front10.com'
                                },
                                {
                                    name: 'Random feature',
                                    url: 'https://front10.com'
                                },
                                {
                                    name: 'Team feature',
                                    url: 'https://front10.com'
                                },
                                {
                                    name: 'Stuff for developers',
                                    url: 'https://front10.com'
                                },
                                {
                                    name: 'Another one',
                                    url: 'https://front10.com'
                                },
                                {
                                    name: 'Last time',
                                    url: 'https://front10.com'
                                }
                            ]
                        },
                        {
                            name: 'Resources',
                            sections: [
                                {
                                    name: 'Resource',
                                    url: 'https://front10.com'
                                },
                                {
                                    name: 'Resource name',
                                    url: 'https://front10.com'
                                },
                                {
                                    name: 'Another resource',
                                    url: 'https://front10.com'
                                },
                                {
                                    name: 'Final resource',
                                    url: 'https://front10.com'
                                }
                            ]
                        },
                        {
                            name: 'About',
                            sections: [
                                {
                                    name: 'Team',
                                    url: 'https://front10.com'
                                },
                                {
                                    name: 'Locations',
                                    url: 'https://front10.com'
                                },
                                {
                                    name: 'Privacy',
                                    url: 'https://front10.com'
                                },
                                {
                                    name: 'Terms',
                                    url: 'https://front10.com'
                                }
                            ]
                        }
                    ]}
                    socialUrl="https://front10.com"
                    socials={[
                        'facebook',
                        'linkedin',
                        'google',
                        'twitter'
                    ]}
                />
            </div >
        );
    }
}

export default App;
