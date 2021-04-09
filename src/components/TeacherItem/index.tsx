import React from 'react';

import './styles.css';

import logoWpp from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <div className="container  overflow-hidden bg-branco my-5  text-dark rounded ">
            <div className="p-5">
            <div className="container d-flex  ">
                <img className="rounded-circle img-fluid size-avatar " src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" />
                <div className="ml-4 my-auto">
                    <strong >Letícia Dupont</strong>
                    <p>Inglês</p>
                </div>
            </div>

            <div className="mt-5">
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum vitae esse magnam debitis repellendus repellat ad. Perferendis impedit officia recusandae tempore, ducimus maiores minus odit id iusto nostrum ipsum numquam amet voluptas harum. Delectus temporibus expedita, cumque quia modi necessitatibus eaque ad totam, excepturi molestiae porro corporis quaerat accusamus.</p>
            </div>
            </div>
            
            <footer className=" bg-footer p-5  row">
                <div className="col-6 m-auto text-left">
                    <p className="text-black-50">Preço/Hora <strong className="text-secondary">R$80,00</strong></p>
                </div>
                <div className="col-6 text-right">
                    <button type="button" className="btn rounded btn-success">
                        <img src={logoWpp} alt="" className="mr-2" />
                            Entrar em Contato
                    </button>
                </div>
            </footer>
            
        </div>
    )
}

export default TeacherItem;