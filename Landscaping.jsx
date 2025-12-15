import React from 'react';
import { Square, Fence, Leaf, Sparkles } from 'lucide-react';
import './Services.css';

const Landscaping = () => {
  const services = [
    {
      icon: <Square size={32} />,
      title: 'Porcelain Patios',
      description: 'Stunning porcelain paving for patios, walkways, and steps. We specialize in both new installations and correcting poorly laid previous work.'
    },
    {
      icon: <Fence size={32} />,
      title: 'Fencing & Sleepers',
      description: 'Quality timber fencing solutions including retaining walls, raised beds, and tiered structures. Durable materials and expert craftsmanship.'
    },
    {
      icon: <Leaf size={32} />,
      title: 'Premium Artificial Grass',
      description: 'Professional artificial grass installation for low-maintenance, year-round green spaces. Perfect finish with sharp, clean lines and defined edges.'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Resin',
      description: 'Smooth, durable resin-bound driveways and pathways. UV-stable, permeable surfaces that combine aesthetics with functionality for long-lasting results.'
    }
  ];

  return (
    <section id="landscaping" className="services-section landscaping-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-1">Landscaping Services</h2>
          <p className="body-large section-subtitle">
            Transform your outdoor space with our premium landscaping solutions
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="network-card service-card">
              <div className="service-icon" style={{ color: 'var(--brand-primary)' }}>
                {service.icon}
              </div>
              <h3 className="heading-3 service-title">{service.title}</h3>
              <p className="body-medium service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Landscaping;