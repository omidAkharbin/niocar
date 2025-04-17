import React, {useState} from "react";
import "./Models.css";

interface ModelProps {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  imageUrl: string;
}

const Models: React.FC = () => {
  const [activeModel, setActiveModel] = useState<number>(0);

  const models: ModelProps[] = [
    {
      id: 0,
      name: "Audi e-tron GT",
      price: "$99,900",
      description:
        "The Audi e-tron GT is a fully electric grand tourer that combines stunning design with exhilarating performance. With its sleek silhouette, the e-tron GT turns heads while delivering an electric driving experience like no other.",
      features: [
        "Dual electric motors with 522 hp (637 hp in boost mode)",
        "0-60 mph in 3.9 seconds",
        "238 miles of estimated range",
        "Fast charging: 5-80% in around 22.5 minutes",
        "Quattro all-wheel drive system",
      ],
      imageUrl: "https://picsum.photos/id/1071/800/450",
    },
    {
      id: 1,
      name: "Audi Q4 e-tron",
      price: "$49,800",
      description:
        "The Audi Q4 e-tron is a compact electric SUV that combines versatility with efficiency. Perfect for urban adventures and weekend getaways, it delivers the luxury you expect from Audi in a practical, all-electric package.",
      features: [
        "Single electric motor with 201 hp (295 hp in Quattro version)",
        "0-60 mph in 7.9 seconds (5.8 seconds in Quattro version)",
        "250 miles of estimated range",
        "Fast charging: 5-80% in around 30 minutes",
        "Spacious interior with up to 53 cubic feet of cargo space",
      ],
      imageUrl: "https://picsum.photos/id/1072/800/450",
    },
    {
      id: 2,
      name: "Audi RS e-tron GT",
      price: "$143,900",
      description:
        "The Audi RS e-tron GT represents the pinnacle of electric performance. This high-performance variant takes everything great about the e-tron GT and elevates it with more power, enhanced handling, and exclusive RS design elements.",
      features: [
        "Dual electric motors with 637 hp (enhanced power delivery)",
        "0-60 mph in 3.1 seconds",
        "232 miles of estimated range",
        "Fast charging: 5-80% in around 22.5 minutes",
        "RS-tuned suspension and braking system",
      ],
      imageUrl: "https://picsum.photos/id/133/800/450",
    },
    {
      id: 3,
      name: "Audi Q8 e-tron",
      price: "$74,400",
      description:
        "The Audi Q8 e-tron is a luxury electric SUV that offers outstanding comfort and capability. With its spacious interior and advanced technology, it's the perfect vehicle for those who want to make a statement while reducing their carbon footprint.",
      features: [
        "Dual electric motors with up to 402 hp",
        "0-60 mph in 5.6 seconds",
        "285 miles of estimated range",
        "Fast charging: 10-80% in around 31 minutes",
        "Adaptive air suspension for optimal comfort and handling",
      ],
      imageUrl: "https://picsum.photos/id/1075/800/450",
    },
  ];

  return (
    <div className="models-section">
      <div className="container">
        <h2 className="section-title">Explore Our Models</h2>
        <p className="section-description">
          Discover our range of premium electric vehicles that combine luxury,
          performance, and sustainability.
        </p>

        <div className="models-tabs">
          {models.map((model) => (
            <div
              key={model.id}
              className={`model-tab ${
                activeModel === model.id ? "active" : ""
              }`}
              onClick={() => setActiveModel(model.id)}
            >
              {model.name}
            </div>
          ))}
        </div>

        <div className="model-content">
          <div className="model-image">
            <img
              src={models[activeModel].imageUrl}
              alt={models[activeModel].name}
            />
          </div>
          <div className="model-details">
            <div className="model-header">
              <h3>{models[activeModel].name}</h3>
              <span className="model-price">
                Starting at {models[activeModel].price}
              </span>
            </div>
            <p className="model-description">
              {models[activeModel].description}
            </p>
            <div className="model-features">
              <h4>Key Features</h4>
              <ul>
                {models[activeModel].features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="model-buttons">
              <button className="btn-primary">Build Your Own</button>
              <button className="btn-secondary">Schedule Test Drive</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
