import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { getStudents } from '../service/student'
import StudentItem from '../components/Student/StudentItem'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Route = createLazyFileRoute('/student')({
  component: Index,
})

function Index() {
  const { token } = useSelector((state) => state.auth)

  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getStudentData = async () => {
      setIsLoading(true)
      const result = await getStudents()
      if (result.success) {
        setStudents(result.data)
      }
      setIsLoading(false)
    }

    if (token) {
      getStudentData()
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
          <Button as={Link} to="/students/create" variant="primary" size="md">
            + Tambah Data
          </Button>
        </div>
        {!token && (
          <Col>
            <h1 className="text-center">
              Please login first to get student data!
            </h1>
          </Col>
        )}

        {isLoading ? (
          <h1>Loading....</h1>
        ) : students.length === 0 ? (
          <h1>Student data is not found !</h1>
        ) : (
          students.length > 0 &&
          students.map((student) => (
            <StudentItem student={student} key={student?.id} />
          ))
        )}
      </Row>
    </>
  )
}
