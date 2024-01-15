function calculateBoth() {
  calculate();
  toggleCalculation();
  displayBothResults();
}

function displayBothResults() {
  var side = document.getElementById("side").value;
  var resultArea = document.getElementById("result-area");
  var resultPerimeter = document.getElementById("result-perimeter");

  if (side !== "") {
    var area = side * side;
    var perimeter = 4 * side;

    resultArea.innerHTML = `Luas: ${area}`;
    resultPerimeter.innerHTML = `Keliling: ${perimeter}`;

    resultArea.style.display = "block";
    resultPerimeter.style.display = "block";
  } else {
    resultArea.innerHTML = "";
    resultPerimeter.innerHTML = "";
  }
}

function toggleCalculation() {
  var toggleSwitch = document.querySelector(
  '.toggle-switch input[type="checkbox"]'
  );
  var resultArea = document.getElementById("result-area");
  var resultPerimeter = document.getElementById("result-perimeter");
  var calculationTitle = document.getElementById("calculation-title");

  if (toggleSwitch.checked) {
  resultArea.style.display = "none";
  resultPerimeter.style.display = "none";
  calculationTitle.innerHTML = "Hitung Keliling Persegi";
  } else {
   resultArea.style.display = "none";
   resultPerimeter.style.display = "none";
   calculationTitle.innerHTML = "Hitung Luas Persegi";
   }
  }

function calculate() {
  var side = document.getElementById("side").value;
  var resultArea = document.getElementById("result-area");
  var resultPerimeter = document.getElementById("result-perimeter");

  if (side !== "") {
    var area = side * side;
    var perimeter = 4 * side;

    if (
      document.querySelector('.toggle-switch input[type="checkbox"]').checked
    ) {
      resultPerimeter.innerHTML = `Keliling: ${perimeter}`;
      resultPerimeter.style.display = "block";
      resultArea.style.display = "none";
    } else {
      resultArea.innerHTML = `Luas: ${area}`;
      resultArea.style.display = "block";
      resultPerimeter.style.display = "none";
    }
  } else {
    resultArea.innerHTML = "";
    resultPerimeter.innerHTML = "";
  }
}

function resetForm() {
  document.getElementById("side").value = "";
  document.getElementById("result-area").innerHTML = "";
  document.getElementById("result-perimeter").innerHTML = "";
  document.getElementById("result-area").style.display = "none";
  document.getElementById("result-perimeter").style.display = "none";
  document.querySelector(
    '.toggle-switch input[type="checkbox"]'
  ).checked = false;
}
