import { Quality1, Pricing2, Custom3, Modern4 } from "../../assets";

function WhyUs() {
  return (
    <div className="mx-5 xs:mx-12 sm:mx-20 md:mx-20 lg:mx-20 xl:mx-20 pb-7 xs:pb-9 sm:pb-14 md:pb-20 text-center">
      <h2 className="pb-3 xs:pb-5 sm:pb-7 md:pb-10 lg:pb-10 xl:pb-10 text-xl md:text-3xl xl:text-4xl font-bold">
        Why <span className="text-yellow-400">Kode</span>Vana?
      </h2>
      <div className="flex flex-wrap justify-between">
        <div className="mb-5 xs:mb-6 sm:mb-6 md:mb-6 lg:mb-6 xl:mb-6 md:w-1/2 lg:w-1/4 xl:w-1/4">
          <img
            className="h-28 xs:h-32 sm:h-36 md:h-36 lg:h-36 xl:h-36 mx-auto"
            src={Quality1}
            alt="Workers Graphics Image"
          />
          <h3 className="py-2 xs:py-3 sm:py-5 md:py-5 lg:py-5 xl:py-5 text-lg md:text-xl xl:text-2xl font-semibold">
            Quality of Service
          </h3>
          <p className="text-base md:text-lg xl:text-xl font-medium leading-5 xs:leading-6 md:leading-7">
            KodeVana delivering high-quality software services to its clients
            and a dedication to providing excellent customer service
          </p>
        </div>
        <div className="mb-5 xs:mb-6 sm:mb-6 md:mb-6 lg:mb-6 xl:mb-6 md:w-1/2 lg:w-1/4 xl:w-1/4 px-7">
          <img
            className="h-28 xs:h-32 sm:h-36 md:h-36 lg:h-36 xl:h-36 mx-auto"
            src={Pricing2}
            alt="Money Bank Graphics Image"
          />
          <h3 className="py-2 xs:py-3 sm:py-5 md:py-5 lg:py-5 xl:py-5 text-lg md:text-xl xl:text-2xl font-semibold">
            Competitive Pricing
          </h3>
          <p className="text-base md:text-lg xl:text-xl font-medium leading-5 xs:leading-6 md:leading-7">
            KodeVana offer its services at a competitive price point, making it
            an attractive option for small and medium-sized businesses
          </p>
        </div>
        <div className="mb-5 xs:mb-6 sm:mb-6 md:mb-6 lg:mb-6 xl:mb-6 md:w-1/2 lg:w-1/4 xl:w-1/4 px-7">
          <img
            className="h-28 xs:h-32 sm:h-36 md:h-36 lg:h-36 xl:h-36 mx-auto"
            src={Custom3}
            alt="Creativity Graphics Image"
          />
          <h3 className="py-2 xs:py-3 sm:py-5 md:py-5 lg:py-5 xl:py-5 text-lg md:text-xl xl:text-2xl font-semibold">
            Customization
          </h3>
          <p className="text-base md:text-lg xl:text-xl font-medium leading-5 xs:leading-6 md:leading-7">
            KodeVana offer customized software solutions that are tailored to
            each clients unique needs and specifications
          </p>
        </div>
        <div className="md:w-1/2 lg:w-1/4 xl:w-1/4">
          <img
            className="h-28 xs:h-32 sm:h-36 md:h-36 lg:h-36 xl:h-36 mx-auto"
            src={Modern4}
            alt="Tech Graphics Image"
          />
          <h3 className="py-2 xs:py-3 sm:py-5 md:py-5 lg:py-5 xl:py-5 text-lg md:text-xl xl:text-2xl font-semibold">
            Cutting-Edge Technology
          </h3>
          <p className="text-base md:text-lg xl:text-xl font-medium leading-5 xs:leading-6 md:leading-7">
            Kodevana use the latest software development tools and technologies
            to deliver high-quality, modern software solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
