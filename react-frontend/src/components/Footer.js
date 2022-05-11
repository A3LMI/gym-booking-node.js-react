import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export const Footer = () => {
    
    return (
        <footer>
            <section className='footer'>
                <iframe title='googlemaps' width="1905" height="400" id="gmap_canvas" src='https://maps.google.com/maps?q=F%C3%A8s,%20Maroc&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

                <div className='footer-infos'>
                    <div>Rue De X, Avenue X, Fès, Maroc</div>
                    <div>+212 6 12 34 56 78</div>
                    <div>Ouvert : Lundi - Dimanche 8h - 22h</div>
                </div>
            </section>

            <section className='footer-details'>
                <div className='footer-logo'>
                    <div>LOGO</div>
                </div>

                <div className='footer-links'>
                    <div><a href='#accueil'>Accueil</a></div>
                    <div><a href='#qui-sommes-nous'>Qui sommes-nous ?</a></div>
                    <div><a href='#nos-offres'>Nos Offres</a></div>
                    <div><a href='#reserver'>Réserver</a></div>
                </div>
                
                <div className='footer-socials'>
                    <div>Retrouvez-nous sur :</div>

                    <div>
                        <BsFacebook size={25}/>
                        <BsInstagram  size={25}/>
                        <SiGmail  size={25}/>
                    </div>
                </div>
            </section>

            <div className="copyright">Copyright © 2022. Tous droits réservés.</div>
        </footer>
    );
}