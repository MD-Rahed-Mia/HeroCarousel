# this is a simple carousel for website hero section.


<h1>Prop List</h1>


//slider
const slider = [
  {
    url: "https://assets-global.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
    title: "Fashion changing Always",
  },
  {
    url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Improve Your Design sense",
  },
  {
    url: "https://www.adobe.com/acrobat/hub/media_173d13651460eb7e12c0ef4cf8410e0960a20f0ee.jpeg?width=750&format=jpeg&optimize=medium",
    title: "Explore the earth and moon",
  },
];

const titleButton = {
  btnColor: "#9f78ff",
  btnLink: "#",
};



<HeroSlider
          slider={slider}
          height={"60vh"}
          ButtonDesc={titleButton}
          Button={true}
          Indicator={true}
          IndicatorWidth="50px"
          />
