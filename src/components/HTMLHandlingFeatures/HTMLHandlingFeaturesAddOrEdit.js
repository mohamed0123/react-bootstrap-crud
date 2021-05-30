import AddOrEdit from "./../common/AddOrEdit";
import PropTypes from "prop-types";
import {  reduxForm } from 'redux-form';

export const HTMLHandlingFeaturesAddOrEdit = ({ heading }) => {
  const inputFields = [
    {
      type: "text",
      name: "test",
      lable: "test lable",
      placeholder: "placholder",
    },
    {
      type: "text",
      name: "test2",
      lable: "test lable2",
      placeholder: "placholder2",
    },
    {
      type: "select",
      name: "testselect2",
      lable: "test lable2",
      options: [{id:"1" ,text: "op1"}, {id:"2" ,text: "op2"}, {id:"3" ,text: "op3"}],
      placeholder: "placholder2",
    },
  ];
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
    />
  );
};

// HTMLHandlingFeaturesAddOrEdit.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   pristine: PropTypes.bool.isRequired,
//   reset: PropTypes.func.isRequired,
//   submitting: PropTypes.bool.isRequired,
//   test: PropTypes.string.isRequired,
//   test2: PropTypes.string.isRequired,
//   testselect2: PropTypes.array.isRequired,
//   handleSave: PropTypes.func.isRequired,
//   handleCancel: PropTypes.func.isRequired,
// };

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