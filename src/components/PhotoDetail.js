import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './common';
import CardSection from './common';

class AlbumDetail extends Component{
    render(){
        const { title, artist, thumbnail_image, image, url } = this.props.album;
        const { headerContentStyle, 
                headerTextStyle,
                thumbnailStyle,
                thumbnailContainerStyle,
                imageStyle } = styles;
        return(
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image source={{ uri: thumbnail_image }}
                               style={thumbnailStyle}/>
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={imageStyle} source={{ uri: image}}>
                    </Image>
                </CardSection>
            </Card>
        );
    }
}

const styles = { 
    thumbnailStyle: {
        height: 50,
        width: 50 },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around' },
    headerTextStyle: { fontSize: 18 },
    thumbnailContainerStyle: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft: 10, 
        marginRight: 10
    },
    imageStyle: { 
        height: 300,
        flex:1,
        width: null
    }
}

export default AlbumDetail;