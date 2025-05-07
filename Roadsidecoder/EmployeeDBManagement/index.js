const dialog = document.getElementById('dialog');
const cancelBtn = document.getElementById('cancel');
const submitForm = document.getElementById('submit');
const elist = document.getElementById('elist');
const addEmpBtn = document.getElementById('addEmpBtn');
const employeeForm = document.getElementById('employeeForm');

const employeeList = [];


function deleteEmployee(index) {
  employeeList.splice(index, 1);
  showEmpleyeeDetails(0);
  renderList();
}

function handleSubmit(employee) {
  addEmployeeToList(employee);
  closeDialog();
}


function handleAddEmployee() {
   dialog.showModal();
}

function closeDialog() {
  dialog.close();
}


function addEmployeeToList(employee) {
  employeeList.push(employee);
  renderList();
};

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
  const employee = employeeList[index] || {};
  document.getElementById('empName').innerText = employee.name || '';
  document.getElementById('empAddress').innerText = employee.address  || '';
  document.getElementById('empEmail').innerText = employee.email || '';
  document.getElementById('empMobile').innerText = employee.mobile || '';
  document.getElementById('empDob').innerText = employee.dob || '';
  document.getElementsByTagName('img')[0].src = employee.profile || '';
}

elist.addEventListener('click', function(e){
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
});

addEmpBtn.addEventListener('click', function(e){
 handleAddEmployee();
});


cancelBtn.addEventListener('click', function(e){
   e.preventDefault();
   closeDialog();
});

employeeForm.addEventListener('submit', function(e){
  e.preventDefault();

  const form = e.target;

  const employee = {
    name: form.name.value,
    address: form.address.value, 
    email: form.email.value, 
    dob: form.dob.value, 
    mobile: form.mobile.value, 
    profile: form.profile.value
  };

  form.reset();

  handleSubmit(employee);
});




