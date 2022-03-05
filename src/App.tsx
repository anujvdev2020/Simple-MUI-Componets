// import "./styles.css";
import { useState } from "react";
import {
  Grid,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  InputAdornment,
  Divider,
  Drawer,
  createTheme,
  ThemeProvider,
  withStyles,
  InputLabel,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import  from "@material-ui/core/TextField";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
// import  from "@material-ui/core/InputAdornment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import  from "@material-ui/core/InputLabel";
// import  from "@material-ui/core/FormControlLabel";
import { CheckboxProps } from "@material-ui/core/Checkbox";
// import  from "@material-ui/core/Drawer";
// import {} from "@material-ui/core";

const steps = ["Personal Details", "Pre-existing Disease", "Contact Details"];
export default function App() {
  const FormStepper = withStyles({
    root: {
      backgroundImage:
        "linear-gradient( 75deg,rgb(202,101,193) 50%,rgb(173,95,189) 100%)",
      padding: "15px 5px",
      backgroundColor: "inherit"
    }
  })(Stepper);
  const FormContainer = withStyles({
    root: {
      backgroundImage:
        "linear-gradient( 75deg,rgb(202,101,193) 50%,rgb(173,95,189) 100%)",
      color: ""
    }
  })(Grid);

  const FormInner = withStyles({
    root: {
      backgroundColor: "white",
      padding: "10px",
      color: ""
    }
  })(Grid);

  const formDivStyle = {
    backgroundColor: "white",
    padding: "10px 20px",
    borderRadius: "10px",
    margin: "20px"
  };
  const BottomContainer = withStyles({
    root: {
      padding: "10px 15px"
    }
  })(Grid);

  const CustomStepLabel = withStyles({
    root: {
      color: "white",
      "& .MuiStepLabel-labelContainer": {
        color: "white",
        "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
          color: "white"
        }
      }
    }
  })(StepLabel);

  const webStyle = {
    greyText: {
      color: "grey",
      marginTop: "5px"
    },
    paddingLeftBottom: {
      padding: "0 15px"
    },
    marginBottom: "15px"
  };

  const InputField = withStyles({
    root: {
      width: "100%"
    }
  })(TextField);

  const CustomInputLabel = withStyles({
    root: { color: "#000", margin: "5px 0" }
  })(InputLabel);

  const CustomDrawer = withStyles({
    root: {
      "& .MuiDrawer-paper": {
        padding: "0 5px",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px"
      }
    }
  })(Drawer);

  const [activeStep, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  function handleReset() {}
  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <Grid item sm={12} md={12} lg={12} xs={12}>
              <h3> Personal Details</h3>
            </Grid>
            <Grid item sm={12} md={12} xs={12}>
              <CustomInputLabel htmlFor="component-simple">
                {" "}
                First Name
              </CustomInputLabel>
              <InputField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={12} md={12} xs={12}>
              <CustomInputLabel htmlFor="component-simple">
                Last Name
              </CustomInputLabel>
              <InputField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={12} md={12} xs={12}>
              <CustomInputLabel htmlFor="component-simple">
                Date Of Birth
              </CustomInputLabel>

              <InputField
                label=""
                id="outlined-start-adornment"
                className={""}
                InputProps={{
                  endAdornment: (
                    <span>
                      <DateRangeRoundedIcon />
                    </span>
                  )
                }}
                variant="outlined"
                placeholder="Date of Birth"
              />
            </Grid>
            <Grid item sm={12} md={12} xs={12}>
              <CustomInputLabel htmlFor="component-simple">
                Occupation
              </CustomInputLabel>
              <Grid container spacing={2}>
                <Grid item sm={4} xs={5} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={true}
                        // onChange={handleChange}
                        name="checkedG"
                        color="primary"
                      />
                    }
                    label="Salaries"
                  />
                </Grid>
                <Grid item sm={8} xs={7} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Self Employed"
                  />
                </Grid>
              </Grid>
            </Grid>
          </>
        );
      case 1:
        return (
          <>
            <Grid item sm={12} md={12} lg={12} xs={12}>
              <h3>Pre-existing Disease</h3>

              <Typography>
                Do you have any existing illnes or medical history?
              </Typography>

              <Typography style={webStyle.greyText}>
                This helps us find plans that cover your condition and avoid
                claim rejection
              </Typography>
            </Grid>
            <Grid item sm={12} md={12} lg={12} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={false}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Existing illness"
              />
            </Grid>
            <Grid item sm={12} md={12} lg={12} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={false}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Self Employed"
              />
            </Grid>
            <Grid item sm={12} md={12} lg={12} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={false}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Covid 19"
              />
            </Grid>
            <Grid item sm={12} md={12} lg={12} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={false}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Surgical Procedure"
              />
            </Grid>
            <Grid item sm={12} md={12} lg={12} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={false}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="None of these"
              />
            </Grid>
          </>
        );
      case 2:
        return (
          <>
            <Grid item sm={12} md={12} lg={12} xs={12}>
              <h3> Contact Details</h3>
            </Grid>

            <Grid item sm={12} md={12} xs={12}>
              <CustomInputLabel htmlFor="component-simple">
                Email ID
              </CustomInputLabel>
              <InputField
                id="outlined-basic"
                variant="outlined"
                type="text"
                label="Email ID"
              />
            </Grid>

            <Grid item sm={12} md={12} xs={12}>
              <CustomInputLabel htmlFor="component-simple">
                Phone Number
              </CustomInputLabel>
              <InputField
                id="outlined-basic"
                variant="outlined"
                label="Phone Number"
              />
            </Grid>

            <Grid item sm={12} md={12} xs={12}>
              <CustomInputLabel htmlFor="component-simple">
                Address
              </CustomInputLabel>
              <InputField
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={12} md={12} xs={12}>
              <CustomInputLabel htmlFor="component-simple">
                Pincode
              </CustomInputLabel>
              <InputField
                id="outlined-basic"
                variant="outlined"
                label="Pincode"
              />
            </Grid>
          </>
        );
      default:
        return "Unknown stepIndex";
    }
  }
  function handleBack() {}
  function handleNext() {
    setStep(activeStep + 1);
  }

  return (
    <div className="App">
      <>
        {/* Logo section */}
        <Grid container />

        {/* Steps-Container */}

        <FormContainer container>
          <Grid item xs={12} md={12}>
            <div className={""}>
              <FormStepper activeStep={activeStep} alternativeLabel>
                {steps.map((label: string) => (
                  <Step key={label}>
                    <CustomStepLabel>{label}</CustomStepLabel>
                  </Step>
                ))}
              </FormStepper>
              <Grid style={formDivStyle}>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={""}>All steps completed</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <Grid container spacing={2}>
                    {getStepContent(activeStep)}
                  </Grid>
                )}
              </Grid>
            </div>
          </Grid>
        </FormContainer>

        {/* Premium section */}

        <BottomContainer container spacing={2}>
          {activeStep === 2 ? (
            <>
              <Grid item sm={7} lg={7} xs={7}>
                <Typography>Total Premium</Typography>
                <span>
                  1200{" "}
                  <Button onClick={() => setOpen(!open)}>
                    <ExpandMoreIcon />
                  </Button>
                </span>
              </Grid>
              <Grid item sm={5} lg={5} xs={5}>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    disabled={activeStep == 2}
                    onClick={handleNext}
                  >
                    Proceed
                  </Button>
                </div>
              </Grid>
            </>
          ) : (
            <Grid item sm={12} xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleNext}
                disabled={activeStep == 2}
                style={{ width: "100%" }}
              >
                NEXT
              </Button>
            </Grid>
          )}
        </BottomContainer>

        {/* Drawer Section */}
        <CustomDrawer open={open} anchor={"bottom"}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={webStyle.paddingLeftBottom}
          >
            <Grid item>
              <h3> Personal Details</h3>
            </Grid>
            <Grid item>
              <Button onClick={() => setOpen(!open)}>X</Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={webStyle.paddingLeftBottom}
          >
            <Grid item>
              <img
                height="70px"
                src="https://cdn.iconscout.com/icon/free/png-256/google-pay-2038779-1721670.png"
                alt=""
              />
            </Grid>
            <Grid item>
              <h4> Total Premium</h4>
              <h3>12,3345</h3>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={webStyle.paddingLeftBottom}
          >
            <Grid item>
              <p>Base Plan</p>
            </Grid>
            <Grid item>
              <p>3636.06</p>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={webStyle.paddingLeftBottom}
          >
            <Grid item>
              <p>Cover Amount</p>
            </Grid>
            <Grid item>
              <p>7890.06</p>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={webStyle.paddingLeftBottom}
          >
            <Grid item>
              <p>Policy Period</p>
            </Grid>
            <Grid item style={{ borderBottom: "1px solid #4a444430" }}>
              <p>1 Year</p>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={webStyle.paddingLeftBottom}
          >
            <Grid item>
              <p>GST(18%)</p>
            </Grid>
            <Grid item>
              <p>2,738.69</p>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={webStyle.paddingLeftBottom}
            spacing={2}
          >
            <Grid item sm={12} xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                disabled={activeStep == steps.length}
                onClick={handleNext}
                style={{ width: "100%", marginTop: "100px" }}
              >
                NEXT
              </Button>
            </Grid>
          </Grid>
        </CustomDrawer>
      </>
    </div>
  );
}
