import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  Menu,
  MenuItem,
  Button
} from "@material-ui/core";
import * as Icons from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
  Tooltip,
  Legend
} from "recharts";

// styles
import useStyles from "./styles";
// import "./components/Map/styles.css";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";
import MapChart from "./components/Map/MapChart";

const mainChartData = getMainChartData();
const PieChartData = [
  { name: "Both CKD and T2D", value: 0.237, color: "primary" },
  { name: "CKD only", value: 0.202, color: "secondary" },
  { name: "T2D only", value: 0.561, color: "warning" },
];
const PieChartData2 = [
  { name: "Both CKD and T2D", value: 0.11, color: "primary" },
  { name: "CKD only", value: 0.108, color: "secondary" },
  { name: "T2D only", value: 0.781, color: "warning" },
];
const PieChartData3 = [
  { name: "Both CKD and T2D", value: 0.277, color: "primary" },
  { name: "CKD only", value: 0.232, color: "secondary" },
  { name: "T2D only", value: 0.49, color: "warning" },
];

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  var classes = useStyles();
  // local
  var [mainChartState, setMainChartState] = useState("monthly");
  

  return (
    <>
      <PageTitle title="Population Overview" button={(
        <>
        <Button
      variant="contained"
      size="medium"
      color="secondary"
      onClick={e => handleClick(e)}
    >
        Download Results
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}><Icons.Print style={{marginRight: 16}}/> Print PDF</MenuItem>
      <MenuItem onClick={handleClose}><Icons.GetApp style={{marginRight: 16}}/> Download</MenuItem>
      <MenuItem onClick={handleClose}><Icons.Email style={{marginRight: 16}}/>Send by mail</MenuItem>
          <MenuItem onClick={handleClose}><Icons.Share style={{marginRight: 16}}/>Share</MenuItem>
    </Menu>
    </>
    )} />



      <Grid container spacing={3}>
      <Grid item xs={12}>
        <Widget disableWidgetMenu
        title="Introduction">
          <Grid container item xs={12}>
          <p>This page provides an overview of the total patient population (N=2,840,880) who met the pre-specified cohort criteria for inclusion in this cross-sectional analysis. The figures below provide a visual depiction of the total patient population by cohort, state, year of birth, race, and payor type. Please hover your cursor above a specific data point to view specific information in the corresponding pop-up window.</p>
            
          </Grid>
          </Widget>
        </Grid>
        
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Widget
            title="All Above"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            
              <Grid container item alignItems={"center"}>
                <Grid item xs={5}>
                Adult Members:
              <Typography size="md" noWrap>
                15,735,808
              </Typography>
                Total Patients
                <Typography size="md">
                2,840,880
                </Typography>
                Insured Lives
                <Typography size="md">
                18.1%
                </Typography>
                </Grid>

              <Grid item xs={7}>

                <ResponsiveContainer width="100%" height={150}>
                  
                  <PieChart>
                    <Pie
                      isAnimationActive={true}
                      data={PieChartData}
                      outerRadius={50}
                      dataKey="value"
                      label
                    >
                      {PieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={theme.palette[entry.color].main}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              
              </Grid>
              </Grid>
          </Widget>
        </Grid>
      
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Widget
            title="Commercial"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <Grid container item alignItems={"center"}>
                <Grid item xs={5}>
                Adult Members:
              <Typography size="md" noWrap>
                10,097,812
              </Typography>
                Total Patients
                <Typography size="md">
                687,020
                </Typography>
                Insured Lives
                <Typography size="md">
                6.8% 
                </Typography>
                </Grid>

              <Grid item xs={7}>

                <ResponsiveContainer width="100%" height={150}>
                  
                  <PieChart>
                    <Pie
                      isAnimationActive={true}
                      data={PieChartData2}
                      outerRadius={50}
                      dataKey="value"
                      label
                    >
                      {PieChartData2.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={theme.palette[entry.color].main}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              
              </Grid>
              </Grid>
          </Widget>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Widget 
          title="Medicare" 
          upperTitle className={classes.card}>
            <Grid container item alignItems={"center"}>
                <Grid item xs={5}>
                Adult Members:
              <Typography size="md" noWrap>
                5,637,996
              </Typography>
                Total Patients
                <Typography size="md">
                2,153,759
                </Typography>
                Insured Lives
                <Typography size="md">
                38.2%
                </Typography>
                </Grid>

              <Grid item xs={7}>

                <ResponsiveContainer width="100%" height={150}>
                  
                  <PieChart>
                    <Pie
                      isAnimationActive={true}
                      data={PieChartData3}
                      outerRadius={50}
                      dataKey="value"
                      label
                    >
                      {PieChartData3.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={theme.palette[entry.color].main}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              
              </Grid>
              </Grid>
          </Widget>
        </Grid>

        <Grid item xs={12}>
          <Widget
            bodyClass={classes.mainChartBody}
            header={
              <div className={classes.mainChartHeader}>
                <Typography
                  variant="h5"
                  color="text"
                  colorBrightness="secondary"
                >
                  Line Chart
                </Typography>
                <div className={classes.mainChartHeaderLabels}>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="warning" />
                    <Typography className={classes.mainChartLegentElement}>
                      Commercial
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="primary" />
                    <Typography className={classes.mainChartLegentElement}>
                      Medicare
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="secondary" />
                    <Typography className={classes.mainChartLegentElement}>
                      All above
                    </Typography>
                  </div>
                </div>
                
              </div>
            }
          >
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
              <ComposedChart
                margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                data={mainChartData}
              >
                <YAxis
                  ticks={[0, 2500, 5000, 7500]}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={true}
                />
                <XAxis
                  tickFormatter={i => i + 1}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={true}
                />
                <Area
                  type="natural"
                  dataKey="desktop"
                  fill={theme.palette.background.light}
                  strokeWidth={0}
                  activeDot={true}
                />
                <Line
                  type="natural"
                  dataKey="mobile"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  dot={true}
                  activeDot={true}
                />

                <Line
                  type="linear"
                  dataKey="tablet"
                  stroke={theme.palette.warning.main}
                  strokeWidth={2}
                  dot={{
                    stroke: theme.palette.warning.dark,
                    strokeWidth: 2,
                    fill: theme.palette.warning.main,
                  }}
                />

                <Line
                  type="linear"
                  dataKey="desktop"
                  stroke={theme.palette.secondary.main}
                  strokeWidth={2}
                  dot={{
                    stroke: theme.palette.secondary.dark,
                    strokeWidth: 2,
                    fill: theme.palette.secondary.main,
                  }}
                />

              </ComposedChart>
            </ResponsiveContainer>
          </Widget>
        </Grid>

        <Grid item xs={12}>
          <Widget
            title="Map"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            coming...

          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
