import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeDateRange} from '../../AC'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => {
        const {changeDateRange, from, to} = this.props;
        changeDateRange(DateUtils.addDayToRange(day, {from, to}));
    }

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    from: state.dateRange.from,
    to: state.dateRange.to
}), { changeDateRange })(DateRange)