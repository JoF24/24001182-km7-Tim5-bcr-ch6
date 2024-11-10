import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { getFuelTypes, getFuelDetail, updateFuel } from '../../../service/fuel'
import { toast } from 'react-toastify'
import Protected from '../../../components/Auth/Protected'

export const Route = createLazyFileRoute('/fuels/edit/$id')({
  component: () => (
    <Protected roles={[1]}>
      <EditFuel />
    </Protected>
  ),
})

function EditFuel() {
  const { id } = Route.useParams()
  const navigate = useNavigate()

  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [octaneRating, setOctaneRating] = useState('')
  const [fuelTypes, setFuelTypes] = useState([])
  const [isNotFound, setIsNotFound] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFuelTypes = async () => {
      const result = await getFuelTypes()
      if (result?.success) {
        setFuelTypes(result?.data)
      }
    }

    fetchFuelTypes()
  }, [])

  useEffect(() => {
    const fetchFuelDetail = async (id) => {
      setIsLoading(true)
      const result = await getFuelDetail(id)
      if (result?.success) {
        setType(result.data?.type)
        setPrice(result.data?.price)
        setOctaneRating(result.data?.octane_rating)
        setIsNotFound(false)
      } else {
        setIsNotFound(true)
      }
      setIsLoading(false)
    }

    if (id) {
      fetchFuelDetail(id)
    }
  }, [id])

  if (isNotFound) {
    navigate({ to: '/' })
    return null
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const request = {
      type,
      price,
      octaneRating,
    }
    const result = await updateFuel(id, request)
    if (result?.success) {
      navigate({ to: `/fuels/${id}` })
      return
    }

    toast.error(result?.message)
  }

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Header className="text-center">Edit Fuel</Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="type">
                <Form.Label column sm={3}>
                  Fuel Type
                </Form.Label>
                <Col sm="9">
                  <Form.Select
                    aria-label="Fuel type select"
                    required
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                  >
                    <option disabled>Select Fuel Type</option>
                    {!isLoading &&
                      fuelTypes.map((fuel) => (
                        <option key={fuel.id} value={fuel.type}>
                          {fuel.type}
                        </option>
                      ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="price">
                <Form.Label column sm={3}>
                  Price
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    required
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="octaneRating">
                <Form.Label column sm={3}>
                  Octane Rating
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="number"
                    placeholder="Octane Rating"
                    required
                    value={octaneRating}
                    onChange={(event) => setOctaneRating(event.target.value)}
                  />
                </Col>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  Edit Fuel
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}></Col>
    </Row>
  )
}
