var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clown = /** @class */ (function (_super) {
    __extends(Clown, _super);
    function Clown(num_of_employee_id, name_of_employee, num_of_times_the_clown_entertain_the_crowd) {
        var _this = _super.call(this, num_of_employee_id, name_of_employee) || this;
        _this.Num_of_times_the_clown_entertain_the_crowd = num_of_times_the_clown_entertain_the_crowd;
        return _this;
    }
    Object.defineProperty(Clown.prototype, "Num_of_times_the_clown_entertain_the_crowd", {
        get: function () {
            return this.num_of_times_the_clown_entertain_the_crowd;
        },
        set: function (num_of_times_the_clown_entertain_the_crowd) {
            this.num_of_times_the_clown_entertain_the_crowd = num_of_times_the_clown_entertain_the_crowd;
        },
        enumerable: false,
        configurable: true
    });
    Clown.prototype.toString = function () {
        return _super.prototype.toString.call(this) + (" The Num of times the clown entertain the crowd was " + this.num_of_times_the_clown_entertain_the_crowd);
    };
    Clown.prototype.calculateSalary = function () {
        return this.num_of_times_the_clown_entertain_the_crowd * 100;
    };
    Clown.prototype.ContinueToNextShow = function () {
        if (this.num_of_times_the_clown_entertain_the_crowd >= 1) {
            return true;
        }
        else
            return false;
    };
    return Clown;
}(CircusEmployee));
