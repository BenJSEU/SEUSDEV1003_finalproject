
$(document).ready(function () {
    $(".ui-resize").hover(function () {
        $(this).toggleClass("ui-icon-bigger");
    });

    // $("#driver").click(function () {
    //     $("#stage").load("info.html");
    // });




});



function loadRep() {
    let repRequest = new XMLHttpRequest();
    repRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let repObj = JSON.parse(this.responseText);
            let i=0;
            while (i < repObj.length) {
                let newdata;
                let listData = document.getElementById("list");
                // console.log(listData);
                function addData() {
                    newdata = repObj[i].name;
                    url= repObj[i].html_url;
                    // console.log(url);
                    let listItem = document.createElement('li');

                    let a = document.createElement('a');
                    a.setAttribute('href', url);
                    a.innerText = newdata;
                    listItem.appendChild(a);

                    // listItem.innerHTML = newdata;
                    listData.appendChild(listItem);
                    // console.log(listItem);
                    // console.log(a);
                }
                addData();
                i++;
            };
            // console.log("function works");
        }
    }
    repRequest.open('GET', "https://api.github.com/users/benjseu/repos", true);
    repRequest.send();
}


//repObj.html_url I'd like to make each repo item a clickable link