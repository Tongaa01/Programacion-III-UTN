import { Button, Form } from "react-bootstrap"
import styles from "./Login.module.css"
import { FormEvent, useState } from "react"
import { createEntityAdapter } from "@reduxjs/toolkit"
import { useForm } from "../../../hooks/useForm"
import { useAppDispatch } from "../../../hooks/redux"
import { setLogIn } from "../../../redux/slices/auth"
import { useNavigate } from "react-router-dom"


export const Login = () => {

    const [showPass, setShowPass] = useState(false)



    const { values, handleChange } = useForm({
        user: "",
        password: ""
    })

    const { user, password } = values
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(user, password);
        const response = await fetch("/user.json")
        const userData = await response.json()
        const userFound = userData.users.find(
            (u: { username: string, password: string }) => 
                u.username === user && u.password === password)
        if(userFound){
            dispatch(setLogIn(user))
            navigate("/home")
        }
    }

    return (
        <div className={styles.containerLogin}>
            <div className={styles.containerForm}>

                <Form onSubmit={handleSubmitForm}>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "5rem" }}>
                            domino_mask
                        </span>
                    </div>

                    <Form.Group className="mb-3">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="material-symbols-outlined" style={{ fontSize: "1.2rem", marginRight: ".5rem" }}>
                                face
                            </span>
                            <Form.Label> Usuario</Form.Label>
                        </div>
                        <Form.Control onChange={handleChange} value={user} name="user" type="text" placeholder="Usuario" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="material-symbols-outlined" style={{ fontSize: "1.2rem", marginRight: ".5rem" }}>
                                lock
                            </span>
                            <Form.Label> Contraseña</Form.Label>
                        </div>

                        <Form.Control onChange={handleChange} value={password} name="password" type={showPass ? "text" : "password"} placeholder="Contraseña" />
                    </Form.Group>

                    <Form.Check // prettier-ignore
                        type="switch"
                        onChange={() => {
                            setShowPass(!showPass)
                        }}
                        id="custom-switch"
                        label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
                    />
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <Button type="submit" variant="outline-primary">Entrar</Button>{' '}
                    </div>
                </Form>
            </div>
        </div>
    )
}
