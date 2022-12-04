import { Link } from "react-router-dom";
import "./header.css";

function Header(){
    return(
        <nav className="nav">
            <ul className="ulCabeçalho">
                <li className="liCabeçalho"><Link to="/" className="link">Sobre mim</Link></li>
                <li className="liCabeçalho"><Link to="/Currículo" className="link">Currículo</Link></li>
                <li className="liCabeçalho"><Link to="/Projetos" className="link">Projetos</Link></li>
                <li className="liCabeçalho"><Link to="/Contatos" className="link">Contatos</Link></li>
            </ul>
        </nav>
    )
}
export default Header;
