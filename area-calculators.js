function calculateRectangleArea(length, width) {
  // Check if numbers are negative
  if (length >= 0 && width >= 0){
    return length * width;
  }
}

function calculateTriangleArea(base, height) {
  // Check if numbers are negative
  if (base >= 0 && height >= 0) {
    return base * height / 2;
  }
}

function calculateCircleArea(radius) {
  // Check if numbers are negative
  if (radius >= 0) {
    return Math.PI * radius ** 2;
  }
}
