"use client";

import { Badge, Button, Card, CardBody, CardFooter, Chip } from "@heroui/react";
import { CalendarDays, Heart, MapPin, Star, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EventCard = () => {
  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
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
          className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-600 p-2 text-white cursor-pointer"
          startContent={<Star size={18} />}
          size="sm"
        >
          Featured
        </Chip>
        <Button
          isIconOnly
          size="sm"
          className="absolute top-2 left-2 bg-white/80 hover:bg-white"
        >
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
        </Button>
      </div>
      <CardBody className="p-4 mb-2">
        <div className="flex items-center justify-between">
          <Chip size="sm" variant="bordered">
            Musik
          </Chip>
          <div className="flex items-center gap-1 text-sm">
            <Star size={18} className="text-yellow-400 fill-yellow-400" />
            4.8 (248)
          </div>
        </div>
        <h2 className="text-lg font-bold line-clamp-1 my-2 ">
          Festival Musik Hut Djakarta 2025
        </h2>
        <div className="space-y-1 text-foreground-500">
          <div className="flex items-center text-sm gap-2">
            <CalendarDays size={18} />
            7/15/2023 at 4:00 PM
          </div>
          <div className="flex items-center text-sm gap-2">
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
    </Card>
  );
};

function Footer() {
  return (
    <CardFooter className="p-4 pt-0">
      <Link
        href="/events/1"
        className="w-full bg-blue-600 text-white font-semibold p-2 rounded-md flex items-center justify-center"
      >
        <Ticket size={24} className="mr-2" />
        <p>Book Tickets</p>
      </Link>
    </CardFooter>
  );
}

export default EventCard;
