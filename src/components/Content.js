import React from 'react';
import { createGlobalStyle } from 'styled-components';
import MovieOne from '../imgs/01.jpg';
import MovieTwo from '../imgs/02.jpg';
import MovieThree from '../imgs/03.jpg';
import ScreenOne from '../imgs/s1.jpg';
import ScreenTwo from '../imgs/s2.jpg';
import ScreenThree from '../imgs/s3.jpg';

const Style = createGlobalStyle`
    .wrapper {
        margin: 0 auto 100px auto;
        max-width: 960px;
    }
    .stage {
        list-style: none;
        padding: 0;
    }
    .scene {
        width: 260px;
        height: 400px;
        margin: 30px;
        float: left;
        -webkit-perspective: 1000px;
        -moz-perspective: 1000px;
        perspective: 1000px;
    }
    .movie {
        width: 260px;
        height: 400px;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: translateZ(-130px);
        -moz-transform: translateZ(-130px);
        transform: translateZ(-130px);
        -webkit-transition: -webkit-transform 350ms;
        -moz-transition: -moz-transform 350ms;
        transition: transform 350ms;
    }
    .movie:hover {
        -webkit-transform: rotateY(-78deg) translateZ(20px);
        -moz-transform: rotateY(-78deg) translateZ(20px);
        transform: rotateY(-78deg) translateZ(20px);
    }
    .movie .poster, 
    .movie .info {
        position: absolute;
        width: 260px;
        height: 400px;
        background-color: #fff;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .movie .poster  {
        -webkit-transform: translateZ(130px);
        -moz-transform: translateZ(130px);
        transform: translateZ(130px);
        background-size: cover;
        background-repeat: no-repeat;
    }
    .movie .info {
        -webkit-transform: rotateY(90deg) translateZ(130px);
        -moz-transform: rotateY(90deg) translateZ(130px);
        transform: rotateY(90deg) translateZ(130px);
        font-size: 0.75em;
        padding: 5px;
        border-radius: 5px;
    }
    .csstransforms3d .movie::after {
        content: '';
        width: 260px;
        height: 260px;
        position: absolute;
        bottom: 0;
        box-shadow: 0 30px 50px rgba(0,0,0,0.3);
        -webkit-transform-origin: 100% 100%;
        -moz-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        -webkit-transform: rotateX(90deg) translateY(130px);
        -moz-transform: rotateX(90deg) translateY(130px);
        transform: rotateX(90deg) translateY(130px);
        -webkit-transition: box-shadow 350ms;
        -moz-transition: box-shadow 350ms;
        transition: box-shadow 350ms;
    }
    .csstransforms3d .movie:hover::after {
        box-shadow: 20px -5px 50px rgba(0,0,0,0.3);
    }
    .info header {
        color: #FFF;
        padding: 7px 10px;
        font-weight: bold;
        height: 195px;
        background-size: contain;
        background-repeat: no-repeat;
        text-shadow: 0px 1px 1px rgba(0,0,0,1);
    }
    .info header h1 {
        margin: 0 0 2px;
        font-size: 1.4em;
    }
    .info header .rating {
        border: 1px solid #FFF;
        padding: 0px 3px;
    }
    .info p {
        padding: 1.2em 1.4em;
        margin: 2px 0 0;
        font-weight: 700;
        color: #666;
        line-height: 1.4em;
        
    }
    .movie .poster,
    .movie .info,
    .movie .info header {
        -webkit-transition: box-shadow 350ms;
        -moz-transition: box-shadow 350ms;
        transition: box-shadow 350ms;
    }
    .csstransforms3d .movie .poster {
        box-shadow: inset 0px 0px 40px rgba(255,255,255,0);
    }
    .csstransforms3d .movie:hover .poster {
        box-shadow: inset 300px 0px 40px rgba(255,255,255,0.8);
    }
    .csstransforms3d .movie .info, 
    .csstransforms3d .movie .info header {
        box-shadow: inset -300px 0px 40px rgba(0,0,0,0.5);
    }
    .csstransforms3d .movie:hover .info, 
    .csstransforms3d .movie:hover .info header {
        box-shadow: inset 0px 0px 40px rgba(0,0,0,0);
    }
    .scene:nth-child(1) .movie .poster {
        background-image: url(${MovieOne});
        border-radius: 5px;
        box-shadow: 0 1px 4px rgb(0 0 0 / 16%);
        
    }
    .scene:nth-child(2) .poster {
        background-image: url(${MovieTwo});
        border-radius: 5px;
        box-shadow: 0 1px 4px rgb(0 0 0 / 16%);
    }
    .scene:nth-child(3) .poster {
        background-image: url(${MovieThree});
        box-shadow: 0 1px 4px rgb(0 0 0 / 16%);
    }
    .scene:nth-child(1) .info header {
        background-image: url(${ScreenOne});
    }
    .scene:nth-child(2) .info header {
        background-image: url(${ScreenTwo});
    }
    .scene:nth-child(3) .info header {
        background-image: url(${ScreenThree});
    }
    .no-csstransforms3d .movie .poster, 
    .no-csstransforms3d .movie .info {
        position: relative;
    }
    @media screen and (max-width: 60.75em){
        .scene {
            float: none;
            margin: 30px auto 60px;
        }
    }
`;

function content() {
    return (
        <React.Fragment>
            <Style />
            <div className="container">
                <div className="wrapper">
                    <ul className="stage clearfix">
                        <li className="scene">
                            <div className="movie">
                                <div className="poster"></div>
                                <div className="info">
                                    <header>
                                        <h1>Cowboys & Aliens</h1>
                                        <span className="year">2011</span>
                                        <span className="rating">PG</span>
                                        <span className="duration">129 minutos</span>
                                    </header>
                                    <p>
                                        Quando o caubói Jake Lonergan acorda sem memória em uma cidade chamada Absolution, ele rapidamente descobre que estranhos não são bem-vindos e que ninguém faz nada sem a aprovação do tirânico Coronel Dolarhyde. Mas quando Absolution enfrenta uma ameaça alienígena, o caubói torna-se sua única esperança de salvação.
								    </p>
                                </div>
                            </div>
                        </li>
                        <li className="scene">
                            <div className="movie">
                                <div className="poster"></div>
                                <div className="info">
                                    <header>
                                        <h1>Blitz</h1>
                                        <span className="year">2011</span>
                                        <span className="rating">PG</span>
                                        <span className="duration">82 minutos</span>
                                    </header>
                                    <p>
                                        Um sargento da polícia enfrenta uma fase de muitos problemas profissionais, mas é pressionado a capturar um assassino em série que está matando policiais pelas ruas de Londres.
								    </p>
                                </div>
                            </div>
                        </li>
                        <li className="scene">
                            <div className="movie">
                                <div className="poster"></div>
                                <div className="info">
                                    <header>
                                        <h1>The Foreigner</h1>
                                        <span className="year">2017</span>
                                        <span className="rating">PG</span>
                                        <span className="duration">94 minutos</span>
                                    </header>
                                    <p>
                                        Um empresário tenta se vingar dos terroristas que mataram sua filha. A investigação logo o leva a um jogo de gato e rato com um oficial britânico cujo passado pode esconder a identidade dos assassinos.
								    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}

export default content;