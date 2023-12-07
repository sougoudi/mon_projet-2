import React from 'react'
import "./Companies.css"
import Residencies from '../Residencies/Residencies'
function Companies() {
  return (
    <section className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>
        <a href="https://www.prologis.fr/">
        <img className='partenaire' src="image/prologis.png" alt="prologis" />
        </a>
        <a href="https://www.americantower.com/index.html">
        <img className='partenaire' src="image/tower.png" alt="tower" />
        </a>
        <a href="https://www.equinix.fr/">
        <img className='partenaire' src="image/equinix.png" alt="equinix" />
        </a>
        <a href="https://www.digitalrealty.asia/data-centers/paris">
        <img className='partenaire' src="image/realty.png" alt="realty" />
        </a>
        </div>
        <Residencies />
    </section>
  )
}

export default Companies