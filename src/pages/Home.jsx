import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our IT Company</h1>
          <p className="text-lg mb-8">
            We provide top-notch IT solutions to help your business thrive in
            the digital age.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-8">
            Our company specializes in providing innovative IT solutions
            tailored to your business needs. With a team of experienced
            professionals, we ensure that your technology infrastructure is
            robust, secure, and efficient.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p>
                We build responsive and scalable web applications to help your
                business reach a wider audience.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
              <p>
                Our cloud solutions ensure that your data is secure and
                accessible from anywhere in the world.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">IT Consulting</h3>
              <p>
                We provide expert IT consulting services to help you make
                informed decisions about your technology investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-8">
            Get in touch with us to learn more about how we can help your
            business succeed.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
