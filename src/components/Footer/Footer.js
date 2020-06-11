import React from 'react';
import FooterImage from '../../images/footer-image.svg';

const Footer = () => {

  return (
    <div className="footer">
      <img src={FooterImage} alt="" />
      <span>powered by Bejaon</span>
    </div>
  );
};

export default Footer;
export { Footer };
