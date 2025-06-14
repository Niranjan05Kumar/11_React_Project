import { useRef } from "react";
import Card from "./card";

function foreground() {
    const boxRef = useRef()
  const data = [
    {
      desc: "You can drag and drop these three cards",
      fileSize: "1.4Mb",
      close: false,
      tags: {
        isOpen: true,
        tagTitle: true,
        tagColor: "green",
      },
    },
    {
      desc: "You can drag and drop these three cards",
      fileSize: "0.3Mb",
      close: true,
      tags: {
        isOpen: true,
        tagTitle: false,
        tagColor: "blue",
      },
    },
    {
      desc: "But not outside the window screen.",
      fileSize: "4.4Mb",
      close: false,
      tags: {
        isOpen: false,
        tagTitle: null,
        tagColor: "green",
      },
    },
  ];
  return (
    <>
      <div ref={boxRef} className="fixed top-0 left-0 w-full h-screen z-[3] flex flex-wrap gap-[20px]" style={{padding:'20px'}}>
        {data.map((item, index) => (
            <Card data={item} refferance={boxRef} />
        ))}
      </div>
    </>
  );
}

export default foreground;
