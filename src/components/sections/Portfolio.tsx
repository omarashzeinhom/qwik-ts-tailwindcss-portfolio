import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './portfolio.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section id="portfolio" class="overflow-hidden text-gray-700">
      <br />
      <h2 class="text-xl font-medium leading-tight mb-2">Portfolio</h2>
      <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
     
      {portfolioItemsObject.map((item, index) => {

        return (
<>
<div class="w-1/2 p-1 md:p-2">
      <img
      key={index}
        src={item?.img}
        class="block object-cover object-center w-full h-full rounded-lg"
        alt="Camera"
      />
      </div>

    </>
        )

      })}
</div>
</div>
</div>
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