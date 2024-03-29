"use strict";

class TradingCard extends React.Component {
  render() {
    return (
      <div className="card" id={this.props.name}>
        <h2>Name: {this.props.name}</h2>
        <img src={this.props.imgUrl} />
        <h2>Skill: {this.props.skill} </h2>
      </div>
    );
  }
}

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];

class TradingCardContainer extends React.Component {
  render() {
    const tradingCards = [];

    for (const card_num in tradingCardData) {
      tradingCards.push(
        <TradingCard
          key={card_num}
          name={tradingCardData[card_num].name}
          skill={tradingCardData[card_num].skill}
          imgUrl={tradingCardData[card_num].imgUrl}
        />
      );
    }
  return(
    <div>
      {tradingCards}
    </div>
    );
  }
}


ReactDOM.render(
  <TradingCardContainer />,
  document.querySelector('#container')
);
