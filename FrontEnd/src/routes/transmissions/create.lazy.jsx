import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createTransmission } from '../../service/transmission'
import { toast, ToastContainer } from 'react-toastify'
import Protected from '../../components/Auth/Protected'

export const Route = createLazyFileRoute('/transmissions/create')({
  component: () => (
    <Protected roles={[1]}>
      <CreateTransmission />
    </Protected>
  ),
})

function CreateTransmission() {
  const navigate = useNavigate()

  const [type, setType] = useState('')
  const [numberOfGears, setNumberOfGears] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()

    const request = {
      type,
      number_of_gears: numberOfGears,
    }

    const result = await createTransmission(request)
    if (result?.success) {
      sessionStorage.setItem('successMessage', 'Transmission data successfully added!')
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
            <Card.Header className="text-center">Create Transmission</Card.Header>
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="type">
                  <Form.Label column sm={3}>
                    Type
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="text"
                      placeholder="Enter transmission type"
                      required
                      value={type}
                      onChange={(event) => setType(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="numberOfGears">
                  <Form.Label column sm={3}>
                    Number of Gears
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="number"
                      placeholder="Enter number of gears"
                      required
                      value={numberOfGears}
                      onChange={(event) => setNumberOfGears(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button type="submit" variant="primary">
                    Create Transmission
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

export default CreateTransmission