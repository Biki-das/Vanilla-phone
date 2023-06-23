const { formatPhoneNumber } = require('./index.js');

test('formatPhoneNumber formats the phone number correctly', () => {
  // Set up the initial input value
  let inputValue = '123';

  // Create a mock event object with a target object
  const event = {
    key: '1',
    target: {
      value: inputValue,
    },
  };

  // Create a fake input element
  const inputElement = document.createElement('input');
  inputElement.value = inputValue;

  // Attach the input element to the event object
  event.target = inputElement;

  // Call the formatPhoneNumber function with the mock event
  formatPhoneNumber(event);

  // Log the modified value
  console.log(inputElement.value);

  // Update the inputValue with the modified value
  inputValue = inputElement.value;

  // Assert that the input value is formatted correctly
  expect(inputValue).toBe('(123) ');
});
