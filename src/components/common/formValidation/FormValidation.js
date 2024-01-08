export const validateText = (value, minLength, maxLength) =>
  value.length >= minLength && value.length <= maxLength;

export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const validatePhoneNumber = (value) => {
    const usPhoneNumberRegex = /^[2-9]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}$/;
    return usPhoneNumberRegex.test(value);
  };
