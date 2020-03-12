
import React from 'react'

  import { ResponsiveChord } from 'nivo'

const ChordChart = (props) => {


    const color = [
        "#DAD2D8",
        "#143642",
        "#0F8B8D",
        "#EC9A29",
        "#A8201A",
        "#6A291D"
    ]

return (
    <ResponsiveChord
        matrix={props.datas}
        keys={[ 'UX', 'Front', 'Back' ]}
        margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
        valueFormat=".2f"
        padAngle={0.02}
        innerRadiusRatio={0.96}
        innerRadiusOffset={0.02}
        arcOpacity={1}
        arcBorderWidth={1}
        colors = {{ scheme : 'accent'}}
        // arcBorderColor= "red"
        // {{ from: 'colors', modifiers: [ [ 'darker', 0.4 ] ] }}
        ribbonOpacity={0.5}
        ribbonBorderWidth={1}
        // ribbonBorderColor= "red"
        // {{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
        enableLabel={true}
        label="id"
        labelOffset={12}
        labelRotation={-90}
        // labelTextColor= "red"
        // {{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
        // colors={{color}}
        isInteractive={true}
        arcHoverOpacity={1}
        arcHoverOthersOpacity={0.25}
        ribbonHoverOpacity={0.75}
        ribbonHoverOthersOpacity={0.25}
        animate={true}
        motionStiffness={90}
        motionDamping={7}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 70,
                itemWidth: 80,
                itemHeight: 14,
                itemsSpacing: 0,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
  )
}



export default ChordChart
