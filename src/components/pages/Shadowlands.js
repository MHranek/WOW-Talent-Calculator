import React, { useState } from "react";
import './Shadowlands.css';
import Col from '../../utils/Col';
import Row from '../../utils/Row';
import questionMark from '../../images/icons/inv_misc_questionmark.jpg';

const imageWidth = '40px';

function Shadowlands({ }) {
  // TODO class picker
  const [currentClass, setCurrentClass] = useState('Warrior');

  // Tiers of talent rows
  const talentPane = () => {
    return <div>
      <div className="row">
        <div className="col levelColumn"><h3>15</h3></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>1-1</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>1-2</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>1-3</h4></div>
      </div>
      <div className="row">
        <div className="col levelColumn"><h3>25</h3></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>2-1</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>2-2</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>2-3</h4></div>
      </div>
      <div className="row">
        <div className="col levelColumn"><h3>30</h3></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>3-1</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>3-2</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>3-3</h4></div>
      </div>
      <div className="row">
        <div className="col levelColumn"><h3>35</h3></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>4-1</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>4-2</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>4-3</h4></div>
      </div>
      <div className="row">
        <div className="col levelColumn"><h3>40</h3></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>5-1</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>5-2</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>5-3</h4></div>
      </div>
      <div className="row">
        <div className="col levelColumn"><h3>45</h3></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>6-1</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>6-2</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>6-3</h4></div>
      </div>
      <div className="row">
        <div className="col levelColumn"><h3>50</h3></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>7-1</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>7-2</h4></div>
        <div className="col talentChoice"><img src={questionMark} alt="?" width={imageWidth}></img><h4>7-3</h4></div>
      </div>
    </div>
  }

  return (
    <>
      <h1>{currentClass}</h1>
      <div className="row talentFrame">
        {talentPane()}
      </div>
    </>
  )
}

export default Shadowlands;