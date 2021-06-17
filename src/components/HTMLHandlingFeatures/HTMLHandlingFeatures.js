import React, { useState,useRef, useEffect, useReducer } from "react";
import TableComp from "./../common/TableComp";
import styles from "./HTMLHandlingFeatures.module.css";
import { HTMLHandlingFeaturesAddOrEdit } from "./HTMLHandlingFeaturesAddOrEdit";
import NotificationAlert from "react-notification-alert";
import { textFilter } from "react-bootstrap-table2-filter";

const columns = [
  {
    dataField: "id",
    text: "Id",
    hidden: true,
    sort: true,
    filter: textFilter(),
  },
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
  {
    dataField: "userType",
    text: "User Type",
    sort: true,
    filter: textFilter(),
  },
  { dataField: "userKey", text: "Key", sort: true, filter: textFilter() },
  { dataField: "userValue", text: "Value", sort: true, filter: textFilter() },
  {
    dataField: "storeDate",
    text: "Store Date",
    sort: true,
    filter: textFilter(),
  },
];
const HTMLHandlingFeatures = (props) => {
  const [fetchedData, setFetchedData] = useState([{}]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const notificationAlert = useRef("");
  const [submitted, setSubmitted] = useState(false);

  const fetchAndLoadData = () => {
    fetch("http://localhost:8002/HtmlFeaturesHandlingApis/all")
    .then((res) => {
      console.log(res)

    return res.json()
    }
    )
    .then((json) => {
      setFetchedData(json, () => {
        console.log(fetchedData, "fetchedData");
      });
      forceUpdate();
    })
    .catch((err) => {
      console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuu", err);
      const options = {
        place: "tl",
        message: (
          <div>
            <div>Error Loading Data</div>
            <div>{JSON.stringify( err.message || err.errMessage)}</div>
          </div>
        ),
        type: "danger",
        icon: "now-ui-icons ui-1_bell-53",
        autoDismiss: 7,
      };

      if (notificationAlert.current) {
        debugger;
        notificationAlert.current.notificationAlert(options);
      }
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
  }
  useEffect(() => {
    fetchAndLoadData();
  }, []);

  const defaultSorted = [
    {
      dataField: "vendorCode",
      order: "desc",
    },
  ];

  const handleDelete = (currentRow) => {
    if(currentRow)
    fetch("http://localhost:8002/HtmlFeaturesHandlingApis/delete",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(currentRow)
})
.then(function(res){
  fetchAndLoadData();
  console.log(res) ;
})
.catch(function(err){ 
  const options = {
    place: "tl",
    message: (
      <div>
        <div>Error deleting data Data</div>
        <div>{JSON.stringify( err.message || err.errMessage)}</div>
      </div>
    ),
    type: "danger",
    icon: "now-ui-icons ui-1_bell-53",
    autoDismiss: 7,
  };

  if (notificationAlert.current) {
    debugger;
    notificationAlert.current.notificationAlert(options);
  }

 });
  };


  
  const ADDEDITFORM = (currentRow) => {
    return (
      <HTMLHandlingFeaturesAddOrEdit
        initialValues={currentRow}
      ></HTMLHandlingFeaturesAddOrEdit>
    );
  };

  return (
    <div className={styles.HTMLHandlingFeatures}>
       <NotificationAlert
                ref={notificationAlert}
                zIndex={1031}
                onClick={() => console.log("hey")}
              />
      <TableComp
        compHeader="Handling Screen"
        products={fetchedData}
        columns={columns}
        defaultSorted={defaultSorted}
        ADDEDITFORM={HTMLHandlingFeaturesAddOrEdit}
        handleDelete={handleDelete}
      ></TableComp>
    </div>
  );
};

HTMLHandlingFeatures.propTypes = {};

HTMLHandlingFeatures.defaultProps = {};

export default HTMLHandlingFeatures;
