import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValid },
    formState,
    resetField,
    reset,
    setError,
    clearErrors,
    setFocus,
    getValues,
    getFieldState,
  } = useForm({
    defaultValues: {
      email: "test@gmail.com",
    },
  });
  console.log("formState", formState);
  const onSubmit = (data) => console.log("submit data", data);
  useEffect(() => {
    // setError("name", {
    //   type: "manual",
    //   message: "Dont Forget Your Username Should Be Cool!",
    // });
  }, [setError]);
  useEffect(() => {
    setFocus("textArea");
  }, [setFocus]);
  useEffect(() => {
    const values = getValues("textArea");
    console.log("getValues", values);
  });
  useEffect(() => {
    const values = getFieldState("textArea");
    console.log("getFieldState", values); //we will get all data related this like istouched,value,isdirty,isvalid..etc
  });
  const name = watch("textArea"); //it will excute everty time when name changes
  const formData = watch(); //it will have all the inputs on onChange
  const arryOfForm = watch(["name", "text"]);
  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  //it will capture all the values every time when we change but it will not re-render again again if we write unsubscribe
  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <div style={{ padding: "100px" }}>
      <>name:{name}</>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            className="InputFeild"
            placeholder="Enter Text"
            {...register("text", {
              required: "This is required.",
              //   setValueAs: (v) => parseInt(v),
              //   onChange: (e) => console.log(e),
              pattern: {
                value: /[A-Za-z]/,
                message: "This input is number only.",
              },
              maxLength: {
                value: 10,
                message: "This input exceed maxLength.",
              },
              //
            })}
          />
          <p>{errors?.text?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="text"
            className="InputFeild"
            placeholder="Enter Text" //{email:"test@mail",name:"name"}
            {...register("email", {
              onChange: (e) => setValue("textArea", "name123"),
            })}
          />
          <p>{errors?.name?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Text Area</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Text"
            name="textArea"
            rows={3}
            {...register("textArea", {
              required: "please enter valid deatils",
            })}
          />
          <p>{errors?.textArea?.message}</p>
        </Form.Group>
        <Button className="mt-4 w-100" type="submit" disabled={!isValid}>
          {/* <Button className="mt-4 w-100" type="submit"> */}
          send
        </Button>
        <Button className="mt-4 w-100" onClick={() => reset()}>
          clear
        </Button>
        <Button className="mt-4 w-100" onClick={() => resetField("textArea")}>
          clear name
        </Button>
        <Button className="mt-4 w-100" onClick={() => clearErrors("name")}>
          clear name error
        </Button>
      </Form>
    </div>
  );
}

export default ReactHookForm;
