const employeeList = [];
addEmployee("vtt tyt");
addEmployee("saloni");
addEmployee("vivek");

function addEmployee(name) {
  const employee = { name };
  //   employee.address = event.target.address;
  //   employee.email = event.target.email;
  //   employee.dob = event.target.dob;
  //   employee.mobile = event.target.mobile;
  //   employee.profile = event.target.profile;
  addEmployeeToList(employee);
}

function deleteEmployee(index) {
  employeeList.splice(index, 1);
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
    console.log(emp);
  });
}
