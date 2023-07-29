const imageAddresses = [
    '../images/gallery/1.jpeg',
    '../images/gallery/2.jpeg',
    '../images/gallery/3.jpeg',
    '../images/gallery/4.jpeg',
    '../images/gallery/5.jpeg',
    '../images/gallery/6.jpeg',
    '../images/gallery/7.jpeg',
    '../images/gallery/8.jpeg',
    '../images/gallery/9.jpeg',
    '../images/gallery/10.jpeg',
    '../images/gallery/11.jpeg',
    '../images/gallery/12.jpeg',
    '../images/gallery/13.jpeg',
    '../images/gallery/14.jpeg',
    '../images/gallery/15.jpeg',
    // Add more image addresses here
  ];

  // Replace this hypothetical function with a real function to get the height of the image
  function getImageHeight(imageAddress) {
    // Simulate getting the image height based on the address
    // Replace this with your own code to get the actual height of the image
    // For demonstration purposes, we assume all images have the same height (100 pixels).
    return 100;
  }

  function calculateSum(arr) {
    return arr.reduce((sum, height) => sum + height, 0);
  }

  function divideIntoArrays(addresses, numberOfArrays) {
    const heights = addresses.map(getImageHeight);
    const totalHeight = calculateSum(heights);
    const targetHeight = totalHeight / numberOfArrays;

    // Sort the image addresses based on their heights in descending order
    const sortedAddresses = addresses.sort((a, b) => getImageHeight(b) - getImageHeight(a));

    let sums = new Array(numberOfArrays).fill(0);
    const dividedArrays = new Array(numberOfArrays).fill(null).map(() => []);

    for (const address of sortedAddresses) {
      // Find the index of the array with the smallest sum so far
      const minSumIndex = sums.indexOf(Math.min(...sums));

      // Add the image address to the array with the smallest sum
      dividedArrays[minSumIndex].push(address);

      // Update the sum of the selected array
      sums[minSumIndex] += getImageHeight(address);
    }

    return dividedArrays;
  }

let dividedArrays;

if (innerWidth >= 1300){
      // Call the function to divide the addresses into five arrays
  dividedArrays = divideIntoArrays(imageAddresses, 5);

  // Output the result to the console
  console.log('Divided Arrays:', dividedArrays);
}
else if(innerWidth >= 1046){
    dividedArrays = divideIntoArrays(imageAddresses, 4);

    // Output the result to the console
    console.log('Divided Arrays:', dividedArrays);
}
else if(innerWidth >= 792){
    dividedArrays = divideIntoArrays(imageAddresses, 3);

    // Output the result to the console
    console.log('Divided Arrays:', dividedArrays);
}
else if(innerWidth >= 538){
    dividedArrays = divideIntoArrays(imageAddresses, 2);

    // Output the result to the console
    console.log('Divided Arrays:', dividedArrays);
}
else{
    dividedArrays = divideIntoArrays(imageAddresses, 1);

    // Output the result to the console
    console.log('Divided Arrays:', dividedArrays);
}
content = '';

for(let i = 0; i < dividedArrays.length; i++){
    content += '<div class="gallery d-flex flex-column">';
    for(let j = 0; j < dividedArrays[i].length; j++){
        content += '<img class="img-fluid" src="' + dividedArrays[i][j].slice(3) + '">';
    }
    content += '</div>';
}

document.getElementsByClassName('gallcont')[0].innerHTML = content;