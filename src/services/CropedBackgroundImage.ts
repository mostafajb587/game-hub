import image from '../assets/icons8-no-image-80.png'
const CropedBackgroundImage=(url:string)=>{
  if(!url)return image;
  const target='media/';
  const index=url.indexOf(target)+target.length
  return url.slice(0,index)+'crop/600/400/'+url.slice(index)
}
export default CropedBackgroundImage
