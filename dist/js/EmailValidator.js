"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//extended class is same as class but you can overrule methods + functions besides constructor
//
var EmailValidator = function (_Validator) {
    _inherits(EmailValidator, _Validator);

    //IN CASE YOU NEED TO CHANGE SOMETHING IN THE CONSTRUCTOR, USE THIS FORMAT
    function EmailValidator(selector) {
        _classCallCheck(this, EmailValidator);

        // call constructor in Validator()
        var _this = _possibleConstructorReturn(this, (EmailValidator.__proto__ || Object.getPrototypeOf(EmailValidator)).call(this, selector));

        console.log("constructor from EmailValidator");
        //We don't need this constuctor - it doesn't do anything different from
        //the parent class constructor. It's here for illustrative purposes.
        return _this;
    }

    return EmailValidator;
}(Validator);
//# sourceMappingURL=EmailValidator.js.map
