import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";
import flow from "./flow.jpeg";

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Welcome" />
      <Grid container spacing={4}>
        
        <Grid item xs={12}>
        <Widget disableWidgetMenu>
          <Grid container item xs={12}>

          <h1>Introduction</h1>
          <p>The CKD Population Navigator is a data visualization and analytics tool based upon the results of a retrospective, cross-sectional analysis of the Optum Administrative claims database to describe the Chronic Kidney Disease and Type 2 Diabetes patient landscape within the database in the year 2019.</p>
            
          <p>The tool allows users to explore the following characteristics in the type 2 diabetes (T2D), chronic kidney disease (CKD), and CKD and T2D populations: demographic, clinical (i.e., events, comorbidities), medication use, and kidney labs.</p>
          </Grid>
          </Widget>
        </Grid>

        <Grid item xs={12}>
          <Widget disableWidgetMenu>
          <Grid container item xs={12}>
          <h1>Objective</h1>
          <p>Understand the demographic and clinical characteristics of individuals with Type II Diabetes(T2D), Chronic Kidney Disease (CKD), and CKD w/ T2D within a commercial/medicare advantage claims database.</p>
          
          <div>
          <h2>Patient Selection</h2>
            <li>Cohort: T2D without CKD</li>
            <ul>
            <li>Inclusion: At least 1 diagnosis code for T2D in 2019</li>
            <li>Exclusion: less than 18 years of age; diagnosis of CKD in 2019</li>
            </ul>
            <li>Cohort: CKD without T2D</li>
            <ul>
            <li>Inclusion: At least 1 diagnosis code for CKD in 2019</li>
            <li>Exclusion: less than 18 years of age; diagnosis of T2D in 2019</li>
            </ul>
            <li>Cohort: CKD and T2D</li>
            <ul>
            <li>Inclusion: At least 1 diagnosis code for CKD and 1 diagnosis code for T2D in 2019</li>
            <li>Exclusion: less than 18 years of age </li>
            </ul>
            Note: Continuous eligibility was not a requirement for any cohort.
          </div>

          </Grid>
          <Grid container item xs={12}>
          <div>
          <h2>Study Design</h2>
          
          Study design: Cross-sectional analysis<br/>
          Study period: 1 January 2019 – 31 December 2019<br/>
          Data source: Optum administrative claims<br/>
          <p>All analyses are descriptive in nature and displayed using tables and figures. Descriptive analyses of the data were performed using summary statistics. Measures including clinical events, comorbidities, provider types, and medication use are reported as the number and percentage of patients in a cohort who had a particular demographic or clinical characteristic, or had visited a provider specialty of interest.</p>
          </div>
          <img src={flow} alt="Flow" />;
          </Grid>
          </Widget>
        </Grid>
        
        <Grid item xs={12}>
          <Widget disableWidgetMenu>
          <Grid container item xs={12}>
          
          <div>
          <h3>More information about Optum administrative claims dataset </h3>
          Optum Administrative Claims Data
          <li>Data from January 2007 to present</li>
          <li>Health plan-based</li>
          <li>Includes between 12.4 to 14 million unique commercial members each year</li>
          <li>~3.5 million Medicare enrollment in 2015 with steady growth</li>
          <li>Represents ~25% of Medicare Advantage enrollment in the United States</li>
          
          </div>
          </Grid>
          </Widget>
        </Grid>

      </Grid>
    </>
  );
}
