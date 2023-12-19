//Solution 1: 97ms 49.55 MB
function imageSmoother(image: number[][]): number[][] {
  const height = image.length;
  const width = image[0].length;
  const smoothedImage = [];

  for (let row = 0; row < height; row++) {
    smoothedImage.push([]);
    for (let col = 0; col < width; col++) {
      let filter = 0;
      let cellCount = 0;

      for (let y = row - 1; y < row + 2; y++) {
        for (let x = col - 1; x < col + 2; x++) {
          if (y < 0 || y >= height || x < 0 || x >= width) {
            continue;
          }
          filter += image[y][x];
          cellCount++;
        }
      }

      smoothedImage[row].push(Math.floor(filter / cellCount));
    }
  }

  return smoothedImage;
}

//Solution 2: 81ms 49.67 MB
function imageSmoother(image: number[][]): number[][] {
  const height = image.length;
  const width = image[0].length;
  const smoothedImage: number[][] = [];

  for (let row = 0; row < height; row++) {
    smoothedImage.push([]);
    for (let col = 0; col < width; col++) {
      let sum = 0;
      let count = 0;

      for (let pixelY = row - 1; pixelY <= row + 1; pixelY++) {
        for (let pixelX = col - 1; pixelX <= col + 1; pixelX++) {
          if (pixelY >= 0 && pixelY < height && pixelX >= 0 && pixelX < width) {
            sum += image[pixelY][pixelX];
            count++;
          }
        }
      }

      smoothedImage[row].push(Math.floor(sum / count));
    }
  }

  return smoothedImage;
}
