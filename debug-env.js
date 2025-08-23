// Quick environment variables debug script
console.log('=== Environment Variables Debug ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('VITE_EMAILJS_SERVICE_ID:', process.env.VITE_EMAILJS_SERVICE_ID);
console.log('VITE_EMAILJS_TEMPLATE_ID:', process.env.VITE_EMAILJS_TEMPLATE_ID);
console.log('VITE_EMAILJS_PUBLIC_KEY:', process.env.VITE_EMAILJS_PUBLIC_KEY ? 'SET' : 'NOT SET');

// Check if import.meta.env is available (this won't work in Node, but shows the pattern)
if (typeof window !== 'undefined') {
    console.log('=== Vite Environment Variables ===');
    console.log('import.meta.env.VITE_EMAILJS_SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('import.meta.env.VITE_EMAILJS_TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log('import.meta.env.VITE_EMAILJS_PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 'SET' : 'NOT SET');
}
