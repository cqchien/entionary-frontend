## PropTypes
  - Check the data types of the props that the component (or container) receives.
  - When reusing components with PropTypes, it's easy to know the data types of the props passed to pass correctly.
  - Default values for props can be set via defaultProp

**NOTE**
  - Array Data: PropTypes.arrayOf()
  - In array have object: PropTypes.shape({ data types >}) 
  - Function: PropTypes.func
  - Set default values: TextFieldCustom.defaultProps = {}