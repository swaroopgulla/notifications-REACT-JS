const Notification = (props) => {
  const { iconClass, textClass, message, container, src } = props;
  return (
    <div className={container}>
      <img className={iconClass} src={src} />
      <p className={textClass}>{message}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <div className="content-container">
      <h1 className="heading">Notifications</h1>

      <div>
        <Notification
          iconClass="icon"
          textClass="label_text"
          message="information message"
          container="first-container"
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <Notification
          iconClass="icon"
          textClass="label_text"
          message="Success Message"
          container="secound-container"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <Notification
          iconClass="icon"
          textClass="label_text"
          message="Warning Message"
          container="third-container"
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <Notification
          iconClass="icon"
          textClass="label_text"
          message="Error Message"
          container="forth-container"
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
