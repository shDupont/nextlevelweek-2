import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

function Landing() {
    return (
        <div className="container-fluid text-center py-5 bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 my-3 m-auto">
                        <img className="img-fluid" src={logoImg} alt="Proffy" />
                        <h3>Sua plataforma de estudos online.</h3>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={landingImg} alt="Proffy" className="hero-image img-fluid" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-lg-3 p-4">
                        <Link to="/study" className="study btn btn-secondary btn-lg">
                            <img className="img-fluid" src={studyIcon} alt="Proffy" />
                                    Estudar
                        </Link>
                    </div>
                    <div className="col-6 col-lg-3 p-4">
                        <Link to="/give-classes" className="give-classes btn btn-success btn-lg">
                            <img className="img-fluid" src={giveClassesIcon} alt="Estudar" />
                                    Ensinar
                        </Link>
                    </div>
                    <div className="col-lg-6 text-right m-auto">
                        Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;