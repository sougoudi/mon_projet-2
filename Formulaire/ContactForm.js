import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ContactForm.css";

const CommentAdd = () => {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);

  const { Id } = useParams();

  const handleData = (e) => {
    switch (e.target.name) {
      case "prenom":
        setPrenom(e.target.value);
        setMessage("");
        break;
      case "email":
        setEmail(e.target.value);
        setMessage("");
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
    }
  };

  const AddContenu = async (e) => {
    e.preventDefault();

    let datas = {
      prenom: prenom,
      email: email,
      message: message,
    };

    if (prenom.trim() === "" || email.trim() === "" || message.trim() === "") {
      setMessage("Ne laissez pas de champs vides !");
      setShow(true);
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/add_contenu/${Id}`, {
        method: "POST",
        body: JSON.stringify(datas),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (result.response) {
        setPrenom("");
        setEmail("");
        setMessage(result.message);
      } else {
        setMessage(result.message);
      }

      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  };

  return (
    <form
      className="contenu-form"
      action={`/add_contenu/${Id}`}
      method="post"
      onSubmit={AddContenu}
    >
      <label className="labelform" htmlFor="prenom">
        Prénom
      </label>
      <input
        className="inputform"
        type="text"
        name="prenom"
        id="prenom"
        value={prenom}
        onChange={handleData}
      />

      <label className="labelform" htmlFor="email">
        Adresse Email
      </label>
      <input
        className="inputform"
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={handleData}
      />

      <label className="labelform" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleData}
      />

      {message && show && <p className="error-message">{message}</p>}

      <input className="inputform" type="submit" value="Envoyer" />
    </form>
  );
};

export default CommentAdd;
