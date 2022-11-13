import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from './styles/GlobalStyle';
import Router from 'components/common/Router';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Router />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
