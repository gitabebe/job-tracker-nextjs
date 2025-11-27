// app/page.js (Redirects users from root URL to the marketing page)
import { redirect } from 'next/navigation';

export default function RootPage() {
    redirect('/marketing'); 
}