# REACT HOOK FORM
## useForm():  
  useForm is custom hook for managing forms with ease.
  - **resolver (values: Object, context?: Object, options: Object) => Promise<ResolverResult> | ResolverResult:** This function allows you to use any external validation library such as *Yup, Joi, ...*

    - **values**: This object contains the entire form values.
    - **context**: This is the context object which you have provided to the useForm config.
    - **option**: contains information about the validated fields, names and criteriaMode from useForm.

  ### register: (Ref, RegisterOptions?) => ({ onC hange, onBlur, name, ref })
  - This method allows you to register an input or select element and apply validation rules
  - **onChange**: prop to subscribe the input change event
  - **onBlur**: prop to subscribe the input blur event.
  - **ref**: Input reference for hook form to register.
  - **name**: Input's name being registered.

    **NOTE**:
      - Can not start with a number or use number as key name.
      - Using dot syntax only for typescript usage consistency, so bracket [] will not work for array form value. -> register('test.0.firstName');  
      - Disabled input will result in an undefined form value.
    
  ### handleSubmit
  - This function will receive the form data if form validation is successful.
  - Disabled inputs -> return undefined
  - **Props**: SubmitHandler and SubmitErrorHandler are callback function

### FormState: Object
 - errors: An object with field errors. There is also an ErrorMessage component to retrieve error message easily.
 - Read the formState before render to subscribe the form state through the Proxy
