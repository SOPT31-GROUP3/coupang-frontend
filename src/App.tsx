import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from './styles/GlobalStyle';
import Router from 'components/common/Router';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Nav from 'components/common/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Router />
      <Footer />
      <Nav />
    </ThemeProvider>
  );
}

export default App;
