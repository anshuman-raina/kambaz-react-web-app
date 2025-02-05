import AssignmentControl from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { FaFileExport } from 'react-icons/fa';
import { GoTriangleDown } from "react-icons/go";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
export default function Assignments() {
    return (
        <div>
            <AssignmentControl />

            <div className="wd-assignments-title p-3 ps-2 bg-secondary" style={{ color: 'black', border: '1px solid black' }}>
                <BsGripVertical className="me-2 fs-3" /> <GoTriangleDown />
                <strong>ASSIGNMENTS</strong><AssignmentControlButtons /></div>
            <ul className="wd-assignments-list list-group rounded-0">
                <li className="wd-assignment-list-item list-group-item d-flex align-items-center" style={{ border: '1px solid black', color: 'black' }}>
                    <BsGripVertical className="text-muted me-2 fs-5" /> <FaFileExport style={{ marginRight: 10, color: 'green' }} />
                    <div className="flex-grow-1">
                        <a href="#/Kambaz/Courses/1234/Assignments/1" className="stretched-link" style={{ color: 'black' }}>
                            <strong>A1</strong>
                        </a>
                        <div className="small">
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am
                        </div>
                        <div className="small">
                            <strong>Due</strong> May 13 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <LessonControlButtons />
                </li>
                <li className="wd-assignment-list-item list-group-item d-flex align-items-center" style={{ border: '1px solid black', color: 'black' }}>
                    <BsGripVertical className="text-muted me-2 fs-5" /> <FaFileExport style={{ marginRight: 10, color: 'green' }} />
                    <div className="flex-grow-1">
                        <a href="#/Kambaz/Courses/1234/Assignments/1" className="stretched-link" style={{ color: 'black' }}>
                            <strong>A2</strong>
                        </a>
                        <div className="small">
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am
                        </div>
                        <div className="small">
                            <strong>Due</strong> May 20 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <LessonControlButtons />
                </li>
                <li className="wd-assignment-list-item list-group-item d-flex align-items-center" style={{ border: '1px solid black', color: 'black' }}>
                    <BsGripVertical className="text-muted me-2 fs-5" /> <FaFileExport style={{ marginRight: 10, color: 'green' }} />
                    <div className="flex-grow-1">
                        <a href="#/Kambaz/Courses/1234/Assignments/1" className="stretched-link" style={{ color: 'black' }}>
                            <strong>A3</strong>
                        </a>
                        <div className="small">
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am
                        </div>
                        <div className="small">
                            <strong>Due</strong> May 27 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <LessonControlButtons />
                </li>
            </ul>

        </div>
    );
}