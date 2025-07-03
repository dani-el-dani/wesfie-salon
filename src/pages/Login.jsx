import { Form, redirect, useActionData, useLoaderData, useNavigation } from "react-router"
import useAuthStore from "../store/authStore"

export async function loader({request}){
    const isLoggedIn = useAuthStore.getState().user?.loggedin || false
    
    if(isLoggedIn){
        const response = redirect(`/myschedule`)
        response.body = true  
        throw response
    }
    return new URL(request.url).searchParams.get('message')
}

export async function action({request}){
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    try {
        const res = await fetch("/api/login",
            { method: "post", body: JSON.stringify({email, password}) }
        )
        const data = await res.json()

        if (!res.ok) {
            throw {
                message: data.message,
                statusText: res.statusText,
                status: res.status
            }
        }
        useAuthStore.getState().login(data)
        const response = redirect("/myschedule")
        response.body = true  
        throw response

    }catch(err){
        return err
    }
}

function Login(){
    const error = useActionData()
    const navigation = useNavigation()
    const message = useLoaderData()
    return(
        <div className="section-container">
            <h2 className="section-title">Sign in to your account</h2>
            <div className="login-form-continer">
                {message && <h2 className="red">{message}</h2>}
                {error && <h3 className="red">{error.message}</h3>}
                <Form method="post" replace>
                    <input name="email" type="email" placeholder="Email Adress"/>
                    <input name="password" type="password" placeholder="Password"/>
                    <button disabled={navigation.state==='submitting'} className="login-btn">{navigation.state === 'submitting'?'Logging in':'Log In'}</button>
                </Form>
            </div>
        </div>
    )
}

export default Login