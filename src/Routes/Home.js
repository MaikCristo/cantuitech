import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div url={"./imagem/background.jpg"} className="img-fluid max-width:70%; height: 770px;">
            <div className="container">
                <div className="bodyAJust">
                    <div className="d-flex flex-column mb-3">
                        <div className="p-0 --bs-body-bg"> <h1 className="custom-font ">DESENVOLVENDO O FUTURO</h1> </div>
                        <div className="p-0"> <h3 className="custom-fontSub">conectando sonhos ao presente</h3> </div>
                        <div className="p-0"> <p className="custom-fontSub">Somos a ponto para uma gestão publica de alta perfomance,
                            otimizada e embasada em dados, que leva a qualidade de vida até os cidadãos</p>
                        </div>
                    </div>
                    <div className="ocupar"></div>
                </div>

            </div>
            <div className="container2">
                <div className='sobre'>
                    <div className="text">
                        <div className="d-flex flex-column mb-3">
                            <div className="p-0 mb-3"> <h1 className="custom-fontSub">Temos uma missão</h1> </div>
                            <div className="p-0 mb-3"> <h2>Promover o acesso a qualidade de vida, através da tecnologia
                                trazendo integração social, acesso a educação de qualidade,
                                otimização do sistema de saúde, atendimento mais rápido e humanizado,
                                facilitando o desenvolvimento econômico da região com sustentabilidade.</h2></div>
                            <div>
                                <p>Saiba mais</p>
                            </div>
                        </div>
                </div>
                    <div className="ocupar2">
                        </div>
                </div>

            </div>

            <div className="parallax-container "></div>


        </div>

    );
};

export default Home