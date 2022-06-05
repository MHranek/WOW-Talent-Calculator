import React, { useState } from "react";
import Col from '../../utils/Col';
import Row from '../../utils/Row';
import questionMark from '../../images/icons/inv_misc_questionmark.jpg';

function Dragonflight({}) {
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
          <div className="talentTreeOptions">
            <div></div>
          </div>
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
        <button onClick={() => {setCurrentClass('Druid'); setCurrentSpec('Feral')}} className="Druid class-btn">Druid</button>
        <button onClick={() => {setCurrentClass('DeathKnight'); setCurrentSpec('Blood')}} className="Death-Knight class-btn">Death Knight</button>
      </div>
      {getSelectedSpecOptions()}
      <Row>
        <Col size="md-6">
          {getClassTalentSelector()}
        </Col>
        <Col size="md-6">
          {getSpecTalentSelector()}
        </Col>
      </Row>
    </div>
  )
}

export default Dragonflight;