import './Header.css';
export const Header = () => {
	return (
		<>
			<header>
				<div className="profile">
					<img
						src="https://images.unsplash.com/photo-1669170023257-4da4bc7adfbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
						alt="user-img"
						className="profile-img"
					/>
				</div>
				<span>creative_ambition</span>
			</header>
		</>
	)
}