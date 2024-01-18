import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import logImg from "../../assets/login.jpeg";
import classes from "./Login.module.css";
import { useTheme } from "@emotion/react";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { loginApi } from "../../API/AuthService";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import FormInput from "../../components/FormInput/FormInput";
import { emailSVG, passSVG } from "../../assets/img";
import { Link } from "react-router-dom";


export default function Login() {
  const theme = useTheme("");
  const checkLoggedIn = useContext(UserContext);
  const [isLoading, setisLoading] = useState(false);

  const schema = Joi.object({
    user_login: Joi.string().regex(/^01[0125][0-9]{8}$/)
      .required()
      .messages({
        "string.empty": "- مينفعش الرقم يكون فاضي ",
        "string.pattern.base": "- اكتب رقم صح",
      }),
    password: Joi.string().required().messages({
      "string.empty": "- مينفعش كلمة السر تبقي فاضية ",
    }),
  });
  const form = useForm({
    resolver: joiResolver(schema),
  });
  const { register, handleSubmit, setError, control, formState } = form;
  const { errors } = formState;
  function FormHelperTextProps(indicator) {
    return {
      sx: {
        color: "#fff !important",
        bgcolor: `${indicator ? theme.palette.info.main : "transparent"}`,
        fontFamily: "inherit",
        borderRadius: "5px",
        boxSizing: "border-box",
        padding: "5px",
      },
    };
  }

  const onSubmit = async (data) => {
    setisLoading(true);
    const resData = await loginApi(data);
    setisLoading(false);
    console.log("se3aaa", resData);
    if (resData.status == 200) {
      localStorage.setItem(
        "userToken",
        JSON.stringify({ "userToken": resData.body.Authorization.token, "userData": resData.body.student, "expire": resData.body.Authorization.expires_in, "isActive": true })
      );
      console.log("context", checkLoggedIn.checkLoggedIn());
    }
    // email wring
    if (resData.status == 422) {
      setError(
        "user_login",
        { type: "focus", message: "الايميل مش صح" },
        { shouldFocus: true }
      );
    }
    // passwrong
    if (resData.status == 401) {
      setError(
        "password",
        { type: "focus", message: "رقم التليفون او الرقم السري مش صح" },
        { shouldFocus: true }
      );
    }

    if (resData.status == 403) {
      localStorage.setItem(
        "userToken",
        JSON.stringify({ "isActive": false })
      );
      console.log("context", checkLoggedIn.checkLoggedIn());
    }
  };

  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={0}
          md={5}
          paddingRight={2}
          display={{ xs: "none", md: "flex" }}
        >
          <img src={logImg} width={"100%"} />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={7}
          component={"form"}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className={classes.regForm}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid
            container
            item
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fedb41"
                  d="M335.28,112.28a20.4,20.4,0,1,1,0,40.8H176.72a20.4,20.4,0,1,1,0-40.8Z"
                />
                <path
                  fill="#00acea"
                  d="M330.18,153.08V422.07a74.18,74.18,0,1,1-148.36,0V153.08Z"
                />
                <path
                  fill="#fedb41"
                  d="M307.24,15.74a13.73,13.73,0,1,1-13.73,13.73A13.725,13.725,0,0,1,307.24,15.74Z"
                />
                <path
                  fill="#00efd1"
                  d="M303,331v91.07c0,25.57-21.43,46.37-47,46.37s-47-20.8-47-46.37V331Z"
                />
                <path
                  fill="#fedb41"
                  d="M276.4,195.7a16.7,16.7,0,1,1-16.69,16.7A16.7,16.7,0,0,1,276.4,195.7Z"
                />
                <circle cx="257.66" cy="64.93" r="21.33" fill="#fedb41" />
                <circle cx="234.21" cy="279.59" r="19.01" fill="#fedb41" />
                <circle cx="222.85" cy="192.05" r="13.73" fill="#fedb41" />
                <circle cx="196.44" cy="51.57" r="16.69" fill="#fedb41" />
              </svg>
            </Grid>
            <Grid item xs={11}>
              <Typography variant="h5" sx={{ fontFamily: "inherit" }}>
                تسجيل الدخول :{" "}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={10} paddingY={4}>
            <Typography variant="span" fontSize={".8rem"}>
              ادخل علي حسابك بإدخال رقم الهاتف و كلمة المرور المسجل بهم من قبل
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={10}
            justifyContent={"start"}
            alignItems={"center"}
          >
            <FormInput xs={12} md={12} img={emailSVG} register={register} errors={errors} label={'رقم التليفون'} ele="user_login" type="phone" />
            <FormInput xs={12} md={12} img={passSVG} register={register} errors={errors} label={'كلمة السر'} ele="password" type="password" />
            <Grid
              item
              xs={6}
              md={4}
              boxSizing={"border-box"}
              component={Button}
              type="submit"
              paddingBottom={1}
              className={classes.btn}
              sx={{
                background: "#3b82f6",
                color: "#fff",
                border: "1px solid #3b82f6",
                "&:hover": {
                  background: "#fff",
                  color: "#3b82f6",
                },
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={"1.5rem"} />
              ) : (
                " تسجيل الدخول"
              )}
            </Grid>
            <Grid
              item
              xs={12}
              boxSizing={"border-box"}
              paddingY={2}
              fontSize={".8rem"}
            >
              لا يوجد لديك حساب ؟
              <Link to="/Register">  <Typography variant="span" color={"warning.main"}>
                انشي إلى حسابك الآن !
              </Typography></Link>
            </Grid>
          </Grid>
        </Grid>
        <DevTool control={control} />
      </Grid>
    </Container>
  );
}
