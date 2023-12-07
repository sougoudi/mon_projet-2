import React from 'react';
import './Footer.css'; // Assurez-vous d'ajouter le fichier CSS pour le style
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contactez-Nous</h3>
          <p>Email : info@example.com</p>
          <p>Téléphone : +123 456 789</p>
          <p>Adresse : 123 Rue du Logement, Ville</p>
        </div>
        <div className="footer-section">
          <h3>Nos Liens</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/logements">Logements</a></li>
            <li><a href="/Contactez-Nous">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <p>Rejoignez-nous sur les réseaux sociaux pour rester informé de nos offres spéciales et mises à jour.</p>
          <div className="social-icons">
            <Link href="#"><i class="fa-brands fa-facebook"></i></Link>
            <Link href="#"><i className="fab fa-twitter"></i></Link>
            <Link href="#"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 SouGouDi Immoblier. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
