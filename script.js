function expandContract(day) {
  if(event.target.id == "container" || event.target.id == "bottom-section" || event.target.id == "title" || event.target.id == "titleName"){
    switch(day) {
            case 'm':
                const mon = document.getElementById("expand-contract-mon")
                const btnMon = document.getElementById("btnMon")
                mon.classList.toggle('expanded')
                mon.classList.toggle('collapsed')
                
                if(mon.classList.contains('expanded')){
                  setTimeout(() => {btnMon.style.visibility = "visible";}, 250);
                }
                else{
                  btnMon.style.visibility = "hidden";
                  btnMon.className = "btnEdit";
                }
                
              break;
            case 't':
                const tue = document.getElementById("expand-contract-tue")
                const btnTue = document.getElementById("btnTue")
                tue.classList.toggle('expanded')
                tue.classList.toggle('collapsed')

                if(tue.classList.contains('expanded')){
                  setTimeout(() => {btnTue.style.visibility = "visible";}, 250);
                }
                else{
                  btnTue.style.visibility = "hidden";
                  btnTue.className = "btnEdit";
                }
              break;
            default:
              alert("Error identifying Day")
      }
  }
}

function buttonMonday() {
  const btnMon = document.getElementById("btnMon");
  btnMon.classList.toggle('btnAdd');
  btnMon.classList.toggle('btnEdit');
}

function buttonTuesday() {
  const btnTue = document.getElementById("btnTue");
  btnTue.classList.toggle('btnAdd');
  btnTue.classList.toggle('btnEdit');
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