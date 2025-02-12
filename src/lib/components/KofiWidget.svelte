<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // First, dynamically load the script
    const script = document.createElement('script');
    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
    script.onload = () => {
      // Once the script is loaded, initialize the widget
      window.kofiWidgetOverlay.draw('boldflight', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support Us',
        'floating-chat.donateButton.background-color': '#323842',
        'floating-chat.donateButton.text-color': '#fff'
      });
    };
    document.body.appendChild(script);

    // Cleanup on component destruction
    return () => {
      document.body.removeChild(script);
    };
  });
</script>