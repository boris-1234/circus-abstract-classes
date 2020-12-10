var CircusEmployee = /** @class */ (function () {
    function CircusEmployee(num_of_employee_id, name_of_employee) {
        this.Num_of_employee_id = num_of_employee_id;
        this.Name_of_employee = name_of_employee;
    }
    Object.defineProperty(CircusEmployee.prototype, "Num_of_employee_id", {
        get: function () {
            return this.num_of_employee_id;
        },
        set: function (num_of_employee_id) {
            this.num_of_employee_id = (num_of_employee_id.length == 9) ? num_of_employee_id : "unknown";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircusEmployee.prototype, "Name_of_employee", {
        get: function () {
            return this.name_of_employee;
        },
        set: function (name_of_employee) {
            this.name_of_employee = (name_of_employee.length > 2) ? name_of_employee : "unknown";
        },
        enumerable: false,
        configurable: true
    });
    CircusEmployee.prototype.toString = function () {
        return "name_of_employee: " + this.name_of_employee + ",idNumber: " + this.Num_of_employee_id;
    };
    return CircusEmployee;
}());
