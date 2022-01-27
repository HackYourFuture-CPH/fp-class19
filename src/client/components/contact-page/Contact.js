import React from 'react';
import image from '../../assets/images/image26.png';
import './contact.css';

export default function ContactPage() {
  return (
    <div className="page-margin">
      <h1 className="title">HAPPY TO HELP</h1>
      <div>
        <h3 className="content">Comments and Criticism</h3>
        <p className="content">
          Your opinion matters to us. So if you think we can do something better
          or you have an idea that you think will help improve our offering,{' '}
          <br />
          let us know by emailing{' '}
          <a href="mailto:customerservices@thegreenstore.dk">
            customerservices@thegreenstore.dk
          </a>
          .
        </p>
        <h3 className="content">General queries</h3>
        <p className="content">
          For all other queries, please email{' '}
          <a href="mailto:customerservices@thegreenstore.dk">
            customerservices@thegreenstore.dk
          </a>
          .
        </p>
        <p className="content">
          If your query is urgent, please call us on{' '}
          <a href="tel:+4531523612">+4531523612</a>. Lines are open from 9am to
          5pm, Monady - Friday
        </p>
        <h3 className="content">Join our affiliate programme</h3>
        <p className="content">
          Visit our affiliate page for further information.
        </p>
        <h3 className="content">Press enquiries</h3>
        <p className="content">Please see our latest press coverage here.</p>
        <p className="content">
          All medis enquiries should be emailed through to:{' '}
          <a href="mailto:press@thegreenstore.dk">press@thegreenstore.dk</a>
        </p>
        <h3 className="content">Head office address</h3>
        <p className="content">
          The Green Store,
          <br />
          Nursery Court, <br /> Copenhagen 2102
        </p>
      </div>
      <img
        src={image}
        alt="If you have a garden and a library, You have everything you need - MARCUS TULLIUS CICERO(HELLOHOMESTEAD.COM)"
      />
    </div>
  );
}
