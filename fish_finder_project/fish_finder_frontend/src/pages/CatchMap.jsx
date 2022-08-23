import { useCallback, useState, useRef, useMemo } from 'react'
import MapStyles from "../MapStyles"

// // import Google Maps
import {
    GoogleMap,
    useGoogleMap,
    Marker,
    InfoBox,
    Circle,
    MarkerCluster,
    InfoWindow,
    useJsApiLoader,
    StandaloneSearchBox,
    Autocomplete,
    searchBox,
} from "@react-google-maps/api"

function CatchMap() {

    const libraries = ["places"]

    const mapRef = useRef();

    const containerStyle = {
        width: '1000px',
        height: '600px'
    };

    const center = {
        lat: 34.48686532,
        lng: -82.8805130
    };

    const options = {
        // styles: MapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        scaleControl: true,
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        //  R E P L A C E   T H I S   L I N E   W I T H   G O O G L E   M A P S   K E Y (line 8 of .env file)
        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

        libraries
    })

    const [map, setMap] = useState(null)

    // const onLoad = useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);
    //     setMap(map)
    // }, [])

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    // const onLoad = ref => this.searchBox = ref;

    // const onPlacesChanged = () => console.log(this.searchBox.getPlaces());

    // ##########-Search Bar-##################################
    {/* <StandaloneSearchBox
                    onLoad={onLoad}
                    onPlacesChanged={
                        onPlacesChanged
                    }
                >
                    <input
                        type="text"
                        placeholder="Enter a Location"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: "absolute",
                            left: "50%",
                            marginLeft: "-120px"
                        }}
                    /> */}
    {/* </StandaloneSearchBox> */ }

    // ########-New Map Panning Function-#######################

    // function PanningComponent() {
    //     const mapPosition = useGoogleMap()

    //     useEffect(() => {
    //         if (mapPosition) {
    //             mapPosition.panTo(...)
    //         }
    //     }, [mapPosition])

    //     return null
    // }

    // ###############-Info Box-#####################################
    //     const infoOptions = { closeBoxURL: '', enableEventPropagation: true };

    //     const onInfoLoad = infoBox => {
    //         console.log('infoBox: ', infoBox)
    //     };

    //     <InfoBox
    //     onLoad={onLoad}
    //     options={options}
    //     position={center}
    //      >
    //     <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}>
    //       <div style={{ fontSize: 16, fontColor: `#08233B` }}>
    //         Hello, World!
    //       </div>
    //     </div>
    //   </InfoBox>

    //     const position = { lat: 33.772, lng: -117.214 }

    // const infoStyle = {
    //     background: `white`,
    //     border: `1px solid #ccc`,
    //     padding: 3

    // }

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const testMarkers = [
        {
            id: 1,
            name: "Fish 1",
            position: { lat: 34.394142, lng: -82.874662 }
        },
        {
            id: 2,
            name: "Fish 2",
            position: { lat: 34.434243, lng: -82.828167 }
        },
        {
            id: 3,
            name: "Fish 3",
            position: { lat: 34.495208, lng: -82.857333 }
        },
        {
            id: 4,
            name: "Fish 4",
            position: { lat: 34.518695, lng: -82.806761 }
        }
    ]


    return isLoaded ? (
        <div class="MapPage">
            <h2 id="MapTitle">Welcome to the Map Page</h2>
            <br />
            <h3 id="MapInstructions">This is a placeholder for the instructions that will tell the user how to interact with this page.</h3>
            <br />
            <div id="MapBox">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={11}
                    options={options}
                    onLoad={onMapLoad}
                    onUnmount={onUnmount}
                    onClick={() => setActiveMarker(null)}
                >
                    {testMarkers.map(({ id, name, position }) => (
                        <Marker
                            key={id}
                            position={position}
                            onClick={() => handleActiveMarker(id)}
                        >
                            {activeMarker === id ? (
                                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                    <div
                                    // style={infoStyle}
                                    >{name}</div>
                                </InfoWindow>
                            ) : null}
                        </Marker>))}
                    <></>
                </GoogleMap>
            </div>
        </div >
    ) : <></>

}

export default CatchMap