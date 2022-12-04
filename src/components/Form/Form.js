import "./form.css";

function Form(props){
    return(
        <section className="botoesContatos">
            <div>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5575998003884"><button className="linksContatos" id="whats">WhatsApp</button></a><button className="copyButton" id="copyWpp">{props.wpp}</button>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/felipemelo.dsg/"><button className="linksContatos" id="insta">Instagram</button></a><button className="copyButton" id="copyInsta">{props.insta}</button>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://github.com/felipemelo10"><button className="linksContatos" id="git">GitHub</button></a><button className="copyButton" id="copyGit">{props.git}</button>
            </div>
            <div>
            <a target="_blank" rel="noreferrer" href="https://gmail.com"><button className="linksContatos" id="email">E-mail</button></a><button className="copyButton" id="copyEmail">{props.email}</button>
            </div>
        </section>
    )
}
export default Form;