import './header.styles.css'
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem("logged")
        navigate('/login', {replace: true})
    }

  return (
    <header>
      <img src="./img/goscrum.png" alt="goscrum" />
      <div onClick={handleLogout}>x</div>
    </header>
  );
};
