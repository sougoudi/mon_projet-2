
import Contact from '../Contact/Contact';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../accordion';

const Value = () => {
  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        {/* left side */}
        <div className='v-left'>
          <div className='image-container'>
            <img src="image/value.png" alt="" />
          </div>
        </div>
        {/* right side */}
        <div className='flexColStart v-right'>
          <span className='blueText'>Notre Valeur</span>
          <span className='primaryText'>Valeur que nous vous accordons</span>
          <span className='secondaryText'>Nous sommes toujours prêts à vous aider en vous fournissant les meilleurs services.
            <br/>
            Nous pensons qu'un bon endroit où vivre peut rendre votre vie meilleure.
          </span>

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
          >
            {data.map((item, i) => (
              <AccordionItem key={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className='flexCenter accordionButton'>
                    <div className='flexCenter icon'>{item.icon}</div>
                    <span className='primaryText'>{item.heading}</span>
                    <div className='flexCenter icon'>
                      <MdOutlineArrowDropDown size={20}/>
                    </div>
                  </AccordionItemButton>  
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className='secondaryText'>{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default Value;

