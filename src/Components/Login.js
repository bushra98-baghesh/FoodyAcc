import {
  Container,
  Button,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Img from "../assests/LogoImg.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://api.foody.gomaplus.tech/api/login", {
        email: values.email,
        password: values.pass,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (res.status === 200) {
          navigate("/dashboard");
        }

        console.log(res.status);
      })
      .catch((err) => console.error(err));
  };
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="lg:w-full w-10/12 mx-auto">
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
          >
            <h1 className="mb-20 font-bold text-lg md:text-xl">
              Welcome To F<span className="text-[#DC0D28] ">OO</span>DY Cachier
            </h1>
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <TextField
                    type="email"
                    fullWidth
                    label="Enter your email"
                    placeholder="Email Address"
                    variant="outlined"
                    required
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                </Grid>

                <Grid item>
                  <TextField
                    type={values.showPass ? "text" : "password"}
                    fullWidth
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    required
                    onChange={(e) =>
                      setValues({ ...values, pass: e.target.value })
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handlePassVisibilty}
                            aria-label="toggle password"
                            edge="end"
                          >
                            {values.showPass ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: "#DC0D28",
                      fontWeight: "bold",
                      width: "50%",
                      padding: "8px",
                    }}
                  >
                    Log in
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Container>
      </div>
      <div className=" hidden lg:flex items-center justify-center relative">
        <img
          src={Img}
          alt=""
          className="max-h-screen w-full object-cover  object-center"
        />
        <div className="text-4xl font-bold tracking-tight absolute ">
          <span>F</span>
          <span className="text-[#DC0D28]">OO</span>
          <span>D</span>
          <span>Y</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
