// Styles
import "../../tailwind.output.css";

const DevtoolsPanel = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      {isOpen ? (
        <div className="text-white w-full bg-black fixed bottom-0 left-0 z-0 h-64">
          <div>&#9776; close</div>
          <div>View:</div>
          <div>Locale:</div>
          <div>Global Style Overrides:</div>
          <input list="data" className="text-black" />
          <datalist id="data" className="text-black">
            <option>one</option>
            <option>two</option>
            <option>three</option>
            <option>four</option>
          </datalist>
        </div>
      ) : // <div>fsddfdfsdfsd</div>
      null}
    </>
  );
};

export default DevtoolsPanel;
