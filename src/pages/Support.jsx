import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Alert } from "@material-tailwind/react";
import { useSearchParams } from "react-router-dom";
import coffee from "../assets/images/coffee.png";
import vectorCoffee from "../assets/images/vectorCoffee.png";
import Button from "../components/Button/Button";

const Support = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  // Si hay un status, mostrar el mensaje correspondiente
  if (status === "completed") {
    return (
      <main className="flex flex-col lg:flex-row m-auto items-center pt-[113px] max-w-[1366px] h-min-witout-footer font-neue-ltc px-4 lg:px-0">
        <section className="w-full lg:w-2/3 h-auto flex flex-col items-center justify-center pb-20 lg:pb-56">
          <div className="max-w-2xl mx-auto text-center px-4">
            <Alert
              color="green"
              icon={<CheckCircleIcon className="h-6 w-6" />}
              className="mb-6 lg:mb-8"
            >
              <div className="text-base lg:text-lg">
                <strong>¡Gracias por tu generosa donación!</strong>
              </div>
              <div className="mt-2 text-sm lg:text-base">
                Tu apoyo significa mucho para nosotros y nos ayuda a mantener la
                API de Ghibli funcionando para toda la comunidad.
              </div>
            </Alert>

            <h2 className="text-2xl lg:text-4xl font-bold text-cyan950 mb-4 lg:mb-6">
              ¡Tu café ha sido servido! ☕
            </h2>

            <p className="text-base lg:text-lg text-cyan800 mb-6 lg:mb-8">
              Gracias a personas como tú, podemos seguir ofreciendo este
              servicio gratuito. Tu donación nos ayuda a cubrir los costos de
              hosting y desarrollo.
            </p>

            <Button
              onClick={() => (window.location.href = "/")}
              type="primary"
              className="px-6 lg:px-8"
              text="Volver al inicio"
              size="l"
            />
          </div>
        </section>

        {/* Coffee decorations - hidden on mobile */}
        <section className="hidden lg:flex relative items-center justify-start w-1/3">
          <div className="top-24 z-10 right-96 absolute w-72 h-20">
            <img className="" src={vectorCoffee} alt="VectorCoffee" />
          </div>

          <div className="top-24 z-10 right-96 absolute w-56 h-20">
            <img className="" src={vectorCoffee} alt="VectorCoffee" />
          </div>

          <img src={coffee} alt="Coffee cup" className="w-full max-w-sm" />
        </section>

        {/* Mobile coffee decoration */}
        <section className="lg:hidden flex justify-center mt-8 mb-8">
          <div className="relative">
            <img src={coffee} alt="Coffee cup" className="w-48 h-auto" />
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
              <img
                className="w-24 h-20 opacity-70"
                src={vectorCoffee}
                alt="VectorCoffee"
              />
            </div>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20">
              <img
                className="w-20 h-16 opacity-50"
                src={vectorCoffee}
                alt="VectorCoffee"
              />
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (status === "cancel") {
    return (
      <main className="flex flex-col lg:flex-row m-auto items-center pt-[113px] max-w-[1366px] h-min-witout-footer font-neue-ltc px-4 lg:px-0">
        <section className="w-full lg:w-2/3 h-auto flex flex-col items-center justify-center pb-20 lg:pb-56">
          <div className="max-w-2xl mx-auto text-center px-4">
            <Alert
              color="amber"
              icon={<XCircleIcon className="h-6 w-6" />}
              className="mb-6 lg:mb-8"
            >
              <div className="text-base lg:text-lg">
                <strong>No te preocupes, ¡no hay problema!</strong>
              </div>
              <div className="mt-2 text-sm lg:text-base">
                Entendemos que a veces las cosas no salen como planeamos. Tu
                apoyo de cualquier forma es muy valioso para nosotros.
              </div>
            </Alert>

            <h2 className="text-2xl lg:text-4xl font-bold text-cyan950 mb-4 lg:mb-6">
              ¡El café estará esperando! ☕
            </h2>

            <p className="text-base lg:text-lg text-cyan800 mb-6 lg:mb-8">
              No importa si no pudiste completar la donación hoy. Puedes
              intentarlo más tarde o simplemente seguir disfrutando de nuestra
              API gratuita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => (window.location.href = "/")}
                type="outline_blue"
                className="px-6 lg:px-8"
                text="Volver al inicio"
                size="l"
              />
              <Button
                onClick={() =>
                  (window.location.href =
                    "https://www.paypal.com/donate/?hosted_button_id=98LHFZWSDNUX8#")
                }
                type="primary"
                className="px-6 lg:px-8"
                text="Intentar de nuevo"
                size="l"
              />
            </div>
          </div>
        </section>

        {/* Coffee decorations - hidden on mobile */}
        <section className="hidden lg:flex relative items-center justify-start w-1/3">
          <div className="top-24 z-10 right-96 absolute w-72 h-20">
            <img className="" src={vectorCoffee} alt="VectorCoffee" />
          </div>

          <div className="top-24 z-10 right-96 absolute w-56 h-20">
            <img className="" src={vectorCoffee} alt="VectorCoffee" />
          </div>

          <img src={coffee} alt="Coffee cup" className="w-full max-w-sm" />
        </section>

        {/* Mobile coffee decoration */}
        <section className="lg:hidden flex justify-center mt-8 mb-8">
          <div className="relative">
            <img src={coffee} alt="Coffee cup" className="w-48 h-auto" />
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
              <img
                className="w-24 h-20 opacity-70"
                src={vectorCoffee}
                alt="VectorCoffee"
              />
            </div>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20">
              <img
                className="w-20 h-16 opacity-50"
                src={vectorCoffee}
                alt="VectorCoffee"
              />
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Contenido original cuando no hay parámetros de status
  return (
    <main className="flex flex-col lg:flex-row m-auto items-center pt-[113px] max-w-[1366px] h-min-witout-footer font-neue-ltc px-4 lg:px-0">
      <section className="w-full lg:w-2/3 h-auto flex justify-center lg:justify-around pb-20 lg:pb-56">
        <div className="text-center">
          <div className="">
            <h2 className="text-2xl lg:text-3xl font-bold text-cyan950 text-center">
              Let&apos;s share a friendly coffee!
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-8 mt-12 lg:mt-20">
            <button
              onClick={() =>
                window.open(
                  "https://www.paypal.com/donate/?hosted_button_id=98LHFZWSDNUX8"
                )
              }
              className="border-2 border-cyan700 rounded-full py-2 w-full sm:w-32 text-xl lg:text-2xl text-cyan700 hover:bg-cyan950 hover:text-white transition-all"
            >
              1$
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.paypal.com/donate/?hosted_button_id=98LHFZWSDNUX8"
                )
              }
              className="border-2 border-cyan700 rounded-full py-2 w-full sm:w-32 text-xl lg:text-2xl text-cyan700 hover:bg-cyan950 hover:text-white transition-all"
            >
              5$
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.paypal.com/donate/?hosted_button_id=98LHFZWSDNUX8"
                )
              }
              className="border-2 border-cyan700 rounded-full py-2 w-full sm:w-32 text-xl lg:text-2xl text-cyan700 hover:bg-cyan950 hover:text-white transition-all"
            >
              10$
            </button>
          </div>
        </div>
      </section>

      {/* Coffee decorations - hidden on mobile */}
      <section className="hidden lg:flex relative items-center justify-start w-1/3">
        <div className="-top-72 z-10 right-24 absolute w-72 h-20">
          <img className="" src={vectorCoffee} alt="VectorCoffee" />
        </div>

        <div className="-top-72 z-10 right-24 absolute w-56 h-20">
          <img className="" src={vectorCoffee} alt="VectorCoffee" />
        </div>
        <img src={coffee} alt="Coffee cup" className="w-full max-w-sm" />
      </section>

      {/* Mobile coffee decoration */}
      <section className="lg:hidden flex justify-center mt-8 mb-8">
        <div className="relative">
          <img src={coffee} alt="Coffee cup" className="w-48 h-auto" />
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
            <img
              className="w-24 h-20 opacity-70"
              src={vectorCoffee}
              alt="VectorCoffee"
            />
          </div>
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20">
            <img
              className="w-20 h-16 opacity-50"
              src={vectorCoffee}
              alt="VectorCoffee"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Support;
