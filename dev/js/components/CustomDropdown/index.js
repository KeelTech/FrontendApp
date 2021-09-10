import React, { Component } from 'react';
import { ddContainer, ddContainerItem, ddContainerItemHeader, optionMenu, innerWrapper } from './style.js';


class CustomDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            isDropdownExpanded: false
        };
    }
    onOptionSelect = item => {
        this.setState({ selectedOption: item, isDropdownExpanded: false });
        this.props.optionSelected(item);
    }
    toggleSelect = () => {
        this.setState({ isDropdownExpanded: !this.state.isDropdownExpanded });
    }
    render() {
        let selectedItem = {};
        if (this.state.selectedOption) {
            selectedItem = <span>{this.state.selectedOption.displayName.substring(0, 25)}</span>
        }
        else {
            selectedItem = <span>Search or Select type</span>
        }
        return (
            <div className={ddContainer + " " + "DDContNew"}>
                <div className={innerWrapper + " " + "InnerWrpNew"}>
                    <div onClick={this.toggleSelect}>
                        <button className={ddContainerItemHeader + " " + "DdContItemHead"}>{selectedItem}</button>
                    </div>
                    {
                        this.state.isDropdownExpanded &&

                        <div className={optionMenu + " " + "OptnMenuN"}>
                            {
                                this.props.list.map((item, index) => {
                                    return (
                                        <button onClick={() => this.onOptionSelect(item)} key={index} className={ddContainerItem + " " + "ddContBtn"}>{item.displayName.substring(0, 25)}</button>
                                    );
                                })
                            }
                        </div>

                    }
                </div>
            </div>
        );
    }
}

export default CustomDropDown;