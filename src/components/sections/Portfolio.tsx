import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './portfolio.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section id="portfolio">
      <br />
      <h2>Portfolio</h2>
     
      <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
      <div class="carousel-inner relative w-full overflow-hidden">
      {portfolioItemsObject.map((item, index) => {

        return (
<>
<div class="carousel-item  active relative float-left w-full" >

      <img
      key={index}
        src={item?.img}
        class="block w-full"
        alt="Camera"
      />
      </div>
    </>
        )

      })}
</div>
</div>
<button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

    </section>

  )
});





export const portfolioItemsObject = [
  {
    title: "",
    img: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641536/personal_portofolio_assets_2022/certificateitems/udemy_python_cert_item_4_catkfr.webp",
    link: "",
  },
  {
    title: "",
    img: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641536/personal_portofolio_assets_2022/certificateitems/udemy_python_cert_item_4_catkfr.webp",
    link: "",
  },
  {
    title: "",
    img: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641530/personal_portofolio_assets_2022/certificateitems/udacity_nanodegree_cert_item_1_yrf9nh.webp",
    link: "",
  },
  {
    title: "",
    img: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641530/personal_portofolio_assets_2022/certificateitems/cybrary_cert_item_3_ixkele.webp",
    link: "",
  },
];

//console.log(portfolioItemsObject);