import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';


const About = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className="  mx-auto p-10 bg-gradient-to-br from-blue-50 to-blue-200 rounded-3xl shadow-2xl mt-10">
      <h1 className="text-6xl font-extrabold mb-12 text-center text-blue-700 animate-pulse">
        About Us
      </h1>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-blue-600 hover:text-blue-800 transition duration-300">
          Welcome to College Management System
        </h2>
        <p className="text-xl text-gray-700 leading-loose">
          At CMS, we understand that effective education is built on a foundation of
          seamless administration and communication. Our College Management System is crafted to
          optimize every aspect of your institution’s operations, empowering educators, engaging
          students, and facilitating efficient management. We’re not just a platform; we’re your
          partner in fostering educational excellence.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-blue-600 hover:text-blue-800 transition duration-300">
          Our Mission
        </h2>
        <p className="text-xl text-gray-700 leading-loose">
          Our mission is to revolutionize educational management by providing a comprehensive,
          user-friendly platform that enhances productivity, streamlines processes, and fosters
          a collaborative environment. We are committed to delivering cutting-edge technology
          that adapts to the evolving needs of educational institutions, ensuring that every
          stakeholder can focus on what truly matters—education.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-blue-600 hover:text-blue-800 transition duration-300">
          Our Vision
        </h2>
        <p className="text-xl text-gray-700 leading-loose">
          We envision a world where educational institutions operate with the utmost efficiency,
          where students and educators are fully supported by technology that makes learning
          accessible, organized, and engaging. Our vision is to become the leading provider of
          educational management solutions, trusted by institutions globally to facilitate a
          brighter future.
        </p>
      </section>

      <section className="mb-16 bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-xl text-gray-700 leading-loose space-y-4">
          <li>
            <span className="font-semibold text-blue-700">Comprehensive Student Management:</span> Streamline student registration, track academic progress, and maintain complete records with ease.
          </li>
          <li>
            <span className="font-semibold text-blue-700">Dynamic Teacher Management:</span> Facilitate teacher assignments, course planning, and direct communication with students.
          </li>
          <li>
            <span className="font-semibold text-blue-700">Advanced Course & Assignment Management:</span> Seamlessly create, distribute, and evaluate assignments, with real-time updates.
          </li>
          <li>
            <span className="font-semibold text-blue-700">Efficient Attendance & Exam Management:</span> Automate attendance tracking, exam scheduling, and grading to ensure accuracy and timeliness.
          </li>
          <li>
            <span className="font-semibold text-blue-700">Instant Announcements & Notifications:</span> Keep your community informed with real-time announcements directly delivered to their dashboards.
          </li>
          <li>
            <span className="font-semibold text-blue-700">State-of-the-Art Security:</span> Protect user data with robust JWT authentication, bcrypt hashing, and encrypted communication channels.
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-blue-600 hover:text-blue-800 transition duration-300">
          Our Technology
        </h2>
        <p className="text-xl text-gray-700 leading-loose">
          Built on the powerful MERN stack—MongoDB, Express.js, React.js, and Node.js—our platform
          leverages the latest in web development to deliver a fast, responsive, and scalable
          solution. Tailwind CSS ensures that our interface is not only functional but also
          visually stunning, offering a seamless experience across devices. We prioritize
          performance and security, making our system a reliable choice for institutions of all
          sizes.
        </p>
      </section>

      <section className="mb-16 bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-xl text-gray-700 leading-loose space-y-4">
          <li>
            <span className="font-semibold text-blue-700">User-Centric Design:</span> We build with the user in mind, ensuring that our platform is intuitive, accessible, and easy to navigate for everyone.
          </li>
          <li>
            <span className="font-semibold text-blue-700">All-In-One Solution:</span> From student management to exam scheduling, we cover all your needs in one comprehensive platform.
          </li>
          <li>
            <span className="font-semibold text-blue-700">Customizable & Scalable:</span> Tailor our system to meet the unique needs of your institution, with the flexibility to grow as you do.
          </li>
          <li>
            <span className="font-semibold text-blue-700">Dedicated Support:</span> Our team is here to provide ongoing support and maintenance, ensuring that your system remains current and efficient.
          </li>
        </ul>
      </section>

      <section className="text-center bg-gradient-to-r from-blue-50 to-blue-200 p-10 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold mb-8 text-blue-600">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-700 leading-loose mb-10">
          Whether you’re looking to enhance your institution’s operations or seeking a more connected
          learning experience, our team is here to help. Contact us today to learn more about how
          our College Management System can transform your educational environment and help you
          achieve your goals.
        </p>
        <button className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-10 py-4 rounded-full shadow-lg hover:from-blue-800 hover:to-blue-950 transition duration-300" onClick={()=>navigate('/contactus')}>
          Contact Us 
        </button>
      </section>
    </div>
    </>
  );
};

export default About;
