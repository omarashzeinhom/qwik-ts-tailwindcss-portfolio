
import { component$, useStylesScoped$ } from '@builder.io/qwik';
//import { QwikLogo } from '../icons/qwik';
import styles from './certificates.css?inline';


export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section id="certificates" class="overflow-hidden text-gray-700 ">
      <br />
      <h2>Certificates</h2>

      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div class="flex flex-wrap -m-1 md:-m-2">

          {certificatesObject.map((certifcate, index) => {
            return (
              <div class="flex flex-wrap w-1/2">
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" key={index} class="block object-cover object-center w-full h-full rounded-lg"
                    src={certifcate?.img} />
                </div>
              </div>

            )
          })}



        </div>
      </div>
    </section>
  )
})





export const certificatesObject = [
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

]

console.log(certificatesObject);