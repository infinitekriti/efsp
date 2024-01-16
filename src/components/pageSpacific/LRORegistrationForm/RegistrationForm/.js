const handleInputChange = (event) => {
  const { name, value } = event.target;
  switch (name) {
    case "lroName":
      feildColour(name, validateText(value, 3, 100), value);
      break;
    default:
      break;
  }
};

switch (name) {
  case "lroContact":
    feildColour(name, validateText(value, 3, 50), value);
    break;
  case "lroAddress1":
    feildColour(name, validateText(value, 3, 40), value);
    break;
  case "lroAddress2":
    feildColour(name, validateText(value, 3, 40), value);
    break;
  case "lroAddress3":
    feildColour(name, validateText(value, 3, 40), value);
    break;
  case "lroZip1":
    feildColour(name, /^\d{5}$/.test(value), value);
    break;
  case "lroZip2":
    feildColour(name, /^\d{4}$/.test(value), value);
    break;
  case "lroEmail":
    feildColour(name, validateEmail(value), value);
    break;
  case "lroPassword":
    feildColour(name, validatePassword(value, 8, 50), value);
    setLRODetails(name, value);
    setLRODetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    break;
  case "lroCPassword":
    const password = LRODetails.lroPassword;
    feildColour(name, validateCPassword(value, password));
    break;
  case "lroFaxNumber":
    const FaxNumber = formatePhoneNumber(value);
    setlroFaxNumber(FaxNumber);
    feildColour(name, validatePhoneNumber(FaxNumber), FaxNumber);
    break;
  case "lroPhoneNumber":
    const PhoneNumber = formatePhoneNumber(value);
    setlroPhoneNumber(PhoneNumber);
    feildColour(name, validatePhoneNumber(PhoneNumber), PhoneNumber);
    break;
  case "lroAccountType":
    feildColour(name, /^.{1}$/.test(value));
    break;
  case "lroExt":
    feildColour(name, /^\d{2,4}$/.test(value), value);
    break;
  case "lroEni":
    const Eni1 = formatEin(value);
    setlroEni(Eni1);
    feildColour(name, validateEni(Eni1), Eni1);
    break;
  case "lroSubOrdinateEin":
    const Eni2 = formatEin(value);
    setlroSubOrdinateEin(Eni2);
    feildColour(name, validateEni(Eni2), Eni2);
    break;
  default:
    break;
}
