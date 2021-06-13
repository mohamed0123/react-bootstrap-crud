import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import { popupboxConfig } from "./../SeConstants";
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
let options = {};

const ViewBtn = ({ notificationAlert, currentRow }) => {
  
  
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

export default ViewBtn;
