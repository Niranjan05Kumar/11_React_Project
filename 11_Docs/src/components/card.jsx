import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"

const Card = ({ data, refferance }) => {
  return (
    <motion.div drag dragConstraints={refferance} whileDrag={{scale : 1.1}} whileHover={{scale: 1.05}} dragTransition={{bounceStiffness: 100, bounceDamping: 20}}
    style={{ padding: "26px 20px" }} 
    className="relative overflow-hidden text-zinc-800 w-50 h-64 bg-[#eee9] rounded-3xl flex flex-col">
      <FaFileAlt size={20} />
      <p className="leading-5 font-semibold text-zinc-900/70" style={{ margin: "16px 0 0 0" }}>
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="w-full flex items-center justify-between" style={{ padding: "12px 20px" }}>
          <h4 className={`text-md font-semibold 
            ${
              data.tags.tagColor === "green"
                ? "text-green-600"
                : "text-blue-600"
            }`}>
            {data.fileSize}
          </h4>
          <span className="w-6 h-6 bg-zinc-600 text-white rounded-full flex items-center justify-center ">
            {data.close ? <IoClose /> : <IoMdDownload />}
          </span>
        </div>
        {data.tags.isOpen && (
          <div className={`w-full flex items-center justify-center font-semibold text-md text-white h-[40px]
                ${
                  data.tags.tagColor === "green"
                    ? "bg-green-600"
                    : "bg-blue-600"
                }`}>
            {data.tags.tagTitle ? (<h5>Download Now</h5>) : 
            (<p className="h-[6px] w-6/8 overflow-hidden bg-[#eee5] rounded-2xl">
                <p className="h-[6px] w-3/5 bg-[#eee]"></p>
              </p>)}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
