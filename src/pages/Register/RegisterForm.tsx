import { Box, Button, Checkbox, Divider } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "../../components/Inputs/TextField";
import { Grid } from "@mui/system";

interface IFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const { register } = useForm();

  const form = useForm<IFormFields>();

  const onFinish: SubmitHandler<IFormFields> = (values) =>
    console.log("values", values);

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
              {...register("email")}
            />
          </Grid>
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
        <Divider sx={{ marginBottom: "12px" }}>Or register with</Divider>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Button
              variant="outlined"
              sx={{ width: "100%", borderColor: "white", color: "white" }}
            >
              Google
            </Button>
          </Grid>
          <Grid size={6}>
            <Button
              variant="outlined"
              sx={{ width: "100%", borderColor: "white", color: "white" }}
            >
              Apple
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
