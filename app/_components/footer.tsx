import {
  //faFacebook,
  faGithub,
  //faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-semibold mb-2">Contact Me</h4>
            <p className="mb-2">
              <strong>Email:</strong> prabhattripathi180@gmail.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (+91)-9569764862
            </p>
            <p>
              <strong>Location:</strong> Goa, India
            </p>
          </div>

          <div className="flex space-x-6 mt-6 md:mt-0">
            <a
              href="https://www.linkedin.com/in/prabhat-pati-tripathi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/prabhat3009"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Prabhat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
