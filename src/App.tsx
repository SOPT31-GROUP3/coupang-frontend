import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from './styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>App 화면</div>
    </ThemeProvider>
  );
}

export default App;
