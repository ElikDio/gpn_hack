import React, { useState, useRef} from 'react';
import Header from "./components/Header";
import Course from "./components/Course";
import "./scss/main.scss";
import avatar from "./img/avatar.png"
import tic from "./img/tic.png"
import bell from "./img/bell.png"
import question from "./img/question.png"
import sun from "./img/sun.png"



const competencies = ['Для новичка', 'Основы работы', 'Профессионалу', 'Библиотеки']

const descriptions = ['Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете']

const button_types = ['Начать', 'Продолжить тему', '⟲ Пройти заново']


function App() {
  const courses = [
    {
      id: 1,
      title: 'Начало работы',
      competencies: [0, 1],
      description: 0,
      tasks: 10,
      tasks_done: 8,
      is_started: 1,
    },
    {
      id: 2,
      title: 'Добро пожаловать!',
      competencies: [0, 1],
      description: 0,
      tasks: 5,
      tasks_done: 5,
      is_started: 2,
    },
    {
      id: 3,
      title: 'Введение в рабочую среду',
      competencies: [0, 1],
      description: 0,
      tasks: 10,
      tasks_done: 0,
      is_started: 0,
    },
    {
      id: 4,
      title: 'Работа с библиотеками GPN',
      competencies: [2, 3],
      description: 0,
      tasks: 255,
      tasks_done: 0,
      is_started: 0,
    }
  ]

  const [offset, setOffset] = useState(0);
  const myRef = useRef(null);

  const handleLeftClick = () => {
    if (offset != 0) {
      setOffset(offset + 1000);
    }
  };

  const handleRightClick = () => {
      setOffset(offset - 1000);
  };

  const scrollToRef = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header image={avatar} bell={bell} question={question} sun={sun}/>

      <div className="recomend">
        <h1>Рекомендуемые темы</h1>
        {<Course course={courses[0]} competencies={competencies} descriptions={descriptions}
        button_types={button_types} className='course-huge'/> }
      </div>
      
      <div className="separator">
        <hr></hr>
        <button onClick={scrollToRef} className="show-btn">Показать ещё ↓</button>
        <hr></hr>
      </div>

      <div className="job-title">
        <div className="job-title-header">
          <h1>Путь Front End Developer</h1>
          <button className="hide-btn">Скрыть пройденные</button>
          <div className="switch">
            <button onClick={handleLeftClick}>🡰</button>
            <button onClick={handleRightClick}>🡲</button>
          </div>
        </div>
        <div className="job-courses">
          <div className="sqroller" style={{ transform: `translateX(${offset}px)` }}>
            {<Course course={courses[1]} competencies={competencies} descriptions={descriptions}
            button_types={button_types} className='course-scroll' tic={tic}/> }
            {<Course course={courses[0]} competencies={competencies} descriptions={descriptions}
            button_types={button_types} className='course-scroll'/> }
            {<Course course={courses[2]} competencies={competencies} descriptions={descriptions}
            button_types={button_types} className='course-scroll'/> }
            {<Course course={courses[0]} competencies={competencies} descriptions={descriptions}
            button_types={button_types} className='course-scroll'/> }
            {<Course course={courses[2]} competencies={competencies} descriptions={descriptions}
            button_types={button_types} className='course-scroll'/> }
            {<Course course={courses[3]} competencies={competencies} descriptions={descriptions}
            button_types={button_types} className='course-scroll'/> }
          </div>
        </div>
      </div>


      <div className="catalog"  ref={myRef}>
        <h1>Каталог тем</h1>
        <ul>
          <li>Все</li>
          <li>Рабочая среда</li>
          <li>Библиотеки</li>
          <li>Пройденные</li>
          <li>Не пройденные</li>
        </ul>
        <div className="all-courses">
          {<Course course={courses[0]} competencies={competencies} descriptions={descriptions}
            button_types={button_types} className='course'/> }
          {<Course course={courses[3]} competencies={competencies} descriptions={descriptions}
            button_types={button_types} className='course'/> }
          {<Course course={courses[2]} competencies={competencies} descriptions={descriptions}
            button_types={button_types} className='course' /> }
          {<Course course={courses[0]} competencies={competencies} descriptions={descriptions}
            button_types={button_types} className='course'/> }
          {<Course course={courses[3]} competencies={competencies} descriptions={descriptions}
            button_types={button_types} className='course'/> }
          {<Course course={courses[2]} competencies={competencies} descriptions={descriptions}
            button_types={button_types} className='course'/> }
        </div>

      </div>

    </div>
  );
}

export default App;
