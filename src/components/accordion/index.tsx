/* 
There can be 2 types of accordion
1. Single selection
2. Multiple selection

*/

import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [enableMultiSelection, setEnableMultiSelection] =
    useState<boolean>(false);

  const handleSelected = (currentId: string) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultiSelection = (currentId: string) => {
    const cpyMultiple = [...multiSelected];
    const indexOfCurrentId = cpyMultiple.indexOf(currentId);

    if (indexOfCurrentId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(indexOfCurrentId, 1);
    console.log(indexOfCurrentId);
    console.log(cpyMultiple);

    setMultiSelected(cpyMultiple);
  };

  return (
    <>
      <div className="w-lg flex flex-col gap-3">
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className="bg-[#614101] text-white w-10/12 px-3 py-6"
        >
          Enable Multiselection
        </button>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="bg-[#614101] py-3 px-6" key={item.id}>
              <div
                className="text-white flex justify-between items-center cursor-pointer"
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(item.id)
                    : handleSelected(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiSelected.includes(item.id) && (
                    <div className="text-white transition delay-75 h-auto">
                      {item.answer}
                    </div>
                  )
                : selected === item.id && (
                    <div className="text-white h-auto">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </>
  );
};

export default Accordion;
