import { AngularFireAuth } from '@angular/fire/auth';

export class AuthService {
    constructor(public afAuth: AngularFireAuth) { }

    registerUser(email: string, pass: string) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(userData => resolve(userData),
                    err => reject(err));
        });
    }
}
