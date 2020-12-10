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
var FireSpitter = /** @class */ (function (_super) {
    __extends(FireSpitter, _super);
    function FireSpitter(num_of_employee_id, name_of_employee, distance_flame_flying, number_of_times_the_dragon_spitt_the_fire_in_the_show) {
        var _this = _super.call(this, num_of_employee_id, name_of_employee) || this;
        _this.Distance_flame_flying = distance_flame_flying;
        _this.Number_of_times_the_dragon_spitt_the_fire_in_the_show = number_of_times_the_dragon_spitt_the_fire_in_the_show;
        return _this;
    }
    Object.defineProperty(FireSpitter.prototype, "Distance_flame_flying", {
        get: function () {
            return this.distance_flame_flying;
        },
        set: function (distance_flame_flying) {
            this.distance_flame_flying = distance_flame_flying;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FireSpitter.prototype, "Number_of_times_the_dragon_spitt_the_fire_in_the_show", {
        get: function () {
            return this.number_of_times_the_dragon_spitt_the_fire_in_the_show;
        },
        set: function (number_of_times_the_dragon_spitt_the_fire_in_the_show) {
            this.number_of_times_the_dragon_spitt_the_fire_in_the_show = number_of_times_the_dragon_spitt_the_fire_in_the_show;
        },
        enumerable: false,
        configurable: true
    });
    FireSpitter.prototype.toString = function () {
        return _super.prototype.toString.call(this) + (" the distance the fire did from the fire spitter was  " + this.distance_flame_flying + ", and the number of times the dragon spitt the fire in the show was  : " + this.number_of_times_the_dragon_spitt_the_fire_in_the_show);
    };
    FireSpitter.prototype.calculateSalary = function () {
        return this.distance_flame_flying * 30;
    };
    FireSpitter.prototype.ContinueToNextShow = function () {
        if (this.distance_flame_flying >= 1) {
            return true;
        }
        else
            return false;
    };
    return FireSpitter;
}(CircusEmployee));
