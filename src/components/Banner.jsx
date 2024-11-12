import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="p-2 rounded-2xl mx-auto  ">
          <img className='contain-content' src={bannerImg} alt="" />
        </div>
      );
};

export default Banner;