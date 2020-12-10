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
var RopeWalker = /** @class */ (function (_super) {
    __extends(RopeWalker, _super);
    function RopeWalker(num_of_employee_id, name_of_employee, number_of_shoes, number_of_times_the_crowd_was_clapping) {
        var _this = _super.call(this, num_of_employee_id, name_of_employee) || this;
        _this.Number_of_shoes = number_of_shoes;
        _this.Number_of_times_the_crowd_was_clapping = number_of_times_the_crowd_was_clapping;
        return _this;
    }
    Object.defineProperty(RopeWalker.prototype, "Number_of_shoes", {
        get: function () {
            return this.number_of_shoes;
        },
        set: function (number_of_shoes) {
            this.number_of_shoes = number_of_shoes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RopeWalker.prototype, "Number_of_times_the_crowd_was_clapping", {
        get: function () {
            return this.number_of_times_the_crowd_was_clapping;
        },
        set: function (number_of_shoes) {
            this.number_of_times_the_crowd_was_clapping = number_of_shoes;
        },
        enumerable: false,
        configurable: true
    });
    RopeWalker.prototype.toString = function () {
        return _super.prototype.toString.call(this) + (" the number size of the RopeWalker is " + this.number_of_shoes + ", and his idNumber is : " + this.Num_of_employee_id);
    };
    RopeWalker.prototype.calculateSalary = function () {
        return this.number_of_shoes * 150;
    };
    RopeWalker.prototype.ContinueToNextShow = function () {
        if (this.number_of_times_the_crowd_was_clapping >= 1) {
            return true;
        }
        else
            return false;
    };
    return RopeWalker;
}(CircusEmployee));
