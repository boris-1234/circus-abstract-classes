
var david:Clown = new Clown("1","david",15);
var yossi:LionTamar = new LionTamar("1","yossi",15);
var baruh:RopeWalker = new RopeWalker("1","david",4,4);
var moshe:FireSpitter = new FireSpitter("1","david",0,20);

var moscow_circus:Circus = new Circus();
moscow_circus.AddEmployee(david);
moscow_circus.AddEmployee(yossi);
moscow_circus.AddEmployee(baruh);
moscow_circus.AddEmployee(moshe);



var circus_moscow_Total_Salary=moscow_circus.calculateTotalSalary();
console.log(circus_moscow_Total_Salary)
var Clowns_Salary_Precent_Of_moscow_Circus=moscow_circus.ClownsSalaryPrecent();
console.log(Clowns_Salary_Precent_Of_moscow_Circus);
moscow_circus.NoOfEmployeesForNextShow();
var NumOf_The_Employees_Of_The_moscow_Circus_Will_Continue_To_The_Next_Show = moscow_circus.NoOfEmployeesForNextShow();
console.log(NumOf_The_Employees_Of_The_moscow_Circus_Will_Continue_To_The_Next_Show);
