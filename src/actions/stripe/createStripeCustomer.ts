"use server";

import Stripe from "stripe";
import { stripe } from "@/utils/lib/stripe.utils";

export const createStripeCustomer = async (
  email: string,
  name: string,
): Promise<Stripe.Customer> => {
  return await stripe.customers.create({
    email: email.toLowerCase(),
    name: name,
  });
};
