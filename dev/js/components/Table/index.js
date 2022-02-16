import React, { Component } from 'react';
import { getFormattedTime, getFormattedDate, renderStatusText, renderActionItem } from '@helpers/utils';
import TableCustomRows from '@components/TableCustomRows';
import { headerClass, headerRowClass, tableClass, rowClass, hrClass, rowItemClass, rowItemClassEmpty, actionItemColor } from './style.js';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    decideRendering = (row, key) => {
        // if(key.CustomView){
        //     return <td className={rowItemClass} key={key.key}><TableCustomRows id={key.CustomView} optionId={row.case_id}/></td>
        // }
        let dataLabel = row[key.key];
        if(key.isTaskCount){
            const colorFormat = renderActionItem(dataLabel);
            return <td className={rowItemClass}><span className={actionItemColor({colorFormat})}>{dataLabel}</span></td>
        }else if(key.isPlanName){
            dataLabel = dataLabel && dataLabel.name||'';
        }else if(key.isDate){
            dataLabel = `${getFormattedDate(dataLabel).formattedDate} ${getFormattedTime(dataLabel)}`
        }else if(key.CustomView){
            dataLabel = renderStatusText(dataLabel);
        }else if(key.isUser){
            dataLabel= dataLabel.user_name;
        }
        return <td className={rowItemClass} key={key.key}>{dataLabel}</td>
    }

    renderData = (data, cols) =>{
        return data.map(row =>
            <tr className={`${rowClass + " " + "tableRow" } cursor-pointer`} key={row.key} onClick={()=>this.props.handleCustomerClick(row.case_id)}>
                {cols.map(col =>
                    this.decideRendering(row, col)
                )}
            </tr>
        );
    }

    renderEmptyState = cols =>
        <tr className={rowClass} align="center" ><td colSpan={cols.length} className={rowItemClassEmpty}>There is no data in this table</td></tr>
    ;

    render() {
        return (
            <table className={tableClass + " " + "tableMain tableUpdated"}>
                <thead className={headerClass + " " + "tableHeadMain"}>
                    <tr className={headerRowClass + " " + "tableRow"}>
                        {this.props.cols.map(col =>
                            <th className={hrClass + " " + "tableHead"} key={col.key}>{col.label}</th>
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