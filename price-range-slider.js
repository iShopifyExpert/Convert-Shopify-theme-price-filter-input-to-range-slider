document.addEventListener('DOMContentLoaded', function () {
  var inputFromLabel = document.querySelector('.price-range .price-range-label .field__label[for=From]');
  var inputToLabel = document.querySelector('.price-range .price-range-label .field__label[for=To]');
  var inputFromRange = document.querySelector('input[type="range"][aria-label="From"]');
  var inputToRange = document.querySelector('input[type="range"][aria-label="To"]');
  var inputFromNumber = document.querySelector('.price-range__input input[name="filter.v.price.gte"]');
  var inputToNumber = document.querySelector('.price-range__input input[name="filter.v.price.lte"]');
  var rangeGroup = document.querySelector('.price-range__range-group');

  function updateRangeGroup() {
    var minPercent = (inputFromRange.value - inputFromRange.min) / (inputFromRange.max - inputFromRange.min) * 100;
    var maxPercent = (inputToRange.value - inputToRange.min) / (inputToRange.max - inputToRange.min) * 100;
    rangeGroup.style.setProperty('--range-min', `${minPercent}%`);
    rangeGroup.style.setProperty('--range-max', `${maxPercent}%`);
  }

  function enforceRangeLogic() {
    if (parseInt(inputFromRange.value) > parseInt(inputToRange.value)) {
      inputFromRange.value = inputToRange.value;
      inputFromNumber.value = inputToRange.value;
      inputFromLabel.innerText = inputToRange.value;
    }
    updateRangeGroup(); // Ensure visual update occurs after logic enforcement
  }

  // Update number input and range positions when the 'From' range changes
  if (inputFromRange && inputFromNumber && inputFromLabel) {
    inputFromRange.addEventListener('input', function () {
      inputFromNumber.value = this.value;
      inputFromLabel.innerText = this.value;
      updateRangeGroup();
      enforceRangeLogic();
    });
  }

  // Update number input and range positions when the 'To' range changes
  if (inputToRange && inputToNumber && inputToLabel) {
    inputToRange.addEventListener('input', function () {
      inputToNumber.value = this.value;
      inputToLabel.innerText = this.value;
      updateRangeGroup();
      enforceRangeLogic();
    });
  }
});
