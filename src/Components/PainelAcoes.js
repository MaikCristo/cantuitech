import "../App.css"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


import CardSau from '../imagem/CardSau.jpg';
import CardEdu from '../imagem/CardEdu.jpg';
import CardSustem from '../imagem/CardSustem.jpg';
import CardSocial from '../imagem/CardSocial.png';
import CardEcon from '../imagem/CardEcon.png';
import CardCampo from '../imagem/CardCampo.jpg';
import CardProfiss from '../imagem/CardProfiss.jpg';

const PainelAcoes = () => {


    return(
        <div className='ajustPainelA'>
            <Carousel>
                <Carousel.Item className='ajustPainel' interval={2000}>
                    <Link to='/saude'>
                        <img src={CardSau} className='ajustPainel' text="Saúde" />
                    </Link>
                    <Carousel.Caption>
                        <h3 className='paineloverlay'>Saúde</h3>
                        <p className='ploverlay'>Trabalhamos para uma saúde de qualidade chegar até o cidadão</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='ajustPainel' interval={500}>
                    <Link to='/educacao'>
                        <img src={CardEdu} className='ajustPainel' text="Educação" />
                    </Link>
                    <Carousel.Caption>
                        <h3 className='paineloverlay'>Educação</h3>
                        <p className='ploverlay'>O futuro carregado de grandeza</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='ajustPainel'>
                    <Link to='/sustemtabilidade'>
                        <img src={CardSustem} className='ajustPainel' text="Sustemtabilidade" />
                    </Link>
                    <Carousel.Caption>
                        <h3 className='paineloverlay'>Sustemtabilidade</h3>
                        <p className='ploverlay'> Garantindo os sonhos das próximas gerações</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='ajustPainel'>
                    <Link to='/social'>
                        <img src={CardSocial} className='ajustPainel' text="Social" />
                    </Link>
                    <Carousel.Caption>
                        <h3 className='paineloverlay'>Social</h3>
                        <p className='ploverlay'>Levando sorrisos a todos, providenciando qualidade de vida</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='ajustPainel'>
                    <Link to='/economia'>
                        <img src={CardEcon} className='ajustPainel' text="Economia" />
                    </Link>
                    <Carousel.Caption>
                        <h3 className='paineloverlay'>Economia</h3>
                        <p className='ploverlay'>Abrindo portas para o crescimento</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='ajustPainel'>
                    <Link to='/doCampoAMesa'>
                        <img src={CardCampo} className='ajustPainel' text="Do Campo a Mesa" />
                    </Link>
                    <Carousel.Caption>
                        <h3 className='paineloverlay'>Do Campo à Mesa</h3>
                        <p className='ploverlay'>Saudável e acessível à mesa do cidadão</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='ajustPainel'>
                    <Link to='/profissionalizante'>
                        <img src={CardProfiss} className='ajustPainel' text="Profissionalizante" />
                    </Link>
                    <Carousel.Caption>
                        <h3 className='paineloverlay'>Profissionalizante</h3>
                        <p className='ploverlay'>Oportunidade para todos</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default PainelAcoes;