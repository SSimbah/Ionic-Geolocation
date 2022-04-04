 
import {Geolocation, Geoposition} from "@ionic-native/geolocation"
import { IonButton, IonLoading, IonToast } from "@ionic/react";
import React, {useState} from "react";

interface LocationError{
    showError: boolean;
    message?: string;
}

const GeolocationButton: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LocationError>({ showError: false });
    const [position, setPosition] = useState<Geoposition>();

    const getLocation = async () => {
        setLoading(true);
        try {
            const position = await Geolocation.getCurrentPosition();
            setPosition(position);
            
            setLoading(false);
            setError({ showError: false, message:undefined });
        } catch (err) {
            const message = err.message;
            
            setError({ showError: true, message });
            setLoading(false);
        }
    };

    return(
        <>
            <IonLoading 
                isOpen={loading} 
                message={"Getting Location..."} 
                onDidDismiss={() => setLoading(false)}
            />
            <IonToast
                isOpen={error.showError}
                message={error.message}
                onDidDismiss={() => setError({message: undefined, showError: false})}
                duration={3000}
            />
            <IonButton onClick={getLocation}>
                {position 
                    ? `${position.coords.latitude} ${position.coords.longitude}`
                    : "Get Location"}
            </IonButton>
        </>
    ); 
}

export default GeolocationButton;