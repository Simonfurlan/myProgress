let selectedDay = null;
let selectedIndex = -1;

loadStorage()
//darkmode()

function darkmode(){
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.style.backgroundColor = "black";
    document.documentElement.style.backgroundColor = "black";
    document.getElementById("titleText").style.color = "white";
    document.getElementById("Settings").className = "btnSetDark";
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light"; });
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

function clickTableWed(){
  if(btnWed.classList.contains('btnAdd')){
    //Case pressed on Edit
    if(isNaN((event.target.parentNode.rowIndex)) || event.target.parentNode.rowIndex == 0){
      return;
    }

    let index = event.target.parentNode.rowIndex;
    selectedIndex = index;
    selectedDay = "Wed";
    showPopup();

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
    showPopup();

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
    showPopup();

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
    showPopup();

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
    showPopup();

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

function calculateVolume(day){
  let sum = 0;
  let currentDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let i = 0; localStorage.getItem("table"+ day + i) != null; i++) {
    e = localStorage.getItem("table"+ day + i).split('$');
    sum += (parseInt(e[1]) * (parseInt(e[3])));
  }
  if(sum > 0){
    document.getElementById("volume" + day).innerHTML = "Max Set Volume: " + sum + "kg";
    
    if(currentDay[new Date().getDay()] == day){
      expandContractAuto(day);
      document.getElementById("container" + day).style.backgroundImage = "linear-gradient(#66d4cf, #00c7bd)";
    }
    else {
      document.getElementById("container" + day).style.backgroundImage = "linear-gradient(#ffd60a, #ffcc00)";
    }
  }
  else{
    if(currentDay[new Date().getDay()] == day){
      document.getElementById("container" + day).style.backgroundImage = "linear-gradient(#04de71, #02d46b)";
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
