import {Button} from "@mui/material";
import {Link} from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button variant="outlined" color="primary">
        <Link to="/auth/login">Login</Link>
      </Button>
    </div>
  )
}