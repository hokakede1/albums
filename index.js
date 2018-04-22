import { AppRegistry, View } from 'react-native';
import React from "react";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";

const App = () => (
    <View>
        <Header headerText="Albums"/>
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);
