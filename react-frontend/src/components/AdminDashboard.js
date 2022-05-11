
import { BsFillPersonFill } from 'react-icons/bs';
import { MdLocalOffer } from 'react-icons/md';
import { AiOutlineStock } from 'react-icons/ai';
import { GiWeightLiftingUp } from 'react-icons/gi';

export const AdminDashboard = () => {

    return (
        <>        
        <section className='admin-center'>
            <div class="admin-title">Tableau de bord</div>

            <div>
                <div class="total-clients">
                    <div class="icon"><BsFillPersonFill size={30} /></div>

                    <div>
                        <div class="a-number">50</div>
                        <div class="stat">Nombre de clients</div>
                    </div>
                </div>

                <div class="total-clients">
                    <div class="icon"><GiWeightLiftingUp size={30} /></div>
                    <div>
                        <div class="a-number">50</div>
                        <div class="stat">Nombre de séances</div>
                    </div>
                </div>

                <div class="total-clients">
                    <div class="icon"><AiOutlineStock size={30} /></div>

                    <div>
                        <div class="a-number">50</div>
                        <div class="stat">Nombre de réservations</div>
                    </div>
                </div>

                <div class="total-clients">
                    <div class="icon"><MdLocalOffer size={30} /></div>

                    <div>
                        <div class="a-number">50</div>
                        <div class="stat">Nombre d'offres</div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
