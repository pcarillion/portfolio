import React from 'react'
import ChordDiagram from 'react-chord-diagram'


const Chord2 = (props) => {
    return (

        <ChordDiagram
    width={290}
    height={315}
  matrix={props.datas}
  componentId={1}
  groupLabels={['UX', 'Front', 'Back', ]}
  groupColors={["#EC9A29", "#A8201A", "#0F8B8D ", ]}
/>
   
    )
}

export default Chord2
