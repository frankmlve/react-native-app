import React from "react";
import { useState } from "react";
import { Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../../components/appbutton";
import AppTextInput from "../../components/appTextInput/AppTextInput";
import Screen from "../../components/screen/Screen";
import styles from "./styles";
import AppText from "../../components/AppText";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label("First Name"),
    lastName: Yup.string().required().label("Last Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    confirmPassword: Yup.string().required().min(4).label("Confirm Password")
});
function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/logo.png")} />
            <Formik
                initialValues={{ email: "", password: "", confirmPassword: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="words"
                            autoCorrect={false}
                            keyboardType="default"
                            onChangeText={handleChange("firstName")}
                            icon="account"
                            placeholder="First Name"
                            textContentType="name"
                        />
                        <ErrorMessage error={errors.firstName} />
                        <AppTextInput
                            autoCapitalize="words"
                            autoCorrect={false}
                            keyboardType="default"
                            onChangeText={handleChange("lastName")}
                            icon="account"
                            placeholder="Last Name"
                            textContentType="name"
                        />
                        <ErrorMessage error={errors.lastName} />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            icon="email"
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <ErrorMessage error={errors.email} />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            textContentType="password"
                            secureTextEntry
                        />
                        <ErrorMessage error={errors.password} />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("confirmPassword")}
                            placeholder="Confirm Password"
                            textContentType="confirmPassword"
                            secureTextEntry
                        />
                        <ErrorMessage error={errors.confirmPassword} />
                        <AppButton title="Register" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </Screen>
    );
}

export default RegisterScreen;
