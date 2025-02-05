import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DashboardCourses() {
  return (

    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <Col className="wd-dashboard-course" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
          <Card>
            <Link to="/Kambaz/Courses/5010/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} alt="Course" />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS5010 PDP</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Term: Spring 2025 | Year: 2025 | Sec: A</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
          <Card>
            <Link to="/Kambaz/Courses/5200/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} alt="Course" />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS5200 DBMS</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Term: Spring 2025 | Year: 2025 | Sec: A</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
          <Card>
            <Link to="/Kambaz/Courses/5800/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} alt="Course" />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS5800 Algorithms</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Term: Spring 2025 | Year: 2025 | Sec: A</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
          <Card>
            <Link to="/Kambaz/Courses/5100/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} alt="Course" />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS5100 FAI</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Term: Spring 2025 | Year: 2025 | Sec: A</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
          <Card>
            <Link to="/Kambaz/Courses/5610/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} alt="Course" />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS5610 Web Development</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Term: Spring 2025 | Year: 2025 | Sec: A</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
          <Card>
            <Link to="/Kambaz/Courses/3500/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} alt="Course" />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS3500 OOD</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Term: Spring 2025 | Year: 2025 | Sec: A</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
          <Card>
            <Link to="/Kambaz/Courses/5340/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} alt="Course" />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS5340 Human Computer Interaction</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Term: Spring 2025 | Year: 2025 | Sec: A</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </div>
    </div>
  );
}
