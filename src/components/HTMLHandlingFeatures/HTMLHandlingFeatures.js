import React from "react";
import TableComp from "./../common/TableComp";
import styles from "./HTMLHandlingFeatures.module.css";
import HTMLHandlingFeaturesAddOrEdit from './HTMLHandlingFeaturesAddOrEdit'
import  { textFilter } from "react-bootstrap-table2-filter";
const HTMLHandlingFeatures = (props) => {
  const products = [
    { id: 1, name: "George", animal: "Monkey" },
    { id: 2, name: "Jeffrey", animal: "Giraffe" },
    { id: 3, name: "Alice", animal: "Giraffe" },
    { id: 4, name: "Foster", animal: "Tiger" },
    { id: 5, name: "Tracy", animal: "Bear" },
    { id: 6, name: "Joesph", animal: "Lion" },
    { id: 7, name: "Tania", animal: "Deer" },
    { id: 8, name: "Chelsea", animal: "Tiger" },
    { id: 9, name: "Benedict", animal: "Tiger" },
    { id: 10, name: "Chadd", animal: "Lion" },
    { id: 11, name: "Delphine", animal: "Deer" },
    { id: 12, name: "Elinore", animal: "Bear" },
    { id: 13, name: "Stokes", animal: "Tiger" },
    { id: 14, name: "Tamara", animal: "Lion" },
    { id: 15, name: "Zackery", animal: "Bear" },
  ];

  const columns = [
    { dataField: "id", text: "Id", sort: true, filter: textFilter() },
    { dataField: "name", text: "Name", sort: true, filter: textFilter() },
    { dataField: "animal", text: "Animal", sort: true, filter: textFilter() },
  ];
  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  const ADDEDITFORM = ()=>{
    return (<HTMLHandlingFeaturesAddOrEdit></HTMLHandlingFeaturesAddOrEdit>);
  }

  return (
    <div className={styles.HTMLHandlingFeatures}>
      <TableComp
        compHeader="Handling Screen"
        products={products}
        columns={columns}
        defaultSorted={defaultSorted}
        ADDEDITFORM={ADDEDITFORM}

      ></TableComp>
    </div>
  );
};

HTMLHandlingFeatures.propTypes = {};

HTMLHandlingFeatures.defaultProps = {};

export default HTMLHandlingFeatures;
