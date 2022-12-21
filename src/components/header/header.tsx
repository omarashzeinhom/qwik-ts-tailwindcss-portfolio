import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
<>

    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 bottom-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <button class="
        navbar-toggler
        text-gray-500
        border-0
        hover:shadow-none hover:no-underline
        py-2
        px-2.5
        bg-transparent
        focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
      " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
      class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
      </path>
    </svg>
    </button>
    <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
    <a class="
          flex
          items-center
          text-gray-900
          hover:text-gray-900
          focus:text-gray-900
          mt-2
          lg:mt-0
          mr-1
        " href="#">
    
    </a>
    <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
  
      {
            linksObject.map((link, index)=> {
              return (
                <li key={index} class="nav-item p-2">
                <a href={link?.link} class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" aria-current="page">{link?.title}</a>
              </li>
              )
            })
           }
    </ul>
    </div>
  
    <div class="flex items-center relative">
    <a class="text-gray-200 hover:text-gray-700 focus:text-gray-700 mr-4" href="/">
   JohnDoe
    </a>
    <div class="dropdown relative">
      <a class="
            text-gray-500
            hover:text-gray-700
            focus:text-gray-700
            mr-4
            dropdown-toggle
            hidden-arrow
            flex items-center
          " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        
      </a>

    </div>
    </div>
    </div>
  </nav>
</>
  );
});

export const linksObject = [ 
  {
    link: "/",
    title: "Home",

  },
  {
    link: "/#about",
    title: "About",

  },
  {
    link: "/#portfolio",
    title: "Portfolio",

  },
  {
    link: "/#certificates",
    title: "Certificates",

  },
]
