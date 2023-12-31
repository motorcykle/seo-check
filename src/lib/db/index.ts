import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { users } from './schema';
import { eq } from 'drizzle-orm';
import { currentUser } from '@clerk/nextjs';

export const db = drizzle(sql)

export const getFreeTries = async () => {
  const user = await currentUser();

  const selectResult = await db.select().from(users).where(eq(users.userId, user?.id!));
  return selectResult
};

export const updateFreeTries = async () => {
  const user = await currentUser();
  const [{ freeTries }] = await getFreeTries()

  let updatedTries: number;

  if (freeTries && freeTries > 0) updatedTries = freeTries - 1

  const updatedFreeTries: { freeTries: any | number }[] = await db.update(users)
    .set({ freeTries: updatedTries! })
    .where(eq(users.userId, user?.id!))
    .returning({ freeTries: users.freeTries });

  return updatedFreeTries
}