import React from "react";
import TransportCard from "../components/TransportCard";

export default function page() {
  return (
    <div class="min-h-full mb-16 z-10 max-[600px]:mt-22">
      <h1 class="text-3xl mt-32 text-center font-medium max-[600px]:mt-36">Our Vehicles</h1>
      <div class="flex justify-evenly items-center flex-wrap mt-10 max-[600px]:block max-[600px]:p-4">
        <TransportCard
          image="/etios.jpg"
          title="Etios"
          numberOfPassengers ="2 Passengers Max"
          price="@2200/per day"
        />
        <TransportCard
          image="/dzire.webp"
          title="Swift Dzire"
          numberOfPassengers ="2 Passengers Max"
          price="@2200/per day"
        />
        <TransportCard
          image="/amaze.webp"
          title="Amaze"
          numberOfPassengers ="2 Passengers Max"
          price="@2200/per day"
        />
        <TransportCard
          image="/ertiga.webp"
          title="Ertiga"
          numberOfPassengers ="2 Passengers Max"
          price="@2500/per day"
        />
        <TransportCard
          image="/innova.jpg"
          title="Innova"
          numberOfPassengers ="4 Passengers Max"
          price="@3000/per day"
        />
        <TransportCard
          image="/tempo.jpg"
          title="13 Seater Tempo Traveller"
          numberOfPassengers ="13 Passengers Max"
          price="@4200/per day"
        />
        <TransportCard
          image="/tempo.jpg"
          title="17 Seater Tempo Traveller"
          numberOfPassengers ="17 Passengers Max"
          price="@5200/per day"
        />
        <TransportCard
          image="/tempo.jpg"
          title="21 Seater Tempo Traveller"
          numberOfPassengers ="21 Passengers Max"
          price="@6000/per day"
        />
        <TransportCard
          image="/bus.jpg"
          title="23 Seater Bus"
          numberOfPassengers ="23 Passengers Max"
          price="@8000/per day"
        />
        <TransportCard
          image="/bus.jpg"
          title="27 Seater Bus"
          numberOfPassengers ="27 Passengers Max"
          price="@8000/per day"
        />
      </div>
    </div>
  );
}
