// will handle all bluetooth related functions
import { BleManager } from "@config-plugins/react-native-ble-plx";

export const manager = new BleManager();

export const requestBluetoothPermission = async () => {
    if (Platform.OS === "ios") {
        return true;
    }
    if (
        Platform.OS === "android" &&
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    ) {
        const apiLevel = parseInt(Platform.Version.toString(), 10);

        if (apiLevel < 31) {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        if (
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN &&
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
        ) {
            const result = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
                PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            ]);

            return (
                result["android.permission.BLUETOOTH_CONNECT"] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                result["android.permission.BLUETOOTH_SCAN"] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                result["android.permission.ACCESS_FINE_LOCATION"] ===
                    PermissionsAndroid.RESULTS.GRANTED
            );
        }
    }

    this.showErrorToast("Permission have not been granted");

    return false;
};

export function scanAndConnect() {
    manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
            // Handle error (scanning will be stopped automatically)
            return;
        }

        // Check if it is a device you are looking for based on advertisement data
        // or other criteria.
        if (
            device.name === "TI BLE Sensor Tag" ||
            device.name === "SensorTag"
        ) {
            // Stop scanning as it's not necessary if you are scanning for one device.
            manager.stopDeviceScan();

            // Proceed with connection.
        }
    });
}

export const stopScan = () => {
    manager.stopDeviceScan();
};

export const connectToDevice = async (device) => {
    try {
        await device.connect();
        console.log("Connected to device");
    } catch (error) {
        console.log(error);
    }
};
