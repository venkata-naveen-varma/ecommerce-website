import { useState } from "react"
import {Form, Button} from '../components/FormContainer'

const ShippingScreen = () => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    
  return (
    <div>ShippingScreen</div>
  )
}

export default ShippingScreen