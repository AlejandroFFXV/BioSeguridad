"use client";
import { useState } from "react";
import Link from "next/link";

const PrivacyNotice = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCloseButtonClick = () => {
    setIsVisible(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {isVisible && (
        <div className="text-black fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <h2 className="text-lg font-bold mb-4">Aviso de Privacidad</h2>
            <p className="text-sm mb-4">
              BioSeguridad respeta y protege la privacidad de todos los
              usuarios. Este aviso de privacidad tiene como objetivo informarte
              sobre cómo recopilamos, usamos y protegemos la información que nos
              proporcionas al utilizar nuestra aplicación.
              <br />
              <Link className="font-bold text-blue-500" href="/privacy">
                Aviso de privacidad completo
              </Link>
            </p>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="privacyCheckbox"
                className="form-checkbox checkbox text-amber-600"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="privacyCheckbox" className="ml-2 py-5 text-sm">
                Acepto los términos y condiciones de privacidad
              </label>
            </div>
            <button
              className={`py-2 px-4 rounded bg-amber-600 text-white ${
                isChecked
                  ? "hover:bg-amber-700"
                  : "cursor-not-allowed opacity-50"
              }`}
              onClick={handleCloseButtonClick}
              disabled={!isChecked}
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyNotice;
