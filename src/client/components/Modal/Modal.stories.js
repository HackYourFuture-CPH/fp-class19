/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Modal from './Modal.component';

export default { title: 'Components / Modal', component: Modal };
function testFunction() {
  console.log('test function');
}
const Template = (args) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {modalIsOpen && <Modal modalIsOpen={setModalIsOpen} {...args} />}
    </div>
  );
};
export const tryToLogIn = Template.bind({});
tryToLogIn.args = {
  text: 'Kindly check your email to reset your password',
  cornerClose: true,
  btnLabel: 'Try To Log-In Again',
  btnFunction: testFunction,
};
export const addedToCart = Template.bind({});
addedToCart.args = {
  text: 'ADDED TO THE CART',
  btnLabel: 'VIEW CART',
  cornerClose: false,
  modalIcon: true,
  secondBtn: true,
  btnFunction: testFunction,
  secondBtnFunction: testFunction,
};
export const createdAccount = Template.bind({});
createdAccount.args = {
  text: 'Your Account has been created. ',
  cornerClose: false,
  btnFunction: testFunction,
  btnLabel: 'Proceed to Log In',
};
