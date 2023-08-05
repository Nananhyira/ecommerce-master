import {useState} from 'react'
import { PaystackButton } from 'react-paystack'
import "../index.css"
import { Center } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const CheckoutForm = () => {
  const publicKey = import.meta.env.VITE_SOME_KEY
  // const amount = 1000000 // Remember, set in kobo!
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const amount = useSelector(state=>state.cart.total)

  const componentProps = {
    email,
    amount:(amount*100),
    currency:"GHS",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }
  return (
    <Center minH="90vh">
      <div className="checkout-form">
        <p>GHS {amount}</p>
			<div className="checkout-field">
				<label>Name</label>
				<input
					type="text"
					id="name"
          value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="checkout-field">
				<label>Email</label>
				<input
         value={email}
					type="text"
					id="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="checkout-field">
				<label>Phone</label>
				<input
         value={phone}
					type="text"
					id="phone"
					onChange={(e) => setPhone(e.target.value)}
				/>
			</div>
			<PaystackButton className="paystack-button"  {...componentProps} />
		</div>
    </Center>

	);
}

export default CheckoutForm