import AreaChart from './AreaChart'
import React, {useState} from 'react'
import './../styles/insideCarousel.css'
import ChordChart from './ChordChart'
import Chord2 from './Chord2'


const Graphs = () => {

    // set AreaChart Datas

    const [ datas1, setDatas1] = useState([
        {
          name: '2017', ux: 1000, front: 200, back: 400
        },
        {
          name: '2018', ux: 3000, front: 2000, back: 300
        },
        {
          name: '2019', ux: 2000, front: 5000, back: 600
        },
        {
            name: '2020', ux: 200,  front: 3000, back: 800       
        },
        {
            name: '2021', ux: 2000, front: 700, back: 1000
        }
      ])
    const [dataUX, setDataUx] =useState(2000)
    const [dataFront, setDataFront] = useState(700)
    const [dataBack, setDataBack] = useState(1000)


    const [ datas2, setDatas2] = useState([
        [
          1232,
          122,
          10,
        ],
        [
          700,
          1318,
          346,
          
        ],
        [
          10,
          645,
          1260
  
        ],
      ])
      const [ datas21, setDatas21] = useState(2000)
      const [ datas22, setDatas22] = useState(122)
      const [ datas23, setDatas23] = useState(10)
      const [ datas24, setDatas24] = useState(700)
      const [ datas25, setDatas25] = useState(700)
      const [ datas26, setDatas26] = useState(346)
      const [ datas27, setDatas27] = useState(10)
      const [ datas28, setDatas28] = useState(645)
      const [ datas29, setDatas29] = useState(1000)

    const onChange = async e => {
        if (e.target.name === 'ux-to-ux') setDatas21(Number(e.target.value), setDataUx(Number(e.target.value)))
        if (e.target.name === 'ux-to-front') setDatas22(Number(e.target.value))
        if (e.target.name === 'ux-to-back') setDatas23(Number(e.target.value))
        if (e.target.name === 'front-to-ux') setDatas24(Number(e.target.value))
        if (e.target.name === 'front-to-front') setDatas25(Number(e.target.value), setDataFront(Number(e.target.value)))
        if (e.target.name === 'front-to-back') setDatas26(Number(e.target.value))
        if (e.target.name === 'back-to-ux') setDatas27(Number(e.target.value))
        if (e.target.name === 'back-to-front') setDatas28(Number(e.target.value))
        if (e.target.name === 'back-to-back') setDatas29(Number(e.target.value), setDataBack(Number(e.target.value)))
        setDatas2([
            [
                datas21,
                datas22,
                datas23
            ],
            [
                datas24,
                datas25,
                datas26
            ],
            [
                datas27,
                datas28,
                datas29
            ]
        ])
        setDatas1([
            {
          name: '2017', ux: 1000, front: 200, back: 400
        },
        {
          name: '2018', ux: 3000, front: 2000, back: 300
        },
        {
          name: '2019', ux: 2000, front: 5000, back: 600
        },
        {
            name: '2020', ux: 200,  front: 3000, back: 800       
        },
        {
            name: '2021', ux: dataUX, front: dataFront, back: dataBack
        }
      ])
        console.log(datas1)
        console.log(datas2)
        console.log(e)
    }

    // ********************


    return (

      <div className="graphs-div">
          <form onChange={onChange}>
                        <div data-aos="fade-left" className="form-part ux-form">
                          <p>UX-UI en 2021</p>
                          <div>
                            <div className="form-unit form-for-first-graph">
                              <label htmlFor="ux-to-ux">restent UX-UI</label>
                              <input className="slider1" type="range" min="0" max="2000" step="3" defaultValue="1232" name="ux-to-ux" id="ux-to-ux"/>
                            </div>
                            <div className="form-unit ">
                              <label htmlFor="ux-to-front"> deviennent FrontEnd</label>
                              <input className="slider1" type="range" min="0" max="2000" step="3" defaultValue="122" name="ux-to-front" id="ux-to-front"/>
                            </div>
                            <div className="form-unit">
                              <label htmlFor="ux-to-back">deviennent BackEnd</label>
                              <input className="slider1" type="range" min="0" max="2000" step="3" defaultValue="10" name="ux-to-back" id="ux-to-back"/>
                            </div>
                          </div>
                        </div>
                        <div data-aos="zoom-in" className="form-part front-form">
                            <p>Développeurs FrontEnd en 2021</p>
                            <div>
                                <div className="form-unit form-for-first-graph">
                                  <label htmlFor="front-to-front">restent FrontEnd</label>
                                  <input className="slider2" type="range" min="0" max="2000" step="3" defaultValue="1318" name="front-to-front" id="front-to-front"/>
                                </div>
                                <div className="form-unit">
                                  <label htmlFor="front-to-back">deviennent BackEnd</label>
                                  <input className="slider2" type="range" min="0" max="2000" step="3" defaultValue="346" name="front-to-back" id="front-to-back"/>
                                </div>
                                <div className="form-unit">
                                  <label htmlFor="front-to-ux">deviennent UX</label>
                                  <input className="slider2" type="range" min="0" max="2000" step="3" defaultValue="700" name="front-to-ux" id="front-to-ux"/>
                              </div>
                            </div>
                          </div>
                        <div data-aos="fade-right" className="form-part back-form">
                            <p>Développeurs BackEnd en 2021</p>
                            <div>
                              <div className="form-unit form-for-first-graph">
                                  <label htmlFor="back-to-back">restent BackEnd</label>
                                  <input className="slider3" type="range" min="0" max="2000" step="3" defaultValue="1260" name="back-to-back" id="back-to-back"/>
                              </div>
                              <div className="form-unit">
                                <label htmlFor="back-to-ux">deviennent UX-UI</label>
                                <input className="slider3" type="range" min="0" max="2000" step="3" defaultValue="10" name="back-to-ux" id="back-to-ux"/>
                              </div>
                              <div className="form-unit">
                                  <label htmlFor="back-to-front">deviennent FrontEnd</label>
                                  <input className="slider3" type="range" min="0" max="2000" step="3" defaultValue="645" name="back-to-front" id="back-to-front"/>
                              </div>
                            </div>
                        </div>
                    </form>
          
          <div className="charts-div" data-aos="zoom-in">
            <div className="areachart-container">
              <div className="areachart-div">
                <AreaChart datas={datas1}/>
              </div>
              <div className="text-area">
                <p>Les donées sont fictives. Ces graphiques font office d'exemple d'usage de librairies React pour un rendu visuel optimal.</p>
                <p>Les curseurs des cadres blancs modifient le graphiques de gauche (les professionnels restant dans leur métier en 2021)
                tandis que le second graphique est déterminé par l'ensemble des curseurs (les professionels restant dans leur métier ou changeant de métier).</p>
                <p>Les librairies utilisées ici sont Recharts pour le graphique de gauche et d3 pour le graphique de droite.</p>
              </div>
            </div>
            <div className="chord-chart">
              {/* <ChordChart datas={datas2}/> */}
              <Chord2 datas={datas2}/>
            </div>
          </div> 
          
      </div>
    )
}

export default Graphs
