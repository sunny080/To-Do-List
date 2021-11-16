






updateList();



function addEvent(){
    let input =document.getElementById("hello");
    let tasksArr = JSON.parse(localStorage.tasks);
    tasksArr.push(input.value);
    localStorage.tasks = JSON.stringify(tasksArr);
    input.value="";
    updateList();
}
function updateList() {
    let ul =document.getElementById("tasks");


    let tasksArr = JSON.parse(localStorage.tasks);

   let length = tasksArr.length - 1;
   let html = "";
   for(let i = length; i >= 0; i--){
    html += '<li id="' + i + '">' + tasksArr[i] + '<span onclick="removeItem(this)"><ion-icon name="trash-outline"></ion-icon></span></li>';
   }
   ul.innerHTML = html;
}

function removeItem(span_tag){
  let index_id =  span_tag.parentElement.id;
  let tasksArr = JSON.parse(localStorage.tasks);
  tasksArr.splice(index_id,1);
  localStorage.tasks = JSON.stringify(tasksArr);
updateList();

}



