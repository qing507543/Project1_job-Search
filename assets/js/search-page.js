var searchinput=document.querySelector("#searchinput");
var submitbtn=document.querySelector("#submitbtn");

submitbtn.addEventListener("click",function(event){
    event.preventDefault();

    if (!searchinput.value) {
      console.error('You need a search input value!');
      return;
    } 

        localStorage.setItem('searchinputval', searchinput.value);
        location.assign("./search-result.html");
    
    
})