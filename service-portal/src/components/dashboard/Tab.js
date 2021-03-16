import React, { Component } from 'react'

export class Tab extends React.Component {
    render() {
        if(this.props.isSelected){

        

        return (
            <div>
             {this.props.children}

            </div>
        )
        }
        return null;
    }
}

export default Tab
