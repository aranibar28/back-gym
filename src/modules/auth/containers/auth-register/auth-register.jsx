import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useHistory } from "react-router-dom";

export function AuthRegister() {
  const [formState, setFormState] = useState({
    name: "",
    lastname: "",
    phone: "",
    type: "",
    email: "",
    password: "",
    terms: false,
  });

  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Datos:", formState);
    console.log("History:", history);
    
    formState.type === "Cliente"
      ? history.push("/clientes")
      : history.push("/trainers");
  };

  useEffect(() => {
    // ACA LLAMARAN SERVICIOS
  }, []);

  return (
    <div className="auth-login">
      <form onSubmit={onSubmit}>
        <div className="w-full max-w-sm mx-auto mt-20">
          <h1 className="text-3xl text-center p-4 font-bold">REGISTRO</h1>

          <div className="mb-4">
            <TextField
              className="w-full"
              label="Nombre"
              variant="outlined"
              value={formState.name}
              onChange={(event) =>
                setFormState((state) => ({
                  ...state,
                  name: event.target.value,
                }))
              }
              required
            />
          </div>
          <div className="mb-4">
            <TextField
              className="w-full"
              label="Apellido"
              variant="outlined"
              value={formState.lastname}
              onChange={(event) =>
                setFormState((state) => ({
                  ...state,
                  lastname: event.target.value,
                }))
              }
              required
            />
          </div>
          <div className="mb-4">
            <TextField
              className="w-full"
              label="Tel??fono"
              variant="outlined"
              type="number"
              value={formState.phone}
              onChange={(event) =>
                setFormState((state) => ({
                  ...state,
                  phone: event.target.value,
                }))
              }
              required
            />
          </div>
          <div className="mb-4">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Tipo de usuario
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formState.type}
                label="Tipo de usuario"
                onChange={(event) =>
                  setFormState((state) => ({
                    ...state,
                    type: event.target.value,
                  }))
                }
                required
              >
                <MenuItem value={"Cliente"}>Cliente</MenuItem>
                <MenuItem value={"Trainer"}>Trainer</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mb-4">
            <TextField
              className="w-full"
              label="Correo"
              variant="outlined"
              type="email"
              value={formState.email}
              onChange={(event) =>
                setFormState((state) => ({
                  ...state,
                  email: event.target.value,
                }))
              }
              required
            />
          </div>
          <div className="mb-4">
            <TextField
              className="w-full"
              label="Password"
              variant="outlined"
              type="password"
              value={formState.password}
              onChange={(event) =>
                setFormState((state) => ({
                  ...state,
                  password: event.target.value,
                }))
              }
              required
            />
          </div>

          <div className="mb-8">
            <Button
              variant="contained"
              size="large"
              color="secondary"
              fullWidth={true}
              type="submit"
            >
              Registrar
            </Button>
          </div>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formState.terms}
                  required={true}
                  onChange={(event) =>
                    setFormState((state) => ({
                      ...state,
                      terms: event.target.checked,
                    }))
                  }
                />
              }
              label="Acepto los t??rminos y condiciones y pol??ticas de tratamiento de datos GYMVAST"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
