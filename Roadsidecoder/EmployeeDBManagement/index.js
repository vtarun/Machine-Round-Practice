const employeeList = [];

addEmployee({ name : "vt", address: "ad1", email: "vt@gmail.com", dob:"23/12/2025", mobile: 90898989, profile: '' });

function addEmployee(emp) {
  const employee = { ...emp };
  addEmployeeToList(employee);
}

function deleteEmployee(index) {
  employeeList.splice(index, 1);
   renderList();
}

function handleSubmit() {

  closeDialog();
}

function handleAddEmployee() {

}

function closeDialog(){

}


function addEmployeeToList(employee) {
  employeeList.push(employee);
  renderList();
}

function renderList() {
  const ul = document.getElementById("elist");
  ul.innerHTML = "";
  employeeList.forEach((emp, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${emp.name} <span style="color:red;cursor:pointer" data-index=${index}> X </span>`;
    ul.appendChild(li);
  });
}

function showEmpleyeeDetails(index) {
  console.log(employeeList[index]);
}

document.getElementById('elist').addEventListener('click', function(e){
  const target = e.target;
  if(target.tagName === 'SPAN'){
    const index = target.dataset.index;

    if(index !== undefined){
      deleteEmployee(target.dataset.index);
    }
    
  } else if(target.tagName === 'LI'){
    const li = target.closest('li');    
    const span = li.querySelector('span');
    const index = span.dataset.index;

    if(index !== undefined){
      showEmpleyeeDetails(index);
    }

  }
})


