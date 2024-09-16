import './Hero.css'

const Hero = () => {
    return (
        <section id='home' className="hero-section  h-[80vh] py-5 lg:px-3 gap-8 rounded-3xl mt-2 mx-4 lg:mx-0 flex flex-col justify-center items-center">
            <div className='lg:w-9/12 mx-auto'>
            <h1 className='lg:text-6xl text-3xl text-white font-semibold text-center lg:leading-normal'>Discover an exceptional cooking class tailored for you!</h1>
            <p className='text-white text-center mt-6 lg:px-[10%]'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <button className='bg-[#0BE58A] border-2 hover:bg-transparent hover:border-solid hover:border-2 border-transparent hover:border-[#0BE58A] hover:text-white font-semibold px-5 py-3 rounded-xl'>Explore Now</button>
                <button className='hover:bg-[#0BE58A] border-2 bg-transparent border-solid  border-[#0BE58A] text-white font-semibold px-5 py-3 rounded-xl hover:text-black'>Our Feedback</button>
            </div>
        </section>
    );
};

export default Hero;