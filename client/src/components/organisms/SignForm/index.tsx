import React from 'react';
import { PrimaryButton } from '../../atoms/PrimaryButton';
import { TextInput } from '../../molecules/TextInput';
import { Form } from '../../molecules/Form';
import styles from './index.module.scss';
import { Dialog } from '../Dialog';
import { MiniLoading } from '../../atoms/MiniLoading';

export type Props = {
	type: string;
	username: string;
	password: string;
	legend: string;
	text: string;
	disabled: boolean;
	isLoading: boolean;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
	submit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};
export const SignForm: React.FC<Props> = React.memo((props) => {
	const {
		type,
		username,
		password,
		legend,
		text,
		disabled,
		isLoading,
		change,
		submit,
	} = props;
	return (
		<>
			<Dialog />
			<Form legend={legend} submit={submit}>
				<div className={styles.wrapper}>
					<TextInput
						id={`${type}_username`}
						label="username:"
						type="text"
						name="username"
						value={username}
						method={change}
					/>
				</div>
				<div className={styles.wrapper}>
					<TextInput
						id={`${type}_password`}
						label="password:"
						type="password"
						name="password"
						value={password}
						method={change}
					/>
				</div>
				<div className={styles.wrapper}>
					{isLoading ? (
						<MiniLoading />
					) : (
						<PrimaryButton type="submit" text={text} disabled={disabled} />
					)}
				</div>
			</Form>
		</>
	);
});
