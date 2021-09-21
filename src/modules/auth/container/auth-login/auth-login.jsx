import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
export function AuthLogin() {
  const [formState, setFormState] = useState({
    user: "",
    password: "",
    remember: false,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Datos:", formState);
  };

  return (
    <div className="auth-login">
      <form onSubmit={onSubmit}>
        <div className="w-full max-w-sm mx-auto mt-40">
          <h1 className="text-3xl text-center mb-8 font-bold">LOGIN</h1>
          <div className="mb-8">
            <TextField
              className="w-full"
              label="Usuario"
              variant="outlined"
              value={formState.user}
              onChange={(event) =>
                setFormState((state) => ({
                  ...state,
                  user: event.target.value,
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
          <div className="flex justify-between items-center w-full mb-4">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formState.remember}
                  onChange={(event) =>
                    setFormState((state) => ({
                      ...state,
                      remember: event.target.checked,
                    }))
                  }
                />
              }
              label="Recordarme"
            />
            <Button color="primary" className="text-xs">
              Olvidaste tu contraseña
            </Button>
          </div>
          <div className="mb-8">
            <Button
              variant="contained"
              size="large"
              color="secondary"
              fullWidth={true}
              type="submit"
            >
              Ingresar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
