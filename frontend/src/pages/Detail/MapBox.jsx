import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { Typography, Box } from '@mui/material';
const locationData = [
	{
		_id: '5c88fa8cf4afda39709c2959',
		description: 'Lummus Park Beach',
		type: 'Point',
		coordinates: [-80.128473, 25.781842],
		day: 1
	},
	{
		_id: '5c88fa8cf4afda39709c2958',
		description: 'Islamorada',
		type: 'Point',
		coordinates: [-80.647885, 24.909047],
		day: 2
	},
	{
		_id: '5c88fa8cf4afda39709c2957',
		description: 'Sombrero Beach',
		type: 'Point',
		coordinates: [-81.0784, 24.707496],
		day: 3
	},
	{
		_id: '5c88fa8cf4afda39709c2956',
		description: 'West Key',
		type: 'Point',
		coordinates: [-81.768719, 24.552242],
		day: 5
	}
];
const MapGlStyle = {
	transform: 'skewY(-6deg)',
	transformOrigin: 'top right',
	marginTop: 'calc(100vw * -0.1052 )'
};

const MapBox = () => {
	const [viewport, setViewport] = useState({
		width: '100vw',
		height: 700,
		latitude: 25,
		longitude: -80,
		zoom: 7,
		bearing: 0,
		pitch: 0
	});

	return (
		<ReactMapGL
			{...viewport}
			onViewportChange={(nextViewport) => setViewport(nextViewport)}
			mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
			style={MapGlStyle}
			mapStyle='mapbox://styles/mapbox/light-v10'>
			{locationData.map((location) => (
				<Marker
					key={location._id}
					longitude={location.coordinates[0]}
					latitude={location.coordinates[1]}
					offsetLeft={-20}
					offsetTop={-10}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
						<RoomOutlinedIcon sx={{ fill: '#55c57a' }} />
						<Typography variant='h6'>{`Day ${location.day}`}</Typography>
						<Typography variant='h6'>{location.description}</Typography>
					</Box>
				</Marker>
			))}
		</ReactMapGL>
	);
};

export default MapBox;
