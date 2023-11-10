import { CardSobre, ContentContainer, LogoImg, TextSobre, Title } from "./SobreNosStyle";

const SobreNos = () => {
    return (
        <ContentContainer>
            <CardSobre>
                <LogoImg src="./EcoMundoLogo.png" />
                <Title>
                    <h1>Eco<span className="titleColor">Mundo</span> </h1>
                </Title>
                <TextSobre><span className="textChange">Bem-vindo</span> ao <span className="title">Eco<span className="titleCor">Mundo</span></span>, seu destino para explorar e entender o fascinante mundo da sustentabilidade e preservação ambiental!<br /><br />
                    Somos apaixonados por conectar pessoas à natureza e promover ações para um futuro mais sustentável. Em nosso site, você encontrará informações detalhadas sobre diversos ecossistemas, dicas práticas para um estilo de vida eco-friendly e as últimas inovações tecnológicas voltadas para a preservação ambiental!<br /><br />
                    Nossos artigos, blogs e recursos visam inspirar e educar, destacando a importância da biodiversidade e incentivando práticas conscientes. Acreditamos que a tecnologia pode ser uma aliada poderosa na construção de um planeta mais verde, e estamos comprometidos em apresentar soluções sustentáveis para desafios globais. Junte-se à comunidade EcoMundo e embarque conosco nesta jornada rumo a um futuro mais saudável e equilibrado para todos. Vamos explorar, aprender e agir, pois acreditamos que cada pequena ação faz a diferença na construção de um EcoMundo melhor para as gerações futuras. Seja bem-vindo ao nosso universo sustentável!</TextSobre>
            </CardSobre>
        </ContentContainer>


    )
}

export default SobreNos;
