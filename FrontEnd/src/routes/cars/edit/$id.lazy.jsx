import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import { getDetailCars, updateCars } from "../../../service/cars";
import Protected from "../../../components/Auth/Protected";

export const Route = createLazyFileRoute("/cars/edit/$id")({
    component: () => (
        <Protected roles={[1]}>
            <EditCars />
        </Protected>
    ),
});

function EditCars() {
    const { id } = Route.useParams();
    const navigate = useNavigate();

    const [cars, setCars] = useState("");
    const [plate, setPlate] = useState("");
    const [manufacture_id, setManufacture_id] = useState("");
    const [model_id, setModel_id] = useState("");
    const [rentPerDay, setRentPerDay] = useState("");
    const [capacity, setCapacity] = useState("");
    const [description, setDescription] = useState("");
    const [availableAt, setAvailableAt] = useState("");
    const [transmission_id, setTreansmission_id] = useState("");
    const [available, setAvailable] = useState("");
    const [type_id, setType_id] = useState("");
    const [year, setYear] = useState("");
    const [options, setOptions] = useState("");
    const [specs, setSpecs] = useState("");
    const [fuel_id, setFuel_id] = useState("");
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const getDetailCarsData = async (id) => {
            const result = await getDetailCars(id);
            if (result?.success) {
                setCars(result.data?.cars);
                setPlate(result.data?.plate);
                setManufacture_id(result.data?.manufacture_id);
                setModel_id(result.data?.model_id);
                setRentPerDay(result.data?.rentPerDay);
                setCapacity(result.data?.capacity);
                setDescription(result.data?.description);
                setAvailableAt(result.data?.availableAt);
                setTreansmission_id(result.data?.transmission_id);
                setAvailable(result.data?.available);
                setType_id(result.data?.type_id);
                setYear(result.data?.year);
                setOptions(result.data?.options);
                setSpecs(result.data?.specs);
                setFuel_id(result.data?.fuel_id);
                setIsNotFound(false);
            } else {
                setIsNotFound(true);
            }
        };

        if (id) {
            getDetailCarsData(id);
        }
    }, [id]);

    if (isNotFound) {
        navigate({ to: "/cars" });
        return;
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const request = {
            cars,
            plate,
            manufacture_id,
            model_id,
            rentPerDay,
            capacity,
            description,
            availableAt,
            transmission_id,
            available,
            type_id,
            year,
            options,
            specs,
            fuel_id
        };
        const result = await updateCars(id, request);
        if (result?.success) {
            navigate({ to: `/cars`,
                state: { successMessage: "Data Car berhasil diperbarui !!" }
            });
            return;
        }

        toast.error(result?.message);
    };

    const handleCancel = () => {
        navigate({ to: "/" });
        return;
    };

    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <Card>
                    <Card.Header className="text-center">
                        Edit Car Data With ID {id}
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                        <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="cars"
                            >
                                <Form.Label column sm={3}>
                                    Car
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        placeholder="Input Car Name"
                                        required
                                        value={cars}
                                        onChange={(event) => {
                                            setCars(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="plate"
                            >
                                <Form.Label column sm={3}>
                                    Plate
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="string"
                                        placeholder="Input Plate"
                                        required
                                        value={plate}
                                        onChange={(event) => {
                                            setPlate(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="manufacture_id"
                            >
                                <Form.Label column sm={3}>
                                    Manufacture ID
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="string"
                                        placeholder="Input Manufacture Name"
                                        required
                                        value={manufacture_id}
                                        onChange={(event) => {
                                            setManufacture_id(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="model_id"
                            >
                                <Form.Label column sm={3}>
                                    Model Name
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="string"
                                        placeholder="Input Model Name"
                                        required
                                        value={model_id}
                                        onChange={(event) => {
                                            setModel_id(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="rentPerDay"
                            >
                                <Form.Label column sm={3}>
                                    Rent Per Day
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="number"
                                        placeholder="Input Rent Per Day"
                                        required
                                        value={rentPerDay}
                                        onChange={(event) => {
                                            setRentPerDay(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="capacity"
                            >
                                <Form.Label column sm={3}>
                                    Capacity
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="number"
                                        placeholder="Input Capacity"
                                        required
                                        value={capacity}
                                        onChange={(event) => {
                                            setCapacity(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="description"
                            >
                                <Form.Label column sm={3}>
                                    Description
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="string"
                                        placeholder="Input Description"
                                        required
                                        value={description}
                                        onChange={(event) => {
                                            setDescription(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="availableAt"
                            >
                                <Form.Label column sm={3}>
                                    Available At
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="string"
                                        placeholder="Input Available At"
                                        required
                                        value={availableAt}
                                        onChange={(event) => {
                                            setAvailableAt(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="transmission_id"
                            >
                                <Form.Label column sm={3}>
                                    Transmission ID
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="string"
                                        placeholder="Input Transmission Type"
                                        required
                                        value={transmission_id}
                                        onChange={(event) => {
                                            setTreansmission_id(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="available"
                            >
                                <Form.Label column sm={3}>
                                    Available
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="boolean"
                                        placeholder="Input Availabillity"
                                        required
                                        value={available}
                                        onChange={(event) => {
                                            setAvailable(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="type_id"
                            >
                                <Form.Label column sm={3}>
                                    Type ID
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="string"
                                        placeholder="Input Type"
                                        required
                                        value={type_id}
                                        onChange={(event) => {
                                            setType_id(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="year"
                            >
                                <Form.Label column sm={3}>
                                    Year
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="number"
                                        placeholder="Input Year"
                                        required
                                        value={year}
                                        onChange={(event) => {
                                            setYear(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="options"
                            >
                                <Form.Label column sm={3}>
                                    Options
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="string"
                                        placeholder="Input Options"
                                        required
                                        value={options}
                                        onChange={(event) => {
                                            setOptions(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="specs"
                            >
                                <Form.Label column sm={3}>
                                    Specs
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="string"
                                        placeholder="Input Specs"
                                        required
                                        value={specs}
                                        onChange={(event) => {
                                            setSpecs(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="fuel_id"
                            >
                                <Form.Label column sm={3}>
                                    Fuel Type
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="string"
                                        placeholder="Input Fuel Type"
                                        required
                                        value={fuel_id}
                                        onChange={(event) => {
                                            setFuel_id(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Container>
                                <Row>
                                    <Col className="d-flex justify-content-center gap-2">
                                        <Button 
                                            variant="outline-primary" 
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </Button>
                                        <Button 
                                            type="submit" 
                                            variant="primary" 
                                            disabled={!cars || !plate || !manufacture_id || !model_id || !rentPerDay || !capacity || !description || !availableAt || !transmission_id || !available || !type_id || !year || !options || !specs || !fuel_id}
                                        >
                                            Save
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}></Col>
        </Row>
    );
}