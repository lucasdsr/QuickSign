import { Box, Button, Checkbox, Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import * as S from "../../components/Inputs/TextField";
import { Grid } from "@mui/system";

export const RegisterForm = () => {
  const { register } = useForm();

  return (
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
      <Grid sx={{ fontSize: "12px", color: "white" }}>
        <Checkbox />I agree to the terms and conditions
      </Grid>
      <Button variant="contained" sx={{ width: "100%", color: "white" }}>
        Create account
      </Button>
      <Divider>Or register with</Divider>
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
  );
};
