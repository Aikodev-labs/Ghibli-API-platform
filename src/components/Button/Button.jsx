const Button = ({ text, type, size, onClick}) => {
  const getType = () => {
    switch (type) {
      case "primary":
        return "bg-purple-700 text-white hover:bg-purple-800 "; /*Boton morado */
      case "outline":
        return "outline outline-1 outline-white text-white"; /*Sin fondo solo de linea */
      case "outline_blue":
        return "outline outline-1 outline-cyan700 text-cyan700"; /*Sin fondo solo de linea */  
      case "secondary":
        return "bg-teal-600 text-white hover:bg-teal-700"; /*Boton verde*/
      case "disabled":
        return "bg-gray-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"  ; /*botón desactivado*/
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getSize = () => {
    switch (size) {
      case "s":
        return "px-6 text-sm";
      case "m":
        return "px-6 text-base";
      case "l":
        return "px-8 text-lg";
      default:
        return "text-sm";
    }
  };


  const buttonClasses = `${getType()} ${getSize()} rounded-full text-center py-2 justify-center items-center inline-flex font-neue-lt`;

  return (
    /*Ejemplo de uso <Button text='TEXTO' type="primary" size="s"></Buttton>*/

    <button className={buttonClasses} onClick={onClick} >{text}</button>
  );
};
export default Button;

