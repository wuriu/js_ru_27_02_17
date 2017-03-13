import React, { Component } from 'react'
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import './style.css'

export default class DataPicker extends Component {
    state = {
        from: null,
        to: null
    }

    render() {
        const { from, to } = this.state;

        return (
            <div className="data-picker">
                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                    <p>{ moment(from).format('L') } - { moment(to).format('L') }</p>
                }
                <DayPicker
                    numberOfMonths={ 2 }
                    selectedDays={ [from, { from, to }] }
                    onDayClick={ this.handleDayClick }
                />
            </div>
        )
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range)
    }
}