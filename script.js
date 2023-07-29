let selectedDay = null;
let selectedIndex = -1;

loadStorage()
darkmode()

function btnSettings() {
  const btnSet = document.getElementById('Settings');
  const ieDiv = document.getElementById('InExportDiv');
  var div = document.getElementById('btnDownload');

  btnSet.style.display = "none";
  ieDiv.style.visibility = "visible";
  ieDiv.style.opacity = 1;
  ieDiv.style.transition = "opacity 0.25s linear";
  
  var initialMargin = -32;
  var targetMargin = 15;
  div.style.marginRight = initialMargin + "px";
  div.style.transition = "margin-right 0.25s linear";
  setTimeout(function() {
    div.style.marginRight = targetMargin + "px";
  }, 10);

  setTimeout(function() {reverseBtnSet()}, 5000);

}

function reverseBtnSet(){
  const btnSet = document.getElementById('Settings');
  const ieDiv = document.getElementById('InExportDiv');
  var div = document.getElementById('btnDownload');

  var initialMargin = 15;
  var targetMargin = -31;
  div.style.marginRight = initialMargin + "px";
  div.style.transition = "margin-right 0.15s linear";
  setTimeout(function() {
    div.style.marginRight = targetMargin + "px";
  }, 10);

  ieDiv.style.transition = "opacity 0.25s linear";
  

  setTimeout(function() {
    ieDiv.style.opacity = 0;
  }, 10);
  
  setTimeout(function() {
    btnSet.style.display = "block";
    ieDiv.style.visibility = "hidden";
  }, 150);

}

function darkmode(){
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.style.backgroundColor = "black";
    document.documentElement.style.backgroundColor = "black";
    document.getElementById("titleText").style.color = "white";
    document.getElementById("Settings").className = "btnSetDark";
    document.getElementById('InExportDiv').style.borderColor = "white";
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

function buttonWednesday() {
  const btnWed = document.getElementById("btnWed");
  btnWed.classList.toggle('btnAdd');
  btnWed.classList.toggle('btnEdit');

  if(btnWed.classList.contains('btnEdit')){
    //Case pressed on Add
    selectedDay = "Wed";
    showPopup();
    //Remove old inputs
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
  }
}

function buttonThursday() {
  const btnThu = document.getElementById("btnThu");
  btnThu.classList.toggle('btnAdd');
  btnThu.classList.toggle('btnEdit');

  if(btnThu.classList.contains('btnEdit')){
    //Case pressed on Add
    selectedDay = "Thu";
    showPopup();
    //Remove old inputs
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
  }
}

function buttonFriday() {
  const btnFri = document.getElementById("btnFri");
  btnFri.classList.toggle('btnAdd');
  btnFri.classList.toggle('btnEdit');

  if(btnFri.classList.contains('btnEdit')){
    //Case pressed on Add
    selectedDay = "Fri";
    showPopup();
    //Remove old inputs
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
  }
}

function buttonSaturday() {
  const btnSat = document.getElementById("btnSat");
  btnSat.classList.toggle('btnAdd');
  btnSat.classList.toggle('btnEdit');

  if(btnSat.classList.contains('btnEdit')){
    //Case pressed on Add
    selectedDay = "Sat";
    showPopup();
    //Remove old inputs
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
  }
}

function buttonSunday() {
  const btnSun = document.getElementById("btnSun");
  btnSun.classList.toggle('btnAdd');
  btnSun.classList.toggle('btnEdit');

  if(btnSun.classList.contains('btnEdit')){
    //Case pressed on Add
    selectedDay = "Sun";
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
    showPopupEdit();

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
    showPopupEdit();

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

function clickTableWed(){
  if(btnWed.classList.contains('btnAdd')){
    //Case pressed on Edit
    if(isNaN((event.target.parentNode.rowIndex)) || event.target.parentNode.rowIndex == 0){
      return;
    }

    let index = event.target.parentNode.rowIndex;
    selectedIndex = index;
    selectedDay = "Wed";
    showPopupEdit();

    const tableWed = document.getElementById("tableWed");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");

    elements = tableWed.rows[index].cells;
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

function clickTableThu(){
  if(btnThu.classList.contains('btnAdd')){
    //Case pressed on Edit
    if(isNaN((event.target.parentNode.rowIndex)) || event.target.parentNode.rowIndex == 0){
      return;
    }

    let index = event.target.parentNode.rowIndex;
    selectedIndex = index;
    selectedDay = "Thu";
    showPopupEdit();

    const tableThu = document.getElementById("tableThu");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");

    elements = tableThu.rows[index].cells;
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

function clickTableFri(){
  if(btnFri.classList.contains('btnAdd')){
    //Case pressed on Edit
    if(isNaN((event.target.parentNode.rowIndex)) || event.target.parentNode.rowIndex == 0){
      return;
    }

    let index = event.target.parentNode.rowIndex;
    selectedIndex = index;
    selectedDay = "Fri";
    showPopupEdit();

    const tableFri = document.getElementById("tableFri");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");

    elements = tableFri.rows[index].cells;
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

function clickTableSat(){
  if(btnSat.classList.contains('btnAdd')){
    //Case pressed on Edit
    if(isNaN((event.target.parentNode.rowIndex)) || event.target.parentNode.rowIndex == 0){
      return;
    }

    let index = event.target.parentNode.rowIndex;
    selectedIndex = index;
    selectedDay = "Sat";
    showPopupEdit();

    const tableSat = document.getElementById("tableSat");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");

    elements = tableSat.rows[index].cells;
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

function clickTableSun(){
  if(btnSun.classList.contains('btnAdd')){
    //Case pressed on Edit
    if(isNaN((event.target.parentNode.rowIndex)) || event.target.parentNode.rowIndex == 0){
      return;
    }

    let index = event.target.parentNode.rowIndex;
    selectedIndex = index;
    selectedDay = "Sun";
    showPopupEdit();

    const tableSun = document.getElementById("tableSun");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");

    elements = tableSun.rows[index].cells;
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

//Shared

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
  document.getElementById(table).style.display = "table";
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

function showPopupEdit() {
  var popup = document.getElementById('popup');
  var btnSave = document.getElementById('btnSave');
  var btnDel = document.getElementById('btnDel');

  popup.style.display = 'block';
  btnSave.className = "popupBtnDel";
  btnDel.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById('popup');
  var btnSave = document.getElementById('btnSave');
  var btnDel = document.getElementById('btnDel');

  popup.style.display = 'none';
  btnSave.className = "popupBtn";
  btnDel.style.display = "none";
  
}

function processInputs() {
  var textInput = getSelectedElement();
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

function calculateVolume(day){
  let sum = 0;
  let currentDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  dayContainer = document.getElementById("container" + day);

  for (let i = 0; localStorage.getItem("table"+ day + i) != null; i++) {
    e = localStorage.getItem("table"+ day + i).split('$');
    sum += (parseInt(e[1]) * (parseInt(e[3])));
  }
  if(sum > 0){
    document.getElementById("volume" + day).innerHTML = "Max Set Volume: " + sum + "kg";
    
    if(currentDay[new Date().getDay()] == day){
      expandContractAuto(day);
      dayContainer.style.backgroundImage = "linear-gradient(#66d4cf, #00c7bd)";
    }
    else {
      dayContainer.style.backgroundImage = "linear-gradient(#ffd60a, #ffcc00)";
    }
  }
  else{
    if(currentDay[new Date().getDay()] == day){
      dayContainer.style.backgroundImage = "linear-gradient(#04de71, #02d46b)";
    }
    else{
      dayContainer.style.backgroundImage = "linear-gradient(#c7c7cc, #aeaeb2)";
    }
    document.getElementById("volume" + day).innerHTML = "Looks like a Rest Day";
  }
}

function expandContract(day) {
  if(event.target.id == "container" || event.target.id == "bottom-section" || event.target.id == "title" || event.target.id == "titleName"){
    switch(day) {
            case "Mon":
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

            case "Tue":
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

              case "Wed":
                const wed = document.getElementById("expand-contract-wed")
                const btnWed = document.getElementById("btnWed")
                wed.classList.toggle('expanded')
                wed.classList.toggle('collapsed')

                if(wed.classList.contains('expanded')){
                  btnWed.style.visibility = "visible";
                  btnWed.style.opacity = 1;
                  btnWed.style.transition = "opacity 0.25s linear";

                  if(localStorage.getItem("tableWed0") == null){
                    document.getElementById("btnWed").className = 'btnAdd';
                  }
                }
                else{
                  btnWed.style.visibility = "hidden";
                  btnWed.style.opacity = 0;
                  btnWed.className = "btnEdit";
                }
              break;

              case "Thu":
                const thu = document.getElementById("expand-contract-thu")
                const btnThu = document.getElementById("btnThu")
                thu.classList.toggle('expanded')
                thu.classList.toggle('collapsed')

                if(thu.classList.contains('expanded')){
                  btnThu.style.visibility = "visible";
                  btnThu.style.opacity = 1;
                  btnThu.style.transition = "opacity 0.25s linear";

                  if(localStorage.getItem("tableThu0") == null){
                    document.getElementById("btnThu").className = 'btnAdd';
                  }
                }
                else{
                  btnThu.style.visibility = "hidden";
                  btnThu.style.opacity = 0;
                  btnThu.className = "btnEdit";
                }
              break;

              case "Fri":
                const fri = document.getElementById("expand-contract-fri")
                const btnFri = document.getElementById("btnFri")
                fri.classList.toggle('expanded')
                fri.classList.toggle('collapsed')

                if(fri.classList.contains('expanded')){
                  btnFri.style.visibility = "visible";
                  btnFri.style.opacity = 1;
                  btnFri.style.transition = "opacity 0.25s linear";

                  if(localStorage.getItem("tableFri0") == null){
                    document.getElementById("btnFri").className = 'btnAdd';
                  }
                }
                else{
                  btnFri.style.visibility = "hidden";
                  btnFri.style.opacity = 0;
                  btnFri.className = "btnEdit";
                }
              break;

              case "Sat":
                const sat = document.getElementById("expand-contract-sat")
                const btnSat = document.getElementById("btnSat")
                sat.classList.toggle('expanded')
                sat.classList.toggle('collapsed')

                if(sat.classList.contains('expanded')){
                  btnSat.style.visibility = "visible";
                  btnSat.style.opacity = 1;
                  btnSat.style.transition = "opacity 0.25s linear";

                  if(localStorage.getItem("tableSat0") == null){
                    document.getElementById("btnSat").className = 'btnAdd';
                  }
                }
                else{
                  btnSat.style.visibility = "hidden";
                  btnSat.style.opacity = 0;
                  btnSat.className = "btnEdit";
                }
              break;

              case "Sun":
                const sun = document.getElementById("expand-contract-sun")
                const btnSun = document.getElementById("btnSun")
                sun.classList.toggle('expanded')
                sun.classList.toggle('collapsed')

                if(sun.classList.contains('expanded')){
                  btnSun.style.visibility = "visible";
                  btnSun.style.opacity = 1;
                  btnSun.style.transition = "opacity 0.25s linear";

                  if(localStorage.getItem("tableSun0") == null){
                    document.getElementById("btnSun").className = 'btnAdd';
                  }
                }
                else{
                  btnSun.style.visibility = "hidden";
                  btnSun.style.opacity = 0;
                  btnSun.className = "btnEdit";
                }
              break;

            default:
              alert("Error identifying Day")
      }
  }
}

function expandContractAuto(day) {
    switch(day) {
            case "Mon":
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

            case "Tue":
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

              case "Wed":
                const wed = document.getElementById("expand-contract-wed")
                const btnWed = document.getElementById("btnWed")
                wed.classList.toggle('expanded')
                wed.classList.toggle('collapsed')

                if(wed.classList.contains('expanded')){
                  btnWed.style.visibility = "visible";
                  btnWed.style.opacity = 1;
                  btnWed.style.transition = "opacity 0.25s linear";

                  if(localStorage.getItem("tableWed0") == null){
                    document.getElementById("btnWed").className = 'btnAdd';
                  }
                }
                else{
                  btnWed.style.visibility = "hidden";
                  btnWed.style.opacity = 0;
                  btnWed.className = "btnEdit";
                }
              break;

              case "Thu":
                const thu = document.getElementById("expand-contract-thu")
                const btnThu = document.getElementById("btnThu")
                thu.classList.toggle('expanded')
                thu.classList.toggle('collapsed')

                if(thu.classList.contains('expanded')){
                  btnThu.style.visibility = "visible";
                  btnThu.style.opacity = 1;
                  btnThu.style.transition = "opacity 0.25s linear";

                  if(localStorage.getItem("tableThu0") == null){
                    document.getElementById("btnThu").className = 'btnAdd';
                  }
                }
                else{
                  btnThu.style.visibility = "hidden";
                  btnThu.style.opacity = 0;
                  btnThu.className = "btnEdit";
                }
              break;

              case "Fri":
                const fri = document.getElementById("expand-contract-fri")
                const btnFri = document.getElementById("btnFri")
                fri.classList.toggle('expanded')
                fri.classList.toggle('collapsed')

                if(fri.classList.contains('expanded')){
                  btnFri.style.visibility = "visible";
                  btnFri.style.opacity = 1;
                  btnFri.style.transition = "opacity 0.25s linear";

                  if(localStorage.getItem("tableFri0") == null){
                    document.getElementById("btnFri").className = 'btnAdd';
                  }
                }
                else{
                  btnFri.style.visibility = "hidden";
                  btnFri.style.opacity = 0;
                  btnFri.className = "btnEdit";
                }
              break;

              case "Sat":
                const sat = document.getElementById("expand-contract-sat")
                const btnSat = document.getElementById("btnSat")
                sat.classList.toggle('expanded')
                sat.classList.toggle('collapsed')

                if(sat.classList.contains('expanded')){
                  btnSat.style.visibility = "visible";
                  btnSat.style.opacity = 1;
                  btnSat.style.transition = "opacity 0.25s linear";

                  if(localStorage.getItem("tableSat0") == null){
                    document.getElementById("btnSat").className = 'btnAdd';
                  }
                }
                else{
                  btnSat.style.visibility = "hidden";
                  btnSat.style.opacity = 0;
                  btnSat.className = "btnEdit";
                }
              break;

              case "Sun":
                const sun = document.getElementById("expand-contract-sun")
                const btnSun = document.getElementById("btnSun")
                sun.classList.toggle('expanded')
                sun.classList.toggle('collapsed')

                if(sun.classList.contains('expanded')){
                  btnSun.style.visibility = "visible";
                  btnSun.style.opacity = 1;
                  btnSun.style.transition = "opacity 0.25s linear";

                  if(localStorage.getItem("tableSun0") == null){
                    document.getElementById("btnSun").className = 'btnAdd';
                  }
                }
                else{
                  btnSun.style.visibility = "hidden";
                  btnSun.style.opacity = 0;
                  btnSun.className = "btnEdit";
                }
              break;

            default:
              alert("Error identifying Day")
      }
}

function loadStorage(){
  tables = ["tableMon", "tableTue", "tableWed", "tableThu", "tableFri", "tableSat", "tableSun"]

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
      document.getElementById(tables[t]).style.display = "none";
      document.getElementById("btn" + (tables[t].slice(5))).className = 'btnAdd';
      document.getElementById("hint" + (tables[t].slice(5))).style.display = 'inherit';
    }
  }
  calculateVolume("Mon");
  calculateVolume("Tue");
  calculateVolume("Wed");
  calculateVolume("Thu");
  calculateVolume("Fri");
  calculateVolume("Sat");
  calculateVolume("Sun");
}

function deleteItem() {
  localStorage.removeItem("table" + selectedDay + (selectedIndex-1));
  document.getElementById("table" + selectedDay).deleteRow(selectedIndex);


  closePopup();

  elements = getEntriesWithPrefix("table" + selectedDay);  
  deleteEntriesWithPrefix("table" + selectedDay);

  for (let i = 0; i < elements.length; i++) {
    localStorage.setItem("table" + selectedDay + i, elements[i].value);
  }
  
  document.getElementById("btn" + selectedDay).className = "btnEdit";
  if(getTableRowCount("table" + selectedDay) <= 1){
    location.reload();
  }
}

function getEntriesWithPrefix(prefix) {
  const matchingEntries = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      const value = localStorage.getItem(key);
      matchingEntries.push({ key, value });
    }
  }
  
  matchingEntries.sort((a, b) => a.key.localeCompare(b.key));
  
  return matchingEntries;
}

function deleteEntriesWithPrefix(prefix) {
  const keysToDelete = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      keysToDelete.push(key);
    }
  }

  keysToDelete.forEach((key) => {
    localStorage.removeItem(key);
  });
}

function getTableRowCount(tableId) {
  const table = document.getElementById(tableId);
  if (!table) {
    console.error("Tabelle mit der ID '" + tableId + "' nicht gefunden.");
    return 0;
  }

  const tbody = table.querySelector("tbody");
  if (!tbody) {
    console.error("Tabelle hat kein tbody-Element.");
    return 0;
  }

  return tbody.rows.length;
}

// import/export JSON

function exportLocalStorageToJSON(filename) {
  // Retrieve all entries from localStorage
  const localStorageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    localStorageData[key] = localStorage.getItem(key);
  }

  // Convert data to JSON format
  const jsonData = JSON.stringify(localStorageData, null, 2);

  // Create the data URI for the JSON content
  const dataURI = "data:application/json;charset=utf-8," + encodeURIComponent(jsonData);

  // Create a link element to trigger the download
  const downloadLink = document.createElement("a");
  downloadLink.download = filename || "localStorageData.json";
  downloadLink.href = dataURI;
  downloadLink.click();
}

// Attach event listener to the file input element
document.getElementById("fileInput").addEventListener("change", importJSON);

function importJSON(event) {
  const fileInput = event.target;

  if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
    alert("Please choose a valid JSON file.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    try {
      const jsonData = JSON.parse(event.target.result);

      // Clear existing localStorage entries
      localStorage.clear();
      deleteEntriesWithPrefix("table");

      // Load the JSON data into localStorage
      for (const key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
          localStorage.setItem(key, jsonData[key]);
        }
      }

      alert("Progress data successfully imported.");
      location.reload();
    } catch (error) {
      alert("Error parsing JSON file. Please make sure the file contains valid data.");
      console.error(error);
    }
  };

  reader.readAsText(file);
}


const inputField = document.getElementById('input1');
const suggestionList = document.getElementById('suggestionList');

const suggestions = [
  'Leg Press',
  'Bench Press',
  'French Press',
  'Squats',
  'Deadlift',
  'Shoulder Press',
  'Bicep Curls',
  'Tricep Dips',
  'Pull-ups',
  'Push-ups',
  'Lunges',
  'Dumbbell Rows',
  'Lat Pulldown',
  'Chest Fly',
  'Plank',
  'Crunches',
  'Russian Twist',
  'Leg Raises',
  'Calf Raises',
  'Hamstring Curls',
  'Barbell Rows',
  'Overhead Tricep Extensions',
  'Arnold Press',
  'Bent Over Rows',
  'Incline Bench Press',
  'Cable Crossovers',
  'Side Lateral Raises',
  'Hammer Curls',
  'Preacher Curls',
  'Skull Crushers',
  'Dips',
  'Chin-ups',
  'Front Squats',
  'Box Jumps',
  'Burpees',
  'Kettlebell Swings',
  'Romanian Deadlifts',
  'Good Mornings',
  'Step Ups',
  'Wall Sits',
  'Russian Twists',
  'Reverse Crunches',
  'Supermans',
  'Seated Calf Raises',
  'Glute Bridges',
  'Hip Thrusts',
  'Single Leg Deadlifts',
  'Pull-overs',
  'Bent Over Raises',
  'Tricep Kickbacks',
  'Lateral Pull-downs',
  'Seated Rows',
  'Dumbbell Bench Press',
  'Incline Dumbbell Press',
  'Pec Deck Fly',
  'Hanging Leg Raises',
  'Plank Shoulder Taps',
  'Mountain Climbers',
  'Medicine Ball Slams',
  'Box Squats',
  'Jump Squats',
  'Split Squats',
  'Box Step-ups',
  'Kettlebell Goblet Squats',
  'Single Leg Press',
  'Dumbbell Lunges',
  'Barbell Lunges',
  'Seated Leg Curl',
  'Stiff Leg Deadlifts',
  'Barbell Curls',
  'Hammer Curls',
  'Concentration Curls',
  'Tricep Rope Pushdowns',
  'Tricep Bench Dips',
  'Lat Pulldowns',
  'Close Grip Bench Press',
  'Pullover',
  'Pull-ups',
  'Chin-ups',
  'Cable Rows',
  'Reverse Fly',
  'Arnold Press',
  'Lateral Raises',
  'Front Raises',
  'Upright Rows',
  'Calf Raises',
  'Toe Raises',
  'Seated Calf Raises',
  'Leg Extensions',
  'Glute Bridges',
  'Donkey Kicks',
  'Side Leg Raises',
  'Hip Abduction',
  'Hip Adduction',
  'Cable Pull-throughs',
  'Kettlebell Swings',
  'Sumo Deadlifts',
  'Romanian Deadlifts',
  'Hip Thrusts',
  'Barbell Hip Thrusts',
  'Goblet Squats',
  'Kettlebell Sumo Squats',
  'Step-ups',
  'Split Squats',
  'Cable Crunches',
  'Hanging Leg Raises',
  'Ab Rollouts',
  'Russian Twists',
  'Bicycle Crunches',
  'Flutter Kicks',
  'Medicine Ball Sit-ups',
  'Plank',
  'Side Plank',
  'Reverse Plank',
  'Lying Leg Raises',
  'Supermans',
  'Back Extensions',
  'Seated Russian Twists',
  'Seated Leg Tucks',
  'Seated Knee Tucks',
  'Russian Twist with Medicine Ball',
  'Russian Twist with Dumbbell',
  'Standing Calf Raises',
  'Leg Press Calf Raises',
  'Donkey Calf Raises',
  'Donkey Kicks',
  'Hip Thrusts',
  'Clamshell',
  'Fire Hydrants',
  'Banded Lateral Walk',
  'Barbell Glute Bridge',
  'Reverse Hyperextension',
  'Single Leg Deadlifts',
  'Dumbbell Deadlifts',
  'Bent Over Rows',
  'Seated Cable Rows',
  'Face Pulls',
  'Front Raises',
  'Bent Over Raises',
  'Upright Rows',
  'Cable Curl',
  'Incline Dumbbell Curl',
  'Hammer Curl',
  'Cable Hammer Curl',
  'Tricep Pushdown',
  'Tricep Kickback',
  'Skull Crusher',
  'Tricep Dips',
  'Lat Pulldown',
  'Cable Lat Pulldown',
  'Assisted Pull-ups',
  'Incline Push-ups',
  'Dips',
  'Diamond Push-ups',
  'Box Jumps',
  'Box Step-ups',
  'Burpees',
  'Kettlebell Swings',
  'Kettlebell Clean and Press',
  'Sumo Deadlift High Pull',
  'Good Mornings',
  'Single Leg Box Squat',
  'Single Leg Glute Bridge',
  'Barbell Hip Thrust',
  'Kettlebell Goblet Squat',
  'Dumbbell Lunges',
  'Barbell Lunges',
  'Leg Curls',
  'Lying Leg Curls',
  'Seated Leg Curls',
  'Stiff Leg Deadlift',
  'Sumo Deadlift',
  'Barbell Curl',
  'Dumbbell Curl',
  'Preacher Curl',
  'Concentration Curl',
  'Cable Rope Curl',
  'Tricep Rope Pushdown',
  'Overhead Tricep Extension',
  'Tricep Bench Dip',
  'Lat Pulldown',
  'Seated Cable Row',
  'One Arm Dumbbell Row',
  'Bent Over Row',
  'Reverse Fly',
  'Dumbbell Shoulder Press',
  'Arnold Press',
  'Lateral Raise',
  'Front Raise',
  'Upright Row',
  'Calf Raise',
  'Seated Calf Raise',
  'Leg Extension',
  'Donkey Kick',
  'Hip Thrust',
  'Step-up',
  'Split Squat',
  'Russian Twist',
  'Medicine Ball Twist',
  'Hanging Leg Raise',
  'Lying Leg Raise',
  'Back Extension',
  'Reverse Crunch',
  'Seated Russian Twist',
  'Cable Woodchop',
  'Glute Bridge',
  'Seated Leg Tuck',
  'Lying Knee Raise',
  'Weighted Russian Twist',
  'Weighted Decline Crunch',
  'Standing Calf Raise',
  'Leg Press Calf Raise',
  'Standing Donkey Kick',
  'Banded Glute Bridge',
  'Banded Clamshell',
  'Banded Hip Thrust',
  'Reverse Hyper',
  'Dumbbell Deadlift',
  'Sumo Deadlift',
];

inputField.addEventListener('input', function() {
    const inputText = inputField.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(function(suggestion) {
        return suggestion.toLowerCase().startsWith(inputText);
    });

    renderSuggestions(filteredSuggestions);
});

function renderSuggestions(filteredSuggestions) {
    suggestionList.innerHTML = '';

    filteredSuggestions.forEach(function(suggestion) {
        const liElement = document.createElement('li');
        liElement.textContent = suggestion;
        liElement.addEventListener('click', function() {
            inputField.value = suggestion;
            suggestionList.innerHTML = '';
        });
        suggestionList.appendChild(liElement);
    });
}

// Schließe die Vorschlagsliste, wenn der Benutzer außerhalb des Eingabefeldes klickt
document.addEventListener('click', function(event) {
    if (!inputField.contains(event.target)) {
        suggestionList.innerHTML = '';
    }
});

// Rückgabe des ausgewählten Elements als String
function getSelectedElement() {
    return inputField.value;
}