import React, { useState } from "react";
import './Shadowlands.css';
import Col from '../../utils/Col';
import Row from '../../utils/Row';
import questionMark from '../../images/icons/inv_misc_questionmark.jpg';

const imageWidth = '40px';
const specAbilities = [
  {
    specName: 'Arms',
    className: 'Warrior',
    11: 'arms 1',
    12: 'arms 2'
  }
]

function Shadowlands({ }) {
  // TODO class picker
  const [currentSpec, setCurrentSpec] = useState('Arms');

  // Spec Picker
  const specChoice = () => {
    let specButtons = '';
    // Build buttons to swap between specs based on specAbilities array
    for (var i = 0; i < specAbilities.length; i++) {
      specButtons = specButtons + `<img onClick={() => setCurrentSpec('${specAbilities[i].specName}')} src={questionMark} alt='${specAbilities[i].specName}' width={imageWidth}></img><br>`;
    }
    console.log(specButtons);
    // document.querySelector('.spec-choices').innerHTML = specButtons;
    return (specButtons);
  }

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
      <div className="spec-choices">
        {specChoice()}
        <img onClick={() => setCurrentSpec('Arms')} src={questionMark} alt="Arms" width={imageWidth}></img>
        <img onClick={() => setCurrentSpec('Fury')} src={questionMark} alt="Fury" width={imageWidth}></img>
        <img onClick={() => setCurrentSpec('Prot')} src={questionMark} alt="Prot" width={imageWidth}></img>
        <img onClick={() => setCurrentSpec('Arms')} src={questionMark} alt="?" width={imageWidth}></img>
        <img onClick={() => setCurrentSpec('Arms')} src={questionMark} alt="?" width={imageWidth}></img>
        <img onClick={() => setCurrentSpec('Arms')} src={questionMark} alt="?" width={imageWidth}></img>
        <img onClick={() => setCurrentSpec('Arms')} src={questionMark} alt="?" width={imageWidth}></img>
        <img onClick={() => setCurrentSpec('Arms')} src={questionMark} alt="?" width={imageWidth}></img>
      </div>
      <h1>{currentSpec}</h1>
      <div className="row talentFrame">
        {talentPane()}
      </div>
    </>
  )
}

export default Shadowlands;