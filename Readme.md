
# Welcome to Hero Carousel. Simply customize your hero carousel.

Small react npm package which help you to build your hero carousel simple easy. Just install and enjoy.




## Installation

Install hero carousel with npm

```bash
  npm install @rahed/hero-caro
```
    
## Usage/Examples

```javascript
//import HeroCarousel from directory
import HeroCarousel from "@rahed/hero-caro";


//slider object
const slider = [
    {
        url: "your image url 1",
        title: "your title 1"
    }, 
    {
        url: "your image url 2",
        title: "your title 2"
    },
]

function App() {
    //return HeroCarousel
  return <HeroCarousel slider={slider} {/* pass other config props */ }/>
}
```


## Key feature

- Slider Indicator (you can turn on/off)
- Title for each slider (you can remove title)
- Title button [supports Links and Background Color. By default text color is white.] (you can turn on/off)
- Responsive design.
- slider next/previous button

## API Reference

#### all api reference

| Parameter | Type     | Description                       |
| :-------- | :------- | :---------------------------------------------------------- |
| `slider`      | `Array of object` | **Required**. add an array of object with key url: "your image url", title: "your cards title" **Note: leave title blank string and ignore title in carousel** |
| `Button`      | `Boolean` | Hide or Show title button  |
| `ButtonDesc`      | `Object` | ButtonDesc {btnLink: "accept a link which is trigger title button", btnBackground: "color of background title button", btnTitle: "title button text"}  |
| `Indicator`      | `Boolean` | Hide or Show Carousel Indicator |
| `Height`      | `string` | Set height of the carousel |
| `width`      | `string` | Set width of the carousel |




## Screenshots

![App Screenshot](https://snipboard.io/UVJpqN.jpg)


## License

[MIT]
- Icon is from react icons and reference screenshot background image collected from internet.


## Authors

- [@MD Rahed Mia](https://github.com/MD-Rahed-Mia)

