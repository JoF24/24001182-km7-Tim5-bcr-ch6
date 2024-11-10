import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createFuel } from '../../service/fuel'
import { toast, ToastContainer } from 'react-toastify'
import Protected from '../../components/Auth/Protected'

export const Route = createLazyFileRoute('/fuels/create')({
  component: () => (
    <Protected roles={[1]}>
      <CreateFuel />
    </Protected>
  ),
})

function CreateFuel() {
  const navigate = useNavigate()

  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [octanRating, setOctanRating] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()

    const request = {
      type,
      price,
      octan_rating: octanRating,
    }

    const result = await createFuel(request)
    if (result?.success) {
      sessionStorage.setItem('successMessage', 'Fuel data successfully added!')
      navigate({ to: '/' })
      return
    }

    alert(result?.message)
  }

  return (
    <Container fluid>
      <Row className="mt-5">
        <Col className="offset-md-3">
          <Card>
            <Card.Header className="text-center">Create Fuel</Card.Header>
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="type">
                  <Form.Label column sm={3}>
                    Type
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="text"
                      placeholder="Enter fuel type"
                      required
                      value={type}
                      onChange={(event) => setType(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="price">
                  <Form.Label column sm={3}>
                    Price
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="number"
                      placeholder="Enter price"
                      required
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="octanRating">
                  <Form.Label column sm={3}>
                    Octan Rating
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="number"
                      placeholder="Enter octan rating"
                      required
                      value={octanRating}
                      onChange={(event) => setOctanRating(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button type="submit" variant="primary">
                    Create Fuel
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
      <ToastContainer />
    </Container>
  )
}

export default CreateFuel
