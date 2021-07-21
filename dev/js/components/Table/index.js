import React, { Component } from 'react';
//import { headerClass } from './style.js';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderData = (data, cols) =>
        data.map(row =>
            <tr key={row.id}>
                {cols.map(col =>
                    <td key={col.name}>{row[col.name]}</td>
                )}
            </tr>
        );
    renderEmptyState = cols =>
        <tr colSpan={cols.length}><td>There is no data in this table</td></tr>
        ;
    render() {
        return (
            <table>
                <thead className={headerClass}>
                    <tr>
                        {this.props.cols.map(col =>
                            <th key={col.name}>{col.header}</th>
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