import { useState } from 'react';

export const NosOffres = () => {

    const [show, setShow] = useState(false);

    const toggle = () => setShow(!show);

    return (
        <section id='nos-offres' className='nos-offres'>
            <div className="section-title">NOS OFFRES</div>

            <div className="offres">
                <div onClick={toggle} className="offre">Offre 1</div>
                <div onClick={toggle} className="offre">Offre 2</div>
                <div onClick={toggle} className="offre">Offre 3</div>
            </div>

            {
            show?<div className="détails">
                <div className="détail">Détails de l'offre 1</div>
                <div className="détail">Détails de l'offre 1</div>
                <div className="détail">Détails de l'offre 1</div>
            </div>:false
            }
        </section>
    );
}