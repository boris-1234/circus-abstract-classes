abstract class CircusEmployee{

    constructor(num_of_employee_id:string,name_of_employee:string){
        this.Num_of_employee_id = num_of_employee_id;
        this.Name_of_employee = name_of_employee;
    }

    private num_of_employee_id:string;

    public get Num_of_employee_id(){
        return this.num_of_employee_id;
    }

    public set Num_of_employee_id(num_of_employee_id:string){
        this.num_of_employee_id = (num_of_employee_id.length ==9)?num_of_employee_id:"unknown";
    }
    private name_of_employee:string;

    public get Name_of_employee(){
        return this.name_of_employee;
    }

    public set Name_of_employee(name_of_employee:string){
        this.name_of_employee =(name_of_employee.length>2)?name_of_employee:"unknown";
    }

    public toString():string {
        return `name_of_employee: ${this.name_of_employee},idNumber: ${this.Num_of_employee_id}`
    }


    public abstract calculateSalary():number ;
    public abstract ContinueToNextShow():boolean;
    
        
}




