import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  clips: defineTable({
    code: v.number(),
    text: v.string(),
  }),
})
