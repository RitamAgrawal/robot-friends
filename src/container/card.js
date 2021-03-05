import React from "react";

const CardItem = (props) => {
  return (
    <div onClick={props.showCardDetail}>
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  );
};

const CardDetail = (props) => {
  return (
    <div onClick={props.hideCardDetail}>
      <h3>username: {props.username}</h3>
      <p>phone: {props.phone}</p>
      <h7>website: {props.website}</h7>
    </div>
  );
};

class Card extends React.Component {

  state = {
    showCardDetails: false,
  };

  showCardDetail = () => {
    this.setState({
      showCardDetails: true,
    });
  };

  hideCardDetail = () => {
    this.setState({
      showCardDetails: false,
    });
  };

  render() {
    const backgroundColorForRobot = 1 + Math.floor(Math.random());
    const backgroundColorForImage = [
      "bg-light-yellow",
      "bg-light-pink",
      "bg-light-green",
      "bg-light-red",
    ];
    const randomIndex = Math.floor(
      Math.random() * backgroundColorForImage.length
    );

    return (
      <div
        className={`${backgroundColorForImage[randomIndex]} tc dib br2 pa3 ma2 grow bw2 shadow-5 cards`}
      >
        <img
          alt="robot"
          src={`https://robohash.org/${this.props.id}?bgset=bg${backgroundColorForRobot}`}
          width="200px"
          height="200px"
        />

        {this.state.showCardDetails ? (
          <CardDetail {...this.props} hideCardDetail={this.hideCardDetail} />
        ) : (
          <CardItem {...this.props} showCardDetail={this.showCardDetail} />
        )}
      </div>
    );
  }
}

export default Card;
