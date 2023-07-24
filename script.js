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