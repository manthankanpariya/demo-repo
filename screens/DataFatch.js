import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';


export default class Datafatch extends Component {
    state = {
        dataSource: ''
    }
    componentDidMount() {
        return fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
                }, function () {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderItem = ({ item }) => {
        return (

            <View style={styles.container} style={{margin: 20}} >
                <Text style={styles.welcome} > {item.id} </Text>
                <Image
                    source={{ uri: item.thumbnailUrl }}
                    // indicator={ProgressBar}
                    indicatorProps={{
                        size: 80,
                        borderWidth: 0,
                        color: '#006994',
                        unfilledColor: '#006994'
                    }}
                    style={{
                        width: 320,
                        height: 240,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} />
                
                <Text style={{paddingTop:15, fontSize: 18}}>{item.title}</Text>
            </View>

        );
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.ItemSeparatorLine}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});