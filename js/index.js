var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var audio = new Audio('http://www.wavsource.com/snds_2017-12-04_8268401740269038/sfx/buzzer_x.wav');

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { seconds: '0', minutes: 25, sesMin: 25, breakMin: 5, inSession: true, started: false };
    _this.startClock = _this.startClock.bind(_this);
    _this.plusBreak = _this.plusBreak.bind(_this);
    _this.minusBreak = _this.minusBreak.bind(_this);
    _this.plusSession = _this.plusSession.bind(_this);
    _this.minusSession = _this.minusSession.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'startClock',
    value: function startClock() {
      if (this.state.started == false) {
        console.log(this.state.started);
        this.setState({ seconds: 59 });
        this.setState({ started: true });
        this.setState({ minutes: this.state.minutes - 1 });
        this.counter = setInterval(this.timer.bind(this), 1000);
      }
      if (this.state.started == true) {
        clearInterval(this.counter);
        this.setState({ minutes: this.state.sesMin, seconds: '0' });
        this.setState({ started: false, inSession: true });
        console.log(this.state.started);
      }
    }
  }, {
    key: 'timer',
    value: function timer() {
      if (this.state.minutes == 0 && this.state.seconds == 1 && this.state.inSession == false) {
        this.setState({ minutes: this.state.sesMin, inSession: true });
        audio.play();
        console.log(this.state.inSession);
      }
      if (this.state.minutes == 0 && this.state.seconds == 1 && this.state.inSession == true) {
        this.setState({ minutes: this.state.breakMin, inSession: false });
        audio.play();
        console.log(this.state.inSession);
      }
      if (this.state.seconds == 0) {
        this.setState({ minutes: this.state.minutes - 1, seconds: 60 });
      }

      this.setState({ seconds: this.state.seconds - 1 });
    }
  }, {
    key: 'plusBreak',
    value: function plusBreak() {
      if (this.state.started == false) {
        this.setState({ breakMin: this.state.breakMin + 1 });
      } else alert('Please reset the clock first');
    }
  }, {
    key: 'minusBreak',
    value: function minusBreak() {
      if (this.state.started == false) {
        if (this.state.breakMin > 1) {
          this.setState({ breakMin: this.state.breakMin - 1 });
        }
      } else alert('Please reset the clock first');
    }
  }, {
    key: 'plusSession',
    value: function plusSession() {
      if (this.state.started == false) {
        this.setState({ minutes: this.state.minutes + 5, sesMin: this.state.minutes + 5 });
      } else alert('Please reset the clock first');
    }
  }, {
    key: 'minusSession',
    value: function minusSession() {
      if (this.state.started == false) {
        if (this.state.minutes > 5) {
          this.setState({ minutes: this.state.minutes - 5, sesMin: this.state.minutes - 5 });
        }
      } else alert('Please reset the clock first');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: 'title' },
          'FreeCodeCamp Pomodoro Clock'
        ),
        React.createElement(Buttons, { seconds: this.state.seconds, minutes: this.state.minutes, plusBreak: this.plusBreak, minusBreak: this.minusBreak, plusSession: this.plusSession, minusSession: this.minusSession, breakMin: this.state.breakMin, sesMin: this.state.sesMin }),
        React.createElement(Clock, { inSession: this.state.inSession, seconds: this.state.seconds, minutes: this.state.minutes }),
        React.createElement(
          'button',
          { onClick: this.startClock },
          'Start / Reset'
        )
      );
    }
  }]);

  return App;
}(React.Component);

var Buttons = function (_React$Component2) {
  _inherits(Buttons, _React$Component2);

  function Buttons() {
    _classCallCheck(this, Buttons);

    return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
  }

  _createClass(Buttons, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'main' },
        React.createElement(
          'div',
          { className: 'buttonContainer' },
          React.createElement(
            'h3',
            null,
            'Break Length'
          ),
          React.createElement(
            'div',
            { className: 'buttons' },
            React.createElement(
              'button',
              { onClick: this.props.minusBreak },
              '-'
            ),
            React.createElement(
              'h4',
              null,
              this.props.breakMin,
              ' min'
            ),
            React.createElement(
              'button',
              { onClick: this.props.plusBreak },
              '+'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'buttonContainer' },
          React.createElement(
            'h3',
            null,
            'Session Length'
          ),
          React.createElement(
            'div',
            { className: 'buttons' },
            React.createElement(
              'button',
              { onClick: this.props.minusSession },
              '-'
            ),
            React.createElement(
              'h4',
              null,
              this.props.sesMin,
              ' min'
            ),
            React.createElement(
              'button',
              { onClick: this.props.plusSession },
              '+'
            )
          )
        )
      );
    }
  }]);

  return Buttons;
}(React.Component);

var Clock = function (_React$Component3) {
  _inherits(Clock, _React$Component3);

  function Clock() {
    _classCallCheck(this, Clock);

    return _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).apply(this, arguments));
  }

  _createClass(Clock, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'circle' },
        React.createElement(
          'h1',
          { className: 'clockTitle' },
          ' ',
          this.props.inSession ? 'Session' : 'Break'
        ),
        React.createElement(
          'h2',
          null,
          this.props.minutes < 10 ? '0' : '',
          this.props.minutes,
          ':',
          this.props.seconds < 10 ? '0' : '',
          this.props.seconds
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));