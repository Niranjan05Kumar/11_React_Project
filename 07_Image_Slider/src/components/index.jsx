import "./style.css";
import Lion from "./images/lion.jpg";
import Tiger from "./images/tiger.jpg";
import Wolf from "./images/wolf.jpg";
import Bear from "./images/bear.jpg";
import Elephant from "./images/elephant.jpg";
import { FaChevronRight, FaChevronLeft, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

const index = () => {
  const [item, setItem] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);
  let [activeItem, setActiveItem] = useState(0);
  const itemCount = 5;

  useEffect(() => {
    const items = document.querySelectorAll(".item-parent .item");
    const thumbnails = document.querySelectorAll(".thumb-item");
    setItem(items);
    setThumbnail(thumbnails);
  }, []);

  const showNext = () => {
    activeItem = activeItem + 1;
    if (activeItem >= itemCount) {
      activeItem = 0;
    }
    showSlide();
  };
  const showPrev = () => {
    activeItem = activeItem - 1;
    if (activeItem < 0) {
      activeItem = itemCount - 1;
    }
    showSlide();
  };

  const showSlide = () => {
    item.forEach((slide) => slide.classList.remove("active"));
    thumbnail.forEach((thumb) => thumb.classList.remove("active"));
    item[activeItem].classList.add("active");
    thumbnail[activeItem].classList.add("active");
  };

  const handleThumbnailClick = (index) => {
    setActiveItem(index);
    showSlide(index);
  };

  return (
    <div>
      <nav>
        <div className="logo">Img Slider</div>
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Info</a>
        </div>
        <div className="search">
          <FaSearch size={20} />
        </div>
      </nav>

      <div className="slider">
        <div className="item-parent">
          <div className="item active">
            <img src={Lion} alt="lion" />
            <div className="content">
              <h4>King</h4>
              <h1>Lion</h1>
              <p>
                The king of the jungle, the lion is a majestic predator. It
                roams the African savanna, its powerful roar echoing through the
                grasslands.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={Bear} alt="bear" />
            <div className="content">
              <h4>Aggression</h4>
              <h1>Bear</h1>
              <p>
                Bears are powerful omnivores, adapted to various environments.
                They are known for their strength and hibernation in winter.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={Wolf} alt="wolf" />
            <div className="content">
              <h4>Prowess</h4>
              <h1>Wolf</h1>
              <p>
                A social predator, the wolf hunts in packs. Its howl echoes
                through the wild, a signal of unity and determination.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={Elephant} alt="elephant" />
            <div className="content">
              <h4>Power</h4>
              <h1>Elephant</h1>
              <p>
                The largest land animal, the elephant is a gentle giant. With
                its immense size and wisdom, it is a symbol of strength and
                patience.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={Tiger} alt="tiger" />
            <div className="content">
              <h4>Predation</h4>
              <h1>Tiger</h1>
              <p>
                {" "}
                The tiger, with its striking orange and black stripes, is a
                solitary hunter. It is a powerful symbol of strength and grace
                in the forest.
              </p>
            </div>
          </div>
        </div>
        <div className="arrows">
          <button onClick={showPrev}>
            <FaChevronLeft size={26} />
          </button>
          <button onClick={showNext}>
            <FaChevronRight size={26} />
          </button>
        </div>
        <div className="thumbnail">
          <div
            className="thumb-item active"
            onClick={() => handleThumbnailClick(0)}
          >
            <img src={Lion} alt="lion" />
            <h5>Lion</h5>
          </div>
          <div className="thumb-item" onClick={() => handleThumbnailClick(1)}>
            <img src={Bear} alt="bear" />
            <h5>Bear</h5>
          </div>
          <div className="thumb-item" onClick={() => handleThumbnailClick(2)}>
            <img src={Wolf} alt="wolf" />
            <h5>Wolf</h5>
          </div>
          <div className="thumb-item" onClick={() => handleThumbnailClick(3)}>
            <img src={Elephant} alt="elephant" />
            <h5>Elephant</h5>
          </div>
          <div className="thumb-item" onClick={() => handleThumbnailClick(4)}>
            <img src={Tiger} alt="tiger" />
            <h5>Tiger</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
