
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

const Layout = ({ children }): JSX.Element => {
	return(
	<>
	<Header/>
	<main>{children}</main>
	<Footer/>	
	</>
	);
};

export default Layout;