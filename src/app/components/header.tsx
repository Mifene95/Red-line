export default function Header() {
  return (
    <>
      <div className="flex flex-col w-full h-[940px] bg-leather-texture justify-center items-center">
        <div className="flex flex-col items-center">
          {" "}
          <img
            src="/images/redline2.png"
            alt="red-line logo"
            className="h-[350px] w-[350px] mt-[-30px]"
          />
          <h1 className="text-white text-4xl mt-4">
            Calidad y profesionalidad
          </h1>
          <h3 className="text-white text-2xl mt-5">
            Libera el potencial de tu vehiculo
          </h3>
        </div>
      </div>
    </>
  );
}
