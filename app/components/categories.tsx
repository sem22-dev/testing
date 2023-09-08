import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Categories() {
  const categories = [
    { id: 'all', name: 'Top Picks' }, // Add "All Categories" option
    { id: 'live-concerts', name: 'Live Concerts' },
    { id: 'sports', name: 'Sports' },
    { id: 'cafe-gigs', name: 'Cafe Gigs' },
    { id: 'theatre-comedy', name: 'Theatre & Comedy' },
    // Add more categories as needed
  ];

  // Separate arrays for each category
  const liveConcertsEvents = [
    {
      id: 'event1',
      title: 'Live Concert Event 1',
      imageSrc: '/event1.png',
      date: 'September 15, 2023',
    },
    // Add more live concerts events...
  ];

  const sportsEvents = [
    {
      id: 'event1',
      title: 'Sports Event 1',
      imageSrc: '/event2.jpg',
      date: 'October 10, 2023',
    },
    // Add more sports events...
  ];

 // Define events for the "Cafe Gigs" category
const cafeGigsEvents = [
  {
    id: 'event1',
    title: 'Cafe Gig Event 1',
    imageSrc: '/event3.jpg',
    date: 'November 5, 2023',
  },
  // Add more Cafe Gigs events...
];

// Define events for the "Theatre & Comedy" category
const theatreComedyEvents = [
  {
    id: 'event1',
    title: 'Theatre & Comedy Event 1',
    imageSrc: '/event1.png',
    date: 'December 12, 2023',
  },
  // Add more Theatre & Comedy events...
];
 

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  // Function to handle category click
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Function to get events based on the selected category
  const getEventsForCategory = (categoryId: string) => {
    switch (categoryId) {
      case 'all':
      return [
        ...liveConcertsEvents,
        ...sportsEvents,
        ...cafeGigsEvents,
        ...theatreComedyEvents, 
      ];
      case 'live-concerts':
        return liveConcertsEvents;
      case 'sports':
        return sportsEvents;
        case 'cafe-gigs':
      return cafeGigsEvents;
    case 'theatre-comedy':
      return theatreComedyEvents;
      default:
        return [];
    }
  };

  const filteredEvents = getEventsForCategory(selectedCategory);

  return (
    <section className="mt-10">
      <h2 className="text-2xl text-center font-semibold mb-6">Discover More Events</h2>

      {/* Category Links */}
      <div className="flex gap-10 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`text-lg font-semibold ${
              selectedCategory === category.id ? 'text-black' : 'text-[#555353]'
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

{/* Event Display */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {filteredEvents.map((event) => (
    <div key={event.id} className="relative rounded-lg overflow-hidden h-[350px] flex flex-col bg-white shadow-md">
      <Image src={event.imageSrc} width={1000} height={1000} alt={event.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 p-4 flex flex-col justify-end   bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
        <h3 className="text-lg font-semibold text-gray-200">{event.title}</h3>
        <p className="text-gray-300 text-sm mt-2">{event.date}</p>
        <Link href="/" className='bg-brand hover:bg-hoverbrand text-white px-4 py-2 rounded-lg mt-4 text-center'>Buy Tickets</Link>
        {/* Add more event details as needed */}
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
