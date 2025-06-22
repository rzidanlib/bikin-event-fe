import EventCard from "@/components/Card/EventCard";
import Hero from "@/components/LandingPage/Hero";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-8">
        <Hero />
      </section>

      <section className="py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">
              Featured Events
            </h2>
            <p className="text-foreground-500 mt-2">
              Discover our most popular upcoming events.
            </p>
          </div>
          <Link href="/events" className="mt-4 md:mt-0">
            <Button variant="bordered">View All Events</Button>
          </Link>
        </div>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 mb-8">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
    </>
  );
}
