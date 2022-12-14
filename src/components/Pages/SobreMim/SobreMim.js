import Header from "../../Header/Header";
import "./sobreMim.css";

function SobreMim(){
    return(
        <>
            <Header />
            <div className="paginaSobreMim">
                <img className="eu" src="https://github.com/felipemelo10/meu-site/blob/main/src/components/Pages/SobreMim/Images/foto.png?raw=true" alt="foto"/>
                <section className="SobreMim">
                    <h1 className="nome">Felipe Melo</h1>
                    <p className="subtitle"><b>Designer Gráfico Freelancer (Social Media e Marcas) e futuro Desenvolvedor Front-End</b></p>
                    <p className="textoSobreMim">Meu nome é Felipe, ou Luis, ou Melo, ou Felipe Melo, Luis Felipe Silva de Melo, sou de Euclides da Cunha, interior da Bahia, tenho 19 anos e resido em Petrolina (PE) há 1 ano, estou graduando Ciência da Computação na FACAPE e cursando Front-End pela Softex.</p>
                    <p className="textoSobreMim">Trabalho com Design há mais de 4 anos, sim, comecei bem cedo por volta dos 15 anos de idade, de lá pra cá me profissionalizei com cursos online e acumulei clientes em alguns estados Brasil à fora, meu foco é o design para social media, marcas e identidade visual.</p>
                    <p className="textoSobreMim">Porém, me apaixonei pela área de computação, desenvolvimento, programação e agora Front-End. São áreas que caminham juntas e certamente minha experiencia com Design me trará coisas positivas e dará um boost &#x1F680; na minha carreira como Desenvolvedor.</p>
                </section>
            </div>
        </>
    )
}
export default SobreMim;
