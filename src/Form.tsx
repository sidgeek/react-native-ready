import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { View, TextInput, Text, Button } from "react-native";

const Basic = () => (
  <View>
    <Text>Anywhere in your app!</Text>
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string().required("Required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <View>
          <TextInput
            keyboardType="email-address"
            placeholder="Please input your email"
            onChange={handleChange("email")}
            // onBlur={handleBlur}
            value={values.email}
            style={{ height: 40, borderWidth: 2 }}
          />
          {errors.email && touched.email && errors.email}
          <TextInput
            secureTextEntry={true}
            placeholder="Please input your password"
            onChange={handleChange("password")}
            // onBlur={handleBlur}
            value={values.password}
            style={{ height: 40, borderWidth: 2 }}
          />
          {}
          {errors.password && touched.password && (
            <Text style={{ color: "red" }}>{errors.password}</Text>
          )}
          <Button
            title="submit"
            onPress={handleSubmit}
            disabled={isSubmitting}
          />
        </View>
      )}
    </Formik>
  </View>
);

export default Basic;
