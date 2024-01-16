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
export const validateEni = (value) => {
  const EniRegex = /^\d{2} - \d{7}$/;
  return EniRegex.test(value);
};
export const validatePassword = (value, min, max) => {
  const passwordRegex = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{${min},${max}}$`
  );
  return passwordRegex.test(value);
};
export const formatEin = (value) => {
  const cleaned1 = value.replace(/\D/g, "");

  let formatted = "";

  if (cleaned1.length >= 0) {
    formatted += `${cleaned1.substring(0, 2)} `;
  }
  if (cleaned1.length >= 2) {
    formatted += `- ${cleaned1.substring(2, 9)}`;
  }

  return formatted;
};

export const validateSalute = (value) => {
  while (value === "Select") {
      return false;
  }
  return true;
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
