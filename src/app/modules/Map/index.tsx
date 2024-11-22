import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import { site } from "@/app/const/const";

type NGUYENMapProps = {
	width?: any;
	height?: any;
	lat?: any;
	lng?: any;
	zoom?: any;
	styles?: any;
	marker?: {
		url?: any;
		size?: any;
		anchor?: any;
	};
	onLoad?: () => void;
	onUnmount?: () => void;
	onClick?: () => void;
};

const NGUYEN_MAP: React.FC<NGUYENMapProps> = (props) => {
	const { width: NGUYENMapwidth, height: NGUYENMapheight, lat: NGUYENMaplat, lng: NGUYENMaplng, zoom: NGUYENMapzoom, styles: NGUYENMapstyles, marker: NGUYENMapmarker, onClick, onLoad, onUnmount } = props;

	const containerStyle = {
		width: NGUYENMapwidth || "100%",
		height: NGUYENMapheight || "600px",
	};

	const center = {
		lat: NGUYENMaplat || 0,
		lng: NGUYENMaplng || 0,
	};
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: site.seo.map_API,
	});

	return (
		<>
			{isLoaded && (
				<>
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={center}
						zoom={NGUYENMapzoom || 16}
						onLoad={onLoad}
						onUnmount={onUnmount}
						// Style the map
						options={{
							styles: [NGUYENMapstyles],
						}}>
						<Marker
							position={center}
							icon={{
								url: NGUYENMapmarker?.url || "",
								scaledSize: new window.google.maps.Size(NGUYENMapmarker?.size[0], NGUYENMapmarker?.size[1]),
								anchor: new window.google.maps.Point(NGUYENMapmarker?.anchor[0], NGUYENMapmarker?.anchor[1]),
							}}
							onClick={onClick}
						/>
					</GoogleMap>
				</>
			)}
		</>
	);
};

export default NGUYEN_MAP;
