import './App.css';
import Container from '@mui/material/Container';
import FormSignUp from './components/FormSignUp';
import { Typography } from '@mui/material';

function App() {
  return (
    <Container component="section" maxWidth="sm">
    <Typography variant="h3" align="center">Formulario  Resgistro</Typography>
      <FormSignUp />
    </Container>
  );
}

export default App;
