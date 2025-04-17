import React, {useState, useEffect} from "react";
import "./Testimonials.css";

interface TestimonialProps {
  id: number;
  name: string;
  position: string;
  image: string;
  text: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: TestimonialProps[] = [
    {
      id: 1,
      name: "Jennifer Reynolds",
      position: "Business Executive",
      image: "https://picsum.photos/id/1062/300/300",
      text: "The Audi e-tron GT exceeded all my expectations. The acceleration is breathtaking, the interior is luxurious, and I love that it's fully electric. The attention to detail and craftsmanship make every drive a special experience.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Technology Consultant",
      image: "https://picsum.photos/id/1005/300/300",
      text: "After test driving several luxury electric vehicles, I chose the Audi Q8 e-tron for its perfect balance of performance and comfort. The driver assistance features are impressive, and the range is excellent for my daily commute and weekend trips.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "Architect",
      image: "https://picsum.photos/id/1011/300/300",
      text: "As someone who values both design and sustainability, the Audi RS e-tron GT was the perfect choice. The sleek lines and attention to sustainable materials align perfectly with my values, and the performance is simply incredible.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Williams",
      position: "Finance Director",
      image: "https://picsum.photos/id/1012/300/300",
      text: "The customer service at Audi Excellence is as impressive as their vehicles. From the test drive to delivery, every interaction was professional and personalized. The Q4 e-tron is exactly what I needed - compact yet spacious, and wonderfully efficient.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-description">
          Hear from our satisfied customers about their experience with Audi
          Excellence vehicles and service.
        </p>

        <div className="testimonials-carousel">
          <div
            className="testimonials-slider"
            style={{transform: `translateX(-${currentIndex * 100}%)`}}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <i className="fas fa-quote-left"></i>
                    <p>{testimonial.text}</p>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`testimonial-dot ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
            <div className="testimonial-arrows">
              <button
                className="testimonial-arrow prev"
                onClick={() =>
                  setCurrentIndex(
                    (prevIndex) =>
                      (prevIndex - 1 + testimonials.length) %
                      testimonials.length
                  )
                }
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className="testimonial-arrow next"
                onClick={() =>
                  setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % testimonials.length
                  )
                }
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
