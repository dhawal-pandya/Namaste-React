export const IMG_CDN_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

const resDataList = [];

for (let i = 0; i < 6; i++) {
  resDataList.push({
    data: {
      name: '',
      uuid: i,
      cuisines: [''],
      minDeliveryTime: 0,
    },
  });
}
export default resDataList;
