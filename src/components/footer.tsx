const Footer = (): JSX.Element => {
	return (
	<footer id="site_foot">
		<small>&copy; 1999 &ndash; {new Date(Date.now()).getFullYear()} Lex von Biedenfeld</small> | <small>Last updated <time dateTime="2022-06-05">June 5, 2022</time></small>
	</footer>
	);
}

export default Footer;