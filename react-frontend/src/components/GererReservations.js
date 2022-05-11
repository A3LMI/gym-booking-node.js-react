import { RiAddFill } from 'react-icons/ri';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';

export const GererReservations = () => {

    return (
        <>
        <section className="gerer-clients">
            <div class="admin-title">Gérer les réservations</div>
            
            <div class="table-and-btn-course">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>CIN du client</th>
                        <th>Nom du client</th>
                        <th>Prénom du client</th>
                        <th>ID de la réservation</th>
                        <th>Date de la réservation</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                    <tr >
                        <td>efre</td>
                        <td>erferf</td>
                        <td>erfe</td>
                        <td>efre</td>
                        <td>erferf</td>
                        <td>erfe</td>
                        <th class="update">
                            <div>
                                <button class="update-btn">
                                    <div><MdModeEdit size={30} /></div>
                                </button>
                            </div>
                        </th>
                        <th class="delete">
                            <div>
                                <button class="delete-btn">
                                    <div><MdDeleteForever size={30} /></div>
                                </button>
                            </div>
                        </th>
                    </tr>
                </table>
            
                <div class="add">
                    <button class="add-btn"><RiAddFill size={30} />Ajouter une réservation</button>    
                </div>
            </div>
        </section>
        </>
    );
}