const Header = (props) => {
    return (
    <div>
      <p> {props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
  <div>
    <p> {props.parte} {props.exercises}</p>
  </div>
)
}

const Total = (props) => {
  
    return (
  <div>
    <p> Total de ejecicios {props.total} </p>
  </div>
)
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

return (
  <div>
    <Header course={course} />
    <Content parte ={part1} exercises={exercises1}/>
    <Content parte ={part2} exercises={exercises2}/>
    <Content parte ={part3} exercises={exercises3}/>
    <Total total={exercises1+exercises2+exercises3}/>
  </div>
  )
}

export default App