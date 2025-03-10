import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth, authState, GoogleAuthProvider, onAuthStateChanged, signInWithPhoneNumber, signInWithPopup, user } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe],
  template: `
    <nav class="bg-black">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <a href="/" class="flex items-center">
            <img
              src="firebase_logo.svg"
              alt="Firebase Logo"
              width="30"
              height="30"
              className="mr-2"
            />
            <span class=" text-white text-lg font-bold hidden md:block"
              >FriendlyMovies</span
            >
          </a>
        </div>
        <a
          href="/advancedsearch"
          className="flex items-center text-gray-200 hover:text-white mx-auto"
        >
          <!-- <FaSearch className="mr-2" /> -->
          Advanced Search
        </a>
        <div className="flex items-center space-x-4">
          
          @if (currentUser | async; as user) {
          <a href="/myprofile" class="text-yellow-500 hover:text-yellow-400">
            My Profile
          </a>
          <span className="text-gray-200 mr-4"
            >Hello, {{ user.displayName }}</span
          >
          <a class="text-gray-200 hover:text-white">Sign Out</a>
          } @else {
          <a
            (click)="handleSignIn()"
            class="text-gray-200 hover:text-white"
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
  
  handleSignIn() {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(this.auth, googleProvider).then(console.log);
  }
}
