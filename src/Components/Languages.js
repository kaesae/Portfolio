
const Languages = () => {
  return (
    <div className="languagesComponent">
      <div className="languagesContainer">
        <div className="languagesTitle">Languages:</div>
        <img className="logo" src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png" />
        <img className="logo" src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png" />
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" />
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png" />
        <img className="long-logo" src="https://cdn.worldvectorlogo.com/logos/jquery-1.svg" />
      </div>

      <div className="languagesContainer">
        <div className="languagesTitle">Frameworks:</div>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png" />
        <img className="long-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/185px-Django_logo.svg.png" />
      </div>

      <div className="languagesContainer">
        <div className="languagesTitle">Databases:</div>
        <img className="mongo-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/250px-MongoDB_Logo.svg.png" />
      </div>

      <div className="languagesContainer">
        <div className="languagesTitle">Environments:</div>
        <img className="postman-logo" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.png" />
        <img className="node-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png" />
      </div>

      <div className="languagesContainer">
      <div className="languagesTitle">Web Hosting:</div>
        <img className="heroku-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/220px-Heroku_logo.svg.png" />
      </div>
      {/* <img className="logo" src="" /> */}
    </div>
  );
};

export default Languages;
