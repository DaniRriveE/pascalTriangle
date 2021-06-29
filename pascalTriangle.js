document.getElementById("inputN").addEventListener('click', buildTriangle);


function buildTriangle() {
  let n = nValue.value;
  let values = findValues(n);
  let triangle = document.getElementById("triangle");

  triangle.innerHTML = '';

  for (let i = 0; i < values.length; i++) {
    let triangleRow = document.createElement("div");
    triangleRow.classList.add("triangleRow");
    for (let j = 0; j < values[i].length; j++) {
      let triangleElement = document.createElement("div");
      triangleElement.classList.add("triangleElement");
      let triangleElementText = document.createTextNode(values[i][j]);
      triangleElement.appendChild(triangleElementText);
      triangleRow.appendChild(triangleElement);
    }
    triangle.appendChild(triangleRow);
  }

}



function findValues(n) {
  let coeffs = [[1]];
  for (let i = 1; i <= n; i++) {
    let row = [];
    let previousRow = coeffs[i - 1];

    row.push(1);
    for (let k = 0; k < previousRow.length - 1; k++) {
      row.push(previousRow[k] + previousRow[k + 1]);
    }
    row.push(1);
    coeffs.push(row);
  }
  return coeffs;
}