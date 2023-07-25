let selectedTable = null;


function expandContract(day) {
  if(event.target.id == "container" || event.target.id == "bottom-section" || event.target.id == "title" || event.target.id == "titleName"){
    switch(day) {
            case 'm':
                const mon = document.getElementById("expand-contract-mon")
                const btnMon = document.getElementById("btnMon")
                mon.classList.toggle('expanded')
                mon.classList.toggle('collapsed')
                
                if(mon.classList.contains('expanded')){
                    btnMon.style.visibility = "visible";
                    btnMon.style.opacity = 1;
                    btnMon.style.transition = "opacity 0.25s linear";
                }
                else{
                  btnMon.style.visibility = "hidden";
                  btnMon.style.opacity = 0;
                  btnMon.className = "btnEdit";
                }
                
              break;
            case 't':
                const tue = document.getElementById("expand-contract-tue")
                const btnTue = document.getElementById("btnTue")
                tue.classList.toggle('expanded')
                tue.classList.toggle('collapsed')

                if(tue.classList.contains('expanded')){
                  btnTue.style.visibility = "visible";
                  btnTue.style.opacity = 1;
                  btnTue.style.transition = "opacity 0.25s linear";
                }
                else{
                  btnTue.style.visibility = "hidden";
                  btnTue.style.opacity = 0;
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

  if(btnMon.classList.contains('btnEdit')){
    //Case pressed on Add
    selectedTable = "tableMon";
    showPopup();
  }
}

function buttonTuesday() {
  const btnTue = document.getElementById("btnTue");
  btnTue.classList.toggle('btnAdd');
  btnTue.classList.toggle('btnEdit');

  if(btnTue.classList.contains('btnEdit')){
    //Case pressed on Add
    selectedTable = "tableTue";
    showPopup();
  }
}



function clickTableMon(){
  if(btnMon.classList.contains('btnAdd')){
    //Case pressed on Edit
    console.log(event.target.parentNode.rowIndex);
  }
}

function clickTableTue(){
  if(btnTue.classList.contains('btnAdd')){
    //Case pressed on Edit
    console.log(event.target.parentNode.rowIndex);
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

function showPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

function processInputs() {
  var textInput = document.getElementById('text-input').value;
  var intInput1 = parseInt(document.getElementById('integer-input1').value);
  var intInput2 = parseInt(document.getElementById('integer-input2').value);
  var intInput3 = parseInt(document.getElementById('integer-input3').value);

  if (textInput === '' || isNaN(intInput1) || isNaN(intInput2) || isNaN(intInput3)) {
      alert("Invalid input or canceled. Please try again.");
  } else {
      addToTable(selectedTable, textInput, intInput1, intInput2, intInput3)
      closePopup();
  }
}