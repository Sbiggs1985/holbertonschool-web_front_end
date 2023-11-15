/** @format */

const roomDimensions = {
  width: 50,
  length: 100,
  getArea: function () {
    return this.width * this.length;
  },
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Now boundGetArea is a standalone function with the context of roomDimensions
// You can call it like a regular function
console.log("Surface Area:", boundGetArea()); // Output: Surface Area: 5000
