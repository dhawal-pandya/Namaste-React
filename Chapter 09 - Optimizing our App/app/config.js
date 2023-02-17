export const IMG_CDN_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

export const SWIGGY_API_URL_RESTAURANTS =
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.5992349&lng=72.9342451&page_type=DESKTOP_WEB_LISTING';

export const SWIGGY_API_URL_MENU =
  'https://www.swiggy.com/dapi/menu/v4/full?lat=20.5992349&lng=72.9342451&menuId=';

const fResData = [];

for (let i = 0; i < 6; i++) {
  let temp = {
    data: {
      name: '',
      uuid: i,
      cuisines: [''],
      minDeliveryTime: 0,
    },
  };
  fResData.push(temp);
}
export default fResData;
