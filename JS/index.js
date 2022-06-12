// /========================================== Google JavaScript to the codes Start ============================== \
let search = document.getElementById("search");
let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if(search.value == ""){
    search.value = "";
  }else {
    let url = `https://www.google.com/search?q=${search.value}`;
    window.open(url);
    search.value = "";
  }
});
// /========================================== Google JavaScript to the codes End ============================== \
