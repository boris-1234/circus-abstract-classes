class Circus  {
    
    _Circus_Employees:CircusEmployee[] = [];

    public AddEmployee(Circus_Employee1:CircusEmployee):boolean {
        if(this._Circus_Employees.length>=30){
            return false;
        }
        
        this._Circus_Employees.push(Circus_Employee1);
        return true;
    }



    public calculateTotalSalary():number {
        let totalSalary:number = 0 ;
        for(let CircusEmployee1 of this._Circus_Employees) {
            totalSalary += CircusEmployee1.calculateSalary();
        }

        return totalSalary ;
    }

    public NoOfEmployeesForNextShow():number{
        let Num_Of_Employess_Continue_To_The_next_Show:number = 0 ;
        for(let Circus_Employee of this._Circus_Employees){
            if(Circus_Employee.ContinueToNextShow()){
                Num_Of_Employess_Continue_To_The_next_Show++ ;
            }
            
        }
        return Num_Of_Employess_Continue_To_The_next_Show ; 
    }

    public ClownsSalaryPrecent():number{
        let totalClownsSalary:number = 0 ;
        for(let employee of this._Circus_Employees){
            if(employee instanceof Clown)
            totalClownsSalary +=employee.calculateSalary();
        }

        let totalSalary:number = this.calculateTotalSalary();

        return totalClownsSalary/totalSalary; 
    }


    








    




    

}