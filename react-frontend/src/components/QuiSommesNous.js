import { BiTimer } from 'react-icons/bi';
import { BsLightningCharge } from 'react-icons/bs';
import { RiMentalHealthLine } from 'react-icons/ri';


export const QuiSommesNous = () => {

    return (
        <section id='qui-sommes-nous' className='qui-sommes-nous'>
            <div className="section-title">Qui sommes-nous ?</div>
            <div className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br> In nec sapien eu justo fringilla luctus. Suspendisse vitae libero mollis, gravida nulla sed, maximus neque. Donec ut eros lectus.</div>
            <div className='charac'>
                <div className='desc-icons'>
                    <BiTimer size={60}/>
                    <div>Lorem ipsum dolor sit amet</div>
                </div>

                <div className='desc-icons'>
                    <BsLightningCharge size={60}/>
                    <div>Lorem ipsum dolor sit amet</div>
                </div>

                <div className='desc-icons'>
                    <RiMentalHealthLine size={60}/>
                    <div>Lorem ipsum dolor sit amet</div>
                </div>
            </div>
        </section>
    );
}