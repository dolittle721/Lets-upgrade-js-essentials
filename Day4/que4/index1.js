let data = [{
    name: "abc",
    age: 19,
    country: "India",
    hobbies: ["pubg","Gaming"]
 },
  {
    name: "abcd",
    age: 35,
    country: "America",
    hobbies: ["Racing","Gaming"],
 },
 {
    name: "abcde",
    age: 5,
    country: "Japan",
    hobbies: ["fighting","Cosplay acting"]
  },
{
    name: "abcdef",
    age: 34,
    country: "India",
    hobbies: ["Free fire","Gaming"]}];

for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

//Write a function to display all the objects having country India
for (let i = 0; i < data.length; i++) {
    if(data[i].country==="India"){
        console.log(data[i]);
    }
    
}