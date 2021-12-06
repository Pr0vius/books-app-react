import { useState, useContext, useEffect } from "react";
import { userContext } from "../context/user";
import { searchBookshelve, searchByTitle } from "../services/fetch";
/**
 *
 * @param {String} type allows: "FAVORITES", "PURCHASED", "TOREAD", "FINISHED", "REVIEWED", "RECENTS" ,"EBOOKS", "RECOMENDATIONS" & "SEARCH"
 * @param {String} query For SEARCH type only
 * @returns
 */
// const initialState = [
//   {
//     kind: "",
//     id: "",
//     etag: "",
//     selfLink: "",
//     volumeInfo: {
//       title: "",
//       authors: [""],
//       publisher: "",
//       publishedDate: "",
//       description: "",
//       industryIdentifiers: [
//         {
//           type: "",
//           identifier: "",
//         },
//         {
//           type: "",
//           identifier: "",
//         },
//       ],
//       readingModes: {
//         text: false,
//         image: false,
//       },
//       pageCount: 0,
//       printType: "",
//       categories: [""],
//       averageRating: 0,
//       ratingsCount: 0,
//       maturityRating: "",
//       allowAnonLogging: false,
//       contentVersion: "",
//       panelizationSummary: {
//         containsEpubBubbles: false,
//         containsImageBubbles: false,
//       },
//       imageLinks: {
//         smallThumbnail: "",
//         thumbnail: "",
//       },
//       language: "",
//       previewLink: "",
//       infoLink: "",
//       canonicalVolumeLink: "",
//     },
//     saleInfo: {
//       country: "",
//       saleability: "",
//       isEbook: false,
//       listPrice: {
//         amount: 0,
//         currencyCode: "",
//       },
//       retailPrice: {
//         amount: 0,
//         currencyCode: "",
//       },
//       buyLink: "",
//       offers: [
//         {
//           finskyOfferType: 0,
//           listPrice: {
//             amountInMicros: 0,
//             currencyCode: "",
//           },
//           retailPrice: {
//             amountInMicros: 0,
//             currencyCode: "",
//           },
//         },
//       ],
//     },
//     accessInfo: {
//       country: "",
//       viewability: "",
//       embeddable: false,
//       publicDomain: false,
//       textToSpeechPermission: "",
//       epub: {
//         isAvailable: false,
//       },
//       pdf: {
//         isAvailable: false,
//       },
//       webReaderLink: "",
//       accessViewStatus: "",
//       quoteSharingAllowed: false,
//     },
//     searchInfo: {
//       textSnippet: "",
//     },
//   },
// ];
const useFetch = (type = "", query) => {
  const { user } = useContext(userContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    const action = {
      FAVORITES: () => {
        searchBookshelve(0, fetchOptions).then(data => {
          if (data.totalItems > 0) {
            setBooks(data.items);
          }
        });
      },
      PURCHASED: () => {
        searchBookshelve(1, fetchOptions).then(data => {
          if (data.totalItems > 0) {
            setBooks(data.items);
          }
        });
      },
      TOREAD: () => {
        searchBookshelve(2, fetchOptions).then(data => {
          if (data.totalItems > 0) {
            setBooks(data.items);
          }
        });
      },
      READING: () => {
        searchBookshelve(3, fetchOptions).then(data => {
          if (data.totalItems > 0) {
            setBooks(data.items);
          }
        });
      },
      FINISHED: () => {
        searchBookshelve(4, fetchOptions).then(data => {
          if (data.totalItems > 0) {
            setBooks(data.items);
          }
        });
      },
      REVIEWED: () => {
        searchBookshelve(5, fetchOptions).then(data => {
          if (data.totalItems > 0) {
            setBooks(data.items);
          }
        });
      },
      RECENTS: () => {
        searchBookshelve(6, fetchOptions).then(data => {
          if (data.totalItems > 0) {
            setBooks(data.items);
          }
        });
      },
      EBOOKS: () => {
        searchBookshelve(7, fetchOptions).then(data => {
          if (data.totalItems > 0) {
            setBooks(data.items);
          }
        });
      },
      RECOMENDATIONS: () => {
        searchBookshelve(8, fetchOptions).then(data => {
          if (data.totalItems > 0) {
            setBooks(data.items);
          }
        });
      },
      SEARCH: () => {
        searchByTitle(query, fetchOptions).then(data => {
          if (data.totalItems > 0) {
            setBooks(data.items);
          }
        });
      },
    };

    if (user.auth) {
      action[type]();
    }
  }, [user, type, query]);

  return { books, setBooks };
};

export default useFetch;
