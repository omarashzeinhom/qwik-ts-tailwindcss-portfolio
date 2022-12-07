import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
//import { Link } from '@builder.io/qwik-city';

import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Certificates from "../components/sections/Certificates";

export default component$(() => {
  return (
    <div>
      <About />
      <Portfolio />
      <Certificates />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'ANDGOEDU Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Personal Portfolio 2022',
    },
  ],
};
