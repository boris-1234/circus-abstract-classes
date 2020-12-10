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
var LionTamar = /** @class */ (function (_super) {
    __extends(LionTamar, _super);
    function LionTamar(num_of_employee_id, name_of_employee, numOfLionsWasInTheShow) {
        var _this = _super.call(this, num_of_employee_id, name_of_employee) || this;
        _this.NumOfLionsWasInTheShow = numOfLionsWasInTheShow;
        return _this;
    }
    Object.defineProperty(LionTamar.prototype, "NumOfLionsWasInTheShow", {
        get: function () {
            return this.numOfLionsWasInTheShow;
        },
        set: function (numOfLionsWasInTheShow) {
            this.numOfLionsWasInTheShow = numOfLionsWasInTheShow;
        },
        enumerable: false,
        configurable: true
    });
    LionTamar.prototype.toString = function () {
        return _super.prototype.toString.call(this) + (" The Num of Lions that was in the show was  " + this.numOfLionsWasInTheShow);
    };
    LionTamar.prototype.calculateSalary = function () {
        return this.numOfLionsWasInTheShow * 180;
    };
    LionTamar.prototype.ContinueToNextShow = function () {
        if (this.numOfLionsWasInTheShow > 3) {
            return true;
        }
        else
            return false;
    };
    return LionTamar;
}(CircusEmployee));
