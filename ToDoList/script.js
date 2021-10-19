

var close = document.getElementsByClassName("closeButton");

for(var i =0; i< close.length; i++){
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function AddList(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("txtname").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert("Add a Name");
    } else {
        document.getElementById("ul").appendChild(li);
    }
    document.getElementById("txtname").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Delete");
    span.className = "closeButton";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
    }

}
