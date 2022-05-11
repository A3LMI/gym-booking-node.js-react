import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Accueil } from './components/Accueil';
import { QuiSommesNous } from './components/QuiSommesNous';
import { NosOffres } from './components/NosOffres';
import { Reserver } from './components/Reserver';
import { Footer } from './components/Footer';
import { Admin } from './components/Admin';

import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { CgGym } from 'react-icons/cg';

import { BrowserRouter } from 'react-router-dom';

import { useState } from 'react';

import { Router, Routes, Route, Link } from 'react-router-dom';

function App () {

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
                            <div><a href='#accueil'>Accueil</a></div>
                            <div><a href='#qui-sommes-nous'>Qui sommes-nous ?</a></div>
                            <div><a href='#nos-offres'>Nos Offres</a></div>
                            <div><a href='#reserver'>Réserver</a></div>
                            <div onClick={handleShow}>Se connecter</div>
                        </div>
                    </div>
                </div>

                <Accueil />
                <QuiSommesNous />
                <NosOffres />
                <Reserver />
                <Footer />

                <Routes>
                    <Route exact path='/qui-sommes-nous' element={< QuiSommesNous />}></Route>
                    <Route exact path='/nos-offres' element={< NosOffres />}></Route>
                    <Route exact path='/reserver' element={< Reserver />}></Route>

                    <Route path='/admin' component={< Admin />}></Route>
                </Routes>

            </section>
    );
};

export default App;