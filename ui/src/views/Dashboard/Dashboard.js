import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import MaterialTable from "material-table";
import data from "../../assets/data.json";
import _ from "lodash";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <h4>Welcome,</h4>
                    <p>
                        Below is the spring chart for all the currently
                        manufactured springsi n the RC industry. 1/10 and 1/8
                        included, if you want to filter down by scale click the
                        button below or use the sidebar
                    </p>
                    <MaterialTable
                        title="Spring Chart"
                        columns={[
                            {
                                title: "Scale",
                                headerStyle: { width: "5px" },
                                cellStyle: { width: "5px" },
                                field: "ScaleId",
                                lookup: { 1: "1/10", 2: "1/8" },
                                render: (data) =>
                                    data.ScaleId === 1 ? "1/10" : "1/8",
                            },
                            {
                                title: "Application",
                                field: "Application",
                                lookup: {
                                    "Buggy Rear": "Buggy Rear",
                                    "Buggy Front": "Buggy Front",
                                    "Truck Front": "Truck Front",
                                    "Truck Rear": "Truck Rear"
                                },
                            },
                            {
                                title: "Brand",
                                field: "Brand",
                                lookup: {
                                    "Team Associated": "Team Associated",
                                    Yokomo: "Yokomo",
                                    TLR: "TLR",
                                    Xray: "Xray",
                                    Kyosho: "Kyosho",
                                    "Avid Rc": "Avid Rc",
                                    Schumacher: "Schumacher",
                                    "Mugen Seiki": "Mugen Seiki",
                                    "VBC Racing": "VBC Racing",
                                    "Team C": "Team C",
                                    "Core Rc": "Core Rc",
                                    Tamiya: "Tamiya",
                                    Serpent: "Serpent",
                                    "PR Racing": "PR Racing",
                                    HPI: "HPI",
                                    Durango: "Durango",
                                },
                            },
                            { title: "Color", field: "Color" },
                            {
                                title: "Theortical",
                                field: "Theortical",
                            },
                            {
                                title: "Verison",
                                field: "Version",
                            },
                            {
                                title: "Part Number",
                                field: "PartNumber",
                            },
                        ]}
                        onFilterChange={(data) => {
                            console.log(data, "data is");
                        }}
                        data={data}
                        options={{
                            search: true,
                            filtering: true,
                            pageSize: 20,
                            exportButton: true,
                        }}
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}
