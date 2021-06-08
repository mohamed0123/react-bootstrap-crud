import AddOrEdit from "./../common/AddOrEdit";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";

const inputFields = [
  {
    type: "select",
    name: "featureName",
    lable: "Feature Name",
    options: [
      { id: "1", text: "PN" },
      { id: "2", text: "DESC" },
      { id: "3", text: "TAX_PATH" },
    ],
    placeholder: "Feature Name",
  },
  {
    type: "text",
    name: "vendorCode",
    lable: "Vendor Code",
    placeholder: "Vendor Code",
  },

  {
    type: "text",
    name: "type",
    lable: "Type",
    placeholder: "Type",
  },
  {
    type: "text",
    name: "key",
    lable: "Key",
    placeholder: "Key",
  },
  {
    type: "text",
    name: "value",
    lable: "Value",
    placeholder: "Value",
  },
  {
    type: "text",
    name: "storeDate",
    lable: "Store Date",
    placeholder: "Store Date",
  },
  {
    type: "text",
    name: "userType",
    lable: "User Type",
    placeholder: "User Type",
  },
];

export const HTMLHandlingFeaturesAddOrEdit = ({ heading, intialValues }) => {
  if (intialValues)
    inputFields.map((element) => {
      Object.entries(intialValues).forEach(([key, value]) => {
        if (element.name === key) {
          element.value = value;
        }
      });
      return element;
    });

  const handleSave = (values) => {};
  const handleCancel = (values) => {};
  const handleSubmit = (values) => {};
  const reset = (values) => {};
  return (
    <AddOrEdit
      handleSubmit={handleSubmit}
      heading={heading}
      inputFields={inputFields}
      reset={reset}
      handleSave={handleSave}
      handleCancel={handleCancel}
      intialValues={intialValues}
    />
  );
};

HTMLHandlingFeaturesAddOrEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  test: PropTypes.string.isRequired,
  test2: PropTypes.string.isRequired,
  testselect2: PropTypes.array.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

// const validate = (values) => {
//   const errors = {};

//   if (!values.test) {
//     errors.test = "Required";
//   }

//   if (!values.test2) {
//     errors.test2 = "Required";
//   }

//   if (!values.length) {
//     errors.length = "Required";
//   }

//   if (!values.options) {
//     errors.authorId = "Required";
//   }

//   return errors;
// };

// export default reduxForm({
//   form: "HTMLHandlingFeaturesAddOrEdit",
//   validate,
// })(HTMLHandlingFeaturesAddOrEdit);

export default HTMLHandlingFeaturesAddOrEdit;
