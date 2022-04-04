import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GeolocationButton from '../components/GeolocationButton';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Geolocation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Geolocation</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <GeolocationButton />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
