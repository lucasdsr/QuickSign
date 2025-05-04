import { useMemo } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Grid, useTheme } from "@mui/system";
import { Box, Button, Checkbox, Divider } from "@mui/material";

import * as S from "../../components/Inputs/TextField";

import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { isValidEmail } from "../../utils/validators";

interface IFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const { register } = useForm();

  const theme = useTheme();

  const form = useForm<IFormFields>({ reValidateMode: "onChange" });

  const errors = useMemo(() => form.formState.errors, [form]);
  console.log("errors", errors);

  const onFinish: SubmitHandler<IFormFields> = (values) =>
    console.log("values", values);

  const validateEmail = (value: string) => {
    console.log("validateEmail");
    console.log("validateEmail", validateEmail(value));
    if (!isValidEmail(value)) return "email inválido";
    return true;
  };

  return (
    <form onSubmit={form.handleSubmit(onFinish)}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <S.TextField
              id="outlined-basic"
              label="first name"
              variant="outlined"
              {...register("firstName")}
            />
          </Grid>
          <Grid size={6}>
            <S.TextField
              id="outlined-basic"
              label="last name"
              variant="outlined"
              {...register("lastName")}
            />
          </Grid>
          <Grid size={12}>
            <S.TextField
              sx={{ width: "100%" }}
              label="email"
              variant="outlined"
              id="outlined-basic"
              {...register("email", { validate: validateEmail })}
            />
          </Grid>
          {errors.email?.message && (
            <p style={{ color: theme.palette.error }}>
              {errors.email?.message}
            </p>
          )}
          <Grid size={12}>
            <S.TextField
              sx={{ width: "100%" }}
              label="password"
              variant="outlined"
              id="outlined-basic"
              {...register("password")}
            />
          </Grid>
        </Grid>
        <Checkbox
          sx={{ fontSize: "12px", color: "white", margin: "12px 0px" }}
        />
        I agree to the terms and conditions
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "100%", color: "white", marginBottom: "24px" }}
        >
          Create account
        </Button>
        <Divider sx={{ marginBottom: "24px" }}>Or register with</Divider>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Button
              variant="outlined"
              sx={{ width: "100%", borderColor: "white", color: "white" }}
            >
              <GoogleIcon sx={{ marginRight: "4px" }} />
            </Button>
          </Grid>
          <Grid size={6}>
            <Button
              variant="outlined"
              sx={{ width: "100%", borderColor: "white", color: "white" }}
            >
              <AppleIcon />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
