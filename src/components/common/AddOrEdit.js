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
      <form onSubmit={handleSubmit(handleSave)}>
        <h1>{heading}</h1>
        {inputFields.map(function (inputField, i) {
          if (!inputField.value) {
            inputField.value = "";
          }

          if (inputField.type === "text") {
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
