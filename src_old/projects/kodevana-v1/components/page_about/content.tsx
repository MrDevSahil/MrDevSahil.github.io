import { useInView } from 'react-intersection-observer';
import "../../styles/Animate.css"

function Content() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div className="mx-2 xs:mx-7 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-40 pb-7 xs:pb-9 sm:pb-14 md:pb-20">
      <div className='md:grid grid-cols-2 gap-10'>
        <div ref={ref} className={`animated-div-1 ${inView ? 'slide-in' : ''} px-3 py-7 xs:py-16 sm:py-24 md:py-32 lg:py-36 xl:py-40 relative text-center bg-slate-700 rounded-md`}>
          <h3 className="text-yellow-400 text-lg md:text-xl xl:text-2xl font-semibold">Move fast and break things</h3>
          <p className="pt-3 pb-1 text-base md:text-lg xl:text-xl leading-5 xs:leading-6 md:leading-7 text-slate-50 font-semibold">- Mark Zuckerberg</p>
          <p className="text-base md:text-lg xl:text-xl font-medium leading-5 xs:leading-6 md:leading-7 text-slate-50">Founder of Facebook</p>
        </div>
        <div>
          <h2 className='mt-3 md:mt-0 text-xl md:text-3xl xl:text-4xl font-bold mb-3 md:mb-5'>Know us more</h2>
          <p className="text-base md:text-lg xl:text-xl font-medium leading-5 xs:leading-6 md:leading-7">Our team of skilled professionals is committed to staying at the forefront of industry trends and technologies, allowing us to deliver innovative solutions that are both intuitive and efficient. Whether you require custom software development, creative design, or digital marketing services, we are dedicated to providing a seamless experience tailored to your unique needs.</p>
        </div>
      </div>
    </div>
  )
}

export default Content
