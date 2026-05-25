export const WRITING_MIN_WORDS = 150;
export const WRITING_MAX_WORDS = 200;

export function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function meetsWritingWordTarget(wordCount: number) {
  return wordCount >= WRITING_MIN_WORDS && wordCount <= WRITING_MAX_WORDS;
}

export const EXAMPLE_ANSWER = `Cher Thomas,

J'espère que tu vas bien et que tu profites du début de l'été. Je t'écris car je dois malheureusement te communiquer une mauvaise nouvelle concernant notre projet de voyage à Montréal.

Mon employeur m'a demandé de rester au bureau pendant toute la première semaine de juillet, car nous lançons un nouveau projet stratégique très important pour l'entreprise. C'est une situation tout à fait imprévue, et je suis vraiment navré de devoir modifier nos plans si tardivement. Je sais que tu t'étais organisé pour ma visite et je m'en excuse sincèrement.

À la place, je te propose de reporter ma visite du 15 au 21 juillet. Je pourrais arriver le mercredi soir et repartir le dimanche en fin de journée. J'espère sincèrement que ces nouvelles dates te conviennent et que tu seras disponible pendant cette période.

Pourrais-tu me faire savoir le plus tôt possible si cela t'arrange ? Je suis vraiment impatient de te voir et de passer de bons moments ensemble à Montréal.

Bien amicalement,
Michel`;
