import { Box } from "@mui/material";
import { FormsBox } from "../../components/FormsContainer/FormsContainer";

export const Register = () => (
  <div id="register-page">
    <FormsBox>
      <Box >
        <span style={{ fontSize: '36px', fontWeight: 600 }}>Create an account</span> <br/>
        <span style={{ display: 'inline-block', margin: '24px 0px' }}>Already have an account?</span>
        <a href='/'> Log in</a>
        <Box>
          formulário
        </Box>
      </Box>
    </FormsBox>
  </div>
);
