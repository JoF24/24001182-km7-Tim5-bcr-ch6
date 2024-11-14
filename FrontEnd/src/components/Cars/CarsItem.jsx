import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import { useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { deleteCars } from "../../service/Cars";
import { toast } from "react-toastify";
import deleteIcon from "../../assets/trash.png";
import editIcon from "../../assets/edit.png";

const CarsItem = ({ cars }) => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const onDelete = async (event) => {
        event.preventDefault();

        confirmAlert({
            title: "Menghapus Data Car",
            message: "Setelah dihapus, data car tidak dapat dikembalikan. Yakin ingin menghapus?",
            buttons: [
                {
                    label: "Ya",
                    onClick: async () => {
                        const result = await deleteCars(cars.id);
                        if (result?.success) {
                            navigate({ 
                                to: "cars/refresh",
                                state: { successMessage: "Data Car berhasil dihapus." }
                            });
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
        <Col md={3} style={{ marginRight: "3rem", marginBottom: "2rem"}}>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{cars?.cars}</Card.Title>
                    <Card.Text>{plate?.plate}</Card.Text>
                    <Card.Text>{manufacture_id?.manufacture_id}</Card.Text>
                    <Card.Text>{model_id?.model_id}</Card.Text>
                    <Card.Text>{rentPerDay?.rentPerDay}</Card.Text>
                    <Card.Text>{capacity?.capacity}</Card.Text>
                    <Card.Text>{description?.description}</Card.Text>
                    <Card.Text>{availableAt?.availableAt}</Card.Text>
                    <Card.Text>{transmission_id?.transmission_id}</Card.Text>
                    <Card.Text>{available?.available}</Card.Text>
                    <Card.Text>{type_id?.type_id}</Card.Text>
                    <Card.Text>{year?.year}</Card.Text>
                    <Card.Text>{options?.options}</Card.Text>
                    <Card.Text>{specs?.specs}</Card.Text>
                    <Card.Text>{fuel_id?.fuel_id}</Card.Text>


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
                                                    href={`/cars/edit/${cars?.id}`}
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

CarsItem.propTypes = {
    cars: PropTypes.object,
};

export default CarsItem;