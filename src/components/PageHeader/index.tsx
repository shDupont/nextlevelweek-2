import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'

interface PageHeaderProps {
    //Para não ser obrigatorio, acrescentar '?'
    text: string;
    
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        

        <header className="">
            <div className="row">
                <div className="col-6">
                    <Link to="/">
                        <img src={backIcon} alt="" className="img-fluid" />
                    </Link>
                </div>
                <div className="col-6 text-right">
                    <img src={logoImg} alt="" className="logo-size" />
                </div>
            </div>
            <div className="text-light m-auto py-5 m-5">
                <h2 className="font-weight-bold pb-5 size">{props.text}</h2>
            {props.children}
            </div>
        </header>
        
    );
}

export default PageHeader;