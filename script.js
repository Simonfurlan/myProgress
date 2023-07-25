function expandContract(day) {
   
    switch(day) {
        case 'm':
            const mon = document.getElementById("expand-contract-mon")
            mon.classList.toggle('expanded')
            mon.classList.toggle('collapsed')
          break;
        case 't':
            const tue = document.getElementById("expand-contract-tue")
            tue.classList.toggle('expanded')
            tue.classList.toggle('collapsed')
          break;
        default:
          alert("Error identifying Day")
      }
}

function addToTable(table, e1, e2, e3, e4) {

  let tb = document.getElementById(table);

  let row = tb.insertRow(-1); 

  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);
  let c4 = row.insertCell(3);

  c1.innerText = e1
  c2.innerText = e2
  c3.innerText = e3
  c4.innerText = e4
}

addToTable("tableMon", "Calf Raises", "150kg", "6", "15")