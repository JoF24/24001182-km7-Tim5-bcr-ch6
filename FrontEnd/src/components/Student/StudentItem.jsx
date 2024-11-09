import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { deleteStudent } from "../../service/student";
import deleteIcon from "../../assets/trash.png";
import editIcon from "../../assets/edit.png";

const StudentItem = ({ student }) => {
    const { user } = useSelector((state) => state.auth);

    const onDelete = async (event) => {
        event.preventDefault();

        confirmAlert({
            title: "Menghapus Data Mobil",
            message: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
            buttons: [
                {
                    label: "Ya",
                    onClick: async () => {
                        const result = await deleteStudent(student.id);
                        if (result?.success) {
                            fetchData();
                            toast.success("Data mobil berhasil dihapus.");
                        }
                        toast.error(result?.message);
                    },
                },
                {
                    label: "Tidak",
                    onClick: () => {},
                },
            ],
        });
    };

    return (
        <Col md={3} style={{ marginRight: "2rem", margin}}>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={student?.profile_picture} />
                <Card.Body>
                    <Card.Title>{student?.name}</Card.Title>
                    <Card.Text>{student?.nick_name}</Card.Text>

                    {user?.role_id === 1 && (
                            <>
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="d-grid gap-2">
                                                <Button
                                                    onClick={onDelete}
                                                    variant="outline-danger"
                                                    size="md"
                                                >
                                                <Image
                                                    src={deleteIcon}
                                                    alt="Delete Icon"
                                                    width={20}
                                                    height={20}
                                                    className="me-2"
                                                />
                                                    Delete
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-grid gap-2">
                                                <Button
                                                    as={Link}
                                                    href={`/students/edit/${student?.id}`}
                                                    variant="success"
                                                    size="md"
                                                >
                                                <Image
                                                    src={editIcon}
                                                    alt="Edit Icon"
                                                    width={20}
                                                    height={20}
                                                    className="me-2"
                                                />
                                                    Edit
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>                            
                            </>
                        )}
                </Card.Body>
            </Card>
        </Col>
    );
};

StudentItem.propTypes = {
    student: PropTypes.object,
};

export default StudentItem;