import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import { getTransmission } from '../../service/transmission'
import { getModel } from '../../service/model'
import { getFuels } from '../../service/fuel'
import { getType } from '../../service/Types'
import { getManufacture } from '../../service/Manufacture'

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

    const [cars, setCars] = useState('')
    const [plate, setPlate] = useState('')
    const [manufacture, setManufacture] = useState([])
    const [manufacture_id, setManufacture_id] = useState(0)
    const [model, setModel] = useState([])
    const [model_id, setModel_id] = useState(0)
    const [rentPerDay, setRentPerDay] = useState('')
    const [capacity, setCapacity] = useState('')
    const [description, setDescription] = useState('')
    const [availableAt, setAvailableAt] = useState('')
    const [transmission, setTransmission] = useState([])
    const [transmission_id, setTreansmission_id] = useState(0)
    const [available, setAvailable] = useState('')
    const [type, setType] = useState([])
    const [type_id, setType_id] = useState(0)
    const [year, setYear] = useState('')
    const [options, setOptions] = useState('')
    const [specs, setSpecs] = useState('')
    const [fuels, setFuels] = useState([])
    const [fuel_id, setFuel_id] = useState(0)
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch data in parallel
            const [
              manufactureData,
              modelData,
              transmissionData,
              typeData,
              fuelsData,
              carDetailData
            ] = await Promise.all([
              getManufacture(),
              getModel(),
              getTransmission(),
              getType(),
              getFuels(),
              id ? getDetailCars(id) : Promise.resolve(null)
            ]);
    
            if (manufactureData?.success) setManufacture(manufactureData.data);
            if (modelData?.success) setModel(modelData.data);
            if (transmissionData?.success) setTransmission(transmissionData.data);
            if (typeData?.success) setType(typeData.data);
            if (fuelsData?.success) setFuels(fuelsData.data);
    
            if (carDetailData) {
              if (carDetailData.success) {
                setCars(carDetailData.data?.cars);
                setPlate(carDetailData.data?.plate);
                setManufacture(carDetailData.data?.manufacture);
                setModel(carDetailData.data?.model);
                setRentPerDay(carDetailData.data?.rentPerDay);
                setCapacity(carDetailData.data?.capacity);
                setDescription(carDetailData.data?.description);
                setAvailableAt(carDetailData.data?.availableAt);
                setTransmission(carDetailData.data?.transmission);
                setAvailable(carDetailData.data?.available);
                setType(carDetailData.data?.type);
                setYear(carDetailData.data?.year);
                setOptions(carDetailData.data?.options);
                setSpecs(carDetailData.data?.specs);
                setFuel(carDetailData.data?.fuel);
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
                        <Form.Group as={Row} className="mb-3" controlId="cars">
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
                      setCars(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="plate">
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
                      setPlate(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="manufacture_id">
                <Form.Label column sm={3}>
                  Manufacture 
                </Form.Label>
                <Col sm="9">
                <Form.Select
                    aria-label="Default select example"
                    onChange={(event) =>
                        setManufactureId(event.target.value)
                    }
                >
                    <option disabled selected>
                        Select Manufacture
                    </option>
                    {manufacture.length > 0 &&
                        manufacture.map((manufacture) => (
                            <option
                                key={manufacture?.id}
                                value={manufacture?.id}
                            >
                                {manufacture?.name}
                            </option>
                        ))}
                </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="model_id">
                <Form.Label column sm={3}>
                  Model Name
                </Form.Label>
                <Col sm="9">
                <Form.Select
                    aria-label="Default select example"
                    onChange={(event) =>
                        setModelId(event.target.value)
                    }
                >
                    <option disabled selected>
                        Select Model
                    </option>
                    {model.length > 0 &&
                        model.map((model) => (
                            <option
                                key={model?.id}
                                value={model?.id}
                            >
                                {model?.name}
                            </option>
                        ))}
                </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="rentPerDay">
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
                      setRentPerDay(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="capacity">
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
                      setCapacity(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="description">
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
                      setDescription(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="availableAt">
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
                      setAvailableAt(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="transmission_id">
                <Form.Label column sm={3}>
                  Transmission 
                </Form.Label>
                <Col sm="9">
                <Form.Select
                    aria-label="Default select example"
                    onChange={(event) =>
                        setTransmissionId(event.target.value)
                    }
                >
                    <option disabled selected>
                        Select Transmission
                    </option>
                    {transmission.length > 0 &&
                        transmission.map((transmission) => (
                            <option
                                key={transmission?.id}
                                value={transmission?.id}
                            >
                                {transmission?.name}
                            </option>
                        ))}
                </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="available">
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
                      setAvailable(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="type_id">
                <Form.Label column sm={3}>
                  Type 
                </Form.Label>
                <Col sm="9">
                <Form.Select
                    aria-label="Default select example"
                    onChange={(event) =>
                        setTypeId(event.target.value)
                    }
                >
                    <option disabled selected>
                        Select Type
                    </option>
                    {type.length > 0 &&
                        type.map((type) => (
                            <option
                                key={type?.id}
                                value={type?.id}
                            >
                                {type?.name}
                            </option>
                        ))}
                </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="year">
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
                      setYear(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="options">
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
                      setOptions(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="specs">
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
                      setSpecs(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="fuel_id">
                <Form.Label column sm={3}>
                  Fuel Type
                </Form.Label>
                <Col sm="9">
                <Form.Select
                    aria-label="Default select example"
                    onChange={(event) =>
                        setFuelsId(event.target.value)
                    }
                >
                    <option disabled selected>
                        Select Fuel
                    </option>
                    {fuels.length > 0 &&
                        fuels.map((fuels) => (
                            <option
                                key={fuels?.id}
                                value={fuels?.id}
                            >
                                {fuels?.name}
                            </option>
                        ))}
                </Form.Select>
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