export const validateText = (value, minLength, maxLength) =>
  value.length >= minLength && value.length <= maxLength;

export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};
export const formateZip = (value) => {
  const cleaned = value.replace(/\D/g, "");

  let formatted = "";

  if (cleaned.length >= 0) {
    formatted += `${cleaned.substring(0, 5)}`;
  }
  

  if (cleaned.length >= 5) {
    formatted += `-${cleaned.substring(5, 9)}`;
  }
  if(formatted.length === 6){
    formatted = `${cleaned.substring(0, 5)}`;
  }

  return formatted;
};
export const validateZip = (value) => {
  const pattern = /^\d+-\d{1,4}$/;
  return pattern.test(value);
};
export const formatExt = (value) => {
  const cleaned = value.replace(/\D/g, "");
  return cleaned;
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
  if (value === "") {
    return false;
  }
  return true;
};
export const validatePhoneNumber = (value) => {
  const usPhoneNumberRegex = /^\(\d{3}\) \d{2}-\d{4}$/;
  return usPhoneNumberRegex.test(value);
};

export const formatePhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, "");

  let formatted = "";

  if (cleaned.length >= 0) {
    formatted += `(${cleaned.substring(0, 3)}`;
  }

  if (cleaned.length >= 3) {
    formatted += `) ${cleaned.substring(3, 5)}`;
  }

  if (cleaned.length >= 5) {
    formatted += `-${cleaned.substring(5, 9)}`;
  }
  return formatted;
};
export const validateFaxNumber = (value) => {
  const usPhoneNumberRegex =
    /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})([-\s])?\d{3}([-|\s])?\d{4}$/;
  return usPhoneNumberRegex.test(value);
};
export const formateFaxNumber = (value) => {
  const cleaned = value.replace(/\D/g, "");

  let formatted = "+1";

  if (cleaned.length >= 2) {
    formatted += ` (${cleaned.substring(1, 4)}`;
  }

  if (cleaned.length >= 5) {
    formatted += `) ${cleaned.substring(4, 7)}`;
  }

  if (cleaned.length >= 8) {
    formatted += `-${cleaned.substring(7, 11)}`;
  }
  return formatted;
};
