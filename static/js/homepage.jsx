"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p> Hello you! Get ready to trade some cards!</p>
        <a href="/cards">Click to view trading cards</a>
        <img src="/static/img/balloonicorn.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
