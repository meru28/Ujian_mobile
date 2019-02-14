import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getEmployeeList } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {

    componentDidMount() {
        this.props.getEmployeeList();
    }

    renderRow = () => {
        const listJSX = this.props.employees.map((item) => {
        return (
            <EmployeeListItem key={item.uid} employee={item}/>
        );
            });
            return listJSX;
    }

    render() {
        return (
            <View>
                <Header
                        placement="left"
                        centerComponent={{ text: 'Photo Album', style: { color: '#fff' }}}
                />
                <ScrollView>
                    {this.renderRow()}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.employees);
    
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    console.log(employees);

    return { employees };
    //this.props = { ...this.props, ...returndarimapstatetoprops }
};

export default connect(mapStateToProps, { getEmployeeList })(EmployeeList);
