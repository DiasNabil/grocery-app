import { useContext, useState } from "react"
import { Form } from "react-router-dom"
import { CartContext } from "../../components/Context/CartContext"

export default function CheckoutForm({checkout}){
    const [customer , setCustomer] = useState({
        billing : {
            firstName: '',
            lastName: '',
            phone:'',
            email: ''
        },
        date: '',
        note: '',
    })

    const {setCart} = useContext(CartContext)

    let input = {
        billing:{...customer.billing},
        shipping:{...customer.billing},
        isPaid: false,
        paymentMethod:'cod',
        shipToDifferentAddress: false,
        customerNote: `date de récuperation souhaiter : ${customer.date ? new Date(customer.date).toLocaleString('fr-FR') : 'dès que possible'}, note perso: ${customer.note}`
    }


    function handleSubmit(event){
        event.preventDefault()
        checkout({variables: {input: input}})
        setCart(null)
    }
    
    function handleChange(event){
        setCustomer(prev => {

            if(event.target.name !== 'date' && event.target.name !== 'note'){
                return {
                    ...prev, billing: {
                        ...prev.billing,  [event.target.name] : event.target.value
                    }
                }
            }else
            return {...prev, [event.target.name] : event.target.value}
        })
    }

    return (
        <>
        <h2>Vos informations</h2>
        <Form className='form-container' onSubmit={handleSubmit} method='post' action='/confirmation'>

            <div className='form-input firstname'>
                <label htmlFor='firstName'>Votre Nom*</label>
                <input type='text' name='firstName' required="required" value={customer.billing.firstName} onChange={handleChange}/>
            </div>

            <div className='form-input lastname'>
                <label htmlFor='lastName'>Votre Prenom*</label>
                <input type='text' name='lastName' required="required" value={customer.billing.lastName} onChange={handleChange}/>
            </div>

            <div className='form-input mail'>
                <label htmlFor='email'>Votre adresse email*</label>
                <input type='email' name='email' required="required" value={customer.billing.email} onChange={handleChange}/>
            </div>

            <div className='form-input phone'>
                <label htmlFor='phone'>Votre numero de telephone*</label>
                <input type='phone' name='phone' required="required" value={customer.billing.phone} onChange={handleChange}/>
            </div>    

            <div className='form-input date'>
                <label htmlFor='date'>Date de récuperation souhaiter</label>
                <input type='datetime-local' name='date' value={customer.date} onChange={handleChange}/>
            </div>

            <div className='form-input note'>
                <label htmlFor='note'>Une instruction particulière ?</label>
                <textarea name='note'  value={customer.note} onChange={handleChange}/>
            </div>    

            <button type='submit'>Valider votre commande</button>
        </Form>
    </>
    )

}