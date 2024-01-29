import React from 'react'

export default function ConditionalRendering() {

    const Check = ({isGoal}) => {
        if(isGoal){
            return <MadeGoal/>
        }
        else{
           return <MissedGoal/>
        }
    }

    const MadeGoal = () => {

        return <h1>Made Goal !!!!</h1>
    }

    const MissedGoal = () => {
        return <h1>Missed Goal !!!!</h1>
    }

  return (
    <div>
        <h1 style={{color:'white', backgroundColor: "red"}}>Conditional Rendering</h1>
        {/* To call a function as component */}
        <Check isGoal={true}/>
    </div>
  )
}
