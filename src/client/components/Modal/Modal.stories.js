/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Modal from './Modal.component';

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
  massage: 'Kindly check your email to reset your password',
  cornerCloseBtn: true,
  primaryBtnLabel: 'Try To Log-In Again',
  btnFunction: testFunction,
};
export const addedToCart = Template.bind({});
addedToCart.args = {
  massage: 'ADDED TO THE CART',
  primaryBtnLabel: 'VIEW CART',
  cornerCloseBtn: false,
  showConfirmIcon: true,
  secondaryBtnLabel: 'CONTINUE SHOPPING',
  btnFunction: testFunction,
  secondBtnFunction: testFunction,
};
export const createdAccount = Template.bind({});
createdAccount.args = {
  massage: 'Your Account has been created. ',
  cornerCloseBtn: false,
  btnFunction: testFunction,
  primaryBtnLabel: 'Proceed to Log In',
};
