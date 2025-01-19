export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br /><br />
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.`}></textarea>
            <br />
            <table>
            <br />
            
                <tbody>
                    <tr>
                        <td align="left" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td align="left">
                            <input id="wd-points" defaultValue={100} />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        
                        <td>
                            <label htmlFor="assignment-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="assignment-group">
                                <option value="assignments">ASSIGNMENTS</option>
                            </select>
                        </td>
                    </tr>
                    
                    <br />
                    <tr>
                        <td>
                            <label htmlFor="display-grade">Display Grade as</label>
                        </td>
                        <td>
                            <select id="display-grade">
                                <option value="percentage">Percentage</option>
                            </select>
                        </td>
                    </tr>

                    <br />
                    <tr>
                        <td>
                            <label htmlFor="submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="submission-type">
                                <option value="online">Online</option>
                            </select>
                        </td>
                    </tr>

                    <br />
                    <tr><td></td>
                        <td>
                            <p>Online Entry Options</p>
                            <input type="checkbox" id="text-entry" />
                            <label htmlFor="text-entry">Text Entry</label><br />

                            <input type="checkbox" id="website-url" />
                            <label htmlFor="website-url">Website URL</label><br />

                            <input type="checkbox" id="media-recordings" />
                            <label htmlFor="media-recordings">Media Recordings</label><br />

                            <input type="checkbox" id="student-annotation" />
                            <label htmlFor="student-annotation">Student Annotation</label><br />

                            <input type="checkbox" id="file-uploads" />
                            <label htmlFor="file-uploads">File Uploads</label><br />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p>Assign</p>
                        </td>
                        <td>
                            <p>Assign To</p>
                            <input type="text" id="assign-to" defaultValue="Everyone" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                        </td>
                        <td>
                            <p>Available From</p>
                            <input type="date" id="available-from" defaultValue="2024-05-06" />
                        </td>
                        <td>
                            <p>Until</p>
                            <input type="date" id="available-until" defaultValue="2024-05-20" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
