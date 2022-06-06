import React, { useState } from "react";
import './Dragonflight.css';
import Col from '../../utils/Col';
import Row from '../../utils/Row';
import questionMark from '../../images/icons/inv_misc_questionmark.jpg';
import druidTest from '../../images/druidClassTree.png';

function Dragonflight({ }) {
  const [currentClass, setCurrentClass] = useState('Druid');
  const [currentSpec, setCurrentSpec] = useState('Feral');
  let currentSelectedClassPoints = [];
  let currentSelectedSpecPoints = [];

  const getSelectedSpecOptions = () => {
    switch (currentClass) {
      case 'Druid':
        return (
          <div className="Speclist">
            <button onClick={() => setCurrentSpec('Feral')} className="Feral spec-btn">Feral</button>
            <button onClick={() => setCurrentSpec('Balance')} className="Balance spec-btn">Balance</button>
            <button onClick={() => setCurrentSpec('Restoration')} className="Restoration spec-btn">Restoration</button>
            <button onClick={() => setCurrentSpec('Guardian')} className="Guardian spec-btn">Guardian</button>
          </div>
        )
      case 'DeathKnight':
        return (
          <div className="Speclist">
            <button onClick={() => setCurrentSpec('Blood')} className="Blood spec-btn">Blood</button>
            <button onClick={() => setCurrentSpec('Frost')} className="Frost spec-btn">Frost</button>
            <button onClick={() => setCurrentSpec('Unholy')} className="Unholy spec-btn">Unholy</button>
          </div>
        )
      default:
        return (
          <div className="Speclist">
            <button onClick={() => setCurrentSpec('Feral')} className="Feral spec-btn">Feral</button>
            <button onClick={() => setCurrentSpec('Balance')} className="Balance spec-btn">Balance</button>
            <button onClick={() => setCurrentSpec('Restoration')} className="Restoration spec-btn">Restoration</button>
            <button onClick={() => setCurrentSpec('Guardian')} className="Guardian spec-btn">Guardian</button>
          </div>
        )
    }
  }

  const getClassTalentSelector = () => {
    switch (currentClass) {
      case 'Druid':
        return (
          <>
            <div className="talentTreeTitle">
              <h1>Druid Tree</h1>
              <h3>31 Points Remaining</h3>
            </div>
            <div className="talentTreeOptions">
              <img className="talentTreePathGraphic" alt="Druid Lines" src={druidTest}></img>
              <div className="talentChoice y-0 x-1">
                <div className="talentBox">
                  <img className='talentIcon' alt='talent img' src={questionMark}></img>
                </div>
                <div className="talentTooltip talentTreeBorder">
                  <p className="talentTooltipName">Talent Name</p>
                  <p className="talentTooltipDescription">Talent Description</p>
                  <p className="talentTooltipSpecial">Special Note</p>
                </div>
              </div>
              <div className="talentChoice y-0 x-3">
                <div className="talentBox">
                  <img className='talentIcon' alt='talent img' src={questionMark}></img>
                </div>
                <div className="talentTooltip talentTreeBorder">
                  <p className="talentTooltipName">Talent Name</p>
                  <p className="talentTooltipDescription">Talent Description</p>
                  <p className="talentTooltipSpecial">Special Note</p>
                </div>
              </div>
              <div className="talentChoice y-0 x-5">
                <div className="talentBox">
                  <img className='talentIcon' alt='talent img' src={questionMark}></img>
                </div>
                <div className="talentTooltip talentTreeBorder">
                  <p className="talentTooltipName">Talent Name</p>
                  <p className="talentTooltipDescription">Talent Description</p>
                  <p className="talentTooltipSpecial">Special Note</p>
                </div>
              </div>
              <div className="talentChoice y-0 x-7">
                <div className="talentBox">
                  <img className='talentIcon' alt='talent img' src={questionMark}></img>
                </div>
                <div className="talentTooltip talentTreeBorder">
                  <p className="talentTooltipName">Talent Name</p>
                  <p className="talentTooltipDescription">Talent Description</p>
                  <p className="talentTooltipSpecial">Special Note</p>
                </div>
              </div>
              <div className="talentChoice y-1 x-2">
                <div className="talentBox">
                  <img className='talentIcon' alt='talent img' src={questionMark}></img>
                </div>
                <div className="talentTooltip talentTreeBorder">
                  <p className="talentTooltipName">Talent Name</p>
                  <p className="talentTooltipDescription">Talent Description</p>
                  <p className="talentTooltipSpecial">Special Note</p>
                </div>
              </div>
              <div className="talentChoice talentPassive y-1 x-4">
                <div className="talentBox">
                  <img className='talentIcon talentPassive' alt='talent img' src={questionMark}></img>
                </div>
                <div className="talentTooltip talentTreeBorder">
                  <p className="talentTooltipName">Talent Name</p>
                  <p className="talentTooltipDescription">Talent Description</p>
                  <p className="talentTooltipSpecial">Special Note</p>
                </div>
              </div>
              <div className="talentChoice y-1 x-5">
                <div className="talentBox">
                  <img className='talentIcon' alt='talent img' src={questionMark}></img>
                </div>
                <div className="talentTooltip talentTreeBorder">
                  <p className="talentTooltipName">Talent Name</p>
                  <p className="talentTooltipDescription">Talent Description</p>
                  <p className="talentTooltipSpecial">Special Note</p>
                </div>
              </div>
              <div className="talentChoice y-1 x-7">
                <div className="talentBox">
                  <img className='talentIcon' alt='talent img' src={questionMark}></img>
                </div>
                <div className="talentTooltip talentTreeBorder">
                  <p className="talentTooltipName">Talent Name</p>
                  <p className="talentTooltipDescription">Talent Description</p>
                  <p className="talentTooltipSpecial">Special Note</p>
                </div>
              </div>
            </div>
          </>
        )
      case 'DeathKnight':
        return (
          <h1>Death Knight Class</h1>
        )
      default:
        break;
    }
  }

  const getSpecTalentSelector = () => {
    switch (currentSpec) {
      case 'Feral':
        return (
          <h1>Feral Spec</h1>
        )
      case 'Balance':
        return (
          <h1>Balance Spec</h1>
        )
      case 'Restoration':
        return (
          <h1>Restoration Spec</h1>
        )
      case 'Guardian':
        return (
          <h1>Guardian Spec</h1>
        )
      case 'Blood':
        return (
          <h1>Blood Spec</h1>
        )
      case 'Frost':
        return (
          <h1>Frost Spec</h1>
        )
      case 'Unholy':
        return (
          <h1>Unholy Spec</h1>
        )
      default:
        break;
    }
  }

  return (
    <div>
      <div className="classlist">
        <button onClick={() => { setCurrentClass('Druid'); setCurrentSpec('Feral') }} className="Druid class-btn">Druid</button>
        <button onClick={() => { setCurrentClass('DeathKnight'); setCurrentSpec('Blood') }} className="Death-Knight class-btn">Death Knight</button>
      </div>
      {getSelectedSpecOptions()}
      <Row>
        <div className="col-md-6 talentContainer talentTreeBorder">
          {getClassTalentSelector()}
        </div>
        <Col size="md-6">
          {getSpecTalentSelector()}
        </Col>
      </Row>
    </div>
  )
}

export default Dragonflight;