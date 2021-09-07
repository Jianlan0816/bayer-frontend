import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

import { Scrollbars } from 'react-custom-scrollbars';

export default function TypographyPage() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Patient Finder" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
        <Widget disableWidgetMenu
        title="Introduction">
          <Grid container item xs={12}>
          <p>This page allows the user to view a patient subpopulation using customizable filters. Define a patient sub-population by applying filters to define variable(s) of interest.</p>
          <li>Please select all applicable filters. Availble varibles are: state(s), payor type(s), patient cohort(s), comorbid condition(s), and medication(s) use.</li>
          <li>If no value is selected for a filter, all possible values of the variable are included.</li> 
          <li>Click the “Apply Selected Filters” to identify your specified target patient subpopulation and to display relevant statistics.</li> 
          <li>A patient attrition figure will display the proportion of the target patients among adult members in Optum in the form of a waterfall analysis.</li>
          </Grid>
          </Widget>
        </Grid>


        <Grid item xs={12} md={3}>
          <Widget disableWidgetMenu
        title="Select Insurance Plans">
            
            <Scrollbars
                style={{ height: 100 }}>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>

            </Scrollbars>
             
        </Widget>
        </Grid>

        <Grid item xs={12} md={3}>
          <Widget disableWidgetMenu
        title="Select Medical Plans">
            
            <Scrollbars
                style={{ height: 100 }}>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>

            </Scrollbars>
             
        </Widget>
        </Grid>

        <Grid item xs={12} md={3}>
          <Widget disableWidgetMenu
        title="Select Treatment Plans">
            
            <Scrollbars
                style={{ height: 100 }}>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>
                <label>
                <input type="checkbox" />
                test
                </label><br/>

            </Scrollbars>
             
        </Widget>
        </Grid>

        <Grid item xs={12} md={3}>
          <Widget disableWidgetMenu
        title="Selected Filters">
            <Scrollbars
                style={{ height: 100 }}>
            <p>States = AL</p>
            <p>Payor Type(s) = Medicare</p>
            <p>Condition(s) = Atrial Fibrillation AND Acute Kidney Injury</p>
            <p>Treatment(s) = Insulin AND SGLT2 Inhibitor</p>
            </Scrollbars>
        </Widget>
        </Grid>

        <Grid item xs={12}>
          <Widget disableWidgetMenu
        title="Results">
            plots
        </Widget>
        </Grid>

      </Grid>
    </>
  );
}
