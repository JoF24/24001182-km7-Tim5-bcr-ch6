import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { deleteTransmission } from "../../service/transmission";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import deleteIcon from "../../assets/trash.png";
import editIcon from "../../assets/edit.png";
import Image from "react-bootstrap/Image";

const TransmissionItem = ({ transmission }) => {
    const { user } = useSelector((state) => state.auth);

    const onDelete = async (event) => {
        event.preventDefault();

        confirmAlert({
            title: "Menghapus Data Transmisi",
            message: "Setelah dihapus, data transmisi tidak dapat dikembalikan. Yakin ingin menghapus?",
            buttons: [
                {
                    label: "Ya",
                    onClick: async () => {
                        const result = await deleteTransmission(transmission.id);
                        if (result?.success) {
                            fetchData(); 
                            toast.success("Data transmisi berhasil dihapus.");
                        } else {
                            toast.error(result?.message);
                        }
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
        <Col md={3} style={{ marginRight: "2rem" }}>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{transmission?.type}</Card.Title>
                    <Card.Text>Number of Gears: {transmission?.number_of_gears}</Card.Text>

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
                                                href={`/transmissions/edit/${transmission?.id}`}
                                                variant="success"
                                                size="md"
                                            >
                                                <Image
                                                    src={editIcon}
                                                    alt="Edit Icon"
                                                    width={25}
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

TransmissionItem.propTypes = {
    transmission: PropTypes.object.isRequired,
};

export default TransmissionItem;
