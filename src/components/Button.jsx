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
        return "w-32 h-8 text-sm";
        break;
      case "m":
        return "w-40 h-10 text-base";
        break;
      case "l":
        return "w-48 h-11 text-lg";
        break;
      default:
        return "w-32 h-8 text-sm";
    }
  };

  const buttonClasses = `${getType()} ${getSize()} rounded-full text-center px-4 py-2 justify-center items-center inline-flex`;

  return (
    /*Ejemplo de uso <Button text='TEXTO' type="primary" size="s"></Buttton>*/
    <button className={buttonClasses}>{text}</button>
  );
};
export default Button;
