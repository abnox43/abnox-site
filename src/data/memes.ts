export type MemeId = 'compiles' | 'arch' | 'atom'

export type Meme = {
  id: MemeId
  gif: string
  still: string
  width: number
  height: number
}

/**
 * Small local GIFs, generated for this site (see scripts/generate-assets.py).
 * `still` is used when prefers-reduced-motion is on and as an error fallback.
 */
export const memes: Meme[] = [
  {
    id: 'compiles',
    gif: 'media/memes/compiles.gif',
    still: 'media/memes/compiles.png',
    width: 360,
    height: 220,
  },
  {
    id: 'arch',
    gif: 'media/memes/arch.gif',
    still: 'media/memes/arch.png',
    width: 360,
    height: 220,
  },
  {
    id: 'atom',
    gif: 'media/memes/atom.gif',
    still: 'media/memes/atom.png',
    width: 360,
    height: 220,
  },
]
