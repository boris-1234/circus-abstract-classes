class FireSpitter extends CircusEmployee{


    constructor(num_of_employee_id:string,name_of_employee:string,distance_flame_flying:number,number_of_times_the_dragon_spitt_the_fire_in_the_show:number){
        super(num_of_employee_id,name_of_employee)
        this.Distance_flame_flying = distance_flame_flying;
        this.Number_of_times_the_dragon_spitt_the_fire_in_the_show=number_of_times_the_dragon_spitt_the_fire_in_the_show;
    }


    private distance_flame_flying:number

    public get Distance_flame_flying(){
        return this.distance_flame_flying;
    }

    public set Distance_flame_flying(distance_flame_flying:number) {
       this.distance_flame_flying =distance_flame_flying ;
    }

    private number_of_times_the_dragon_spitt_the_fire_in_the_show:number

    public get Number_of_times_the_dragon_spitt_the_fire_in_the_show(){
        return this.number_of_times_the_dragon_spitt_the_fire_in_the_show;
    }

    public set Number_of_times_the_dragon_spitt_the_fire_in_the_show(number_of_times_the_dragon_spitt_the_fire_in_the_show:number) {
       this.number_of_times_the_dragon_spitt_the_fire_in_the_show =number_of_times_the_dragon_spitt_the_fire_in_the_show ;
    }

    public toString():string {
        return super.toString() + ` the distance the fire did from the fire spitter was  ${this.distance_flame_flying}, and the number of times the dragon spitt the fire in the show was  : ${this.number_of_times_the_dragon_spitt_the_fire_in_the_show}`
    }


    public  calculateSalary():number{
        return this.distance_flame_flying*30 ;
    }
    public  ContinueToNextShow():boolean{
        if (this.distance_flame_flying>=1){
            return true;
        }
        else
            return false; 
    }



}