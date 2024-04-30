import '../Header.css';
import NavComponent from './NavComponent'
import Stack from 'react-bootstrap/Stack';

function Header() {
	return (
		<div className="header-div" style={{ 
			// backgroundImage: `url("https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/375746497_199018963185157_5242002950186783773_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&_nc_cb=99be929b-232957e6&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KoasZWTX6FoQ7kNvgFtbb63&_nc_ht=scontent-ord5-2.xx&oh=00_AfBQBSU1vztn3Mp3T_olHEAJal4Jz4KyPQO9KAkuCKkQtg&oe=6635C6A7")`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundColor: 'darkorange',
			}}>
			<Stack gap={3}>
				<div className="Logo-Wrapper">
					<a href="/">
						<img id="Truck-Logo" src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/344774154_1687610618339045_8463236033997169484_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=25v_X4dZUw0Ab7OAcdl&_nc_ht=scontent-ord5-1.xx&oh=00_AfCgonY7PYTwCk23DY5H7hQCVQNz9g2ZPdAOtO58HDsPbQ&oe=6635D0EC" alt="OurLogo"></img>
					</a>
				</div>
				<NavComponent></NavComponent>
				<h1 style={{ color: 'rgba(255,255,255)', paddingBottom: '50px', paddingTop: '50px'}}>PAPI'S TACOS PARRILLERO IS NOW OPEN!</h1>
    		</Stack>
		</div>
	)
}

export default Header