import { RiAddFill } from 'react-icons/ri';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';

import { Component } from 'react';

import AdminService from "../services/AdminService";

export default class GererClients extends Component {

    constructor(props) {
        super(props);

        this.getAllClients = this.getAllClients.bind(this);

        this.state = {
            clients: []
        }

        console.log(this.state.clients)
    }

    getAllClients() {
        AdminService.getAllClients()
        .then(response => {
            this.setState({
                clients: response.data
            });
            
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const { clients} = this.state;

        return (
            <> 
                <section className="gerer-clients">
                    <div class="admin-title">Manage Clients</div>
                    
                    <div class="table-and-btn-course">
                        <table>
                            <tr>
                                <th>CIN</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Genre</th>
                                <th>Adresse E-mail</th>
                                <th>Mot de passe</th>
                                <th>Numéro de téléphone</th>
                                <th>Adresse</th>
                                <th>Crédits</th>
                                <th>Modifier</th>
                                <th>Supprimer</th>
                            </tr>

                            <tr>
                                {clients && clients.map((client, index) => (
                                <>
                                    <td key={index}>{client.id}</td>
                                    <td key={index}>{client.nom}</td>
                                    <td key={index}>{client.prenom}</td>
                                    <td key={index}>{client.genre}</td>
                                    <td key={index}>{client.email}</td>
                                    <td key={index}>{client.mdp}</td>                        
                                    <td key={index}>{client.num_tel}</td>
                                    <td key={index}>{client.adresse}</td>
                                    <td key={index}>{client.credits}</td>
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
                                </>
                            ))}
                            </tr>
                        </table>
                    
                        <div class="add">
                            <button class="add-btn"><RiAddFill size={30} />Nouveau Client</button>    
                        </div>
                    </div>
                </section>
            </>
        )
    }
}