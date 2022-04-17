import "./App.css";
import NavBar from "./components/NavBar";
// import PandH from "./tut/PandH";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeroSection from "./components/HeroSection";
import { Container } from "@mui/material";
import CakeSection from "./components/CakeSection";
import ContactUs from "./components/ContactUs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b27a2f",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container>
        <HeroSection />
        <CakeSection />
        <ContactUs />
      </Container>
    </ThemeProvider>
  );
}

export default App;
