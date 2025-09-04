import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import RestaurantHeader from "./components/RestaurantHeader";

const isConsumptionMethodValid = (consumptionMethod) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
};

const ReataurantMenuPage = async ({ params, searchParams }) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }

  const restaurant = await db.restaurant.findUnique({
    where: {
      slug,
    },
  });
  if (!restaurant) {
    return notFound();
  }

  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
    </div>
  );
};

export default ReataurantMenuPage;
