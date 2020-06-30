const size = {
    mobile: '375px',
    laptop: '1024px',
    desktop: '2560px',
};
  
const device = {
    mobile: `(min-width: ${size.mobile})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
};
  
export default device;