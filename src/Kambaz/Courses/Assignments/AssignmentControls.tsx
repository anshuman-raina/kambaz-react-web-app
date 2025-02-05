import { BsSearch } from 'react-icons/bs';
import { FaPlus } from "react-icons/fa6";

export default function AssignmentControl() {
    return (
        <div className="d-flex justify-content-between align-items-center mb-2" style={{ width: '100%' }}>
            <div className="input-group" style={{ width: '40%' }}> {/* Adjust width as needed */}
                <span className="input-group-text">
                    <BsSearch />
                </span>
                <input type="search" className="form-control" placeholder="Search..." />
            </div>

            <div className="buttons d-flex gap-2">
                {/* Add Group Button */}
                <button className="btn btn-sm btn-secondary d-flex align-items-center">
                    <FaPlus className="me-2" /> Group
                </button>

                {/* Add Assignment Button */}
                <button className="btn btn-sm btn-danger d-flex align-items-center">
                    <FaPlus className="me-2" />Assignment
                </button>
            </div>

        </div>
    );
}