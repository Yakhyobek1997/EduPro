import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyAb9twMin6IT-tfbzaa6qolPqGJy97410s',
	authDomain: 'praktikum-4ddcd.firebaseapp.com',
	projectId: 'praktikum-4ddcd',
	storageBucket: 'praktikum-4ddcd.appspot.com',
	messagingSenderId: '559751721263',
	appId: '1:559751721263:web:28eb5e6696d630b187f1da',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export { storage }
