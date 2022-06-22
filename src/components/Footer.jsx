import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const ButtonMailto = ({ mailto, label, classes }) => {
  return (
      <Link
          to='#'
          onClick={(e) => {
              window.location.href = mailto;
              e.preventDefault();
          }}
          className={classes}
      >
          {label}
      </Link>
  );
};

export const Footer = () => {
  return (
    <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
        <h1 className="text-lg">{new Date().getFullYear()} SK Goggl, Inc.</h1>
        <h1 className="text-lg">
          Created By {' '}
          <Link to="https://khizr-portfolio.netlify.app/">
            <span className="text-xl text-blue-500 dark:text-gray-500">Khizr AA Shaikh</span>
          </Link>
        </h1>
        <div className="flex items-center justify-center">
        <ButtonMailto classes="px-2 pt-2 text-xl text-blue-500 dark:text-gray-500" label={<AiOutlineMail />} mailto="mailto:khizraashaikh@gmail.com" />
        <Link to="https://twitter.com/ShaikhKhizr/" className="px-2 pt-2 text-xl text-blue-500 dark:text-gray-500">
          <BsTwitter />
        </Link>
            <Link to="https://www.facebook.com/khizr.shaikh.14/" className="px-2 pt-2 text-xl text-blue-500 dark:text-gray-500">
          <BsFacebook />
        </Link>
            <Link to="https://www.instagram.com/shaikh_khizr/" className="px-2 pt-2 text-xl text-blue-500 dark:text-gray-500">
          <BsInstagram />
        </Link>
            <Link to="https://www.linkedin.com/in/khizraashaikh/" className="px-2 pt-2 text-xl text-blue-500 dark:text-gray-500">
          <BsLinkedin />
        </Link>
            <Link to="https://github.com/Shaikh-Khizr/" className="px-2 pt-2 text-xl text-blue-500 dark:text-gray-500">
          <BsGithub />
        </Link>
        </div>
    </div>
  );
};
