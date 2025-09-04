import { db } from "@/lib/prisma";

export const getRestaurantBySlug = async (slug) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      slug,
    },
  });
  return restaurant;
};
