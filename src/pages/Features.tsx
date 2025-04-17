import "./pages.css";

const Features = () => {
  return (
    <div className="page-container features-container">
      <h1>Premium Features</h1>
      <p className="features-intro">
        Experience the future of automotive luxury and innovation with our
        exceptional range of features designed to elevate your driving
        experience to new heights.
      </p>

      <div className="features-content">
        <div className="feature-item">
          <div className="feature-image">
            <img
              src="https://picsum.photos/id/1072/600/400"
              alt="Advanced Safety Systems"
            />
          </div>
          <h2>Advanced Safety</h2>
          <p>
            Our comprehensive suite of safety technologies includes adaptive
            cruise control, lane keeping assist, automatic emergency braking,
            and 360° camera system with night vision capabilities. The
            intelligent driver monitoring system ensures you stay alert on long
            journeys.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-image">
            <img
              src="https://picsum.photos/id/1071/600/400"
              alt="Luxurious Interior"
            />
          </div>
          <h2>Luxurious Interior</h2>
          <p>
            Handcrafted premium Nappa leather seats with heating, cooling, and
            massage functions. The panoramic glass roof creates an airy
            atmosphere, while the 18-speaker premium sound system delivers
            concert-quality audio. Ambient lighting with customizable themes
            sets the perfect mood.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-image">
            <img
              src="https://picsum.photos/id/133/600/400"
              alt="Electric Performance"
            />
          </div>
          <h2>Electric Performance</h2>
          <p>
            Experience breathtaking acceleration from 0-60 mph in just 3.2
            seconds with our dual-motor all-wheel-drive system. The 100 kWh
            battery provides up to 370 miles of range, and rapid charging
            capability adds 200 miles in just 20 minutes at compatible stations.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-image">
            <img
              src="https://picsum.photos/id/111/600/400"
              alt="Smart Connectivity"
            />
          </div>
          <h2>Smart Connectivity</h2>
          <p>
            Our intelligent infotainment system features a 15" touchscreen with
            voice-activated controls. Seamless smartphone integration,
            over-the-air updates, and a dedicated mobile app let you monitor and
            control your vehicle remotely. The AI assistant learns your
            preferences over time.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-image">
            <img
              src="https://picsum.photos/id/164/600/400"
              alt="Autonomous Driving"
            />
          </div>
          <h2>Autonomous Driving</h2>
          <p>
            Experience Level 3 autonomous driving capabilities with our advanced
            driver assistance system. Highway Pilot allows hands-free driving on
            compatible highways, while Automated Parking handles parallel and
            perpendicular parking with ease—all monitored by our 12 ultrasonic
            sensors.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-image">
            <img
              src="https://picsum.photos/id/146/600/400"
              alt="Sustainable Materials"
            />
          </div>
          <h2>Sustainable Materials</h2>
          <p>
            Our commitment to sustainability is reflected in our use of recycled
            and eco-friendly materials. From seats made with reclaimed ocean
            plastic to interior panels crafted from renewable bamboo, we're
            reducing environmental impact without compromising on luxury or
            quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
