import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from './redux/actions/modalActions';
import { selectCartItems, selectTotalPrice } from './redux/selectors/cartSelectors';

function ConfirmationModal() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!firstName || !lastName || !email) {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);

    // Submit form data
    // dispatch action or perform an API request to complete the purchase
    // Access the form data: firstName, lastName, email, cartItems, totalPrice
    dispatch(submitPurchase({ firstName, lastName, email, cartItems, totalPrice }));
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirm Purchase</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} required />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label>Cart Items:</label>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label>Total Price:</label>
            <span>{totalPrice}</span>
          </div>
          <div>
            <button type="submit">Buy</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfirmationModal;
