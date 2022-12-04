import Header from "../../Header/Header";
import "./projetos.css"

function Projetos(){
    return(
        <>
            <Header />
            <h1 className="titleProjects">Meus projetos</h1>
            <p className="textProjects">Aqui estão alguns projetos simples desenvolvidos no curso de Front-End:</p>
            <div className="pageProjects">
                    <div className="leftProjects">
                        <div className="resultado">
                            <a href="https://github.com/felipemelo10/front-end-softex/tree/main/HTML-CSS/Social%20links" target="_blank" rel="noreferrer">
                                <img className="projetos" title="Árvore de links" src="https://github.com/felipemelo10/front-end-softex/blob/main/HTML-CSS/Social%20links/social-links.png?raw=true" alt="Árvore de links" width={400} height={270} ></img>
                            </a>
                            <div className="desc">
                                <b className="">Árvore de links</b>
                                <ul className="listFerramentas">
                                    <b><li className="ferramentas">HTML</li></b>
                                    <b><li className="ferramentas">CSS</li></b>
                                </ul>
                            </div>
                        </div>

                        <div className="resultado">
                            <a href="https://github.com/felipemelo10/front-end-softex/tree/main/HTML-CSS/Marco%20Zero" target="_blank" rel="noreferrer">
                                <img className="projetos" src="https://mail.google.com/mail/u/0?ui=2&ik=9ab4538f4a&attid=0.1&permmsgid=msg-a:r1293835653397384526&th=1849149067ab74d7&view=att&disp=safe&realattid=f_laoawvjj0" alt="Página informativa" width={400} height={270} ></img>
                            </a>
                            <div className="desc">
                                <b>Página informativa</b>
                                <ul className="listFerramentas">
                                    <b><li className="ferramentas">HTML</li></b>
                                    <b><li className="ferramentas">CSS</li></b>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rightProjects">
                        <div className="resultado">
                            <a href="https://github.com/felipemelo10/front-end-softex/tree/main/HTML-CSS/Tela%20de%20login" target="_blank" rel="noreferrer">
                                <img className="projetos" src="https://github.com/felipemelo10/front-end-softex/blob/main/HTML-CSS/Tela%20de%20login/login.png?raw=true" alt="Tela de login" width={400} height={270}></img>
                            </a>
                            <div className="desc">
                                <b>Tela de login</b>
                                <ul className="listFerramentas">
                                    <b><li className="ferramentas">HTML</li></b>
                                    <b><li className="ferramentas">CSS</li></b>
                                </ul>
                            </div>
                        </div>

                        <div className="resultado">
                            <a href="https://github.com/felipemelo10/front-end-softex/tree/main/HTML-CSS/Reajuste%20de%20sal%C3%A1rio" target="_blank" rel="noreferrer">
                                <img className="projetos" src="https://mail.google.com/mail/u/0?ui=2&ik=9ab4538f4a&attid=0.2&permmsgid=msg-a:r1293835653397384526&th=1849149067ab74d7&view=att&disp=safe&realattid=f_laoawvko1" alt="App para cálculo de reajuste de salário" width={400} height={270}></img>
                            </a>
                            <div className="desc">
                                <b>Reajuste de salário</b>
                                <ul className="listFerramentas">
                                    <b><li className="ferramentas">HTML</li></b>
                                    <b><li className="ferramentas">CSS</li></b>
                                    <b><li className="ferramentas">JS</li></b>
                                </ul>
                            </div>
                        </div>
                    </div>

            </div>
        </>
    )
}
export default Projetos;