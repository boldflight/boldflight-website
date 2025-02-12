// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface KofiWidget {
		draw: (
			username: string,
			options: {
				type: string;
				'floating-chat.donateButton.text': string;
				'floating-chat.donateButton.background-color': string;
				'floating-chat.donateButton.text-color': string;
			}
		) => void;
	}

	interface Window {
		kofiWidgetOverlay: KofiWidget;
	}
}

export {};
