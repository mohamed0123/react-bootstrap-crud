import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import BootstrapTable from "react-bootstrap-table-next";
import { productsGenerator } from "../../utils/common";
import overlayFactory from "react-bootstrap-table2-overlay";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import NotificationAlert from "react-notification-alert";
import { Form, Button ,Nav, Navbar ,FormControl} from "react-bootstrap";

const HTMLHandlingFeatures = () => {
  let options = {};
  const notificationAlert = useRef("");

  const [currentRow, setCurrentRow] = useState({});

  const { SearchBar, ClearSearchButton } = Search;

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

  const MyNavBar = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  };
  const ADDEDITFORM = () => {
    const handleClick = (event) => {
      event.preventDefault();
      debugger;
      console.log(currentRow);
      console.log(event.target.email.value);
    };
    return (
      <div>
        <Form onSubmit={handleClick}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={currentRow.name}
              name="name"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Animal</Form.Label>
            <Form.Control
              type="text"
              value={currentRow.animal}
              name="animal"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  };
  const NewBtn = (props) => {
    const popupboxConfig = {
      titleBar: {
        enable: true,
        text: "Popupbox Demo",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    };
    const content = ADDEDITFORM();
    const handleClick = () => {
      PopupboxManager.open({ content });
    };
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
    const mappedList = [];
    Object.keys(obj).map((e, idx) => {
      const cCard = card(idx, e, obj[e]);
      mappedList.push(cCard);
    });
    return (
      <div className="accordion" id="accordionExample">
        {mappedList}
      </div>
    );
  };
  const ViewBtn = (props) => {
    const popupboxConfig = {
      titleBar: {
        enable: true,
        text: "Popupbox Demo",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    };

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
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="alert alert-primary" onClick={handleClick}>
          Edit
        </button>
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
        <h5>React Bootstrap Table Next with Sorting, Pagination and Search</h5>

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

HTMLHandlingFeatures.propTypes = {};

HTMLHandlingFeatures.defaultProps = {};

export default HTMLHandlingFeatures;
