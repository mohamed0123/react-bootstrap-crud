import React, { useState, useRef, useEffect, useReducer } from "react";
import AddOrEdit from "./../common/AddOrEdit";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import NotificationAlert from "react-notification-alert";
export const HTMLHandlingFeaturesAddOrEdit = ({
  screenId,
  heading,
  intialValues,
}) => {
  const notificationAlert = useRef("");
  const inputFields = [
    {
      type: "hidden",
      name: "id",
      lable: "ID",
      placeholder: "ID",
    },
    {
      type: "select",
      name: "featureName",
      lable: "Feature Name",
      options: [
        { id: "PN", text: "PN" },
        { id: "DESC", text: "DESC" },
        { id: "TAX_PATH", text: "TAX_PATH" },
      ],
      placeholder: "Feature Name",
      required: true,
    },
    {
      type: "text",
      name: "vendorCode",
      lable: "Vendor Code",
      placeholder: "Vendor Code",
      required: true,
    },
    {
      type: "select",
      name: "userType",
      lable: "Type",
      options: [
        { id: "REGEX", text: "REGEX" },
        { id: "REPLACE", text: "REPLACE" },
        { id: "REPLACE AFTER", text: "REPLACE AFTER" },
        { id: "REPLACE BEFORE", text: "REPLACE BEFORE" },
      ],
      placeholder: "Type",
      required: true,
    },
    {
      type: "text",
      name: "userKey",
      lable: "Key",
      placeholder: "Key",
      required: true,
    },
    {
      type: "text",
      name: "userValue",
      lable: "Value",
      placeholder: "Value",
      required: false,
    },
  ];
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
  const handleCancel = (values) => {
    console.log(values);
  };

  const objFormTojson = (values) => {
    const jsonRes = {};
    for (let i = 0; i < values.target.length; i++) {
      const currenetElement = values.target[i];
      if (currenetElement.name)
        jsonRes[currenetElement.name] = currenetElement.value;
    }
    return jsonRes;
  };

  const handleSubmit = (values) => {
    if(!values)
      return
    const obj = objFormTojson(values);
    console.log(obj);

    fetch("http://localhost:8002/HtmlFeaturesHandlingApis/insert", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(obj),
    })
      .then((res) => {
        debugger;
      return  res.json();
      })
      .then((json) => {
        debugger;
        console.log(json);
        const options = {
          place: "tl",
          message: (
            <div>
              <div>{json.status}</div>
              <div>{json.errorMessage}</div>
            </div>
          ),
          type: "danger",
          icon: "now-ui-icons ui-1_bell-53",
          autoDismiss: 7,
        };

        if (notificationAlert.current) {
          debugger;
          notificationAlert.current.notificationAlert(options);
        }
        // forceUpdate();
      })
      .catch((err) => {
        debugger;
        console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuu", err);
        const options = {
          place: "tl",
          message: (
            <div>
              <div>Error Loading Data</div>
              <div>{err}</div>
            </div>
          ),
          type: "danger",
          icon: "now-ui-icons ui-1_bell-53",
          autoDismiss: 7,
        };

        if (notificationAlert.current) {
          debugger;
          notificationAlert.current.notificationAlert(options);
        }
      });
  };
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
        id={screenId}
      />
  );
};

HTMLHandlingFeaturesAddOrEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
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
