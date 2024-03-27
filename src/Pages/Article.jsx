const Article = () => {
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="/public/Harry-Potter-2023-Paperbacks-Assets_Purple.jpg"
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                Exploring the Enduring Magic of Harry Potter: How J.K. Rowling's
                Creation Continues to Enchant Generations
              </a>
              <p className="text-xs text-gray-600">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  J.K. Rowling's
                </a>
              </p>
            </div>
            <div className="text-gray-800">
              <p>
                In the realm of literature, few phenomena have captivated
                readers worldwide with the same fervor as the Harry Potter
                series. J.K. Rowling's magical world of Hogwarts, Quidditch, and
                spellbinding adventures has transcended generations, leaving an
                indelible mark on popular culture. More than two decades since
                the release of the first book, "Harry Potter and the
                Philosopher's Stone" (or "Sorcerer's Stone" in the U.S.), the
                enchantment shows no sign of waning. The success of Harry Potter
                goes far beyond mere book sales; it's a cultural phenomenon that
                has spawned movies, merchandise, theme parks, and a dedicated
                fan base known as "Potterheads." But what is it about this tale
                of a young wizard that continues to resonate with audiences
                around the globe? At its core, Harry Potter taps into universal
                themes of friendship, bravery, and the eternal struggle between
                good and evil. Rowling's meticulously crafted world is populated
                with characters who grapple with relatable challenges, despite
                the fantastical setting. From Harry's journey of self-discovery
                to Hermione's unwavering loyalty and Ron's steadfast friendship,
                readers find themselves drawn to characters who mirror their own
                struggles and triumphs. Moreover, the intricacy of Rowling's
                wizarding world is nothing short of breathtaking. With its
                elaborate history, magical creatures, and complex system of
                spells, potions, and enchantments, Hogwarts feels like a place
                that exists just beyond the boundaries of our mundane reality.
                Readers of all ages find themselves yearning to step through the
                hidden entrance to Platform 9¾ and embark on their own magical
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 dark:text-gray-800">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
            <div className="flex space-x-3">
              <button
                type="button"
                title="Rate 1 stars"
                aria-label="Rate 1 stars"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 text-yellow-700"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Rate 2 stars"
                aria-label="Rate 2 stars"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 text-yellow-700"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Rate 3 stars"
                aria-label="Rate 3 stars"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 text-yellow-700"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Rate 4 stars"
                aria-label="Rate 4 stars"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 text-yellow-700"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Rate 5 stars"
                aria-label="Rate 5 stars"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 text-gray-400"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <textarea
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none text-gray-800 bg-gray-50"
            ></textarea>
            <button
              type="button"
              className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-[#23BE0A] "
            >
              Leave feedback
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-sm text-gray-600"
          >
            Maybe later
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
