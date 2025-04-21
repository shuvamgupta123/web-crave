
import { useState, useEffect } from "react";
import { ArrowDown, ArrowRight, Mail, Phone, Star, Search, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    benefits: false,
    portfolio: false,
    testimonials: false,
    contact: false,
  });

  useEffect(() => {
    // Set hero immediately visible
    setIsVisible(prev => ({ ...prev, hero: true }));
    
    // Set other sections to visible after a delay
    const observerOptions = {
      threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setIsVisible(prev => ({ ...prev, [id]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Bloom Boutique",
      quote: "Web Crave transformed our online presence completely. Our conversion rate has increased by 45% since the redesign!",
      stars: 5
    },
    {
      name: "Michael Reynolds",
      company: "Tech Solutions Inc.",
      quote: "Not only is our new website beautiful, but the SEO improvements have brought us to the first page of Google results.",
      stars: 5
    },
    {
      name: "Amanda Chen",
      company: "Green Earth Cafe",
      quote: "The team at Web Crave understood our vision perfectly. They created a website that captures our brand essence.",
      stars: 5
    }
  ];

  const portfolioItems = [
    {
      title: "Luxury Spa Retreat",
      description: "Complete brand redesign with booking functionality",
      image: "https://images.unsplash.com/photo-1596178060873-8a5cd413c9fb?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Tech Startup Platform",
      description: "Modern SaaS website with user dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      title: "Artisan Bakery",
      description: "E-commerce site with local delivery integration",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-orange-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-semibold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Web Crave
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition duration-300">Services</a>
            <a href="#benefits" className="text-gray-700 hover:text-orange-500 transition duration-300">Benefits</a>
            <a href="#portfolio" className="text-gray-700 hover:text-orange-500 transition duration-300">Portfolio</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition duration-300">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition duration-300">Contact</a>
          </div>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero"
        className={`min-h-screen pt-24 flex items-center bg-gradient-to-b from-orange-50 to-white transition-opacity duration-1000 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 transform transition-all duration-1000" 
                style={{ 
                  transform: isVisible.hero ? 'translateX(0)' : 'translateX(-100px)',
                  opacity: isVisible.hero ? 1 : 0 
                }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Elevate</span> Your Digital Presence
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                We design stunning websites that convert visitors into customers and rank higher in search results.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white px-8 py-3 text-lg transition-all duration-300">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 transform transition-all duration-1000" 
                style={{ 
                  transform: isVisible.hero ? 'translateX(0)' : 'translateX(100px)',
                  opacity: isVisible.hero ? 1 : 0 
                }}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur-lg opacity-50"></div>
                <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                    alt="Web design process" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <a href="#services" className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-orange-200 shadow-lg rounded-full flex items-center justify-center">
              <ArrowDown className="h-6 w-6 text-orange-500" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services"
        className={`py-20 transition-opacity duration-1000 ${isVisible.services ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive web solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className={`p-8 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-orange-500 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '0ms' }}>
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Edit className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Website Design</h3>
              <p className="text-gray-600 mb-4">
                Custom, responsive designs that look amazing on all devices and represent your brand perfectly.
              </p>
              <a href="#contact" className="text-orange-500 inline-flex items-center font-medium hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Card>

            {/* Service 2 */}
            <Card className={`p-8 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-red-500 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '200ms' }}>
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">SEO Optimization</h3>
              <p className="text-gray-600 mb-4">
                Strategic optimization that helps your website rank higher in search results and attract more visitors.
              </p>
              <a href="#contact" className="text-red-500 inline-flex items-center font-medium hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Card>

            {/* Service 3 */}
            <Card className={`p-8 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-amber-500 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '400ms' }}>
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Brand Strategy</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive branding solutions that help your business stand out and connect with your target audience.
              </p>
              <a href="#contact" className="text-amber-500 inline-flex items-center font-medium hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        id="benefits"
        className={`py-20 bg-gradient-to-r from-orange-50 to-amber-50 transition-opacity duration-1000 ${isVisible.benefits ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Web Crave</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our websites don't just look good, they perform better in every way that matters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible.benefits ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop" 
                alt="Analytics dashboard showing website performance" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className={`mb-8 transition-all duration-700 ${isVisible.benefits ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                  style={{ transitionDelay: '0ms' }}>
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <span className="bg-orange-100 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                  Higher Search Rankings
                </h3>
                <p className="text-gray-600 pl-11">
                  We build websites with clean code and implement proven SEO strategies that help your business get found more easily online.
                </p>
              </div>

              <div className={`mb-8 transition-all duration-700 ${isVisible.benefits ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                  style={{ transitionDelay: '150ms' }}>
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <span className="bg-red-100 text-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                  Increased Conversion Rates
                </h3>
                <p className="text-gray-600 pl-11">
                  Our strategic layouts and compelling calls-to-action are designed to turn more of your visitors into paying customers.
                </p>
              </div>

              <div className={`mb-8 transition-all duration-700 ${isVisible.benefits ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                  style={{ transitionDelay: '300ms' }}>
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <span className="bg-amber-100 text-amber-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                  Mobile Optimization
                </h3>
                <p className="text-gray-600 pl-11">
                  Every website we build works flawlessly across all devices, ensuring you never lose a customer due to poor mobile experience.
                </p>
              </div>

              <div className={`transition-all duration-700 ${isVisible.benefits ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                  style={{ transitionDelay: '450ms' }}>
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <span className="bg-orange-100 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                  Fast Loading Speeds
                </h3>
                <p className="text-gray-600 pl-11">
                  We optimize every aspect of your website for speed, because faster websites rank better and keep visitors engaged longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section 
        id="portfolio"
        className={`py-20 transition-opacity duration-1000 ${isVisible.portfolio ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Portfolio</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 transform ${isVisible.portfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg">
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials"
        className={`py-20 bg-gradient-to-r from-orange-50 to-amber-50 transition-opacity duration-1000 ${isVisible.testimonials ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Clients Say</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-700 transform ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        className={`py-20 transition-opacity duration-1000 ${isVisible.contact ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Touch</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to elevate your online presence? Let's talk about your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className={`mb-12 transition-all duration-700 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Call us</p>
                      <p className="font-medium">+977 9806812912</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Email us</p>
                      <p className="font-medium">sg750053@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-700 delay-300 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <h3 className="text-2xl font-semibold mb-6">Why Work With Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">7+ years of experience in web design and development</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Proven track record of increasing client conversions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Comprehensive SEO and performance optimization</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Ongoing support and maintenance packages</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className={`bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <h3 className="text-2xl font-semibold">Request a Quote</h3>
                  <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                <div className="p-6">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfU5PSahmp_1BKI-GzJd9pVU-0oK3T0fhnawIy7nQ0F9I32_g/viewform?embedded=true" 
                    width="100%" 
                    height="600" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Contact Form"
                    className="w-full"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="text-3xl font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
                Web Crave
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                We design stunning websites that convert visitors into customers and rank higher in search results.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Services</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Portfolio</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2" /> +977 9806812912
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-2" /> sg750053@gmail.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Web Crave. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-8">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 text-sm">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
