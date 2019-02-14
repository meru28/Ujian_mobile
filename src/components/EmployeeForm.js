import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    onNameChange = (text) => {
        this.props.employeeUpdate('name', text);
    }

    onPhoneChange = (text) => {
        this.props.employeeUpdate('phone', text);
    }
    
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label="Caption" 
                        placeholder="The Caption"
                        value={this.props.name}
                        onChangeText={this.onNameChange} 
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Image" 
                        placeholder="Image Url"
                        value={this.props.phone}
                        onChangeText={this.onPhoneChange} 
                    />
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
