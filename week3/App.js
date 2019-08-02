import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

export default function App() {
  const [gamePrompt, setGamePrompt] = useState('Fire dafdasfs');
  const onPress = (userChoice) => {
    alert(userChoice);
  };
  const CHOICES = [
    {
      name: 'rock',
      uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
    },
    {
      name: 'paper',
      uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
    },
    {
      name: 'scissors',
      uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png',
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.layoutHeader}>
        <Text style={styles.buttonText}>{gamePrompt}</Text>
      </View>
      <View style={[styles.choiceContainer, { backgroundColor: 'yellow' }]}>
        <View style={[styles.choiceContainer2, { backgroundColor: 'red' }]}>
          <Text style={styles.choiceDescription}>
            Player
          </Text>
          <Image
            source={{ uri: CHOICES[0].uri }}
            resizeMode="contain"
            style={styles.choiceImage}
          />
          <Text style={styles.choiceCardTitle}>
            Rock
          </Text>
        </View>
        <Text style={styles.choiceImage}>vs</Text>
        <View style={[styles.choiceContainer2, { backgroundColor: 'blue' }]}>
          <Text style={styles.choiceDescription}>
            Computer
          </Text>
          <Image
            source={{ uri: CHOICES[1].uri }}
            resizeMode="contain"
            style={styles.choiceImage}
          />
          <Text style={styles.choiceCardTitle}>
            Scissors
        </Text>
        </View>
      </View>
      <View style={styles.layoutButton}>
        {
          CHOICES.map(choice => {
            return (
              <TouchableOpacity
                key={choice.name}
                style={styles.buttonStyle}
                onPress={() => onPress(choice.name)}
              >
                <Text style={styles.buttonText}>
                  {choice.name}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee',
  },
  container2: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#640D14',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  layoutHeader: {
    backgroundColor: 'green',
    flex: 0.2,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  layoutButton: {
    backgroundColor: 'blue',
    flex: 0.3,
  },
  choicesContainer: {
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
    shadowOffset: { height: 5, width: 5 },
  },
  choiceContainer: {
    flex: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  choiceDescription: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  choiceCardTitle: {
    fontSize: 30,
    color: '#250902',
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  }
});