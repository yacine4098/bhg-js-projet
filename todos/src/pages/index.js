import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from './card'


const inter = Inter({ subsets: ['latin'] })
const cards = [
  {
    title: 'Card 1',
    description: 'This is the first card.',
    imageUrl: 'https://placekitten.com/300/200', // Replace with your image URL
  },

  // Add more cards as needed
];

export default function Home() {
  return (
    <main>

      <div>
      <Card/>

      </div>
    </main>
  )
}
