import { useEffect, useState } from "react";

export default function HeroSlider({
  slider,
  height,
  ButtonDesc,
  Button,
  Indicator,
}) {
  const [sliderCounter, setSliderCounter] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("load", () => {
      setDeviceWidth(window.innerWidth);
    });

    window.addEventListener("resize", () => {
      setDeviceWidth(window.innerWidth);
    });
  }, [deviceWidth]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSliderCounter((prev) => {
  //       const newCounter = prev + 1;
  //       return newCounter > slider.length - 1 ? 0 : newCounter;
  //     });
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  const containerStyle = {
    height: height,
    width: "100%",
    overflow: "hidden",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${slider[sliderCounter].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    animation: "all 0.5s linear",
  };

  const sliderNext = {
    background: "none",
    position: "absolute",
    top: "50%",
    right: "1.5rem",
    fontSize: "2rem",
    color: "white",
    outline: "none",
    border: "none",
    cursor: "pointer",
  };

  const sliderPrev = {
    background: "none",
    position: "absolute",
    top: "50%",
    left: "1.5rem",
    fontSize: "2rem",
    color: "white",
    outline: "none",
    border: "none",
    cursor: "pointer",
  };

  const title = {
    color: "white",
    fontSize: deviceWidth > 768 ? "80px" : "40px",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  const sliderTitle = {
    maxWidth: "50%",
    margin: "0 auto",
    userSelect: "none",
  };

  //slider title  button
  const titleBtn = {
    display: "block",
    border: "none",
    outline: "none",
    cursor: "pointer",
    padding: "10px 30px",
    margin: "0 auto",
    background: ButtonDesc.btnColor,
    color: "white",
  };

  const sliderDotContainer = {
    position: "absolute",
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const sliderDot = {
    width: deviceWidth <= 450 ? "20px" : "50px",
    height: "5px",
    display: "inline-block",
    borderRadius: "50px",

    margin: "0 8px",
    cursor: "pointer",
  };

  // next slider

  function handleNext() {
    if (sliderCounter >= slider.length - 1) {
      setSliderCounter(0);
    } else {
      setSliderCounter((prev) => prev + 1);
    }
  }

  // prev slider

  function handlePrev() {
    if (sliderCounter <= 0) {
      setSliderCounter(slider.length - 1);
    } else {
      setSliderCounter((prev) => prev - 1);
    }
  }

  //slider dot click
  function handleSliderDot(e) {
    const counter = e.target.getAttribute("data-counter");
    setSliderCounter(parseInt(counter, 10));
  }

  return (
    <section style={containerStyle} draggable="true" id="sliderContainer">
      <div>
        <button style={sliderNext} onClick={handleNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        <button style={sliderPrev} onClick={handlePrev}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div style={sliderTitle}>
          <h1 style={title}>{slider[sliderCounter].title}</h1>
          <br />
          <br />

          {Button ? (
            <button style={titleBtn}>
              <a
                href={ButtonDesc.btnLink}
                style={{ textDecoration: "none", color: "white" }}
              >
                Shop Now
              </a>
            </button>
          ) : (
            ""
          )}
        </div>

        {Indicator ? (
          <section style={sliderDotContainer}>
            {slider.map((item, index) => {
              return (
                <span
                  key={index}
                  data-counter={index}
                  style={{
                    ...sliderDot,
                    background: sliderCounter == index ? "#32e6e2" : "white",
                  }}
                  onClick={handleSliderDot}
                ></span>
              );
            })}
          </section>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
