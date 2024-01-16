import { useState, useEffect } from 'react';
import { Platform} from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';

export default function useLocation (){
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (Platform.OS === 'android' && Device && !Device.isDevice) {
        setErrorMsg(
          'Oops, cela ne fonctionnera pas sur Snack dans un émulateur Android. Essayez-le sur votre appareil !'
        );
        return;
      }

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg("La permission d'accéder à l'emplacement a été refusée");
        return;
      }

      try {
        let locationData = await Location.getCurrentPositionAsync({});
       
        setLocation({
            latitude:locationData.coords.latitude,
            longitude:locationData.coords.longitude
        });
      } catch (error) {
        setErrorMsg('Error getting location');
      }
    };

    fetchData();
  }, []);

  return { location, errorMsg };
};

