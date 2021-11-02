const BASE_CONFIG = {
    API_CLIENT_KEY: 'gfHmt22kYb7z',
    API_AUTH_KEY: 'fnKH1fEVxw5KDwgvfcv40litE1WTAt8H21VFXWIY'
}

const PROD_CONFIG = {
    API_BASE_URL: "https://app.getkeel.com/api",
    env: "production",
    NDHMID: '@ndhm'
}

const STAGING_CONFIG = {
    API_BASE_URL: "https://app.getkeel.com/api",
    env: "staging",
}

const DEV_CONFIG = {
    API_BASE_URL: "https://staging.getkeel.com/api",
    env: "dev",
}

let CONFIG = {...DEV_CONFIG, ...BASE_CONFIG }

if (DHM_STAGING) {
    CONFIG = {...BASE_CONFIG, ...STAGING_CONFIG }
}

if (DHM_PRODUCTION) {
    CONFIG = {...BASE_CONFIG, ...PROD_CONFIG }
}

if (API_BASE_URL) {
    CONFIG.API_BASE_URL = API_BASE_URL
}

export default CONFIG