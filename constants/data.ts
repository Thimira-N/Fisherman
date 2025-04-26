export interface Listing {
    id: string;
    image: string;         // URL to the product image
    species: string;       // Fish species name
    quantity: string;      // Quantity available, e.g., "25 kg"
    price: number;         // Selling price per kg
    marketPrice: number;   // Current average market price per kg
    postingDate: string;   // Display text for when the listing was posted
    expiryCountdown: string; // Display text for time until listing expires
    status: 'Active' | 'Pending' | 'Completed' | 'Drafts';
}

export const listingsData: Listing[] = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1600289091215-5cba896f367d?fit=crop&w=400',
        species: 'Yellowfin Tuna',
        quantity: '25 kg',
        price: 1200,
        marketPrice: 1300,
        postingDate: '2 days ago',
        expiryCountdown: '5 days left',
        status: 'Active',
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1617545745541-6ee8ed52efb2?fit=crop&w=400',
        species: 'Sardine',
        quantity: '200 kg',
        price: 450,
        marketPrice: 500,
        postingDate: '4 days ago',
        expiryCountdown: '3 days left',
        status: 'Active',
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1579731269803-a8bde66c5bc5?fit=crop&w=400',
        species: 'Atlantic Salmon',
        quantity: '30 kg',
        price: 2000,
        marketPrice: 2100,
        postingDate: '1 week ago',
        expiryCountdown: '2 days left',
        status: 'Pending',
    },
    {
        id: '4',
        image: 'https://images.unsplash.com/photo-1581873372790-a0ee45a57ba8?fit=crop&w=400',
        species: 'Mackerel',
        quantity: '150 kg',
        price: 800,
        marketPrice: 850,
        postingDate: '3 days ago',
        expiryCountdown: '7 days left',
        status: 'Completed',
    },
    {
        id: '5',
        image: 'https://images.unsplash.com/photo-1617647301890-2da06607b72f?fit=crop&w=400',
        species: 'Swordfish',
        quantity: '10 kg',
        price: 2500,
        marketPrice: 2600,
        postingDate: '5 days ago',
        expiryCountdown: 'Expired',
        status: 'Drafts',
    }
];
