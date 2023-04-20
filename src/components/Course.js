import ProgressBar from './ProgressBar';

function Course(props) {
  const course = props.course;
  const is_started = course.is_started;
  const comps = [];
  course.competencies.forEach(i => {
    comps.push(props.competencies[i]);
  });
  const description = props.descriptions[course.description];
  const button = props.button_types[is_started];

  const competencies = comps.map((element) => <h3>{element === comps[0] ? '' : ' • '}{element}</h3>)
  const tasks = course.tasks;
  const tasks_done = course.tasks_done;
  const type = props.className === "course-huge" ? "huge" : "standart";

    return (
      <div className={props.className}>
        {type === "huge" && <ProgressBar tasks={tasks} tasks_done={tasks_done} type={type} is_started={is_started}/>}
        <div className="info">
          <h1 className="title">{course.title}</h1>
          <div className="competencies">{competencies}</div>
          <p>{description}</p>
        <button className={'btn-'+ is_started}>{button}</button>
        </div>
        
        {type === "standart" && 
        ( ( is_started === 1 &&
          <div class="small-progress-bar">
            <h3>{`${tasks_done}/${tasks} заданий`}</h3>
            <ProgressBar tasks={tasks} tasks_done={tasks_done} 
              type={type} is_started={is_started}/>
          </div>
        ) ||

        (is_started === 0 &&
        <div class="small-progress-bar">
          <h3 id="no_start">{`${tasks} заданий`}</h3>
        </div>) ||

        (is_started === 2 &&
          <a><img src={props.tic} className="image"/></a>
        ))}

      </div>
    );
  }
  
  export default Course;
  