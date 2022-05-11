const sql = require("../config/db.js");

const Client = function(client) {
  this.id = client.id;
  this.nom = client.nom;
  this.prenom = client.prenom;
  this.email = client.email;
  this.mdp = client.mdp;
  this.numero_tel = client.numero_tel;
  this.adresse = client.adresse;
  this.ville = client.ville;
  this.sms_enabled = client.sms_enabled;
  this.newsletter_enabled = client.newsletter_enabled;
  this.credits = client.credits;
};

// get all clients
Client.getAll = (result) => {
  let query = "SELECT * FROM client";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
};

// create client
Client.create = (newClient, result) => {
  sql.query("INSERT INTO client SET ?", newClient, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Client created succesfully !", { id: res.insertId, ...newClient });
    result(null, { id: res.insertId, ...newClient });
  });
};

// update client
Client.update = (id, client, result) => {
  sql.query(
    `UPDATE users
     SET id=?, nom=?, prenom=?, email=?, mdp=?, numero_tel=?, adresse=?, ville=?, sms_enabled=?, newsletter_enabled=?, credits=?
     WHERE id=?`,
    [client.id, client.nom, client.prenom, client.email, client.mdp, client.numero_tel, client.adresse, client.ville, client.sms_enabled, client.sms_enabled, client.credits, id],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Client with id " + id + " updated succesfully !", { id: id, ...client });
      result(null, { id: id, ...client });
    }
  );
};

// delete client
Client.delete = (id, result) => {
  sql.query("DELETE FROM client WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Client with id " + id + " deleted succesfully !");
    result(null, res);
  });
};

module.exports = Client;