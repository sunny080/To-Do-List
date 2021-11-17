

if (localStorage.tasks === undefined) {
  console.log('Task Array Initialized')
  localStorage.tasks = JSON.stringify([]);
}
updateList();






function addEvent() {
  let input = document.getElementById("hello");

  let tasksArr = JSON.parse(localStorage.tasks);
  tasksArr.push(input.value);
  localStorage.tasks = JSON.stringify(tasksArr);
  input.value = "";
  updateList();
}
function updateList() {

  
  let ul = document.getElementById("tasks");
  let tasksArr = JSON.parse(localStorage.tasks);

  let length = tasksArr.length - 1;
  let html = "";
  for (let i = length; i >= 0; i--) {
    html += '<a id="son" onclick="strike()" href="#"> <li id = "' + i +   '" class="him">' + tasksArr[i] + '   <span onclick="removeItem(this)">delete</span></li></a>';
  } 
  ul.innerHTML = html;

}

function removeItem(span_tag) {
  let index_id = span_tag.parentElement.id;
  let tasksArr = JSON.parse(localStorage.tasks);
  tasksArr.splice(index_id,1);
  localStorage.tasks = JSON.stringify(tasksArr);
  updateList();

}

function clearStorage(){
  localStorage.tasks = JSON.stringify([]);
  updateList()
  console.log(localStorage.tasks)
}


function strike(index){
  if (elements[index].includes("<strike>")){
    elements[index] = elements[index].replace("<strike>","");
    elements[index] = elements[index].replace("</strike>","");
    }else elements[index] = "<strike>" + elements[index] + "</strike>";
    display();
}

