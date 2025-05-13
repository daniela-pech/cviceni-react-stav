import { useState } from 'react';
import './style.css';
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

export const ZaverecnyBonus4 = () => {
  const [prvni, setPrvni] = useState(0);
  const [druhe, setDruhe] = useState(0);
  return (
    <div className="bonus4">
      <input
        type="number"
        defaultValue="0"
        onChange={(e) => setPrvni(e.target.valueAsNumber)}
      />{' '}
      +{' '}
      <input
        type="number"
        defaultValue="0"
        onChange={(e) => setDruhe(e.target.valueAsNumber)}
      />{' '}
      = <output>{prvni + druhe}</output>
    </div>
  );
};
