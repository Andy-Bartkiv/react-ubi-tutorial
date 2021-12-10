import React, { useEffect, useState } from 'react';
import '../styles/Clock.css'

function Clock() {
	const [date, setDate] = useState(new Date());
	const tick = () => setDate(new Date());

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000)
		return () => clearInterval(timerID)
	}, []);

	return (
		<h3 className = 'clock'>
			{ date.toLocaleTimeString() }
		</h3>
	)
}

export default Clock;