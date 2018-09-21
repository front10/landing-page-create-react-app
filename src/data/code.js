const navBarCode = `<Navbar expand="md">
    <Container>
        <NavbarCollapse>
            <NavbarBrand>
                <Image
                    alt="Webpack logo"
                    src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"
                    width="120"
                />
            </NavbarBrand>
            <NavbarNav alignItems="right">
                <NavbarLink>
                    Documentation
                </NavbarLink>
                <NavbarLink>
                    Contribute
                </NavbarLink>
                <NavbarLink>
                    Vote
                </NavbarLink>
                <NavbarLink>
                    Blog
                </NavbarLink>
                <NavbarLink>
                    <Icon icon="fa fa-search" />
                </NavbarLink>
                <NavbarLink>
                    <Icon icon="fa fa-github" />
                </NavbarLink>
                <NavbarLink>
                    <Icon icon="fa fa-stack-overflow" />
                </NavbarLink>
                <LanguageSwitcher showArrow={false} />
            </NavbarNav>
        </NavbarCollapse>
    </Container>
</Navbar>`;

const heroCode = `<Hero>
    <Container>
        <Image className="w-75"
            src="https://front10.com/logo.png"/>
        <div>
            <Button className="btn-success btn-lg">
                Go now
            </Button>
        </div>
        <div className="btn-group mt-4">
            <Button className="btn-secondary">
                <Icon icon="fa fa-facebook"/>
            </Button>
            <Button className="btn-secondary">
                <Icon icon="fa fa-instagram"/>
            </Button>
            <Button className="btn-secondary">
                <Icon icon="fa fa-google-plus"/>
            </Button>
        </div>
    </Container>
</Hero>;`;

const importStyles = `//core
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
//component style
import "@front10/landing-page-book/dist/components/Hero/style.css";
import "@front10/landing-page-book/dist/components/Navbar/style.css";
//component
import Hero from "@front10/landing-page-book/dist/components/Hero";
import Navbar from "@front10/landing-page-book/dist/components/Navbar";`;

const importThemes = `//core
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
//component style
import "@front10/landing-page-book/dist/themes/default/style.css";
//component
import { Hero, Navbar } from "@front10/landing-page-book/dist/components";`;

export { navBarCode, heroCode, importThemes, importStyles };
