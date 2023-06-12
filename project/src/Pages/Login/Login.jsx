import "./Login.css";
import infinity from "../../Assets/infinity.png";
import warning from "../../Assets/warning.png";
import {useState} from "react";

export const Login = () => {

	const [newUser, setNewUser] = useState(false);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState(false);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submit = (e) => {
		e.preventDefault();
		setError(false);

		if (newUser) {

		}else {

		}
	}

	return (
		<>
			<div className="login-page">
				<header>
					<h1>Authentication</h1>
				</header>
				<img className="logo" src={infinity} alt="infinity"/>
				<h2 className="title">3Gear</h2>
				<form onSubmit={submit}>
					{newUser &&
						<div className="username">
						<input
							onChange={(e) => setUsername(e.target.value)}
							type="username"
							id="username"
							required
						/>
						<label htmlFor="email">Username</label>
						</div>
					}
					<div className="email">
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="email"
							required
						/>
						<label htmlFor="email">Email</label>
					</div>
					<div className="password">
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
							required
						/>
						<label htmlFor="email">Password</label>
					</div>
					{error &&
						<img src={warning} alt="warning" className="status"/>
					}
					{error &&
						<span className="error">Process Failed!</span>
					}
					<button className="submit">
						{newUser ? "Sign Up" : "Log In"}
					</button>
					{newUser ?
						( <span className="user-stat">
							Already have an account?&ensp;
								<strong onClick={() => {
									setNewUser(false)
									setError(false)
								}}>
									Log In
								</strong>
						  </span>
						)
						:
						( <span className="user-stat">
							Don't have an account?&ensp;
								<strong onClick={() => {
									setNewUser(true)
									setError(false)
								}}>
									Sign Up
								</strong>
						  </span>
						)
					}
				</form>
			</div>
		</>
	)
}