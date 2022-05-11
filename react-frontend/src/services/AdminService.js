import http from "../config/http-common";

class AdminService {

    // Clients
    getAllClients() {
        return http.get("http://localhost:8081/clients/all");
    }

    getClientByID(id) {
        return http.get(`http://localhost:8081/clients/${id}`);
    }

    addClient(data) {
        return http.post("http://localhost:8081/clients/add", data);
    }
    
    updateClient(id, client) {
        return http.put(`http://localhost:8081/clients/update/${id}`, client);
    }

    deleteClient(id) {
        return http.delete(`http://localhost:8081/clients/delete/${id}`);
    }

    // Séances
    getAllSeances() {
        return http.get("/seances/all");
    }
    
    getSeanceByID(id) {
        return http.get(`/seances/${id}`);
    }

    addSeance(seance) {
        return http.post("/seances/add", seance);
    }
    
    updateSeance(id, seance) {
        return http.put(`/seances/update/${id}`, seance);
    }

    deleteSeance(id) {
        return http.delete(`/seances/delete/${id}`);
    }

    // Réservations
    getAllReservations() {
        return http.get("/reservations/all");
    }

    getReservationByID(id) {
        return http.get(`/reservations/${id}`);
    }

    addReservation(reservation) {
        return http.post("/reservations/add", reservation);
    }
    
    updateReservation(id, reservation) {
        return http.put(`/reservations/update/${id}`, reservation);
    }

    deleteReservation(id) {
        return http.delete(`/reservations/delete/${id}`);
    }

}
export default new AdminService();