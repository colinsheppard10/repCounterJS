const countExercise = ({poseLandmarks, exercise}:any) => {
  let {anchor1, anchor2, anchor3} = exercise

  let {x:x1, y:y1} = poseLandmarks[anchor1]
  let {x:x2, y:y2} = poseLandmarks[anchor2]

  if(y1 > y2)
    console.log('above')
  else 
    console.log('below')
}

export default countExercise;