import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { getTransmissions } from '../service/transmission' // Update the import
import TransmissionItem from '../components/Transmission/TransmissionItem' // Update to TransmissionItem component
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Route = createLazyFileRoute('/transmissions')({
  component: Index,
})

function Index() {
  const { token } = useSelector((state) => state.auth)

  const [transmissions, setTransmissions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getTransmissionData = async () => {
      setIsLoading(true)
      const result = await getTransmissions()
      console.log('Transmission data:', result) // Add console log
      if (result.success) {
        setTransmissions(result.data)
      }
      setIsLoading(false)
    }

    if (token) {
      getTransmissionData()
    }
  }, [token])

  useEffect(() => {
    const successMessage = sessionStorage.getItem('successMessage')
    if (successMessage) {
      toast.success(successMessage)
      sessionStorage.removeItem('successMessage')
    }
  }, [])

  return (
    <>
      <ToastContainer />
      <Row className="mt-4">
        <div className="d-flex justify-content-end mb-3">
          <Button as={Link} to="/transmissions/create" variant="primary" size="md">
            + Tambah Data
          </Button>
        </div>
        {!token && (
          <Col>
            <h1 className="text-center">
              Please login first to get transmission data!
            </h1>
          </Col>
        )}

        {isLoading ? (
          <h1>Loading....</h1>
        ) : transmissions.length === 0 ? (
          <h1>Transmission data is not found!</h1>
        ) : (
          transmissions.length > 0 &&
          transmissions.map((transmission) => <TransmissionItem transmission={transmission} key={transmission?.id} />)
        )}
      </Row>
    </>
  )
}

export default Index
