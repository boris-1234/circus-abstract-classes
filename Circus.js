var Circus = /** @class */ (function () {
    function Circus() {
        this._Circus_Employees = [];
    }
    Circus.prototype.AddEmployee = function (Circus_Employee1) {
        if (this._Circus_Employees.length >= 30) {
            return false;
        }
        this._Circus_Employees.push(Circus_Employee1);
        return true;
    };
    Circus.prototype.calculateTotalSalary = function () {
        var totalSalary = 0;
        for (var _i = 0, _a = this._Circus_Employees; _i < _a.length; _i++) {
            var CircusEmployee1 = _a[_i];
            totalSalary += CircusEmployee1.calculateSalary();
        }
        return totalSalary;
    };
    Circus.prototype.NoOfEmployeesForNextShow = function () {
        var Num_Of_Employess_Continue_To_The_next_Show = 0;
        for (var _i = 0, _a = this._Circus_Employees; _i < _a.length; _i++) {
            var Circus_Employee = _a[_i];
            if (Circus_Employee.ContinueToNextShow()) {
                Num_Of_Employess_Continue_To_The_next_Show++;
            }
        }
        return Num_Of_Employess_Continue_To_The_next_Show;
    };
    Circus.prototype.ClownsSalaryPrecent = function () {
        var totalClownsSalary = 0;
        for (var _i = 0, _a = this._Circus_Employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            if (employee instanceof Clown)
                totalClownsSalary += employee.calculateSalary();
        }
        var totalSalary = this.calculateTotalSalary();
        return totalClownsSalary / totalSalary;
    };
    return Circus;
}());
