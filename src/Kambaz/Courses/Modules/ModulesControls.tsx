import ModuleEditor from "./ModuleEditor";

import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { useState } from "react";

export default function ModulesControls({ moduleName, setModuleName, addModule }:
  { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  
  return (
    <div id="wd-modules-controls" className="d-flex justify-content-end align-items-center gap-2 mb-2">

      {/* Collapse All Button */}
      <button id="wd-collapse-all" className="btn btn-sm btn-secondary d-flex align-items-center">
        Collapse All
      </button>


      {/* View Progress Button */}
      <button id="wd-view-progress" className="btn btn-sm btn-secondary d-flex align-items-center">
        View Progress
      </button>

      {/* Publish All Dropdown */}
      <div className="dropdown">
        <button id="wd-publish-all-btn" className="btn btn-sm btn-secondary dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
              <GreenCheckmark />
              Unpublish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
              <GreenCheckmark />
              Unpublish modules only
            </a>
          </li>
        </ul>
      </div>

      <button id="wd-add-module-btn" className="btn btn-sm btn-danger d-flex align-items-center"  onClick={handleShow}>
        <FaPlus className="me-2" style={{ position: "relative", bottom: "1px" }} />
        Module
      </button>
      

      <ModuleEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
       moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />

    </div>
  );
}