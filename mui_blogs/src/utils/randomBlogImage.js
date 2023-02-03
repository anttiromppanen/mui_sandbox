import img1 from '../static/img1.jpg';
import img2 from '../static/img2.jpg';
import img3 from '../static/img3.jpg';

const images = [img1, img2, img3];
const randomImage = () => images[Math.floor(Math.random() * images.length)];

export default randomImage;
