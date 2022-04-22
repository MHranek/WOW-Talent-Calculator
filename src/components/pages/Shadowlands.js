import React from "react";
import './Shadowlands.css';
import Col from '../../utils/Col';
import Row from '../../utils/Row';

function Shadowlands({ }) {
  // TODO class picker

  // TODO Tiers of talent rows
  const talentPane = () => {
    return <div>
      <div className="row">
        <div className="col levelColumn">15</div>
        <div className="col talentChoice">1-1</div>
        <div className="col talentChoice">1-2</div>
        <div className="col talentChoice">1-3</div>
      </div>
      <div className="row">
        <div className="col levelColumn">25</div>
        <div className="col talentChoice">2-1</div>
        <div className="col talentChoice">2-2</div>
        <div className="col talentChoice">2-3</div>
      </div>
      <div className="row">
        <div className="col levelColumn">30</div>
        <div className="col talentChoice">3-1</div>
        <div className="col talentChoice">3-2</div>
        <div className="col talentChoice">3-3</div>
      </div>
      <div className="row">
        <div className="col levelColumn">35</div>
        <div className="col talentChoice">4-1</div>
        <div className="col talentChoice">4-2</div>
        <div className="col talentChoice">4-3</div>
      </div>
      <div className="row">
        <div className="col levelColumn">40</div>
        <div className="col talentChoice">5-1</div>
        <div className="col talentChoice">5-2</div>
        <div className="col talentChoice">5-3</div>
      </div>
      <div className="row">
        <div className="col levelColumn">45</div>
        <div className="col talentChoice">6-1</div>
        <div className="col talentChoice">6-2</div>
        <div className="col talentChoice">6-3</div>
      </div>
      <div className="row">
        <div className="col levelColumn">50</div>
        <div className="col talentChoice">7-1</div>
        <div className="col talentChoice">7-2</div>
        <div className="col talentChoice">7-3</div>
      </div>
    </div>
  }

  return (
    <div className="row">
      <h1>Shadowlands Talents</h1>
      {talentPane()}
    </div>
  )
}

export default Shadowlands;