import React, { useState } from 'react';
import { Menu, X, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function PharmaceuticalLanding() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [formData, setFormData] = useState({
hospitalName: '',
email: '',
phone: ''
});

const handleSubmit = () => {
if (formData.hospitalName && formData.email && formData.phone) {
alert('Thank you for your interest! Our team will contact you within 24 hours.');
setFormData({ hospitalName: '', email: '', phone: '' });
} else {
alert('Please fill in all fields');
}
};

const benefits = [
{
icon: '⚡',
title: '24-Hour Delivery',
description: 'Emergency orders delivered within 24 hours across major metros. Express delivery for critical care units.'
},
{
icon: '✅',
title: '100% Quality Assured',
description: 'Every batch tested and certified. Complete traceability from manufacturing to delivery.'
},
{
icon: '💰',
title: 'Competitive Pricing',
description: 'Direct manufacturer pricing with volume discounts. Transparent cost structure with no hidden fees.'
},
{
icon: '📋',
title: 'Regulatory Compliance',
description: 'All necessary documentation provided. Support with regulatory audits and inspections.'
},
{
icon: '🔄',
title: 'Inventory Management',
description: 'Digital ordering system with real-time stock updates. Automated reordering for essential medicines.'
},
{
icon: '👨‍⚕️',
title: 'Dedicated Support',
description: 'Assigned account manager for your hospital. 24/7 customer service for urgent requirements.'
}
];

const categories = [
{ icon: '💊', title: 'Generic Medicines', description: 'Complete range of essential generics' },
{ icon: '💉', title: 'Injectables', description: 'Sterile injectables & IV solutions' },
{ icon: '🧪', title: 'Oncology', description: 'Specialized cancer treatment drugs' },
{ icon: '🫀', title: 'Cardiology', description: 'Cardiovascular medications' },
{ icon: '🦠', title: 'Antibiotics', description: 'Broad-spectrum antimicrobials' },
{ icon: '🧬', title: 'Biotechnology', description: 'Biologic & biosimilar products' }
];

const testimonials = [
{
text: 'MediSupply Pro has been our reliable partner for 5 years. Their commitment to quality and timely delivery has never faltered, even during critical situations.',
author: 'Dr. Rajesh Kumar',
position: 'Chief Pharmacist, Apollo Hospitals'
},
{
text: 'The digital ordering system and transparent pricing have streamlined our procurement process significantly. Highly recommend for any healthcare facility.',
author: 'Ms. Priya Sharma',
position: 'Procurement Head, Max Healthcare'
},
{
text: 'Excellent quality control and documentation support. They have been instrumental in helping us maintain our accreditation standards.',
author: 'Dr. Amit Patel',
position: 'Medical Director, Fortis Hospital'
}
];

return ( <div className="min-h-screen bg-white"> 


<header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg"> <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex justify-between items-center h-16"> <div className="flex items-center space-x-2"> <span className="text-2xl">⚕️</span> <span className="text-xl font-bold">MediSupply Pro</span> </div>
      <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="hover:text-blue-200 transition">Products</a>
          <a href="#about" className="hover:text-blue-200 transition">About</a>
          <a href="#compliance" className="hover:text-blue-200 transition">Compliance</a>
          <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            Request Quote
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden pb-4 space-y-2">
          <a href="#products" className="block py-2 hover:text-blue-200">Products</a>
          <a href="#about" className="block py-2 hover:text-blue-200">About</a>
          <a href="#compliance" className="block py-2 hover:text-blue-200">Compliance</a>
          <a href="#contact" className="block py-2 hover:text-blue-200">Contact</a>
        </div>
      )}
    </nav>
  </header>

  <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 leading-tight">
            Quality Pharmaceuticals for Healthcare Excellence
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Trusted by 500+ hospitals nationwide. ISO-certified manufacturing with 24/7 supply reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105"
            >
              Get Started
            </button>
            <button 
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              View Catalog
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center text-white text-8xl">
            🏥
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-white py-12 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h3 className="text-gray-600 mb-6 font-medium">Certified & Trusted by Leading Healthcare Institutions</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {['ISO 9001:2015', 'WHO GMP Certified', 'FDA Approved', 'DCGI Licensed'].map((badge, index) => (
          <div key={index} className="bg-blue-50 text-blue-600 px-6 py-3 rounded-lg font-semibold">
            {badge}
          </div>
        ))}
      </div>
    </div>
  </section>

  <section id="about" className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
        Why Choose MediSupply Pro?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section id="products" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
        Our Product Range
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-2xl text-center cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="text-6xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">{category.title}</h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
        Trusted by Healthcare Leaders
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-gray-50 p-8 rounded-2xl border-l-4 border-blue-600"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
            <div>
              <p className="font-bold text-blue-600">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
      <p className="text-xl mb-8 opacity-90">
        Get a customized quote for your hospital's pharmaceutical needs
      </p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Hospital Name"
          value={formData.hospitalName}
          onChange={(e) => setFormData({...formData, hospitalName: e.target.value})}
          className="bg-white flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="bg-white flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="bg-white flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button 
          onClick={handleSubmit}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition transform hover:scale-105"
        >
          Request Quote
        </button>
      </div>
    </div>
  </section>

  <footer className="bg-gray-900 text-white py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-blue-400 mb-4">MediSupply Pro</h3>
          <p className="text-gray-400">
            Leading pharmaceutical manufacturer serving healthcare institutions across India since 2025.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#products" className="hover:text-white transition">Product Catalog</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#compliance" className="hover:text-white transition">Certifications</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-400 mb-4">Compliance</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Quality Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Safety Data Sheets</a></li>
            <li><a href="#" className="hover:text-white transition">Regulatory Documents</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-400 mb-4">Contact</h3>
          <div className="space-y-3 text-gray-400">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>sales@medisupplypro.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>1800-XXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Noida, Utter pradesh , India</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
      </div>
    </div>
  </footer>
</div>
);
}

