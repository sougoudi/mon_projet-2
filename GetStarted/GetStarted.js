import React from 'react'
import './GetStarted.css'
const GetStarted = () => {
  return (
    <section className='g-wrapper'>
        <div className='paddings innerWidth g-container'>
            <div className='flexColCenter inner-container'>
                <span className='primaryText'>Commencez avec SouGoudi</span>
                <span className='secondaryText'>Contactez-Nous pour participez à une opportunité de croissance exceptionnelle, <br/>
                   avec un potentiel de rendement attractif et des perspectives de succès à long terme.
                </span>
                <button className='button'>
                    <a href='mailto:chouaahmat0@gmail.com'>Commencer</a>
                </button>
            </div>

        </div>
    </section>
  )
}

export default GetStarted