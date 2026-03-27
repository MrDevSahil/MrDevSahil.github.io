import {
  Facebook_logo,
  Instagram_logo,
  LinkedIn_logo,
  Twitter_logo,
} from "../../assets";

function FollowUp() {
  return (
    <div className="mx-2 xs:mx-3 sm:mx-10 md:mx-12 lg:mx-24 xl:mx-40 pt-5 grid xs:grid-cols-1 mt-[20px] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      <div className="text-center md:col-span-2 lg:col-span-2 xl:col-span-2">
        <h3 className="pb-3 text-lg md:text-xl xl:text-2xl font-semibold">Subscribe to our daily updates</h3>
        <div className="relative h-7 xs:h-10 sm:h-11 md:h-12 lg:h-14 xl:h-14 rounded-2xl">
          <input
            className="pl-3 xs:pl-3 sm:pl-5 md:pl-6 lg:pl-7 xl:pl-7 pr-20 xs:pr-28 sm:pr-28 md:pr-32 lg:pr-36 xl:pr-40 h-full w-11/12 text-base md:text-lg xl:text-xl font-medium leading-5 xs:leading-6 md:leading-7 text-slate-700 rounded-l-lg bg-slate-200 outline-none"
            type="email"
            placeholder="Email"
          />
          <button className="px-2 xs:px-6 sm:px-7 md:px-8 lg:px-9 xl:px-7 h-full text-base md:text-lg xl:text-xl font-medium leading-5 xs:leading-6 md:leading-7 font-semibold bg-yellow-400 border-slate-900 hover:text-slate-50 hover:bg-slate-500 absolute right-0 rounded-r-lg order-10">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-3 xs:mt-3 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 grid grid-rows-2 xs:grid-rows-1 sm:grid-rows-1 md:grid-rows-2 lg:grid-rows-2 xl:grid-rows-2 col-span-1 text-center">
        <h3 className="text-lg md:text-xl xl:text-2xl font-semibold">Also, follow us on</h3>
        <div className="">
          <a
            href="https://www.facebook.com/profile.php?id=100089674457660&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <img
                className="h-7 xs:h-9 sm:h-10 md:h-9 lg:h-10 xl:h-10"
                src={Facebook_logo}
                alt="Tech Graphics Image"
              />
            </button>
          </a>
          <a
            href="https://www.instagram.com/kodevana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-2 mr-1">
              <img
                className="h-7 xs:h-9 sm:h-10 md:h-9 lg:h-10 xl:h-10"
                src={Instagram_logo}
                alt="Tech Graphics Image"
              />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/kodevana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-1 mr-2">
              <img
                className="h-7 xs:h-9 sm:h-10 md:h-9 lg:h-10 xl:h-10"
                src={LinkedIn_logo}
                alt="Tech Graphics Image"
              />
            </button>
          </a>
          <a
            href="https://www.twitter.com/kodevana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <img
                className="h-7 xs:h-9 sm:h-10 md:h-9 lg:h-10 xl:h-10"
                src={Twitter_logo}
                alt="Tech Graphics Image"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FollowUp;
