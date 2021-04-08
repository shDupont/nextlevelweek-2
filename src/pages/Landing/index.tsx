import React from 'react';

import './styles.css'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

function Landing(){
    return (
        <div className="container-fluid text-center py-5 bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-sx-6 col-lg-6 col text-left m-auto">
                        <img className="img-fluid" src={logoImg} alt="Proffy"/>
                        <h2>Sua plataforma de estudos online.</h2>
                    </div>
                    <div className="col-sx-6 col-lg-6">
                        <img src={landingImg} alt="Proffy" className="hero-image img-fluid"/>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-sx-6 col-lg-6">
                        <a href="" className="study btn btn-secondary btn-lg">
                            <img className="img-fluid" src={studyIcon} alt="Proffy"/>
                            Estudar
                        </a>
                        <a href="" className="give-classes btn btn-success btn-lg">
                            <img className="img-fluid" src={giveClassesIcon} alt="Estudar"/>
                            Dar aula
                        </a>    
                    </div>
                    

                    <div className="col-sx-6 col-lg-6 my-4 text-right "> 
                        Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt=""/>
                    </div>
                    
                </div>
            </div>

            
        </div>
    )
}

export default Landing;