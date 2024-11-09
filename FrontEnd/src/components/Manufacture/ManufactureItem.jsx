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
import { deleteManufacture } from "../../service/Manufacture";
import { toast } from "react-toastify";
import { useState } from "react";
import deleteIcon from "../../assets/trash.png";
import editIcon from "../../assets/edit.png";

const ManufactureItem = ({ manufacture }) => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);

    const onDelete = async (event) => {
        event.preventDefault();

        confirmAlert({
            title: "Menghapus Data Manufacture",
            message: "Setelah dihapus, data manufacture tidak dapat dikembalikan. Yakin ingin menghapus?",
            buttons: [
                {
                    label: "Ya",
                    onClick: async () => {
                        const result = await deleteManufacture(manufacture.id);
                        if (result?.success) {
                            toast.success("Data Manufacture berhasil dihapus.");
                            navigate({ to: "manufacture/refresh"});
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
        <Col md={3} style={{ marginRight: "2rem", marginBottom: "1rem"}}>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{manufacture?.manufacture}</Card.Title>
                    <Card.Text>{manufacture?.address}</Card.Text>

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
                                                    href={`/manufacture/edit/${manufacture?.id}`}
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

ManufactureItem.propTypes = {
    manufacture: PropTypes.object,
};

export default ManufactureItem;