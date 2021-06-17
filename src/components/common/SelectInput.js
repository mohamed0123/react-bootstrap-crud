import React from 'react';
import PropTypes from "prop-types";

const SelectInput = ({input,value,key ,required, name, label, defaultOption, options, meta: {touched, error, warning}}) => {

    return(
        <div className="form-group">
            <div htmlFor={name}>{label}</div>
            <div className="field">
                <select
                    {...input}
                    name={name}
                    key={key}
                    className="form-control"
                    defaultValue={value}
                    required ={required}
                >
                    {/* <option>{defaultOption}</option> */}
                    {
                        options.map(option => {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })
                    }
                </select>

                    {touched && ((error && <p className="text-danger">{error}</p>) || (warning && <p className="text-danger">{warning}</p>))}

            </div>
        </div>
    );
};



SelectInput.propTypes = {
    input: PropTypes.object.isRequired,
    name: PropTypes.string,    
    label: PropTypes.string,
    key:PropTypes.string,
    defaultOption: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    meta: PropTypes.object.isRequired
};


export default SelectInput;