import FieldInput from "FieldInput";
import SelectInput from "SelectInput";
import { Field, reduxForm } from "redux-form";

export default AddOrEdit = ({handleSubmit,pristine,inputFields,reset,submitting,handleSave,handleCancel}) => {
  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <h1>{heading}</h1>
      {inputFields.map(function (inputField, i) {
        if (inputField.type === "text") {
          return (
            <Field
              type="text"
              name={inputField.name}
              label={inputField.label}
              placeholder={inputField.placeholder}
              component={FieldInput}
            />
          );
        }
        if (inputField.type === "select") {
          return (
            <Field
              name={inputField.name}
              label={inputField.label}
              options={inputField.options}
              component={SelectInput}
            />
          );
        }
      })}

      <div>
        <button type="submit" disabled={submitting} className="btn btn-primary">
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
  );
};
