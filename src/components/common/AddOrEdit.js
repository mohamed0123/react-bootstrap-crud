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
        {inputFields.map(function (inputField, i) {
          if (!inputField.value) {
            inputField.value = "";
          }

          if (inputField.type === "text") {

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
                key={i}
                value={inputField.value}
                type="text"
                name={inputField.name}
                label={inputField.label}
                placeholder={inputField.placeholder}
                //   component={FieldInput}
              />
            );
          }
          if (inputField.type === "select") {
            return (
              <SelectInput
                input={input}
                meta={meta}
                key={i}
                value={inputField.value}
                name={inputField.name}
                label={inputField.label}
                options={inputField.options}
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

          <button
            type="button"
            className="btn btn-default btn-space"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrEdit;
