import React, { Component } from 'react';
import { headerClass, headerRowClass, tableClass, rowClass, hrClass, rowItemClass, rowItemClassEmpty } from './style.js';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    decideRendering = (row, key) => {
        let list = this.props.children;
        if (list.length > 2) {
            let output = list.find((item) => {
                return item.type == "template" && item.props.id == key
            })
            if (output) {
                return <td className={rowItemClass} key={key}>{React.cloneElement(output.props.children, {})}</td>
            }
            else {
                return <td className={rowItemClass} key={key}>{row[key]}</td>
            }
        }
        else {
            if (list.type == "template" && list.props.id == key) {
                return <td className={rowItemClass} key={key}>{React.cloneElement(list.props.children, {})}</td>
            }
            else {
                return <td className={rowItemClass} key={key}>{row[key]}</td>
            }
        }
    }
    renderData = (data, cols) =>
        data.map(row =>
            <tr className={rowClass} key={row.key}>
                {cols.map(col =>
                    this.decideRendering(row, col.key)
                )}
            </tr>
        );
    renderEmptyState = cols =>
        <tr className={rowClass} align="center" ><td colSpan={cols.length} className={rowItemClassEmpty}>There is no data in this table</td></tr>
        ;
    render() {
        return (
            <table className={tableClass}>
                <thead className={headerClass}>
                    <tr className={headerRowClass}>
                        {this.props.cols.map(col =>
                            <th className={hrClass} key={col.key}>{col.label}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.length > 0 ? this.renderData(this.props.data, this.props.cols) : this.renderEmptyState(this.props.cols)}
                </tbody>
            </table>
        );
    }
}

export default Table;