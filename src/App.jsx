import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <Container className="Container">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          variant="filled"
          label="Valor del crédito"
          type="number"
          color="success"
        />
        <TextField
          required
          variant="filled"
          label="Número de periodos"
          type="number"
          color="success"
        />
        <TextField
          required
          variant="filled"
          label="Tasa de interés"
          type="number"
          color="success"
        />
      </Box>
    </Container>
  );
}

export default App;
