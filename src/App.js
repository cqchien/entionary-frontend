import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./configs/theme";
import RegisterPage from "./pages/register";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RegisterPage />
    </ThemeProvider>
  );
}

export default App;
