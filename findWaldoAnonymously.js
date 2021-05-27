const findWaldo = function(names, found) {
  names.forEach((element, index) => {if (element === "Waldo") {found(index);}})}

// (index) => {console.log(`found Waldo at index ${index}`)}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], (index) => console.log(`found Waldo at index ${index}`));