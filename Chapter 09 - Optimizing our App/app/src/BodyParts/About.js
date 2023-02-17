import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      <Link to='Profile'>About Us</Link>
      <Outlet />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nesciunt,
        quod placeat optio nam distinctio illum sint obcaecati consequatur
        cupiditate excepturi eaque! Facilis nostrum commodi numquam minus quas
        vero adipisci id similique culpa unde nesciunt illo quam voluptatem nam
        nemo praesentium dolor architecto, error iure? Officiis recusandae dolor
        error magnam.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, modi
        nesciunt. Minus quis sequi voluptatum laudantium alias reiciendis
        consequatur minima, beatae, explicabo quasi, fuga vero enim voluptatem
        nesciunt temporibus quo ipsum blanditiis esse excepturi tempora
        accusantium ad dignissimos architecto! Voluptas culpa doloribus eum iure
        temporibus nostrum nulla nemo dolore laudantium!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa
        explicabo ut et, expedita eius.
      </p>
    </div>
  );
};

export default About;
