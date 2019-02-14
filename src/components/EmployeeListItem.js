import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import { employeeUpdate } from '../actions';

class EmployeeListItem extends Component {

    render() {
        const { headerContentStyle, 
            headerTextStyle,
            thumbnailStyle,
            thumbnailContainerStyle,
            imageStyle,
            emailStyle } = styles;
        const { phone, name } = this.props.employee;
        return (
            <Card>
                <CardSection>
                    <View style={ thumbnailContainerStyle }>
                    <Image source={{ uri: phone }}
                           style={{thumbnailStyle}}
                           />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{name}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image source={{uri: phone}}
                           style={imageStyle}/>
                </CardSection>
                <CardSection>
                    <Text style={emailStyle}/>
                    <Text>{}</Text>
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
    },
    emailStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 10
    },
};

export default connect(null, { employeeUpdate })(EmployeeListItem);
