

import { component$, useStylesScoped$ } from '@builder.io/qwik';
//import { QwikLogo } from '../icons/qwik';
import styles from './about.css?inline';


export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section id="about">
      <br />
      <h2>About</h2>
      <img
        class="about__avatar"
        style={{ borderRadius: "35%", boxShadow: "0.1rem 0.1rem 0.4rem 0.1rem gray", objectFit: "cover", display: "block", marginRight: "auto", marginLeft: "auto", width: "50%", height: "25",}}
        src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
        loading="lazy"
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit sequi eius architecto, est velit cupiditate ad officia libero perferendis fuga. Officia magnam facilis quam quia rem natus harum vitae!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit sequi eius architecto, est velit cupiditate ad officia libero perferendis fuga. Officia magnam facilis quam quia rem natus harum vitae!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit sequi eius architecto, est velit cupiditate ad officia libero perferendis fuga. Officia magnam facilis quam quia rem natus harum vitae!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit sequi eius architecto, est velit cupiditate ad officia libero perferendis fuga. Officia magnam facilis quam quia rem natus harum vitae!
      </p>
    </section>
  )
})

