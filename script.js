let selectedDay = null;
let selectedIndex = -1;

loadStorage()

function loadStorage(){
  tables = ["tableMon", "tableTue"]

  for (let t = 0; t < tables.length; t++) {
    for (let i = 0; localStorage.getItem(tables[t] + i) != null; i++) {
      e = localStorage.getItem(tables[t] + i).split('$');
      let tb = document.getElementById(tables[t]);
      let row = tb.insertRow(-1); 
      let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
      let c3 = row.insertCell(2);
      let c4 = row.insertCell(3);
      c1.innerText = e[0]
      c2.innerText = e[1]
      c3.innerText = e[2]
      c4.innerText = e[3]
    }

    if(localStorage.getItem(tables[t] + "0") == null){
      document.getElementById(tables[t]).style.visibility = "collapse";
      console.log("btn" + (tables[t].slice(5)));
      document.getElementById("btn" + (tables[t].slice(5))).className = 'btnAdd';
      document.getElementById("hint" + (tables[t].slice(5))).style.display = 'inherit';
    }
  }
  calculateVolume("Mon");
  calculateVolume("Tue");
}

function calculateVolume(day){
  let sum = 0;
  for (let i = 0; localStorage.getItem("table"+ day + i) != null; i++) {
    e = localStorage.getItem("table"+ day + i).split('$');
    
    for (let j = 0; j < parseInt(e[2]); j++){
      if((parseInt(e[1]) - (parseInt(e[3]) * j)) > 0){
        sum += (parseInt(e[1]) - (parseInt(e[3]) * j)) * 12;
      }
      else{
        //alert("Weight to Increment ratio to high: " + e[0]);
      }
    }
  }
  if(sum > 0){
    document.getElementById("volume" + day).innerHTML = "Total Volume: " + sum + "kg";
    document.getElementById("container" + day).style.backgroundImage = "linear-gradient(#ffd60a, #ffcc00)";
  }
  else{
    document.getElementById("volume" + day).innerHTML = "Looks like a Rest Day";
  }
}

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

                    if(localStorage.getItem("tableMon0") == null){
                      document.getElementById("btnMon").className = 'btnAdd';
                    }
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

                  if(localStorage.getItem("tableTue0") == null){
                    document.getElementById("btnTue").className = 'btnAdd';
                  }
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
    selectedDay = "Mon";
    showPopup();
    //Remove old inputs
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
  }
}

function buttonTuesday() {
  const btnTue = document.getElementById("btnTue");
  btnTue.classList.toggle('btnAdd');
  btnTue.classList.toggle('btnEdit');

  if(btnTue.classList.contains('btnEdit')){
    //Case pressed on Add
    selectedDay = "Tue";
    showPopup();
    //Remove old inputs
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
  }
}



function clickTableMon(){
  if(btnMon.classList.contains('btnAdd')){
    //Case pressed on Edit
    if(isNaN((event.target.parentNode.rowIndex)) || event.target.parentNode.rowIndex == 0){
      return;
    }

    let index = event.target.parentNode.rowIndex;
    selectedIndex = index;
    selectedDay = "Mon";
    showPopup();

    const tableMon = document.getElementById("tableMon");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");

    elements = tableMon.rows[index].cells;
    e1 = elements[0].innerText;
    e2 = elements[1].innerText;
    e3 = elements[2].innerText;
    e4 = elements[3].innerText;

    input1.value = e1;
    input2.value = e2;
    input3.value = e3;
    input4.value = e4;
  }
}

function clickTableTue(){
  if(btnTue.classList.contains('btnAdd')){
    //Case pressed on Edit
    if(isNaN((event.target.parentNode.rowIndex)) || event.target.parentNode.rowIndex == 0){
      return;
    }

    let index = event.target.parentNode.rowIndex;
    selectedIndex = index;
    selectedDay = "Tue";
    showPopup();

    const tableTue = document.getElementById("tableTue");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");

    elements = tableTue.rows[index].cells;
    e1 = elements[0].innerText;
    e2 = elements[1].innerText;
    e3 = elements[2].innerText;
    e4 = elements[3].innerText;

    input1.value = e1;
    input2.value = e2;
    input3.value = e3;
    input4.value = e4;
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

  localStorage.setItem(table + (tb.rows.length - 2), e1 + "$" + e2 + "$" + e3 + "$" + e4);
  document.getElementById(table).style.visibility = "visible";
  document.getElementById("hint" + (table.slice(5))).style.display = 'none';
  calculateVolume(table.slice(5));
}

function replaceRow(table, e1, e2, e3, e4) {

  let tb = document.getElementById(table);

  tb.deleteRow(selectedIndex);

  let row = tb.insertRow(selectedIndex); 

  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);
  let c4 = row.insertCell(3);

  c1.innerText = e1
  c2.innerText = e2
  c3.innerText = e3
  c4.innerText = e4

  localStorage.setItem(table + (selectedIndex - 1), e1 + "$" + e2 + "$" + e3 + "$" + e4);
  calculateVolume(table.slice(5));
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
  var textInput = document.getElementById('input1').value;
  var intInput1 = parseInt(document.getElementById('input2').value);
  var intInput2 = parseInt(document.getElementById('input3').value);
  var intInput3 = parseInt(document.getElementById('input4').value);

  if (textInput === '' || isNaN(intInput1) || isNaN(intInput2) || isNaN(intInput3)) {
      alert("Invalid input or canceled. Please try again.");
  } else {
      if(document.getElementById("btn" + selectedDay).classList.contains('btnAdd')){
        replaceRow("table" + selectedDay, textInput, intInput1, intInput2, intInput3)
      }else{
        addToTable("table" + selectedDay, textInput, intInput1, intInput2, intInput3)
      }
      closePopup();
  }
}