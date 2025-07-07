import { pgTable, text, serial, real, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  price: real("price").notNull(),
  icon: text("icon").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export const updateProductSchema = createInsertSchema(products).omit({
  id: true,
}).partial();

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type UpdateProduct = z.infer<typeof updateProductSchema>;
