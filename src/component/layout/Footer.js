import React from 'react';
import classes from './css/footer.module.scss';
import logo from './../../img/logo.svg';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const imgs = [ 'https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png' ];
const icons = imgs.map((img) => {
	let width = '50px';
	let heigth = '50px';
	if (window.innerWidth < 768) {
		width = '50px';
		heigth = '50px';
	}
	return (
		<div className={classes.img}>
			<img onClick={()=>{window.open("https://github.com/asad")}} src={img} alt="pic" style={{ width: '50px', height: '50px', marginLeft: '10px',cursor:"pointer" }} />
		</div>
	);
});

const Footer = () => {
	return (
		<div className={classes.wrapper}>
			<hr />
			<div className={classes.row1}>
				<div className={classes.colmun}>
					<p className={classes.title}>Lets build something together!</p>
					<div className={classes.row}>
						<Button content="CONTACT ME" width="170px" height="50px" path="contact" executed={false} />
						{icons}
					</div>
				</div>

				<div className={classes.contactsection}>
					<p className={classes.title}>Contact me on</p>
					<p>Email: asad@gmail.com</p>
					<p>Phone: 55592675</p>
				</div>
			</div>

			<hr />
			<div className={classes.copyrigth}>
				<p>asad © 2019 all rigths reserved</p>
			</div>
		</div>
	);
};
export default Footer;
