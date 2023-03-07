import { useEffect } from "react";

const MyComp = () => {
  useEffect(() => {
    console.log('hi')
  })

  return <div>hi</div>
}

export default MyComp;