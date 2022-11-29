import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
//import { Link } from '@builder.io/qwik-city';
import { About, Portfolio, Certificates } from '~/components/sections';

export default component$(() => {
  return (
    <div>
     <About/>
     <Portfolio/>
     <Certificates/>
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
