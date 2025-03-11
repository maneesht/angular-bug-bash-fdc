import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth, authState, GoogleAuthProvider, onAuthStateChanged, signInAnonymously, signInWithCredential, signInWithPhoneNumber, signInWithPopup, signOut as signOutFirebase, user } from '@angular/fire/auth';
import { upsertUser } from '@movie/dataconnect';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe],
  template: `
    <nav class="bg-black">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <a href="/" class="flex items-center">
            <img
              src="firebase_logo.svg"
              alt="Firebase Logo"
              width="30"
              height="30"
            />
            <span class="text-lg"
              >FriendlyMovies</span
            >
          </a>
        </div>
        <div class="flex items-center">
          @if (currentUser | async; as user) {
          <!-- <a href="/myprofile" class="text-yellow-500 hover:text-yellow-400">
            My Profile
          </a> -->
          <span
            >Hello, {{ user.displayName }}</span
          >
          <a (click)="signOut()">Sign Out</a>
          } @else {
          <a
            (click)="handleSignIn()"
          >
            Sign In with Google
          </a>
          }
        </div>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  auth = inject(Auth);
  currentUser = authState(this.auth)
  
  async handleSignIn() {
    const googleProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(this.auth, googleProvider);
    await upsertUser({ username: res.user.email! });
  }
  signOut() {
    signOutFirebase(this.auth);
  }
}
