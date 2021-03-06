import FieldInput from "./FieldInput";
import SelectInput from "./SelectInput";
import { Field, reduxForm } from "redux-form";

const AddOrEdit = ({
  handleSubmit,
  heading,
  pristine,
  inputFields,
  reset,
  submitting,
  handleSave,
  handleCancel,
  id,
}) => {
  
  const meta = { touched: false, error: {}, warning: {} };
  const input = {};
  let index = 0;
  const mystyle = {
    maxHeight: "90%",
    // height:"600px",
    // width:"600px",
    overflowY: "scroll",

  };
  return (
    <div style={mystyle}>
      <form id={id} onSubmit={handleSubmit}>
        <h1>{heading}</h1>
        {inputFields.map(function (inputField) {
          if (!inputField.value) {
            inputField.value = "";
            index = id + "_" + Date.now()
          }

          if (inputField.type === "text" || inputField.type === "hidden") {
            // console.log(inputField.type)
          //   return ( <div className="form-group">
          //   {/* <label htmlFor={inputField.name}>{label}</label> */}
      
          //   <div className="field">
          //     <input
          //       {...input}
          //       type="text"
          //       name={inputField.name}
          //       defaultValue={inputField.value}
          //       className="form-control"
          //       placeholder={inputField.placeholder}
          //     />
      
          //     {meta.touched &&
          //       ((meta.error && <p className="text-danger">{meta.error}</p>) ||
          //         (meta.warning && <p className="text-danger">{meta.warning}</p>))}
          //   </div>
          // </div>)
            return (
              <FieldInput
                input={input}
                meta={meta}
                key={index}
                value={inputField.value}
                type={inputField.type}
                name={inputField.name}
                label={inputField.label}
                placeholder={inputField.placeholder}
                required ={inputField.required}
                //   component={FieldInput}
              />
            );
          }
          if (inputField.type === "select") {
            return (
              <SelectInput
                input={input}
                meta={meta}
                key={index}
                value={inputField.value}
                name={inputField.name}
                label={inputField.label}
                options={inputField.options}
                required ={inputField.required}
                defaultOption="Please Select an Option"
                //   component={SelectInput}
              />
            );
          }
        })}

        <div>
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary"
          >
            <i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit
          </button>

          {heading === "Add" && (
            <button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
              className="btn btn-default btn-space"
            >
              Clear Values
            </button>
          )}

          {/* <button
            type="button"
            className="btn btn-default btn-space"
            onClick={handleCancel}
          >
            Cancel
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default AddOrEdit;
