import "./pages.css";

const About = () => {
  return (
    <div className="page-container about-container">
      <h1>About Audi Excellence</h1>

      <div className="about-hero">
        <img
          src="https://picsum.photos/id/1071/1200/400"
          alt="Luxury car showroom"
          className="about-hero-image"
        />
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 1985, Audi Excellence has pioneered luxury electric
            vehicles that combine stunning design with cutting-edge technology.
            Our vision is to create the most enjoyable driving experience while
            prioritizing sustainability and innovation. From our humble
            beginnings as a small team of automotive enthusiasts, we've grown
            into a global leader in premium electric mobility.
          </p>
          <p>
            With a commitment to excellence in every detail, we continue to push
            the boundaries of what's possible in electric vehicles, offering
            unmatched performance, range, and comfort. Our dedication to
            sustainability extends beyond our vehicles to every aspect of our
            operations, from manufacturing processes to our carbon-neutral
            facilities worldwide.
          </p>
        </div>

        <div className="about-section about-columns">
          <div className="about-column">
            <img
              src="https://picsum.photos/id/183/600/400"
              alt="Electric car concept"
              className="about-image"
            />
            <h3>Innovation</h3>
            <p>
              Our research and development team works tirelessly to bring
              breakthrough technologies to market. From advanced battery systems
              to AI-powered driving assistance, we're constantly raising the bar
              for what electric vehicles can achieve.
            </p>
          </div>

          <div className="about-column">
            <img
              src="https://picsum.photos/id/133/600/400"
              alt="Vehicle manufacturing"
              className="about-image"
            />
            <h3>Craftsmanship</h3>
            <p>
              Every vehicle we produce represents the perfect fusion of
              traditional craftsmanship and modern engineering. Our skilled
              artisans work alongside cutting-edge robotics to ensure flawless
              execution of every component.
            </p>
          </div>

          <div className="about-column">
            <img
              src="https://picsum.photos/id/1068/600/400"
              alt="Sustainability initiatives"
              className="about-image"
            />
            <h3>Sustainability</h3>
            <p>
              Environmental responsibility is core to our mission. We're
              committed to carbon-neutral production by 2025, with 80% of our
              manufacturing already powered by renewable energy, and we're
              developing innovative recycling programs for battery components.
            </p>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            The heart of Audi Excellence is our diverse team of over 5,000
            passionate professionals spread across design studios, engineering
            centers, and manufacturing facilities in Europe, North America, and
            Asia. United by a shared commitment to excellence, our team brings
            together expertise from automotive design, aerospace engineering,
            software development, and sustainable manufacturing.
          </p>

          <div className="team-grid">
            <div className="team-member">
              <img
                src="https://picsum.photos/id/1005/300/300"
                alt="Team member"
                className="team-image"
              />
              <h4>Emma Richardson</h4>
              <p>Chief Executive Officer</p>
            </div>
            <div className="team-member">
              <img
                src="https://picsum.photos/id/1012/300/300"
                alt="Team member"
                className="team-image"
              />
              <h4>David Chen</h4>
              <p>Chief Technology Officer</p>
            </div>
            <div className="team-member">
              <img
                src="https://picsum.photos/id/1000/300/300"
                alt="Team member"
                className="team-image"
              />
              <h4>Michael Okafor</h4>
              <p>Head of Design</p>
            </div>
            <div className="team-member">
              <img
                src="https://picsum.photos/id/1027/300/300"
                alt="Team member"
                className="team-image"
              />
              <h4>Sophia Martinez</h4>
              <p>Sustainability Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
