const navBarCode = `
class App extends Component {
    render() {
        return (
            <Hero
                backgroundColor="#212529"
                header="Front10"
                minHeight="400px"
                subHeader="Rewriting the world with React"
                image="images/hero/map-image.png"
              />
        );
    }
  }
  `;

const importThemes = `
import "@front10/landing-page-book/dist/themes/default/style.css";
import { Navbar } from "@front10/landing-page-book/dist/components";
`;

export { navBarCode, importThemes };
