import React from "react";
import {Helmet} from "react-helmet";
export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Helmet><title>About page</title></Helmet>
      {/* Hero Section */}
      <section className="absulate bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We are a passionate team dedicated to building meaningful digital experiences.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://source.unsplash.com/600x400/?team,office"
            alt="Team working"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg mb-4">
            We are a creative team of developers, designers, and problem-solvers
            working together to deliver high-quality solutions for our clients.
          </p>
          <p className="text-lg">
            Our mission is to innovate and inspire through technology while
            keeping people at the heart of everything we create.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p>
              To empower businesses with modern digital tools that drive growth,
              efficiency, and customer satisfaction.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p>
              To become a global leader in providing cutting-edge digital
              solutions that shape the future of innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { name: "John Doe", role: "CEO", img: "https://i.pravatar.cc/200?img=1" },
            { name: "Jane Smith", role: "Designer", img: "https://i.pravatar.cc/200?img=2" },
            { name: "Michael Lee", role: "Developer", img: "https://i.pravatar.cc/200?img=3" },
          ].map((person, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src={person.img}
                alt={person.name}
                className="w-28 h-28 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">{person.name}</h4>
              <p className="text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
