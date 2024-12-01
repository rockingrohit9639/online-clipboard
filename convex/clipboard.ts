import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const createNewClip = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    let code = generateClipCode()

    /* I know it is not the best approach, but it does not matter for now. */
    while (true) {
      const existingCodeClips = await ctx.db
        .query('clips')
        .filter((q) => q.eq(q.field('code'), code))
        .collect()

      if (existingCodeClips.length === 0) {
        break
      }

      code = generateClipCode()
    }

    const id = await ctx.db.insert('clips', { code, ...args })
    return { id, code }
  },
})

export const getClipByCode = query({
  args: { code: v.number() },
  handler: async (ctx, args) => {
    const clip = await ctx.db
      .query('clips')
      .filter((q) => q.eq(q.field('code'), args.code))
      .collect()

    return clip.length ? clip[0] : null
  },
})

/****** Utility Functions ******/
export function generateClipCode() {
  return Math.floor(100000 + Math.random() * 999999)
}
