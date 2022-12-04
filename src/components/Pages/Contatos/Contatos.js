import Header from "../../Header/Header";
import Form from "../../Form/Form";
import "./contatos.css"

function Contatos(){
    return(
        <>
            <Header />
            <h1 className="titleContacts">Contatos</h1>
            <p className="textContacts">Estou em busca de novos desafios e<br></br>preparado para aprender cada vez mais,<br></br> fique à vontade para entrar em contato:</p>
            <Form wpp="75 99800-3884" git="felipemelo10" insta="felipemelo.dsg" email="felipemelodsg@gmail.com" />
        </>
    )
}
export default Contatos;