export const IMG_CDN_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

const resDataList = [];
const data = {
  data: {
    name: '',
    uuid: '1',
    cuisines: [''],
    minDeliveryTime: 0,
  },
};

for (let i = 0; i < 6; i++) {
  resDataList.push(data);
}
export default resDataList;
