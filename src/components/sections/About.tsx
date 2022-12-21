

import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './about.css?inline';
import SocailMedia from '../socialmedia/SocailMedia';


export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section id="about">
      <br />
      <div class="text-center bg-gray-50 text-gray-800 py-10 px-3">
        <h2 class="text-2xl font-bold mt-1 mb-4">About</h2>
      </div>
      <img
        class="about__avatar hover:object-scale-down"
        data-mdb-ripple="true"
        style={{ borderRadius: "95%", boxShadow: "0.1rem 0.1rem 0.4rem 0.1rem gray", objectFit: "cover", display: "block", marginRight: "auto", marginLeft: "auto", width: "100%", height: "100%", maxHeight: "50vh", maxWidth: "50vw" }}
        src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
        loading="lazy"
      />

      <div class="text-center ">
        <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>

        <p class="text-gray-500">Web designer</p>
        <ol class="border-l border-gray-300">
          <div class="mt-0.5 ml-4 mb-6">
            <li>  <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit sequi eius architecto, est velit cupiditate ad officia libero perferendis fuga. Officia magnam facilis quam quia rem natus harum vitae!
            </p></li>
          </div>

        </ol>
      </div>
      <br />
      <SocailMedia />
    </section>
  )
})

