import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function History(props) {
    return (
        <View style={styles.container}>
            <View style={[styles.totalGame, styles.record]}>
                <View style={[styles.result, styles.borderTextRecord]}>
                    <View style={[styles.recordFlex]}>
                        <Text style={styles.textHistory}>
                            Win
                        </Text>
                    </View>
                    <View style={[styles.recordFlex, styles.borderMiddile]}>
                        <Text style={styles.textHistory}>
                            Draw
                        </Text>
                    </View>
                    <View style={[styles.recordFlex]}>
                        <Text style={styles.textHistory}>
                            Lose
                        </Text>
                    </View>
                </View>
                <View style={[styles.history, styles.borderTextRecord]}>
                    <View style={[styles.recordFlex]}>
                        <Text style={styles.textHistory}>
                            {props.gameWin}
                        </Text>
                    </View>
                    <View style={[styles.recordFlex, styles.borderMiddile]}>
                        <Text style={styles.textHistory}>
                            {props.gameDraw}
                        </Text>
                    </View>
                    <View style={[styles.recordFlex]}>
                        <Text style={styles.textHistory}>
                            {props.gameLose}
                        </Text>
                    </View>
                </View>
                <View style={[styles.rate]}>
                    <View style={[styles.recordFlex]}>
                        <Text style={[styles.textHistory, styles.textRate]}>
                            {calRate(props.gameWin, props.totalGame)}
                        </Text>
                    </View>
                    <View style={[styles.recordFlex, styles.borderMiddile]}>
                        <Text style={[styles.textHistory, styles.textRate]}>
                            {calRate(props.gameDraw, props.totalGame)}
                        </Text>
                    </View>
                    <View style={[styles.recordFlex]}>
                        <Text style={[styles.textHistory, styles.textRate]}>
                            {calRate(props.gameLose, props.totalGame)}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.totalGame}>
                <Text style={styles.textHistory}> {props.totalGame} Games</Text>
            </View>
        </View>
    );
}

function calRate(totalResult, totalGame) {
    if (totalGame == 0) return "0%";
    let rate = totalResult / totalGame * 100;
    rate = rate.toFixed(2);
    return rate + "%";
}

export function updateResult(result, props) {
    let gameWin = props.gameWin;
    let gameDraw = props.gameDraw;
    let gameLose = props.gameLose;
    switch (result) {
        case "Victory!":
            gameWin += 1;
            break;
        case "Tie game!":
            gameDraw += 1;
            break;
        case "Defeat!":
            gameLose += 1;
            break;
    };
    return [gameWin, gameDraw, gameLose];
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    record: {
        flex: 0.8,
    },
    result: {
        flex: 0.4,
        flexDirection: 'row',
    },
    history: {
        flex: 0.3,
        flexDirection: 'row',
        marginTop: 2,
    },
    rate: {
        flex: 0.3,
        flexDirection: 'row',
        marginTop: 2,
    },
    recordFlex: {
        flex: 0.33,
    },
    totalGame: {
        flex: 0.2,
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        shadowRadius: 5,
        borderColor: 'grey',
        shadowOpacity: 0.90,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: {
            height: 5,
            width: 5,
        },
    },
    textHistory: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    borderTextRecord: {
        borderBottomWidth: 2,
        borderColor: 'grey',
    },
    borderMiddile: {
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: 'grey',
    },
});