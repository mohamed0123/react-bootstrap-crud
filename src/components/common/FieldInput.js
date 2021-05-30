import React, { PropTypes } from "react";

const FieldInput = ({
  input,
  type,
  name,
  label,
  placeholder,
  meta: { touched, error, warning },
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <div className="field">
        <input
          {...input}
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
        />

        {touched &&
          ((error && <p className="text-danger">{error}</p>) ||
            (warning && <p className="text-danger">{warning}</p>))}
      </div>
    </div>
  );
};

FieldInput.propTypes = {
  id: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  central: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  passiveId: PropTypes.string,
  fromPath: PropTypes.string.isRequired,
  toPath: PropTypes.string.isRequired,
  fromRoom: PropTypes.string.isRequired,
  toRoom: PropTypes.string.isRequired,
  cableCapacity: PropTypes.string.isRequired,
  cableLength: PropTypes.string.isRequired,
  brahchNumber: PropTypes.string.isRequired,
  tubeColor: PropTypes.string.isRequired,
  freeBranch: PropTypes.string.isRequired,
  fiberJunctionNumber: PropTypes.string.isRequired,
};
// {
//     input: PropTypes.object.isRequired,
//     type: PropTypes.string.isRequired,
//     name: PropTypes.string,
//     label: PropTypes.string.isRequired,
//     placeholder: PropTypes.string,
//     meta: PropTypes.object.isRequired,
// };

export default FieldInput;
