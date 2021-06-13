import React, { useState, useEffect , useReducer } from "react";
import TableComp from "./../common/TableComp";
import styles from "./HTMLHandlingFeatures.module.css";
import {HTMLHandlingFeaturesAddOrEdit} from "./HTMLHandlingFeaturesAddOrEdit";

import { textFilter } from "react-bootstrap-table2-filter";

const columns = [
  { dataField: "id", text: "Id", sort: true, filter: textFilter() },
  {
    dataField: "featureName",
    text: "Feature Name",
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: "vendorCode",
    text: "Vendor Code",
    sort: true,
    filter: textFilter(),
  },
  { dataField: "type", text: "Type", sort: true, filter: textFilter() },
  { dataField: "key", text: "Key", sort: true, filter: textFilter() },
  { dataField: "value", text: "Value", sort: true, filter: textFilter() },
  {
    dataField: "storeDate",
    text: "Store Date",
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: "userType",
    text: "User Type",
    sort: true,
    filter: textFilter(),
  },
];
const HTMLHandlingFeatures = (props) => {
  const [fetchedData, setFetchedData] = useState([{}]);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    fetch("http://localhost:8002/HtmlFeaturesHandlingApis/all")
      .then((res) => res.json())
      .then((json) => {
        
        setFetchedData(json, () => {
          console.log(fetchedData, "fetchedData");
        });
        forceUpdate();
      });

      if (fetchedData.length === 0) {
        const defaultData = {};
        columns.forEach((col) => {
          Object.entries(col).forEach(([key, value]) => {
            if (key === "dataField") {
              defaultData[value] = "";
            }
          });
        });
        setFetchedData(defaultData);
      }
      
  }, []);

  

  const defaultSorted = [
    {
      dataField: "vendorCode",
      order: "desc",
    },
  ];

  const ADDEDITFORM = (currentRow) => {
    return (
      <HTMLHandlingFeaturesAddOrEdit
        initialValues={currentRow}
      ></HTMLHandlingFeaturesAddOrEdit>
    );
  };

  return (
    <div className={styles.HTMLHandlingFeatures}>
      <TableComp
        compHeader="Handling Screen"
        products={fetchedData}
        columns={columns}
        defaultSorted={defaultSorted}
        ADDEDITFORM={HTMLHandlingFeaturesAddOrEdit}
      ></TableComp>
    </div>
  );
};

HTMLHandlingFeatures.propTypes = {};

HTMLHandlingFeatures.defaultProps = {};

export default HTMLHandlingFeatures;
