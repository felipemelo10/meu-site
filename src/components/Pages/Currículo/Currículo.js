import Header from "../../Header/Header";
import "./curriculo.css"

function Currículo(){
    return(
        <>
            <Header />
            <div className="pagina">
                <div className="esquerda">
                    <section className="sobre">
                        <h1 className="title"> <img className="icones" src="https://mail.google.com/mail/u/0?ui=2&ik=9ab4538f4a&attid=0.3&permmsgid=msg-a:r-8963048264191425372&th=18490f66935af13a&view=att&disp=safe&realattid=f_lao7otvt4" alt="Dados Pessoais"></img> Luis Felipe Silva de Melo</h1>
                        <ul>
                            <li>Idade: 19 anos</li>
                            <li>Email: felipemelodsg@gmail.com</li>
                            <li>Tel: 75 99800-3884</li>
                        </ul>
                    </section>
                
                    <section className="educacao">
                        <h1 className="title"> <img className="icones" src="https://mail.google.com/mail/u/0?ui=2&ik=9ab4538f4a&attid=0.4&permmsgid=msg-a:r-8963048264191425372&th=18490f66935af13a&view=att&disp=safe&realattid=f_lao7otv80" alt="Educação"></img> EDUCAÇÃO</h1>
                        <ul>
                            <li className="textoEducacao">
                                <p className="datas">02/2022 - 2026   FACAPE - Petrolina, PE</p>
                                <h3 className="conteudo">Graduação em Ciência da Computação</h3>
                            </li>
                            <li textoEducacao>
                                <p className="datas">2022 - 2023    Softex - Petrolina, PE</p>
                                <h3 className="conteudo">Desenvolvimento Front-End</h3>
                            </li>
                        </ul>
                    </section>
                    <section className="experiencia">
                        <h1 className="title"> <img className="icones" src="https://mail.google.com/mail/u/0?ui=2&ik=9ab4538f4a&attid=0.1&permmsgid=msg-a:r-6418403750563839688&th=18490f32c4907e74&view=att&disp=safe&realattid=f_lao7kayu0" alt="Experiência"></img> EXPERIÊNCIA</h1>
                        <ul>
                            <li>
                                <p className="datas">2018 - presente</p>
                                <h3 className="conteudo">Designer Gráfico Freelancer</h3>
                                <p className="info">Design para social media, marcas e identidade visual</p>
                            </li>
                        </ul>
                    </section>
                </div>
                <section className="hard">
                    <h1 className="title"> <img className="icones" src="https://mail.google.com/mail/u/0?ui=2&ik=9ab4538f4a&attid=0.5&permmsgid=msg-a:r-8963048264191425372&th=18490f66935af13a&view=att&disp=safe&realattid=f_lao7otvj2" alt="Hard Skills"></img> HARD SKILLS</h1>
                    <ul>
                        <li className="skills">Photoshop <div className="barras"><div className="barraPercent" id="psd"></div></div></li>
                        <li className="skills">Illustrator <div className="barras"><div className="barraPercent" id="ai"></div></div></li>
                        <li className="skills">HTML <div className="barras" ><div className="barraPercent" id="html"></div></div></li>
                        <li className="skills">CSS <div className="barras"><div className="barraPercent" id="css"></div></div></li>
                        <li className="skills">JavaScript <div className="barras"><div className="barraPercent" id="js"></div></div></li>
                        <li className="skills">React <div className="barras"><div className="barraPercent" id="react"></div></div></li>
                        <li className="skills">Python <div className="barras"><div className="barraPercent" id="py"></div></div></li>
                        <li className="skills">UX/UI <div className="barras"><div className="barraPercent" id="uxui"></div></div></li>
                        <li className="skills">Inglês <div className="barras"><div className="barraPercent" id="eng"></div></div></li>
                    </ul>
                </section>
                <section className="soft">
                    <h1 className="title"> <img className="icones" src="https://mail.google.com/mail/u/0?ui=2&ik=9ab4538f4a&attid=0.2&permmsgid=msg-a:r-8963048264191425372&th=18490f66935af13a&view=att&disp=safe&realattid=f_lao7otvp3" alt="Soft Skills"></img> SOFT SKILLS</h1>
                    <ul>
                        <li className="skills">Autoconfiança <div className="barras" ><div className="barraPercent" id="autoconfiança"></div></div></li>
                        <li className="skills">Trabalho em equipe <div className="barras" ><div className="barraPercent" id="equipe"></div></div></li>
                        <li className="skills">Pensamento criativo <div className="barras" ><div className="barraPercent" id="criativo"></div></div></li>
                        <li className="skills">Comprometimento <div className="barras" ><div className="barraPercent" id="comprometimento"></div></div></li>
                        <li className="skills">Proatividade <div className="barras" ><div className="barraPercent" id="proatividade"></div></div></li>
                        <li className="skills">Autonomia <div className="barras" ><div className="barraPercent" id="autonomia"></div></div></li>
                        <li className="skills">Pensamento de dono <div className="barras" ><div className="barraPercent" id="dono"></div></div></li>
                        <li className="skills">Aprendizado contínuo <div className="barras" ><div className="barraPercent" id="aprendizadoCont"></div></div></li>
                        <li className="skills">Velocidade de aprendizado <div className="barras" ><div className="barraPercent" id="aprendizadoVeloc"></div></div></li>
                    </ul>
                </section>
            </div>
        </>
    )
}
export default Currículo;
