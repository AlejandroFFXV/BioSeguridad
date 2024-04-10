import "@/assets/head.css";
import Link from "next/link";

const NeroHeadTest = () => {
  return (
    <>
      <header className="paddingEx">
        <div className="justify-start ml-6">
          <Link href="/">
            <p
              className="opacity-50 duration-300 delay-300 pb-2 px-2
              hover:opacity-100 hover:animate-pulse hover:bg-amber-500
              ease-in-out rounded-full inline-block font-bold"
            >
              BioSeguridadIA
            </p>
          </Link>
        </div>
        <div
          className="absolute top-4 right-0 flex flex-wrap mb-6 
              dark:text-white font-sans font-light text-2xl list-inside"
        >
          <Link href="/face">
            <div className=" mr-4 md:mr-6">
              <p
                className="opacity-50 duration-300 delay-300 pb-2 px-2
                hover:opacity-100 hover:animate-pulse hover:bg-amber-500
                ease-in-out rounded-full inline-block font-bold"
              >
                App
              </p>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default NeroHeadTest;
