import { CopyToClipboard } from "react-copy-to-clipboard";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const ClipBoard = (texto) => {
  const { propText = " https://ghibliapi.com/api" } = texto;

  const [copy, setCopy] = useState(false);

  const TimeCopy = () => {
    setCopy();
  };

  setTimeout(TimeCopy, 1500);

  return (
    <section className="w-[510px] h-[43px] bg-white flex justify-between items-center px-[15px] rounded-[4px]">
      <p className="text-[16px] text-cyan-700 font-normal">{propText}</p>

      <CopyToClipboard text="https://ghibliapi.com/api">
        <div className="flex gap-3">
          {copy && (
            <span className="flex items-center gap-1 text-[15px] text-gray-600">
              <FaCheck className="text-green-500" />
              Copiado
            </span>
          )}

          <button onClick={() => setCopy(true)}>
            <HiOutlineClipboardDocumentCheck className="text-gray-600 w-[18px] h-[18px]" />
          </button>
        </div>
      </CopyToClipboard>
    </section>
  );
};

export default ClipBoard;

