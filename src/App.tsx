import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from './styles/GlobalStyle';
import Router from 'components/common/Router';
import Header from 'components/common/Header';
import Nav from 'components/common/Nav';
import Footer from 'components/common/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Router />
      <Nav />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
