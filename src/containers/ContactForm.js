import { Input } from 'antd';
import React from 'react';
import classes from './css/contactform.module.scss';
import ButtonMine from '../component/ui/Button';

const { TextArea } = Input;

const ContactForm = () => {
	
	
	
	return (
		<div>
			<div className={classes.input}>
				<Input
					
					name="Votre nom"
					placeholder="Votre Nom"
					
				/>
			</div>
			<div className={classes.input}>
				<Input
					name="email"
					placeholder="Email"
					
				/>
			</div>
			<div>
				<TextArea
				
					name="message"
					placeholder="Votre message"
					rows={4}
				
				/>
			</div>
			<div
				
				className={classes.button}
			>
				<ButtonMine content="Envoyer" width="120px" height="50px" path={'/'} executed={true} />
			</div>
		</div>
	);
};

export default ContactForm;

