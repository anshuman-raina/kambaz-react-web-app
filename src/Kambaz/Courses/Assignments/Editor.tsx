export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br /><br />
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kambaz application
- Links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page.`}></textarea>
            <br />
            <table>
            <br />
            
            <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZES">QUIZES</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="PERCENTAGE">PERCENTAGE</option>
                            <option value="ABSOLUTE">ABSOLUTE</option>
                        </select>
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </select>
                    </td>
                </tr>
                <br />

                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-text-entry">Online Entry Options</label><br />
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                        <input type="checkbox" name="check-entry" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-entry" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="check-entry" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-entry" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="check-entry" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Upload</label>
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label><br />
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label><br />
                    </td>
                </tr>

                <tr>
                    <td />
                    <td>
                        <input id="wd-assign-to" value="Everyone" /><br />
                    </td>
                </tr>
                <br />

                <tr>
                    <td />
                    <td align="left" valign="top">
                        <label htmlFor="wd-due-date">Due</label><br />
                    </td>
                </tr>
                <tr>
                    <td />
                    <td align="left" valign="top">
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                </tr>
                <br />

                <tr>
                    <td />
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-from">Available from</label><br />
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-until">Available until</label><br />
                    </td>
                </tr>

                <tr>
                    <td />
                    <td align="left" valign="top">
                        <input type="date" id="wd-available-from" value="2024-05-06" />
                    </td>
                    <td align="left" valign="top">
                        <input type="date" id="wd-available-until" value="2024-05-20" />
                    </td>
                </tr>

            </table>

            <hr />
            
            <table width="100%">
                <tr>
                    <td align="right">
                        <button>Cancel</button>
                        &nbsp;&nbsp;
                        <button>Save</button>
                    </td>
                </tr>
            </table> 
        </div>
    );
}