import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './portfolio.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section id="portfolio" class="overflow-hidden text-gray-700">
      <br />
      <div class="text-center bg-gray-50 text-gray-800 py-10 px-3">
        <h2 class="text-2xl font-bold mt-1 mb-4">Portfolio</h2>
      </div>


      <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-1/2">

            {portfolioItemsObject.map((item, index) => {

              return (
                <>

                  <div class="w-1/2 p-1 md:p-2 rounded-lg shadow-lg bg-white max-w-sm">
                    <img
                      key={index}
                      src={item?.img}
                      class="block object-cover object-center w-full h-full rounded-lg"
                      alt="Camera"
                    />
                  </div>
                  <div class="p-6">
                    <p class="text-gray-700 text-base mb-4">
                      {item?.title}
                    </p>
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
    title: "Project A",
    img: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641536/personal_portofolio_assets_2022/certificateitems/udemy_python_cert_item_4_catkfr.webp",
    link: "",
  },
  {
    title: "Project B",
    img: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641536/personal_portofolio_assets_2022/certificateitems/udemy_python_cert_item_4_catkfr.webp",
    link: "",
  },
  {
    title: "Project C",
    img: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641530/personal_portofolio_assets_2022/certificateitems/udacity_nanodegree_cert_item_1_yrf9nh.webp",
    link: "",
  },
  {
    title: "Project D",
    img: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641530/personal_portofolio_assets_2022/certificateitems/cybrary_cert_item_3_ixkele.webp",
    link: "",
  },
];
//console.log(portfolioItemsObject);