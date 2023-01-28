const colors = ['#FFD4B2', '#FFF6BD', '#CEEDC7', '#86C8BC', '#B08BBB', '#ECA869', '#39B5E0', '#B6EADA', '#6C00FF', '#6D67E4'];
let index = 0;

const backgroundColorPicker = () => {
  if (index >= colors.length) {
    index = 0;
  }
  const nextColor = colors[index];
  index += 1;

  return nextColor;
};

export default backgroundColorPicker;
