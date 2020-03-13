import React from 'react';
import axios from 'axios';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')

      .then(res => {
        console.log(res);
        this.setState({
          players: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div data-testid="players">
        {' '}
        {this.state.players.map(player => (
          <div>
            <Card style={{ border: ' 2px solid black', maxWidth: '200px' }}>
              <CardBody key={player.id}>
                <CardTitle>
                  {' '}
                  <h2>Name: {player.name}</h2>
                </CardTitle>
                <CardSubtitle>
                  {' '}
                  <h2>Country: {player.country}</h2>
                </CardSubtitle>
                <CardText>
                  <h2>Searches: {player.searches}</h2>
                </CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
