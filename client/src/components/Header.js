import '../Header.css';
import NavComponent from './NavComponent'
import Stack from 'react-bootstrap/Stack';

function Header() {
	return (
		<div className="header-div" style={{ 
			backgroundImage: `url("https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/375746497_199018963185157_5242002950186783773_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bOypcmaZXRYAb65DiP5&_nc_ht=scontent-ord5-2.xx&oh=00_AfAJz-Cl-_RIoUEQlTpe1wPS1Wi6DRNS8xw5CJl7BiI9xg&oe=661E0BA7")`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundColor: 'darkorange',
			}}>
			<Stack gap={3}>
				<div className="Logo-Wrapper">
					<a href="/">
						<img id="Truck-Logo" src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/344774154_1687610618339045_8463236033997169484_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IKSxiZpr74YAb7FGE_l&_nc_ht=scontent-ord5-1.xx&oh=00_AfC1E697Z2lY6e5FlJQ7l2rADFPIPRfeFBhTIvFUQ5boSg&oe=6616652C" alt="OurLogo"></img>
					</a>
				</div>
				<NavComponent></NavComponent>
				<h1 style={{ color: 'rgba(255,255,255)', marginTop: '150px'}}>PAPI'S TACOS PARRILLERO IS NOW OPEN!</h1>
    		</Stack>
		</div>
		// <h1>Hello, World!</h1>
	)
}

export default Header