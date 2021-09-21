import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
export function AuthRegister() {
  const [formState, setFormState] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    terms: false
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Datos:", formState);
  };

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
              label="Teléfono"
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
              label="Acepto los términos y condiciones y políticas de tratamiento de datos GYMVAST"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
