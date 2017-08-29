'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var glossary = {
    'lang': {
        en: 'language',
        ru: 'язык',
        ua: 'мова'
    },
    'create': {
        en: 'create',
        ru: 'Создать',
        ua: 'Створити'
    },
    'apps': {
        en: 'Change apps',
        ru: 'Сменить',
        ua: 'Змінити'
    }
};

var localization = 'ua';

var Base = function (_Component) {
    _inherits(Base, _Component);

    function Base() {
        _classCallCheck(this, Base);

        return _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
    }

    _createClass(Base, [{
        key: 'tr',
        value: function tr(key) {
            return glossary[key] && glossary[key][localization] || key;
        }
    }, {
        key: 'addField',
        value: function addField(field) {
            if (field.val) {
                return _react2.default.createElement(
                    'div',
                    { className: field.class || 'text',
                        key: field.key || '', title: field.title || ''
                    },
                    '' + (field.title || '') + field.val
                );
            }
        }
    }, {
        key: 'setDateFormat',
        value: function setDateFormat(val) {
            var date = new Date(val);

            return this.twin(date.getDate()) + '.' + this.twin(date.getMonth()) + '.\n                ' + date.getFullYear() + ' ' + this.twin(date.getHours()) + ':\n                ' + this.twin(date.getMinutes());
        }
    }, {
        key: 'twin',
        value: function twin(str) {
            str = str.toString();
            return str.length > 1 ? str : '0' + str;
        }
    }]);

    return Base;
}(_react.Component);

exports.default = Base;