
function radomizer(){

  const min = 1;
  const max = 100;
  const random = Math.ceil(min + Math.random() * (max - min));
  return random;
}

export function getimageObject() {
const imageObject = [];
  for (let i = 0; i <= 12; i++) {
    const obj = {};

    obj["id"] = i ;
    obj["url"] = require("../assets/jpg/" + i + ".jpg");
    //let src = "../assets/jpg/" + i + ".jpg";
    imageObject.push(obj);
    
    
  }
  


  return imageObject;
}




