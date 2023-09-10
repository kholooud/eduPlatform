import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
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

export default function Login() {
  const theme = useTheme("");
  const checkLoggedIn = useContext(UserContext);
  const [isLoading, setisLoading] = useState(false);

  const schema = Joi.object({
    // phone: Joi.string()
    //   .regex(/^01[0125][0-9]{8}$/)
    //   .required()
    //   .messages({
    //     "string.empty": "- مينفعش الرقم يكون فاضي ",
    //     "string.pattern.base": "- اكتب رقم صح",
    //   }),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .messages({
        "string.empty": "- مينفعش الايميل يكون فاضي ",
        "string.email": "- اكتب الايميل صح",
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
        JSON.stringify({ "userToken": resData.body.Authorization.token, "userData": resData.body.student })
      );
      console.log("context", checkLoggedIn.checkLoggedIn());
    }
    // emsil wring
    if (resData.status == 422) {
      const resErrors = resData.body;
      setError(
        "email",
        { type: "focus", message: "الايميل مش صح" },
        { shouldFocus: true }
      );
    }
    // passwrong
    if (resData.status == 401) {
      setError(
        "password",
        { type: "focus", message: "رقم السري مش صح" },
        { shouldFocus: true }
      );
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
            <Grid item xs={12} boxSizing={"border-box"} paddingBottom={1}>
              <TextField
                // id="standard-basic"
                label={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--ant-design"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 1024 1024"
                      style={{ marginLeft: "5px" }}
                    >
                      <path
                        fill="currentColor"
                        d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553A395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4c7.3 0 14.3-.6 21.2-1.8c134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"
                      />
                    </svg>
                    الايميل
                  </>
                }
                variant="standard"
                color="secondary"
                sx={{ width: "80%" }}
                error={errors.email}
                helperText={errors.email ? errors.email.message : " "}
                FormHelperTextProps={FormHelperTextProps(errors.email)}
                type="text"
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12} boxSizing={"border-box"} paddingBottom={1}>
              <TextField
                // id="standard-basic"
                label={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--ri"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      style={{ marginLeft: "5px" }}
                    >
                      <path
                        fill="currentColor"
                        d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1Zm-2 0V7a4 4 0 0 0-8 0v1h8Zm-5 6v2h2v-2h-2Zm-4 0v2h2v-2H7Zm8 0v2h2v-2h-2Z"
                      />
                    </svg>
                    كلمة السر
                  </>
                }
                variant="standard"
                color="secondary"
                // error={first}
                sx={{ width: "80%" }}
                error={errors.password}
                helperText={errors.password ? errors.password.message : " "}
                FormHelperTextProps={FormHelperTextProps(errors.password)}
                type="password"
                {...register("password")}
              />
            </Grid>
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
              <Typography variant="span" color={"warning.main"}>
                انشي إلى حسابك الآن !
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <DevTool control={control} />
      </Grid>
    </Container>
  );
}
