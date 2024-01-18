import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import React, { useState, useContext } from "react";
import regImg from "../../assets/register.jpeg";
import classes from "./Register.module.css";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { registerApi } from "../../API/AuthService";
import { UserContext } from "../../context/UserContext";
import { emailSVG, passSVG, personSVG, phoneSVG } from "../../assets/img";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";

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
const years = [
  { name: "الصف الاول الثانوي", value: "1" },
  { name: "الصف الثاني الثانوي", value: "2" },
  { name: "الصف الثالث الثانوي", value: "3" },
];
const sections = [
  { name: "القسم العام", value: 0 },
  { name: "القسم العلمي", value: 1 },
  { name: "القسم الادبي", value: 2 },
];
export default function Register() {
  const theme = useTheme("");
  const [year, setyear] = useState("");
  const [type, setType] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const checkLoggedIn = useContext(UserContext);

  const schema = Joi.object({
    full_name: Joi.string()
      .min(2)
      .max(30)
      .required()
      .regex(/^[\u0621-\u064A ]+$/)
      .messages({
        "string.empty": "- مينفعش الاسم يكون فاضي ",
        "string.min": "- مفيش اسم الاقل من حرفين",
        "string.pattern.base": "- مينفعش ارقام و علامات",
      }),
    national_id: Joi.string()
      .min(14)
      .max(14)
      .required()
      .regex(
        /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/
      )
      .messages({
        "string.empty": "- مينفعش الرقم القومي يكون فاضي ",
        "string.min": " اكتب الرقم القومي صح",
      }),
    phone: Joi.string()
      .regex(/^01[0125][0-9]{8}$/)
      .required()
      .messages({
        "string.empty": "- مينفعش الرقم يكون فاضي ",
        "string.pattern.base": "- اكتب رقم صح",
      }),
    parent_phone: Joi.string()
      .regex(/^01[0125][0-9]{8}$/)
      .required()
      .messages({
        "string.empty": "- مينفعش الرقم يكون فاضي ",
        "string.pattern.base": "- اكتب رقم صح",
      }),
    year: Joi.string().required().messages({
      "string.empty": "- مينفعش السنة يكون فاضي ",
    }),
    type: Joi.when("year", {
      is: Joi.string().valid("1", "3"),
      then: Joi.any(),
      otherwise: Joi.valid(1, 2)
        .required()
        .messages({ "any.only": "- لازم تختار" }),
    })
      .default(0)
      .messages({
        "string.empty": "- مينفعش القسم يكون فاضي ",
      }),
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
    password_confirmation: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .messages({
        "string.empty": "- مينفعش الاسم يكون فاضي ",
        "any.only": "- لازم يبقي زي كلمة السر",
      }),
  });
  const form = useForm({
    resolver: joiResolver(schema),
  });
  const { register, handleSubmit, control, getValues, formState, setError } =
    form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    setisLoading(true);
    const resData = await registerApi({
      ...data,
      type: data.year == 2 ? type : 0,
    });
    setisLoading(false);
    if (resData.status == 200) {
      localStorage.setItem(
        "userToken",
        JSON.stringify({
          userToken: resData.body.Authorization.token,
          userData: { ...resData.body.student, status: 1 },
          expire: resData.body.Authorization.expires_in?resData.body.Authorization.expires_in:"2024-06-23T16:12:27.243042Z",
          isActive: true,
        })
      );
      console.log("context", checkLoggedIn.checkLoggedIn());
    }
    if (resData.status == 422) {
      const resErrors = resData.body;
      const keys = Object.keys(resErrors);
      keys.forEach((key) => {
        setError(
          key,
          { type: "focus", message: resErrors[key] },
          { shouldFocus: true }
        );
      });
    }
  };

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
                xmlnxlink="http://www.w3.org/2000/svg"
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
            <FormInput
              xs={12}
              md={6}
              img={personSVG}
              register={register}
              errors={errors}
              label={"الاسم"}
              ele="full_name"
              type="text"
            />
            <FormInput
              xs={12}
              md={6}
              img={personSVG}
              register={register}
              errors={errors}
              label={"رقم القومي"}
              ele="national_id"
              type="number"
            />
            <FormInput
              xs={12}
              md={6}
              img={phoneSVG}
              register={register}
              errors={errors}
              label={"رقم الهاتف"}
              ele="phone"
              type="tel"
            />
            <FormInput
              xs={12}
              md={6}
              img={phoneSVG}
              register={register}
              errors={errors}
              label={"رقم هاتف ولي الامر"}
              ele="parent_phone"
              type="tel"
            />

            <Grid item xs={12} md={6} boxSizing={"border-box"} paddingRight={1}>
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
                    "&:before": {
                      // borderBottom: `1px solid ${theme.palette.primary.light}`
                    },
                    "&:hover": {
                      ":before": {
                        // borderBottom: `1px solid ${theme.palette.primary.dark}`
                      },
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
                <FormHelperText
                  sx={{
                    color: "#fff !important",
                    bgcolor: `${
                      errors.year ? theme.palette.info.main : "transparent"
                    }`,
                    fontFamily: "inherit",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    padding: "5px",
                    marginX: "0",
                  }}
                >
                  {errors.year ? errors.year.message : " "}
                </FormHelperText>
              </FormControl>
            </Grid>
            {year == 2 ? (
              <Grid item xs={12} md={6} boxSizing={"border-box"}>
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
                    القسم
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="الصف الدراسي"
                    renderValue={(selected) => {
                      selected = sections.map((section) => {
                        if (section.value === selected) {
                          return section.name;
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
                      "&:before": {
                        // borderBottom: `1px solid ${theme.palette.primary.light}`
                      },
                      "&:hover": {
                        ":before": {
                          // borderBottom: `1px solid ${theme.palette.primary.dark}`
                        },
                      },
                    }}
                    {...register("type", {
                      onChange: () => {
                        setType(getValues("type"));
                      },
                    })}
                    value={type}
                  >
                    {sections.map((section) => (
                      <MenuItem
                        key={section.value}
                        value={section.value}
                        sx={{
                          fontFamily: "inherit",
                        }}
                      >
                        {section.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText
                    sx={{
                      color: "#fff !important",
                      bgcolor: `${
                        errors.type ? theme.palette.info.main : "transparent"
                      }`,
                      fontFamily: "inherit",
                      borderRadius: "5px",
                      boxSizing: "border-box",
                      padding: "5px",
                      marginX: "0",
                    }}
                  >
                    {errors.type ? errors.type.message : " "}
                  </FormHelperText>
                </FormControl>
              </Grid>
            ) : (
              ""
            )}
            <FormInput
              xs={12}
              md={12}
              img={emailSVG}
              register={register}
              errors={errors}
              label={"البريد الالكتروني"}
              ele="email"
              type="email"
            />
            <FormInput
              xs={12}
              md={6}
              img={passSVG}
              register={register}
              errors={errors}
              label={"كلمة السر"}
              ele="password"
              type="password"
            />
            <FormInput
              xs={12}
              md={6}
              img={passSVG}
              register={register}
              errors={errors}
              label={"تاكيد كلمة السر"}
              ele="password_confirmation"
              type="password"
            />
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
              {isLoading ? (
                <CircularProgress size={"1.5rem"} />
              ) : (
                "انشئ الحساب !"
              )}
            </Grid>
            <Grid
              item
              xs={12}
              boxSizing={"border-box"}
              paddingY={2}
              fontSize={".8rem"}
            >
              يوجد لديك حساب بالفعل؟{" "}
              <Link to="/Login">
                <Typography variant="span" color={"warning.main"}>
                  ادخل إلى حسابك الآن !
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <DevTool control={control} />
        </Grid>
      </Grid>
    </Container>
  );
}
