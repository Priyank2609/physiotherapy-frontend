import Slider from "react-slick";
import { HeroWrapper } from "../../styles/hero";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const HeroSlider = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const user = userInfo?.user;
  const isAdmin = user?.role === "Admin";
  const slides = [
    {
      id: 1,
      title: "Care and Cure for Your Body",
      subtitle:
        "Specialized physiotherapy services to help you recover faster.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 2,
      title: "Recover Faster, Live Better",
      subtitle:
        "Personalized physiotherapy plans for every patient’s unique needs.",
      image:
        "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 3,
      title: "Your Health is Our Priority",
      subtitle:
        "Professional care for orthopedic, neuro, sports & post-surgery.",
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1600&q=80",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <HeroWrapper>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="slide-container"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay"></div>
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                {isAdmin ? (
                  <NavLink to={"/admin/dashboard"} className="btn-primary">
                    Dashboard
                  </NavLink>
                ) : (
                  <NavLink to={"/book-appointment"} className="btn-primary">
                    Book Appointment
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </HeroWrapper>
  );
};

export default HeroSlider;
