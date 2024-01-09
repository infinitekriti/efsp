export const validateText = (value, minLength, maxLength) =>
  value.length >= minLength && value.length <= maxLength;

export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const validatePhoneNumber = (value) => {
  const usPhoneNumberRegex =
  /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})([-\s])?\d{3}([-|\s])?\d{4}$/;
  return usPhoneNumberRegex.test(value);
};
export const formatePhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, "");

  let formatted = "+1";

  if (cleaned.length >= 2) {
    formatted += `(${cleaned.substring(1, 4)}`;
  }

  if (cleaned.length >= 4) {
    formatted += `) ${cleaned.substring(4, 7)}`;
  }

  if (cleaned.length >= 7) {
    formatted += `-${cleaned.substring(7, 11)}`;
  }
  return formatted;
};
