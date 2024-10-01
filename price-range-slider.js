document.addEventListener('DOMContentLoaded', function () {
  var inputFromRange = document.querySelector('input[type="range"][aria-label="From"]');
  var inputToRange = document.querySelector('input[type="range"][aria-label="To"]');
  var inputFromNumber = document.querySelector('.price-range__input input[name="filter.v.price.gte"]');
  var inputToNumber = document.querySelector('.price-range__input input[name="filter.v.price.lte"]');

  function enforceRangeLogic() {
    if (parseInt(inputFromRange.value) > parseInt(inputToRange.value)) {
      inputFromRange.value = inputToRange.value;
      inputFromNumber.value = inputToRange.value;
    }
  }

  // Update number input when the 'From' range changes
  if (inputFromRange && inputFromNumber) {
    inputFromRange.addEventListener('input', function () {
      inputFromNumber.value = this.value;
      enforceRangeLogic();
    });
  }

  // Update number input when the 'To' range changes
  if (inputToRange && inputToNumber) {
    inputToRange.addEventListener('input', function () {
      inputToNumber.value = this.value;
      enforceRangeLogic();
    });
  }
});
