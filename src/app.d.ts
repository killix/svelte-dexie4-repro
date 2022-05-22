/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

import { Subscriber, Unsubscriber } from 'svelte/store';
import { Subscription } from 'dexie';

declare module 'dexie' {
  interface Observable<T> {
    subscribe(run: Subscriber<T>): Unsubscriber | Subscription;
  }
}