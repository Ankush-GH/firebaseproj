import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Form = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCred) => {
        console.log(userCred);
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Card
      style={{
        maxWidth: "430px",
        height: "50vh",
        margin: "4rem auto",
        padding: "1rem 1rem",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h4">
          Login
        </Typography>
        <form onSubmit={submitHandler}>
          <Grid container spacing={3} flexDirection="column">
            <Grid xs={12} sm={6} md={12} item>
              <TextField
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                aria-required
                label="Email"
                placeholder="Enter Your Email"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} md={12} item>
              <TextField
                type="password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                aria-required
                label="Password"
                placeholder="Enter Your Password"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid xs={12} sm={12} md={12} item>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        <div className="form-btns flex__center">
          <span className="pointer">Forgot Password</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Form;
