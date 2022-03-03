/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Modal from './Modal.component';
import addedToCartImg from '../../assets/images/added_to_cart.png';

export default { title: 'Components / Modal', component: Modal };
function testFunction() {
  console.log('test function');
}
function Template(args) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }
  return (
    <div>
      <button onClick={openModal} type="button">
        Open Modal
      </button>
      {modalIsOpen && <Modal modalIsOpen={setModalIsOpen} {...args} />}
    </div>
  );
}
export const tryToLogIn = Template.bind({});
tryToLogIn.args = {
  message: 'Kindly check your email to reset your password',
  cornerCloseButton: true,
  primaryButtonLabel: 'Try To Log-In Again',
  buttonFunction: testFunction,
};
export const addedToCart = Template.bind({});
addedToCart.args = {
  message: 'ADDED TO THE CART',
  primaryButtonLabel: 'VIEW CART',
  cornerCloseButton: false,
  showIcon: addedToCartImg,
  secondaryButtonLabel: 'CONTINUE SHOPPING',
  buttonFunction: testFunction,
  secondButtonFunction: testFunction,
};
export const createdAccount = Template.bind({});
createdAccount.args = {
  message: 'Your Account has been created. ',
  cornerCloseButton: false,
  buttonFunction: testFunction,
  primaryButtonLabel: 'Proceed to Log In',
};
