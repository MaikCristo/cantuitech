import "../App.css"
import {Carousel} from "react-responsive-carousel";
import {Link} from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React, {useState} from 'react';

import CardSau from '../imagem/CardSau.jpg';
import CardEdu from '../imagem/CardEdu.jpg';
import CardSustem from '../imagem/CardSustem.jpg';
import CardSocial from '../imagem/CardSocial.png';


const Slide = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedSlide, setSelectedSlide] = useState(0);
    const missaoCards = [
        { label: 'Saúde', image: CardSau, link: '/saude' },
        { label: 'Educação', image: CardEdu, link: '/educacao' },
        { label: 'Sustentabilidade', image: CardSustem, link: '/sustentabilidade' },
        { label: 'Social', image: CardSocial, link: '/social' },
        // Adicione as outras missões
    ];

    return(

    <div className='contentCarossel'>
        <div className='ajustCarossel'>
            <div className="carroselImagens">
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    selectedItem={selectedSlide}
                    onChange={newSelected => setSelectedSlide(newSelected)}
                    dynamicHeight={false}
                    emulateTouch={false}
                    swipeable={false}
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={33.333}
                    style={{ width: '80%', margin: 'auto' }}
                    renderArrowPrev={() => <button className="custom-arrow1 prev" onClick={() => setSelectedSlide(selectedSlide - 1)}>Anterior</button>}
                    renderArrowNext={() => <button className="custom-arrow next" onClick={() => setSelectedSlide(selectedSlide + 1)}>Próximo</button>}
                >
                    {missaoCards.map((mission, index) => (
                        <Link key={index} to={mission.link}>
                            <div className="mission-card">
                                <div className="mission-image">
                                    <img src={mission.image} alt={mission.label} />
                                    <div className="mission-overlay">
                                        <p className="mission-label">{mission.label}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>
        </div>
    </div>
  );
}
export default Slide;