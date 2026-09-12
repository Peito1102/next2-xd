import type{ Metadata } from "next";

export const metadata : Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['Contact', 'Contáctanos'],
};

export default function ContactPage() {
    return (
        <> 
            <span className="text-7xl">Contáctanos xd</span>
        </>
    )
}