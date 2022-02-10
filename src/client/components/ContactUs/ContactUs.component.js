import React from 'react';
import image from '../../assets/images/image26.png';
import './ContactUs.styles.css';

function ContactUs() {
  return (
    <div className="contact-margin">
      <h1 className="contact-title">HAPPY TO HELP</h1>
      <div>
        <h3 className="contact-content-h3">Comments and Criticism</h3>
        <p className="contact-content-p">
          Your opinion matters to us. So if you think we can do something better
          or you have an idea that you think will help improve our offering,{' '}
          <br />
          let us know by emailing{' '}
          <a
            className="contact-alink"
            href="mailto:customerservices@thegreenstore.dk"
          >
            customerservices@thegreenstore.dk
          </a>
          .
        </p>
        <h3 className="contact-content-h3">General queries</h3>
        <p className="contact-content-p">
          For all other queries, please email{' '}
          <a
            className="contact-alink"
            href="mailto:customerservices@thegreenstore.dk"
          >
            customerservices@thegreenstore.dk
          </a>
          .
        </p>
        <p className="contact-content-p">
          If your query is urgent, please call us on{' '}
          <a className="contact-alink" href="tel:+4531523612">
            +4531523612
          </a>
          . Lines are open from 9am to 5pm, Monady - Friday
        </p>
        <h3 className="contact-content-h3">Join our affiliate programme</h3>
        <p className="contact-content-p">
          Visit our affiliate page for further information.
        </p>
        <h3 className="contact-content-h3">Press enquiries</h3>
        <p className="contact-content-p">
          Please see our latest press coverage here.
        </p>
        <p className="contact-content-p">
          All medis enquiries should be emailed through to:{' '}
          <a className="contact-alink" href="mailto:press@thegreenstore.dk">
            press@thegreenstore.dk
          </a>
        </p>
        <h3 className="contact-content-h3">Head office address</h3>
        <p className="contact-content-p">
          The Green Store,
          <br />
          Nursery Court, <br /> Copenhagen 2102
        </p>
      </div>
      <img
        src={image}
        alt="If you have a garden and a library, You have everything you need - MARCUS TULLIUS CICERO(HELLOHOMESTEAD.COM)"
        className="contact-image"
      />
    </div>
  );
}

export { ContactUs };
