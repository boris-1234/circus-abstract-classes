class LionTamar extends CircusEmployee {


    constructor(num_of_employee_id:string,name_of_employee:string,numOfLionsWasInTheShow:number){
        super(num_of_employee_id,name_of_employee);
        this.NumOfLionsWasInTheShow = numOfLionsWasInTheShow
    }

    private numOfLionsWasInTheShow:number ;

    public get NumOfLionsWasInTheShow(){
        return this.numOfLionsWasInTheShow
    }

    public set NumOfLionsWasInTheShow(numOfLionsWasInTheShow:number){
        this.numOfLionsWasInTheShow = numOfLionsWasInTheShow;
    }

    public toString():string{
        return super.toString() + ` The Num of Lions that was in the show was  ${this.numOfLionsWasInTheShow}`
    }

    public  calculateSalary():number {
       return this.numOfLionsWasInTheShow*180;
    }
    public  ContinueToNextShow():boolean{
        if (this.numOfLionsWasInTheShow>3){
            return true;
        }
        else
            return false;
    }
    

}