class RopeWalker extends CircusEmployee{


    constructor(num_of_employee_id:string,name_of_employee:string,number_of_shoes:number,number_of_times_the_crowd_was_clapping:number){
        super(num_of_employee_id,name_of_employee);
        this.Number_of_shoes = number_of_shoes;
        this.Number_of_times_the_crowd_was_clapping =number_of_times_the_crowd_was_clapping;
    }

    private number_of_shoes:number;

    public get Number_of_shoes(){
        return this.number_of_shoes;
    }

    public set Number_of_shoes(number_of_shoes:number){
        this.number_of_shoes = number_of_shoes
    }


    private number_of_times_the_crowd_was_clapping:number;

    public get Number_of_times_the_crowd_was_clapping(){
        return this.number_of_times_the_crowd_was_clapping;
    }

    public set Number_of_times_the_crowd_was_clapping(number_of_shoes:number){
        this.number_of_times_the_crowd_was_clapping = number_of_shoes
    }

    public toString():string {
        return super.toString() + ` the number size of the RopeWalker is ${this.number_of_shoes}, and his idNumber is : ${this.Num_of_employee_id}`
    }


    public  calculateSalary():number{
        return this.number_of_shoes*150 ;
    }
    public  ContinueToNextShow():boolean{
        if (this.number_of_times_the_crowd_was_clapping>=1){
            return true;
        }
        else
            return false; 
    }







}