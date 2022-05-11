
import { RiAddFill } from 'react-icons/ri';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';

export const GererSeances = () => {

    return (
        <>
        <section className="gerer-clients">
            <div class="admin-title">Gérer les séances</div>
            
            <div class="table-and-btn-course">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Heure</th>
                        <th>Nombre de places</th>
                        <th>Machine</th>
                        <th>Reservée</th>
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
                    <button class="add-btn"><RiAddFill size={30} />Ajouter une séance</button>    
                </div>
            </div>
        </section>
        </>
    );
}