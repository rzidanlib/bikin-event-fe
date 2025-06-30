'use client';

import { Button, Card, CardBody, CardFooter, Chip } from '@heroui/react';
import { CalendarDays, Heart, MapPin, Star, Ticket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const EventCard = () => {
  return (
    <Card
      className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
      shadow="sm"
      radius="sm"
    >
      <div className="relative">
        <Image
          src="/banners/banner-1.jpg"
          alt="banner"
          width={440}
          height={200}
          className="aspect-video w-full object-cover"
        />
        <Chip
          className="absolute right-2 top-2 cursor-pointer bg-yellow-500 p-2 text-white hover:bg-yellow-600"
          startContent={<Star size={18} />}
          size="sm"
        >
          Featured
        </Chip>
        <Button
          isIconOnly
          size="sm"
          className="absolute left-2 top-2 bg-white/80 hover:bg-white"
        >
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
        </Button>
      </div>
      <CardBody className="mb-2 p-4">
        <div className="flex items-center justify-between">
          <Chip size="sm" variant="bordered">
            Musik
          </Chip>
          <div className="flex items-center gap-1 text-sm">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
            4.8 (248)
          </div>
        </div>
        <h2 className="my-2 line-clamp-1 text-lg font-bold">
          Festival Musik Hut Djakarta 2025
        </h2>
        <div className="space-y-1 text-foreground-500">
          <div className="flex items-center gap-2 text-sm">
            <CalendarDays size={18} />
            7/15/2023 at 4:00 PM
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={18} />
            Lapangan Banteng Jakarta
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Rp. 120.000</p>
            <p className="text-sm text-foreground-500">100 Tickets Left</p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="p-4 pt-0">
        <Link
          href="/events/1"
          className="flex w-full items-center justify-center rounded-md bg-blue-600 p-2 font-semibold text-white"
        >
          <Ticket size={24} className="mr-2" />
          <p>Book Tickets</p>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
