import React from "react";

const carouselItems = [
  { name: "Altitude",             description: "Ecommerce concepts",                     asset: "src/assets/Altitude.mp4" },
  { name: "Spark",                description: "Trading platform",                        asset: "src/assets/Spark.avif"   },
  { name: "Norby",                description: "Your AI data analyst",                    asset: "src/assets/Norby.mp4"   },
  { name: "Propeller",            description: "Launching revolutionary ideas",           asset: "src/assets/Propeller.mp4" },
  { name: "Soul",                 description: "BigCommerce theme",                       asset: "src/assets/Soul.avif"   },
  { name: "Aire",                 description: "A better way for everyday",               asset: "src/assets/Aire.avif"   },
  { name: "Three Notch Group",    description: "Building the future",                     asset: "src/assets/Three Notch Group.mp4" },
  { name: "Wealth Tracker",       description: "Track your net worth",                    asset: "src/assets/Wealth Tracker.avif" },
  { name: "Momentify",            description: "Unforgettable live music experiences",    asset: "src/assets/Momentify.avif" },
  { name: "Correlated",           description: "Tap into your customer data",             asset: "src/assets/Correlated.avif" },
  { name: "Remi",                 description: "Sustainable home improvement",            asset: "src/assets/Remi.avif"   },
  { name: "Tecton",               description: "AI data engineering",                     asset: "src/assets/Tecton.mp4"  },
  { name: "Playmind",             description: "Your gaming AI companion",                asset: "src/assets/Playmind.mp4" },
];

function Carousel() {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-content">
        <ul className="carousel-track">
          {[...carouselItems, ...carouselItems].map((item, idx) => (
            <li className="carousel-card" key={`${item.name}-${idx}`}>
              <div className="card-meta">
                <div className="meta-logo-placeholder" />
                <div className="meta-text">
                  <h4>{item.name}</h4>
                  <span>{item.description}</span>
                </div>
              </div>
              {item.asset.endsWith(".mp4") ? (
                <video src={item.asset} autoPlay muted loop playsInline />
              ) : (
                <img src={item.asset} alt={item.name} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Carousel;