import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Http from '../../libs/http';
import colors from '../../res/colors';
import CoinsItem from './CoinsItem';


export default class CoinsScreen extends Component {

    state = {
        coins: [],
        allCoins: [],
        loading: false
    }
    
    componentDidMount = () => {
        this.getCoins();
    }
    
    getCoins = async () => {
        this.setState({ loading: true });
    
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
    
        this.setState({ coins: res.data, allCoins: res.data, loading: false });
    }


    render() {
        const { coins, loading } = this.state;

        return (
            <View style={ styles.container }>
                { loading ?
                    <ActivityIndicator
                        style={styles.loader}
                        color="#fff"
                        size="large"

                    />
                    : null
                }
                <FlatList
                    data={coins}
                    renderItem={({item}) => (
                        <CoinsItem item={item} />
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.charade
    },
    titleText: {
        color: "#222",
        textAlign: "center"
    },
    loader: {
      marginTop: 60
    }
})