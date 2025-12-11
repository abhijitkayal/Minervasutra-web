import React from 'react';
import AllFeaturesComponent from '@/components/AllFeaturesComponent'; // Adjust path if necessary

// This component will automatically become the page content for the /features route.
export default function FeaturesPage() {
    return (
        // Your main layout (Header/Footer) from layout.js will wrap this content automatically.
        <AllFeaturesComponent />
    );
}