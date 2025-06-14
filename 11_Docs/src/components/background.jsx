import React from "react";

function background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen ">
        <div className="absolute top-12 text-xl text-zinc-600  w-full flex justify-center font-semibold">
          Document
        </div>
        <h1 className="absolute text-[13vw] text-zinc-500 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] tracking-tighter font-semibold ">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default background;
