import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import { MDBInput, MDBCard } from 'mdbreact';
import { MDBBtn, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import logoWpp from '../../assets/images/icons/whatsapp.svg'
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <div className="">

        <div id="header" className="container-fluid bg-purple">
            <div className="container p-5  ">
                <PageHeader text="Esses são os proffys disponíveis.">
                    <form id="search-teachers" className="row">
                        <div className="col-lg-4">
                            <MDBInput label="Matéria" className="text-light" group />

                        </div>
                        <div className="col-lg-4">
                            <MDBInput label="Dia da Semana" group />

                        </div>
                        <div className="col-lg-4">
                            <MDBInput label="Hora" group />
                        </div>
                    </form>
                </PageHeader>
                
            </div>

        </div>
                <main>
                    <TeacherItem></TeacherItem>
                    <TeacherItem></TeacherItem>
                    <TeacherItem></TeacherItem>
                </main>
        </div>

    )
}

export default TeacherList;