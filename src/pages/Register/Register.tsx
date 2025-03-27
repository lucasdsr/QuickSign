import { Box } from "@mui/material";
import { FormsBox } from "../../components/FormsContainer/FormsContainer";
import { RegisterForm } from "./RegisterForm";

export const Register = () => (
  <div id="register-page">
    <FormsBox>
      <Box>
        <span style={{ fontSize: "36px", fontWeight: 600 }}>
          Create an account
        </span>{" "}
        <br />
        <div style={{ fontSize: "12px" }}>
          <span
            style={{
              color: "#FFFFFF80",
              display: "inline-block",
              margin: "24px 0px",
            }}
          >
            Already have an account?
          </span>
          <a href="/" style={{ color: "#FFFFFF90", marginLeft: "4px" }}>
            Log in
          </a>
        </div>
        <RegisterForm />
      </Box>
    </FormsBox>
  </div>
);
