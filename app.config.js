import 'dotenv/config';

export default{
  "expo": {
    "name": "firebase-and-navigation",
    "slug": "firebase-and-navigation",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      apiKey : proccess.env.API_KEY ,
      authDomain : proccess.env.AUTH_DOMAIN ,
      projectId : proccess.env.PROJECT_ID ,
      storageBucket : proccess.env.STORAGE_BUCKET ,
      messagingSenderId : proccess.env.MESSAGING_SENDER_ID ,
      appId : proccess.env.APP_ID ,
      measurementId : proccess.env.MEASUREMENT_ID ,

    }
  }
}
