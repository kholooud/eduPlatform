import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import regImg from "../../assets/register.jpeg";
import classes from "./Register.module.css";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
export default function Register() {
  const theme = useTheme("");
  const [year, setyear] = useState("");
  const schema = Joi.object({
    fristName: Joi.string()
      .min(2)
      .max(30)
      .required()
      .regex(/^[\u0621-\u064A ]+$/)
      .messages({
        "string.empty": "- مينفعش الاسم يكون فاضي ",
        "string.min": "- مفيش اسم الاقل من حرفين",
        "string.pattern.base": "- مينفعش ارقام و علامات",
      }),
    lastName: Joi.string()
      .min(2)
      .max(30)
      .required()
      .regex(/^[\u0621-\u064A ]+$/)
      .messages({
        "string.empty": "- مينفعش الاسم يكون فاضي ",
        "string.min": "- مفيش اسم الاقل من حرفين",
        "string.pattern.base": "- مينفعش ارقام و علامات",
      }),
    phone: Joi.string()
      .regex(/^01[0125][0-9]{8}$/)
      .required()
      .messages({
        "string.empty": "- مينفعش الرقم يكون فاضي ",
        "string.pattern.base": "- اكتب رقم صح",
      }),
    fatherPhone: Joi.string()
      .regex(/^01[0125][0-9]{8}$/)
      .required()
      .messages({
        "string.empty": "- مينفعش الرقم يكون فاضي ",
        "string.pattern.base": "- اكتب رقم صح",
      }),
    year: Joi.string().min(2).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .optional()
      .messages({
        "string.empty": "- مينفعش الايميل يكون فاضي ",
        "string.email": "- اكتب الايميل صح",
      }),
    password: Joi.string()
      .pattern(
        new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
      )
      .required()
      .messages({
        "string.empty": "- مينفعش كلمة السر تبقي فاضية ",
        "string.pattern.base": "- لازم يكون فيه علامات و ارقام",
      }),
    confirmPass: Joi.string().valid(Joi.ref("password")).required().messages({
      "string.empty": "- مينفعش الاسم يكون فاضي ",
      "any.only": "- لازم يبقي زي كلمة السر",
    }),
  });
  const form = useForm({
    resolver: joiResolver(schema),
  });
  const { register, handleSubmit, control, getValues, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log("data", data);
  };

  const MenuProps = {
    sx: {
      "& .MuiMenu-paper": {
        backgroundColor: "#fff",
        color: "black",
      },
      "& .MuiMenuItem-root:hover": {
        backgroundColor: "#c3c3c3",
        color: "#fff",
      },
      "& .Mui-selected": {
        backgroundColor: "#10151f !important",
        color: "#fff",
      },
      "& .Mui-selected:hover": {
        backgroundColor: "#10151f !important",
        color: "black",
      },
    },
  };
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
  const years = [
    { name: "الصف الاول الثانوي", value: "1sec" },
    { name: "الصف الثاني الثانوي", value: "2sec" },
    { name: "الصف الثالث الثانوي", value: "3sec" },
  ];
  return (
    <Container>
      <Grid container paddingY={3}>
        <Grid item md={5} paddingRight={2} display={{ xs: "none", md: "flex" }}>
          <img src={regImg} width={"100%"} />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={7}
          className={classes.regForm}
          justifyContent={"center"}
          alignContent={"start"}
        >
          <Typography
            variant="h5"
            fontFamily={"inherit"}
            paddingY={1}
            width={"100%"}
          >
            انشئ حسابك الان
          </Typography>
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
              ادخل بياناتك بشكل صحيح للحصول علي افضل تجربة داخل الموقع
            </Grid>
          </Grid>
          <Grid
            component={"form"}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            container
            item
            xs={10}

            justifyContent={"start"}
            alignItems={"center"}
          >
            <Grid
              item
              xs={12}
              md={6}
              boxSizing={"border-box"}
              paddingBottom={1}
            >
              <TextField
                // id="standard-basic"
                label={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--icon-park-solid"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 48 48"
                      color=""
                      style={{ marginLeft: "5px" }}
                    >
                      <mask id="iconifyReact3">
                        <g
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <circle cx="24" cy="11" r="7" fill="#fff" />
                          <path d="M4 41c0-8.837 8.059-16 18-16" />
                          <path fill="#fff" d="m31 42l10-10l-4-4l-10 10v4h4Z" />
                        </g>
                      </mask>
                      <path
                        fill="currentColor"
                        d="M0 0h48v48H0z"
                        mask="url(#iconifyReact3)"
                      />
                    </svg>
                    الاسم الاول
                  </>
                }
                variant="standard"
                color="secondary"
                sx={{ width: "80%" }}
                error={errors.fristName}
                helperText={errors.fristName ? errors.fristName.message : " "}
                FormHelperTextProps={FormHelperTextProps(errors.fristName)}
                type="text"
                {...register("fristName")}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              boxSizing={"border-box"}
              paddingBottom={1}
            >
              <TextField
                // id="standard-basic"
                label={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--icon-park-solid"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 48 48"
                      color=""
                      style={{ marginLeft: "5px" }}
                    >
                      <mask id="iconifyReact3">
                        <g
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <circle cx="24" cy="11" r="7" fill="#fff" />
                          <path d="M4 41c0-8.837 8.059-16 18-16" />
                          <path fill="#fff" d="m31 42l10-10l-4-4l-10 10v4h4Z" />
                        </g>
                      </mask>
                      <path
                        fill="currentColor"
                        d="M0 0h48v48H0z"
                        mask="url(#iconifyReact3)"
                      />
                    </svg>
                    الاسم الاخير
                  </>
                }
                variant="standard"
                color="secondary"
                sx={{ width: "80%" }}
                error={errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : " "}
                FormHelperTextProps={FormHelperTextProps(errors.lastName)}
                type="text"
                {...register("lastName")}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              boxSizing={"border-box"}
              paddingBottom={1}
            >
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
                    رقم الهاتف
                  </>
                }
                variant="standard"
                color="secondary"
                sx={{ width: "80%" }}
                error={errors.phone}
                helperText={errors.phone ? errors.phone.message : " "}
                FormHelperTextProps={FormHelperTextProps(errors.phone)}
                type="text"
                {...register("phone")}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              boxSizing={"border-box"}
              paddingBottom={1}
            >
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
                    رقم هاتف ولي الامر
                  </>
                }
                variant="standard"
                color="secondary"
                error={errors.fatherPhone}
                sx={{ width: "80%" }}
                helperText={
                  errors.fatherPhone ? errors.fatherPhone.message : " "
                }
                FormHelperTextProps={FormHelperTextProps(errors.fatherPhone)}
                type="text"
                {...register("fatherPhone")}
              />
            </Grid>
            <Grid item xs={12} boxSizing={"border-box"} paddingY={1}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                    "&.Mui-focused": {
                      color: `${theme.palette.secondary.main} !important`,
                    },
                  }}
                  type="text"
                >
                  الصف الدراسي
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="الصف الدراسي"
                  renderValue={(selected) => {
                    selected = years.map((year) => {
                      if (year.value === selected) {
                        return year.name;
                      }
                    });
                    return selected;
                  }}
                  MenuProps={MenuProps}
                  sx={{
                    fontFamily: "inherit",
                    color: "text",
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "secondary.main",
                    },
                    ".MuiSvgIcon-root": {
                      //   color: "text",
                    },
                    "&:before": {
                      // borderBottom: `1px solid ${theme.palette.primary.light}`
                    },
                    "&:hover": {
                      ":before": {
                        // borderBottom: `1px solid ${theme.palette.primary.dark}`
                      },
                    },
                    "& .MuiMenuItem-root": {
                      //   backgroundColor: "dark.primary",
                    },
                    "& .MuiMenu-paper": {
                      //   backgroundColor: "dark.primary",
                    },
                  }}
                  {...register("year", {
                    onChange: () => {
                      setyear(getValues("year"));
                    },
                  })}
                  value={year}
                >
                  {years.map((year) => (
                    <MenuItem
                      key={year.value}
                      value={year.value}
                      sx={{
                        fontFamily: "inherit",
                      }}
                    >
                      {year.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
                      className="iconify iconify--bx"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      style={{ marginLeft: "5px" }}
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l-.885-1.793C14.353 19.698 13.156 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8v1c0 .692-.313 2-1.5 2c-1.396 0-1.494-1.819-1.5-2V8h-2v.025A4.954 4.954 0 0 0 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.45 0 2.748-.631 3.662-1.621c.524.89 1.408 1.621 2.838 1.621c2.273 0 3.5-2.061 3.5-4v-1c0-5.514-4.486-10-10-10zm0 13c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"
                      />
                    </svg>
                    البريد الالكتروني
                  </>
                }
                variant="standard"
                color="secondary"
                error={errors.email}
                sx={{ width: "80%" }}
                helperText={errors.email ? errors.email.message : " "}
                FormHelperTextProps={FormHelperTextProps(errors.email)}
                type="email"
                {...register("email")}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              boxSizing={"border-box"}
              paddingBottom={1}
            >
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
              xs={12}
              md={6}
              boxSizing={"border-box"}
              paddingBottom={1}
            >
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
                    تاكيد كلمة السر
                  </>
                }
                variant="standard"
                color="secondary"
                error={errors.confirmPass}
                sx={{ width: "80%" }}
                helperText={
                  errors.confirmPass ? errors.confirmPass.message : " "
                }
                FormHelperTextProps={FormHelperTextProps(errors.confirmPass)}
                type="password"
                {...register("confirmPass")}
              />
            </Grid>
            <Grid
              item
              xs={5}
              md={3}
              component={Button}
              type="submit"
              boxSizing={"border-box"}
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
            >
              انشئ الحساب !
            </Grid>
            <Grid
              item
              xs={12}
              boxSizing={"border-box"}
              paddingY={2}
              fontSize={".8rem"}
            >
              يوجد لديك حساب بالفعل؟{" "}
              <Typography variant="span" color={"warning.main"}>
                ادخل إلى حسابك الآن !
              </Typography>
            </Grid>
          </Grid>
          <DevTool control={control} />
        </Grid>
      </Grid>
    </Container>
  );
}
