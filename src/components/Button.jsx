import React from "react";

const Button = ({ text, type, size }) => {
  const getType = () => {
    switch (type) {
      case "primary":
        return "bg-purple-700 text-white hover:bg-purple-800 "; /*Boton morado */
        break;
      case "outline":
        return "outline outline-2 outline-white text-white"; /*Sin fondo solo de linea */
        break;
      case "secondary":
        return "bg-teal-600 text-white hover:bg-teal-700"; /*Boton verde*/
        break;
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getSize = () => {
    switch (size) {
      case "s":
        return "px-4 text-sm";
        break;
      case "m":
        return "px-4 text-base";
        break;
      case "l":
        return "px-8 text-lg";
        break;
      default:
        return "text-sm";
    }
  };

  const buttonClasses = `${getType()} ${getSize()} rounded-full text-center py-2 justify-center items-center inline-flex`;

  return (
    /*Ejemplo de uso <Button text='TEXTO' type="primary" size="s"></Buttton>*/
    <button className={buttonClasses}>{text}</button>
  );
};
export default Button;
