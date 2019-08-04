import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ChoiceButton from './components/ChoiceButton';
import { Header } from './components/Header';
import { Choice, CHOICES, compare } from './components/Choice';
import { History, updateResult } from './components/History';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      uri: require('./assets/letsplay.jpg'),
      nameCom: "",
      uriCom: require('./assets/letsplay.jpg'),
      result: "Let's play!",
      colorResult: "black",
      totalGame: 0,
      gameWin: 0,
      gameDraw: 0,
      gameLose: 0,
    };

    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton(_choice) {
    let playerChoice = CHOICES.find(x => x.name === _choice)
    let name = playerChoice.name;
    let uri = playerChoice.uri;
    let _compare = compare(playerChoice.name);
    let [result, computerChoice, colorResult] = _compare;
    let nameCom = computerChoice.name;
    let uriCom = computerChoice.uri;
    let totalGame = this.state.totalGame + 1;
    let [gameWin, gameDraw, gameLose] = updateResult(result, this.state);
    this.setState({
      name, uri, nameCom, uriCom, result, colorResult, totalGame, gameWin, gameDraw, gameLose
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.layoutHeader}>
          <Header
            result={this.state.result}
            colorResult={this.state.colorResult}
          />
        </View>
        <View style={styles.playArea}>
          <View style={styles.choicesContainer}>
            <Choice user="Player" name={this.state.name} uri={this.state.uri} />
            <Text >vs</Text>
            <Choice user="Com" name={this.state.nameCom} uri={this.state.uriCom} />
          </View>
        </View>
        <View style={styles.history}>
          {
            <History
              totalGame={this.state.totalGame}
              gameWin={this.state.gameWin}
              gameDraw={this.state.gameDraw}
              gameLose={this.state.gameLose}
            />
          }
        </View>
        <View style={styles.choices}>
          {
            CHOICES.map(choice => {
              return <ChoiceButton key={choice.name} name={choice.name} onPress={this.onPressButton} />;
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  layoutHeader: {
    flex: 0.15,
  },
  playArea: {
    flex: 0.4,
  },
  history: {
    flex: 0.15,
  },
  choices: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  choicesContainer: {
    flex: 0.5,
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  choiceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  choiceDescription: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
  ,
  choiceCardTitle: {
    fontSize: 30,
    color: '#250902'
  }
  ,
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  }
});

