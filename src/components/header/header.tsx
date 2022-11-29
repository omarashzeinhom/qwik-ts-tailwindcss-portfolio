import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="navbar">
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="#about" >
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" >
            Portfolio
          </a>
        </li>
        <li>
          <a href="#certificates" >
            Certificates
          </a>
        </li>
      </ul>
    </header>
  );
});
