import { component$, useStylesScoped$ } from '@builder.io/qwik';
//import { QwikLogo } from '../icons/qwik';
import styles from './portfolio.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section id="portfolio">
      <br />
      <h2>Portfolio</h2>

      {portfolioItemsObject.map((item, index) => {

        return (
          <>
            <div key={index}>
              <img
                src={item?.img} />
            </div>

          </>
        )

      })}

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

console.log(portfolioItemsObject);