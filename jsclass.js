class Employee{
    setDetails(name, id){
    this.name = name
    this.id = id
    }
}

let emp1 = new Employee();
emp1.setDetails('Jhon',1001);
console.log('Name of emp is :'+emp1.name)
console.log('Id of emp is :'+emp1.id )
console.log('Remove')