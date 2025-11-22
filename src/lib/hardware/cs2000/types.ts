export enum SpeedMode {
    Normal = 0,
    Fast = 1,
    MultiIntegNormal = 2,
    Manual = 3,
    MultiIntegFast = 4,
}

export enum SyncMode {
    NoSync = 0,
    InternalSync = 1,
    ExternalSync = 2,
}

export enum MeasurementAngle {
    OneDegree = 0,
    PointTwoDegree = 1,
    PointOneDegree = 2,
}

export interface CS2000Config {
    portPath: string;
    baudRate?: number;
    mock?: boolean;
}

export interface SpectralData {
    startWavelength: number;
    endWavelength: number;
    step: number;
    values: number[];
}

export interface ColorimetricData {
    x: number;
    y: number;
    Lv: number; // cd/m2
    u_prime: number;
    v_prime: number;
    X: number;
    Y: number;
    Z: number;
    T: number; // Correlated Color Temperature
    d_uv: number;
    lambda_d: number; // Dominant wavelength
    Pe: number; // Excitation purity
}

export interface MeasurementResult {
    spectral?: SpectralData;
    colorimetric?: ColorimetricData;
    measurementTime?: number;
}

export enum CS2000Error {
    OK00 = "OK00", // Normal completion
    ER00 = "ER00", // Invalid command string/number of parameters
    ER02 = "ER02", // Measurement error
    ER05 = "ER05", // No compensation values
    ER10 = "ER10", // Over measurement range
    ER17 = "ER17", // Parameter error
    ER20 = "ER20", // No data
    ER30 = "ER30", // Memory error
    ER51 = "ER51", // Temperature abnormality
    ER52 = "ER52", // Temperature abnormality
    ER71 = "ER71", // Outside synchronization signal range
    ER81 = "ER81", // Shutter malfunction
    ER82 = "ER82", // Filter malfunction
    ER83 = "ER83", // Measurement angle abnormality
    TIMEOUT = "TIMEOUT", // Communication timeout
}
