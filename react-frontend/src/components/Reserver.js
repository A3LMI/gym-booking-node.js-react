export const Reserver = () => {

    const disablePastDate = () => {
        const today = new Date();
        const date = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth()+1).padStart(2, "0");
        const year = today.getFullYear();
        return year + "-" + month + "-" + date;
    };

    return (
        <section id='reserver' className='reserver'>
            <div className="section-title">Réserver</div>

            <div className="select-date">
                <div className="selectionnez">Sélectionnez le jour</div>

                <div><input className="s-date" type="date" min={disablePastDate()}/></div>
            </div>

            <div className="v-s">
                <div className="voici">Voici les séances disponibles :</div>

                <div className="seances-dispo">
                    <div className="seance-dispo">
                        <div className="heure">10:00</div>
                        <div className="machine">Machine 1</div>
                    </div>

                    <div className="seance-dispo">
                        <div className="heure">12:00</div>
                        <div className="machine">Machine 2</div>
                    </div>
                </div>
            </div>
        </section>
    );
}