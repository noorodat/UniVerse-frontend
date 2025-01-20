import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePickerInput({ label, value, setValue, name, errors }) {
    return (
        <div className="form-group">
            <label className="form-label">{label}</label>
            <div className="input-group datepicker-container">
                <DatePicker
                    selected={value}
                    onChange={(date) => setValue(name, date)}
                    minDate={new Date()}
                    dateFormat="yyyy-MM-dd"
                    name={name}
                    showYearDropdown
                    yearDropdownItemNumber={5}
                    placeholderText="Select date"
                    className="form-control datepicker-input"
                />
                <button
                    className="btn btn-clear-date"
                    type="button"
                    onClick={() => setValue(name, null)}
                >
                    <i className="fa fa-times" />
                </button>
            </div>
            {errors && <p className="text-red mt-2">{errors.message}</p>}
        </div>
    );
}
