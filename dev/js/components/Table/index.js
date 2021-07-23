import React, { Component } from 'react';
import { headerClass, headerRowClass, tableClass, rowClass, hrClass, rowItemClass, rowItemClassEmpty } from './style.js';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderData = (data, cols) =>
        data.map(row =>
            <tr className={rowClass} key={row.key}>
                {cols.map(col =>
                    <td className={rowItemClass} key={col.key}>{row[col.key]}</td>
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
                            <th className={hrClass} key={col.key}>{col.key}</th>
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