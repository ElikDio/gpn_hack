

function Header(props) {
    return (
      <header className="header">
        <div className="header-left">
          <h1>Портал Разработчика</h1>
          <ul>
              <li>Моё обучение</li>
              <li>Задачи</li>
          </ul>
        </div>

        <div className="header-right">
            <a className="setting"><img src={props.bell} className="image"/></a>
            <a className="setting"><img src={props.question} className="image"/></a>
            <a className="setting"><img src={props.sun} className="image"/></a>
  
            <a className="header-avatar"><img src={props.image} width="auto" height="auto"/></a>
            <a className="header-user-name">Михаил Романов</a>
        </div>
      </header>
    );
  }
  
  export default Header;
  