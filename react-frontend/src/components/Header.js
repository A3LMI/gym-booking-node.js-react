import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { CgGym } from 'react-icons/cg';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { BrowserRouter } from 'react-router-dom';

import { useState } from 'react';

export const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className='title-div'>
            <div className='header'>
                <div className='tel-ad'>
                    <div>+212 6 12 34 56 78</div>
                    <div>Ouvert : Lundi - Dimanche 8h - 22h</div>
                </div>

                <div className='logo'>
                    <CgGym size={50} />
                </div>

                <div className='socials'>
                    <BsFacebook />
                    <BsInstagram />
                    <SiGmail />
                </div>
            </div>

            <div className='nav'>
                <div className='nav-align'>
                    <div className='bar'>
                        <BrowserRouter>
                            <div><a href='#accueil'>Accueil</a></div>
                            <div><a href='#qui-sommes-nous'>Qui sommes-nous ?</a></div>
                            <div><a href='#nos-offres'>Nos Offres</a></div>
                            <div><a href='#reserver'>Réserver</a></div>
                            <div onClick={handleShow}>Se connecter</div>
                        </BrowserRouter>
                    </div>
                </div>
            </div>

            <div>
                
                <Modal className='modal' show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Se connecter</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <form>
                            <div className='field'>
                                <input type={"email"} className='email' placeholder='Email'></input>
                                <span></span>
                                <label className='email-label'>Email</label>
                            </div>

                            <div className='field'>
                                <input type="password" className='password' placeholder='Mot de passe'></input>
                                <span></span>
                                <label className='password-label'>Mot de passe</label>
                            </div>
                        </form>
                    </Modal.Body>
                    
                    <Modal.Footer> 
                        <Button variant="secondary" onClick={handleClose}>
                            Fermer
                        </Button>

                        <Button variant="primary" onClick={handleClose}>
                            Se Connecter
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </section>
    );
}
