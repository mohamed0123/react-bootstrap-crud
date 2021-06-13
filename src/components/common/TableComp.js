import React, { useState, useRef } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import overlayFactory from "react-bootstrap-table2-overlay";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory from "react-bootstrap-table2-filter";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import NotificationAlert from "react-notification-alert";

const TableComp = ({
  products,
  columns,
  defaultSorted,
  ADDEDITFORM,
  compHeader,
}) => {
  let options = {};
  const notificationAlert = useRef("");

  const [currentRow, setCurrentRow] = useState({});

  const { SearchBar, ClearSearchButton } = Search;

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    style: { backgroundColor: "#c8e6c9" },
    bgColor: (row, rowIndex) => (rowIndex % 2 === 0 ? "#00BFFF" : "#00FFFF"),
    onSelect: (row, isSelect, rowIndex, e) => {
      setCurrentRow(row);
      console.log(row.id);
      console.log(isSelect);
      console.log(rowIndex);
      console.log(e);
    },
  };

  const NewBtn = (props) => {
    const popupboxConfig = {
      titleBar: {
        enable: false,
        // text: "Create New Record",
      },
      fadeIn: true,
      fadeInSpeed: 500,
      style: {
        outerHeight: "60%",
        maxHeight: "70%",
        height: "60%",
        width: "70%",
        //,overflowY: "scroll",
      },
    };
    const content = ADDEDITFORM({ id: "new", heading: "Create New Record", intialValues: {} });
    const handleClick = () => {
      PopupboxManager.open({ content });
    };
    // popupboxConfig.titleBar.text = "Create New Record";
    return (
      <div>
        <button className="alert alert-primary" onClick={handleClick}>
          New
        </button>
        <PopupboxContainer {...popupboxConfig} />
      </div>
    );
  };

  const DeleteBtn = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="alert alert-danger" onClick={handleClick}>
          Delete
        </button>
      </div>
    );
  };

  const cardHeader = (idx, header) => (
    <div className="card-header" id={idx + Date.now() + "header"}>
      <h5 className="mb-0">
        <button
          className="btn btn-link"
          type="button"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {header}
        </button>
      </h5>
    </div>
  );

  const cardBody = (idx, body) => (
    <div
      id={idx + Date.now() + "body"}
      className="collapse show"
      aria-labelledby="headingOne"
      data-parent="#accordionExample"
    >
      <div className="card-body">{body}</div>
    </div>
  );

  const card = (idx, header, body) => {
    return (
      <div className="card">
        {cardHeader(idx, header)}
        {cardBody(idx, body)}
      </div>
    );
  };

  const cardList = (obj) => {
    const mystyle = {
      maxHeight: "90%",
      // height:"600px",
      // width:"600px",
      overflowY: "scroll",
    };
    const mappedList = [];
    Object.keys(obj).map((e, idx) => {
      const cCard = card(idx, e, obj[e]);
      mappedList.push(cCard);
    });
    return (
      <div style={mystyle}>
        <div className="accordion" id="accordionExample">
          {mappedList}
        </div>
      </div>
    );
  };
  const ViewBtn = (props) => {
    const popupboxConfig = {
      titleBar: {
        enable: true,
        // text: "View Record",
      },
      fadeIn: true,
      fadeInSpeed: 500,
      style: {
        outerHeight: "60%",
        maxHeight: "70%",
        height: "60%",
        width: "70%",
        //,overflowY: "scroll",
      },
    };
    // popupboxConfig.titleBar.text = "View Record";
    const content = cardList(currentRow);
    console.log(content);
    const openPopupbox = () => {
      if (!currentRow.id) {
        options = {
          place: "tl",
          message: (
            <div>
              <div>Please select an item</div>
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
        return;
      } else {
        PopupboxManager.open({ content });
      }
    };
    return (
      <div>
        <button className="alert alert-primary" onClick={openPopupbox}>
          View
        </button>
        <PopupboxContainer {...popupboxConfig} />
      </div>
    );
  };

  const EditBtn = (props) => {
    const popupboxConfig = {
      titleBar: {
        enable: true,
        // text: "Edit Record",
      },
      fadeIn: true,
      fadeInSpeed: 500,
      style: {
        outerHeight: "60%",
        maxHeight: "70%",
        height: "60%",
        width: "70%",
        //,overflowY: "scroll",
      },
    };
    const content = ADDEDITFORM({
      id: "edit",
      heading: "Edit Record",
      intialValues: currentRow,
    });
    // popupboxConfig.titleBar.text = "Edit Selected Record";
    const handleClick = () => {
      if (!currentRow.id) {
        options = {
          place: "tl",
          message: (
            <div>
              <div>Please select an item</div>
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
        return;
      } else {
        PopupboxManager.open({ content });
      }
    };
    return (
      <div>
        <button className="alert alert-primary" onClick={handleClick}>
          Edit
        </button>
        <PopupboxContainer {...popupboxConfig} />
      </div>
    );
  };

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="alert alert-info" onClick={handleClick}>
          Export
        </button>
      </div>
    );
  };

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  return (
    <div>
      <div className="App">
        <h5>{compHeader}</h5>

        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={products}
          columns={columns}
          search
          exportCSV
          overlay={overlayFactory()}
        >
          {(props) => (
            <div>
              <h6>Input something at below input field:</h6>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <hr />
              <NotificationAlert
                ref={notificationAlert}
                zIndex={1031}
                onClick={() => console.log("hey")}
              />
              <div className="container">
                <div className="row no-gutters">
                  <div className="col">
                    <MyExportCSV {...props.csvProps} />
                  </div>
                  <div className="col">
                    <ViewBtn></ViewBtn>
                  </div>
                  <div className="col">
                    <NewBtn></NewBtn>
                  </div>
                  <div className="col">
                    <DeleteBtn></DeleteBtn>
                  </div>
                  <div className="col">
                    <EditBtn></EditBtn>
                  </div>
                  <div className="col-4"></div>
                </div>
              </div>

              <BootstrapTable
                // bootstrap4
                keyField="id-bootstrap"
                // data={products}
                // columns={columns}
                striped
                hover
                condensed
                filter={filterFactory()}
                noDataIndication={() => (
                  <div className="alert" role="alert">
                    No matching records found
                  </div>
                )}
                // loading={ true }
                // overlay={overlayFactory()}
                selectRow={selectRow}
                pagination={pagination}
                defaultSorted={defaultSorted}
                {...props.baseProps}
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    </div>
  );
};

TableComp.propTypes = {};

TableComp.defaultProps = {};

export default TableComp;
