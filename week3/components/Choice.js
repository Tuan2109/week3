import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export function Choice(props) {
  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceDescription}>
        {props.user}
      </Text>
      <Image
        source={props.uri}
        resizeMode="contain"
        style={styles.choiceImage}
      />
      <Text style={styles.choiceCardTitle}>
        {props.name}
      </Text>
    </View>

  );
}

function expImage(opt) {
  if (opt == 'rock')
    return require('../assets/stone.png');
  if (opt == 'paper')
    return require('../assets/paper.png');
  if (opt == 'scissors')
    return require('../assets/scissors.png');
}

export const CHOICES = [
  {
    name: 'rock',
    uri: expImage('rock'),
  },
  {
    name: 'paper',
    uri: expImage('paper'),
  },
  {
    name: 'scissors',
    uri: expImage('scissors'),
  }
  // {
  //   name: 'rock',
  //   uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
  // },
  // {
  //   name: 'paper',
  //   uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
  // },
  // {
  //   name: 'scissors',
  //   uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
  // }
];

export function compare(userChoice) {
  let computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  let result;
  if (userChoice === 'rock') {
    result = computerChoice.name === 'scissors' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'paper') {
    result = computerChoice.name === 'rock' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'scissors') {
    result = computerChoice.name === 'paper' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === computerChoice.name) result = 'Tie game!';
  let colorResult = pickColor(result);
  return [result, computerChoice, colorResult];
}

function pickColor(result) {
  let colorResult;
  switch (result) {
    case "Victory!":
      colorResult = 'green';
      break;
    case "Defeat!":
      colorResult = 'red';
      break;
    case "Tie game!":
      colorResult = 'black';
      break;
  }
  return colorResult;
}

const styles = StyleSheet.create({

  choiceContainer: {
    flex: 1, alignItems: 'center',
  },
  choiceDescription: {
    fontSize: 25, color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  choiceCardTitle: {
    fontSize: 30, color: '#250902'
  },
  choiceImage: {
    width: 150, height: 150, padding: 10,
  }

}
);
