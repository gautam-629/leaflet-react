import { useState, useEffect } from "react";

const useGpsStatus = (): boolean => {
  const [isGpsEnabled, setIsGpsEnabled] = useState<boolean>(false);

  useEffect(() => {
    const checkGpsStatus = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // If we can get the position, GPS is definitely on
            setIsGpsEnabled(true);
          },
          (error) => {
            // Check the error code to determine if GPS is off
            if (
              error.code === error.POSITION_UNAVAILABLE ||
              error.code === error.TIMEOUT
            ) {
              setIsGpsEnabled(false);
            } else if (error.code === error.PERMISSION_DENIED) {
              // This could mean GPS is on but permission is denied
              // You might want to handle this case differently
              setIsGpsEnabled(false);
            }
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      } else {
        setIsGpsEnabled(false);
      }
    };

    // Check status immediately and set up interval to check periodically
    checkGpsStatus();
    const intervalId = setInterval(checkGpsStatus, 10000); // Check every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return isGpsEnabled;
};

export default useGpsStatus;
