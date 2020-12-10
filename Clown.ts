class Clown extends CircusEmployee{

    public constructor(num_of_employee_id:string,name_of_employee:string,num_of_times_the_clown_entertain_the_crowd:number){
        super(num_of_employee_id,name_of_employee);
        this.Num_of_times_the_clown_entertain_the_crowd = num_of_times_the_clown_entertain_the_crowd;
    }

    private num_of_times_the_clown_entertain_the_crowd:number;

    public set Num_of_times_the_clown_entertain_the_crowd(num_of_times_the_clown_entertain_the_crowd:number){
        this.num_of_times_the_clown_entertain_the_crowd = num_of_times_the_clown_entertain_the_crowd;
    }

    public get Num_of_times_the_clown_entertain_the_crowd(){
        return this.num_of_times_the_clown_entertain_the_crowd ; 
    }

    public toString():string{
        return super.toString() + ` The Num of times the clown entertain the crowd was ${this.num_of_times_the_clown_entertain_the_crowd}`
    }

    public  calculateSalary():number {
        return this.num_of_times_the_clown_entertain_the_crowd*100 ;
    }
    public  ContinueToNextShow():boolean{
        if(this.num_of_times_the_clown_entertain_the_crowd>=1){
            return true;
        }
        else
            return false;
    }





}