let hero = [{
    name: "Virat kohli",
    age: 32,
    city: "Delhi",
    salary: "10000000",
  },
  {
    name: "AbDe",
    age: 34,
    city: "South africa",
    salary: "1000000",
  },
  {
    name: "Yuvraj",
    age: 36,
    city: "Chandigarh",
    salary: "6000000000",
  },{
    name: "Bumrah",
    age: 30,
    city: "Delhi",
    salary: "10000000000",
  },{
    name: "Abhi",
    age: 20,
    city: "noidea",
    salary: "100000000000",
  }];
  
  function display(superarray) {
    let tabledata = "";
  
    superarray.forEach(function (superhero, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${superhero.name}</td>
      <td>${superhero.age}</td>
      <td>${superhero.city}</td>
      <td>${superhero.salary}</td>
      <td>
      <button onclick='deleteSuperhero(${index})'>delete</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display(hero);
  
  function addSuper(e) {
    e.preventDefault();
    let superhero = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
    superhero.name = name;
    superhero.age = Number(age);
    superhero.city = city;
    superhero.salary = salary;
  
    heroes.push(superhero);
  
    display(hero);
  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
  }
  
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = heroes.filter(function (superhero) {
      return (
        superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function deleteSuperhero(index) {
    heroes.splice(index, 1);
    display(hero);
  }
  
  let updateIndex;
  
  function copySuperhero(index) {
    updateIndex = index;
    let superhero = hero[index];
  
    document.getElementById("upname").value = superhero.name;
    document.getElementById("upage").value = superhero.age;
    document.getElementById("upcity").value = superhero.city;
    document.getElementById("upsalary").value = superhero.salary;
  }
  
  function updateSuperhero(e) {
    e.preventDefault();
    let superhero = hero[updateIndex];
    console.log(superhero);
    let name = document.getElementById("upname").value;
    let age = document.getElementById("upage").value;
    let city = document.getElementById("upcity").value;
    let salary = document.getElementById("upsalary").value;
    superhero.name = name;
    superhero.age = Number(age);
    superhero.city = city;
    superhero.salary = salary;
    console.log(superhero);
  
    display(hero);
  
    // code for hiding from anywhere
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
  
  