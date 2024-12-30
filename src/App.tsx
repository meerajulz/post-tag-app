import theme from './styles/theme';
import InputMessage from './components/input-message/input-message.component';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="container mx-auto p-4">
        <header className="App-header">
          <h1>Medical Report Auto-Complete</h1>
        </header>
        <div className="container mx-auto p-4">
          <InputMessage />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
