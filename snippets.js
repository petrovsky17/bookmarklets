const getCanvas = (width, height) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.id = "cropImg";
  document.body.appendChild(canvas);
  return canvas;
}
const downCropImg = (src, cropY) => {
  const img = new Image();
  img.crossOrigin = '*';
  img.src = src;
  img.onload = function(){
  	const width = img.width;
    const height = img.height - cropY;
    const canvas = getCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height, 0, 0, width, height);
    const download = document.createElement('a');
	download.innerText = "down";
    download.download = Date.now() + '.jpg';
    download.href = canvas.toDataURL();
    download.click();
    window.scrollTo(0, 1000000);
  }
}

downCropImg("https://play-lh.googleusercontent.com/dhHQj8GaDK_gFgZcUHQxcmJLtQ4WnByHbWGrkjpyg5PxGREode9vGRm711iORHEC3Q=s180", 20);
