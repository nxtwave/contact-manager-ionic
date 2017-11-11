import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Contact } from './contact.model';

@Injectable()
export class ContactsProvider {

  private contacts = [
    {
      "company": "Schiller, Romaguera and Baumbach",
      "firstName": "Chelsie",
      "lastName": "Kuvalis",
      "street": "9687 Stamm Shoals",
      "city": "Feest stad",
      "state": "VA",
      "zip": "11189",
      "phone": "014-456-6587",
      "email": "Lola.Wilderman15@yahoo.com"
    },
    {
      "company": "Bartell - Bailey",
      "firstName": "Kayla",
      "lastName": "Stamm",
      "street": "9072 Norwood Loop",
      "city": "Dusty fort",
      "state": "IL",
      "zip": "34035",
      "phone": "1-742-165-9886",
      "email": "Alfredo_Purdy@yahoo.com"
    },
    {
      "company": "Denesik - Rohan",
      "firstName": "Claire",
      "lastName": "Cruickshank",
      "street": "034 Kuphal Crossroad",
      "city": "Jacobi view",
      "state": "MN",
      "zip": "20712",
      "phone": "167-468-6804",
      "email": "Wyman_McClure73@gmail.com"
    },
    {
      "company": "Hegmann - Little",
      "firstName": "Sarai",
      "lastName": "Keebler",
      "street": "412 Johann Forge",
      "city": "West Lorenz town",
      "state": "CT",
      "zip": "29041-7648",
      "phone": "480-495-4591 x20525",
      "email": "Jabari32@gmail.com"
    },
    {
      "company": "Smitham, Tillman and Breitenberg",
      "firstName": "Alanis",
      "lastName": "Bernier",
      "street": "3089 German Track",
      "city": "Ralph bury",
      "state": "AK",
      "zip": "94928",
      "phone": "834-413-1677 x9940",
      "email": "Taurean64@gmail.com"
    },
    {
      "company": "Schmidt, Anderson and Boyer",
      "firstName": "Malinda",
      "lastName": "Botsford",
      "street": "50159 Goodwin Fall",
      "city": "West Cary borough",
      "state": "MT",
      "zip": "09903",
      "phone": "(951) 535-7230 x6845",
      "email": "Grace_Keebler@yahoo.com"
    },
    {
      "company": "Howe - Metz",
      "firstName": "Sanford",
      "lastName": "Leuschke",
      "street": "736 Bartell Mill",
      "city": "Botsford land",
      "state": "ME",
      "zip": "40735",
      "phone": "1-509-148-6447 x889",
      "email": "Mallie.Kris40@hotmail.com"
    },
    {
      "company": "Windler - Zieme",
      "firstName": "Manuel",
      "lastName": "Goodwin",
      "street": "72232 Dooley Circle",
      "city": "Boyle borough",
      "state": "DE",
      "zip": "65231",
      "phone": "(431) 705-9910",
      "email": "Marvin.Reinger@yahoo.com"
    },
    {
      "company": "Armstrong, Kshlerin and Schmeler",
      "firstName": "Hyman",
      "lastName": "Muller",
      "street": "54390 Cremin Drive",
      "city": "Lake Neha",
      "state": "DE",
      "zip": "06260",
      "phone": "991-879-9019 x6137",
      "email": "Ernie4@yahoo.com"
    },
    {
      "company": "Beier, Hilpert and Kemmer",
      "firstName": "Katrine",
      "lastName": "Crooks",
      "street": "7498 Medhurst Squares",
      "city": "Gene shire",
      "state": "FL",
      "zip": "95778",
      "phone": "(378) 752-1947",
      "email": "Hershel.Hyatt79@hotmail.com"
    },
    {
      "company": "Jacobi, Heidenreich and Buckridge",
      "firstName": "Nathen",
      "lastName": "Kuvalis",
      "street": "94370 Justyn Flats",
      "city": "Port Felicia berg",
      "state": "ME",
      "zip": "59930",
      "phone": "1-845-907-8647",
      "email": "Letha56@hotmail.com"
    },
    {
      "company": "Rau Inc",
      "firstName": "Kaleb",
      "lastName": "Gibson",
      "street": "9448 Stiedemann Coves",
      "city": "Prosacco view",
      "state": "CT",
      "zip": "46962",
      "phone": "(451) 030-0987 x2010",
      "email": "Adella65@yahoo.com"
    },
    {
      "company": "Weimann - Littel",
      "firstName": "Rasheed",
      "lastName": "Schmidt",
      "street": "938 Considine Spur",
      "city": "West Zora chester",
      "state": "AL",
      "zip": "10826",
      "phone": "395-913-2807",
      "email": "Michelle72@gmail.com"
    },
    {
      "company": "Heidenreich, Ward and Green",
      "firstName": "Dayton",
      "lastName": "Mosciski",
      "street": "23351 Jazmin Inlet",
      "city": "Beatty ville",
      "state": "AL",
      "zip": "44379",
      "phone": "660-795-7221 x379",
      "email": "Dulce.Wyman43@yahoo.com"
    },
    {
      "company": "Morar Group",
      "firstName": "Kenyon",
      "lastName": "Langosh",
      "street": "4552 Hoppe Plaza",
      "city": "Bode bury",
      "state": "DE",
      "zip": "68007-0271",
      "phone": "(660) 897-4224 x71788",
      "email": "Damion_Kassulke@hotmail.com"
    },
    {
      "company": "Stanton LLC",
      "firstName": "Travis",
      "lastName": "Witting",
      "street": "77291 Davis Isle",
      "city": "Boyer furt",
      "state": "SD",
      "zip": "89780",
      "phone": "(648) 712-6961 x6860",
      "email": "Izaiah_Ullrich37@gmail.com"
    },
    {
      "company": "Funk - Lynch",
      "firstName": "Jett",
      "lastName": "Marquardt",
      "street": "33678 Balistreri Mount",
      "city": "East Lorena furt",
      "state": "WY",
      "zip": "29117",
      "phone": "1-901-467-4337",
      "email": "Donna.King6@yahoo.com"
    },
    {
      "company": "Larson LLC",
      "firstName": "Jasper",
      "lastName": "Emard",
      "street": "637 Syble Parkways",
      "city": "Alexandra bury",
      "state": "TX",
      "zip": "52596",
      "phone": "441-551-1007 x79203",
      "email": "Ila_Bauch@hotmail.com"
    },
    {
      "company": "Anderson - Schmeler",
      "firstName": "Daisy",
      "lastName": "Moore",
      "street": "8643 Blanda Greens",
      "city": "North Harvey",
      "state": "MD",
      "zip": "10785",
      "phone": "1-833-861-8424 x347",
      "email": "Annetta.Goyette@gmail.com"
    },
    {
      "company": "Glover - Schaden",
      "firstName": "Casimir",
      "lastName": "Stamm",
      "street": "3045 Fatima Junction",
      "city": "Abelardo ton",
      "state": "ME",
      "zip": "10853-6677",
      "phone": "(567) 800-2777 x277",
      "email": "Favian74@gmail.com"
    },
    {
      "company": "Veum - Gislason",
      "firstName": "Sam",
      "lastName": "Trantow",
      "street": "66123 Bogan Roads",
      "city": "Von shire",
      "state": "NE",
      "zip": "35655-1578",
      "phone": "1-555-487-1757 x44849",
      "email": "Dejon32@yahoo.com"
    },
    {
      "company": "Hegmann Group",
      "firstName": "Julian",
      "lastName": "Walker",
      "street": "514 Stiedemann Shore",
      "city": "Reinger stad",
      "state": "WV",
      "zip": "77684-7755",
      "phone": "668.619.4513 x75783",
      "email": "Lukas.Williamson42@hotmail.com"
    },
    {
      "company": "Cormier and Sons",
      "firstName": "Evan",
      "lastName": "Leffler",
      "street": "620 Lehner Bridge",
      "city": "Nolan side",
      "state": "TX",
      "zip": "83438-5257",
      "phone": "535.983.5217 x1673",
      "email": "Carolyn_Parisian@yahoo.com"
    },
    {
      "company": "Johns - Gibson",
      "firstName": "Devyn",
      "lastName": "Purdy",
      "street": "48785 Kuhic Wall",
      "city": "Lawson furt",
      "state": "NY",
      "zip": "10114-3898",
      "phone": "978-308-8958 x208",
      "email": "Floy93@hotmail.com"
    },
    {
      "company": "Ferry and Sons",
      "firstName": "Everett",
      "lastName": "Schneider",
      "street": "17215 Lisette Rue",
      "city": "East Clemens mouth",
      "state": "NJ",
      "zip": "98399",
      "phone": "520.129.0208 x00099",
      "email": "Victor55@gmail.com"
    },
    {
      "company": "Price - Kilback",
      "firstName": "Liza",
      "lastName": "Macejkovic",
      "street": "51039 Klocko Walk",
      "city": "Port Edgardo port",
      "state": "ND",
      "zip": "21397-0452",
      "phone": "1-497-300-2879 x375",
      "email": "Adan83@yahoo.com"
    },
    {
      "company": "Fisher - Mraz",
      "firstName": "Maria",
      "lastName": "Wintheiser",
      "street": "4192 Brady Ridge",
      "city": "North Marcelina fort",
      "state": "NE",
      "zip": "24487",
      "phone": "639.813.3884",
      "email": "Quentin4@hotmail.com"
    },
    {
      "company": "Hane - Keebler",
      "firstName": "Chyna",
      "lastName": "Kassulke",
      "street": "37931 Schaefer Pike",
      "city": "South Colby stad",
      "state": "NY",
      "zip": "69417",
      "phone": "(933) 109-9353 x0671",
      "email": "Francisca.Brakus57@yahoo.com"
    },
    {
      "company": "Crona Inc",
      "firstName": "Marjory",
      "lastName": "Glover",
      "street": "178 Bednar Lodge",
      "city": "North Conner",
      "state": "WI",
      "zip": "35525-0853",
      "phone": "982-924-9878 x676",
      "email": "Santino_Conroy93@yahoo.com"
    },
    {
      "company": "Harber Inc",
      "firstName": "Holly",
      "lastName": "Kihn",
      "street": "7265 Jacobson Shoal",
      "city": "North Janis chester",
      "state": "WY",
      "zip": "06274-5855",
      "phone": "(251) 765-4326 x5723",
      "email": "Sincere_McLaughlin@gmail.com"
    },
    {
      "company": "Wolff - Lakin",
      "firstName": "Stephany",
      "lastName": "Pfannerstill",
      "street": "6457 Lera Ranch",
      "city": "Port Loma stad",
      "state": "NV",
      "zip": "06730-6040",
      "phone": "(525) 387-6345 x91165",
      "email": "Saul97@gmail.com"
    },
    {
      "company": "Veum, Mertz and Hyatt",
      "firstName": "Danyka",
      "lastName": "Bayer",
      "street": "2558 Bennett Trace",
      "city": "Marvin ton",
      "state": "TX",
      "zip": "43256",
      "phone": "253.695.3578",
      "email": "Laurine_Willms28@gmail.com"
    },
    {
      "company": "Upton, Reilly and Buckridge",
      "firstName": "Curt",
      "lastName": "Koelpin",
      "street": "12455 Shirley Harbor",
      "city": "East Isaiah ton",
      "state": "AZ",
      "zip": "11610-2709",
      "phone": "1-433-733-6800 x379",
      "email": "Milan82@hotmail.com"
    },
    {
      "company": "Reilly, Erdman and Conroy",
      "firstName": "Birdie",
      "lastName": "Baumbach",
      "street": "18708 Cremin Court",
      "city": "West Elliott ville",
      "state": "WI",
      "zip": "09404-7670",
      "phone": "229-454-7604 x320",
      "email": "Carlo_Hodkiewicz@hotmail.com"
    },
    {
      "company": "Kessler, Ortiz and Auer",
      "firstName": "Gia",
      "lastName": "Koepp",
      "street": "9268 Rebeka Plains",
      "city": "East Aileen",
      "state": "NC",
      "zip": "44811-0725",
      "phone": "176-440-1555",
      "email": "Peggie.Larson@yahoo.com"
    },
    {
      "company": "Mosciski - Strosin",
      "firstName": "Holden",
      "lastName": "Rowe",
      "street": "97994 Bauch Club",
      "city": "Nikolaus bury",
      "state": "TX",
      "zip": "52584",
      "phone": "527.330.4796",
      "email": "Loraine_Jast@yahoo.com"
    },
    {
      "company": "Walker - Krajcik",
      "firstName": "Alyce",
      "lastName": "Volkman",
      "street": "499 Ledner Lodge",
      "city": "Lake Kellie",
      "state": "NM",
      "zip": "20361",
      "phone": "906-251-8782",
      "email": "Fabiola54@yahoo.com"
    },
    {
      "company": "Tromp - Stehr",
      "firstName": "Junius",
      "lastName": "Willms",
      "street": "547 Orn Track",
      "city": "Lake Ahmad furt",
      "state": "CT",
      "zip": "43376",
      "phone": "431-447-5803",
      "email": "Leola_Johnson40@gmail.com"
    },
    {
      "company": "Schiller LLC",
      "firstName": "Patsy",
      "lastName": "Rutherford",
      "street": "115 Pedro Crescent",
      "city": "Shemar borough",
      "state": "AR",
      "zip": "41723-1625",
      "phone": "(700) 187-5954",
      "email": "Brandon.Klocko@gmail.com"
    },
    {
      "company": "Tillman - Schmeler",
      "firstName": "Sofia",
      "lastName": "Koelpin",
      "street": "773 Mohr Ranch",
      "city": "Romaguera town",
      "state": "IL",
      "zip": "40316",
      "phone": "(237) 075-6372 x9847",
      "email": "Dangelo65@gmail.com"
    },
    {
      "company": "McClure, Pouros and Hyatt",
      "firstName": "Helmer",
      "lastName": "Gusikowski",
      "street": "023 Alexandrea Shore",
      "city": "Benton berg",
      "state": "NE",
      "zip": "06902",
      "phone": "(804) 508-4743 x993",
      "email": "Norwood.Leuschke43@hotmail.com"
    },
    {
      "company": "Conroy LLC",
      "firstName": "Elmore",
      "lastName": "Schimmel",
      "street": "495 Ellsworth Way",
      "city": "New Werner",
      "state": "FL",
      "zip": "33762",
      "phone": "567.364.7405 x92281",
      "email": "Tiana65@yahoo.com"
    },
    {
      "company": "Quigley - Davis",
      "firstName": "Jace",
      "lastName": "Lynch",
      "street": "514 Howe Freeway",
      "city": "Swift chester",
      "state": "SD",
      "zip": "71249-1299",
      "phone": "277.955.0938",
      "email": "Gunnar.Gutmann@yahoo.com"
    },
    {
      "company": "Sauer - Kassulke",
      "firstName": "Margarette",
      "lastName": "Lemke",
      "street": "207 Delbert Fork",
      "city": "East Hudson port",
      "state": "OR",
      "zip": "68894",
      "phone": "(748) 568-5658 x2310",
      "email": "Gavin45@hotmail.com"
    },
    {
      "company": "Lesch LLC",
      "firstName": "Kristy",
      "lastName": "Maggio",
      "street": "657 Hazel Lodge",
      "city": "North Briana ton",
      "state": "PA",
      "zip": "41024-1836",
      "phone": "1-644-795-5720 x75539",
      "email": "Lily.Kuhic6@gmail.com"
    },
    {
      "company": "Funk and Sons",
      "firstName": "Wilfred",
      "lastName": "Schuster",
      "street": "7828 Raegan Street",
      "city": "Michaela fort",
      "state": "MD",
      "zip": "22498-2223",
      "phone": "891.572.6902 x05966",
      "email": "Carson89@hotmail.com"
    },
    {
      "company": "McDermott Inc",
      "firstName": "Jada",
      "lastName": "Wiegand",
      "street": "8808 Joana Square",
      "city": "Natalie chester",
      "state": "KS",
      "zip": "02196",
      "phone": "351.351.5794 x551",
      "email": "Avis_Yundt@hotmail.com"
    },
    {
      "company": "Maggio - Walter",
      "firstName": "Katrine",
      "lastName": "Funk",
      "street": "7982 Hugh Bridge",
      "city": "Ayla stad",
      "state": "RI",
      "zip": "14522",
      "phone": "102-824-3269 x731",
      "email": "Ruben.Will@gmail.com"
    },
    {
      "company": "Lebsack, Morar and Kautzer",
      "firstName": "Chris",
      "lastName": "Becker",
      "street": "70076 Rowan Center",
      "city": "Jaron mouth",
      "state": "KS",
      "zip": "69608",
      "phone": "(827) 332-3586 x768",
      "email": "Shany.Kozey@gmail.com"
    },
    {
      "company": "Langosh, Welch and Hamill",
      "firstName": "Mariam",
      "lastName": "Rempel",
      "street": "9730 Windler Court",
      "city": "West Keshawn",
      "state": "WY",
      "zip": "14992-1712",
      "phone": "1-357-708-5528 x95944",
      "email": "Valentine_Prohaska@yahoo.com"
    },
    {
      "company": "Feeney - MacGyver",
      "firstName": "Lexie",
      "lastName": "Kautzer",
      "street": "23737 Albin Pine",
      "city": "Lake Geraldine side",
      "state": "ME",
      "zip": "44486",
      "phone": "(266) 079-3132 x473",
      "email": "Edmund.Gerhold@hotmail.com"
    },
    {
      "company": "Windler Inc",
      "firstName": "Lyric",
      "lastName": "Torphy",
      "street": "50675 Cassin Curve",
      "city": "Greenfelder borough",
      "state": "WV",
      "zip": "75560-0077",
      "phone": "640-313-0897 x3766",
      "email": "Murray99@hotmail.com"
    },
    {
      "company": "Kohler, Reichel and Nolan",
      "firstName": "Nasir",
      "lastName": "Reinger",
      "street": "1130 Lucius Valley",
      "city": "North Hayley",
      "state": "WA",
      "zip": "93946",
      "phone": "(472) 759-9359",
      "email": "Dawn30@yahoo.com"
    },
    {
      "company": "Gleichner, Hagenes and Wolf",
      "firstName": "Giovanny",
      "lastName": "Murphy",
      "street": "0030 Nolan Crescent",
      "city": "West Hank",
      "state": "NY",
      "zip": "09171-4674",
      "phone": "1-491-367-7702",
      "email": "Abbigail65@hotmail.com"
    },
    {
      "company": "Lemke - Marvin",
      "firstName": "Zena",
      "lastName": "Greenfelder",
      "street": "8730 Balistreri Brooks",
      "city": "Bradtke ville",
      "state": "WI",
      "zip": "64629-4746",
      "phone": "(132) 544-5415 x09198",
      "email": "Robert_Crooks@hotmail.com"
    },
    {
      "company": "Emard, O'Reilly and Yundt",
      "firstName": "Rosalee",
      "lastName": "Parker",
      "street": "4324 Rosenbaum Expressway",
      "city": "Kemmer ton",
      "state": "SD",
      "zip": "55469",
      "phone": "088-270-7758 x970",
      "email": "Tito_Marquardt@hotmail.com"
    },
    {
      "company": "Christiansen, Armstrong and Gerhold",
      "firstName": "Ozella",
      "lastName": "O'Kon",
      "street": "877 Ward Grove",
      "city": "Kaela haven",
      "state": "ID",
      "zip": "43378-6741",
      "phone": "(493) 616-0767 x463",
      "email": "Michele.Bahringer13@hotmail.com"
    },
    {
      "company": "Price, Tremblay and Nienow",
      "firstName": "Hugh",
      "lastName": "Pollich",
      "street": "7562 Sipes Street",
      "city": "Lemke borough",
      "state": "AZ",
      "zip": "35725-8699",
      "phone": "986.352.6813",
      "email": "Kaylee93@yahoo.com"
    },
    {
      "company": "O'Connell Inc",
      "firstName": "Ernie",
      "lastName": "Bradtke",
      "street": "1247 Ben Ranch",
      "city": "Elouise burgh",
      "state": "VA",
      "zip": "50427-8793",
      "phone": "(537) 617-6646 x20339",
      "email": "Graham15@hotmail.com"
    },
    {
      "company": "Wunsch LLC",
      "firstName": "Ewell",
      "lastName": "O'Reilly",
      "street": "28017 Ruecker Islands",
      "city": "North Serenity",
      "state": "AK",
      "zip": "77718",
      "phone": "1-813-683-1119 x199",
      "email": "Berry.Bednar21@hotmail.com"
    },
    {
      "company": "Bernhard - Altenwerth",
      "firstName": "Mya",
      "lastName": "Corkery",
      "street": "6838 Bosco Locks",
      "city": "Sauer ville",
      "state": "NH",
      "zip": "72941",
      "phone": "1-093-707-0158 x42672",
      "email": "Steve48@hotmail.com"
    },
    {
      "company": "Smitham and Sons",
      "firstName": "Lou",
      "lastName": "Funk",
      "street": "77432 Hartmann Crossing",
      "city": "Walker stad",
      "state": "MD",
      "zip": "92049-9465",
      "phone": "(022) 664-8477 x41357",
      "email": "Gabriel67@hotmail.com"
    },
    {
      "company": "Ruecker, Walter and O'Kon",
      "firstName": "Alanis",
      "lastName": "Morar",
      "street": "27893 Cassie Well",
      "city": "Lake Steve berg",
      "state": "KS",
      "zip": "95824-8678",
      "phone": "(569) 352-4789",
      "email": "Shane.Greenholt49@hotmail.com"
    },
    {
      "company": "Schuster, Lubowitz and Bashirian",
      "firstName": "Tabitha",
      "lastName": "Smitham",
      "street": "65351 Mohamed Islands",
      "city": "East Roosevelt land",
      "state": "NH",
      "zip": "16481",
      "phone": "785.451.0261 x54614",
      "email": "Shanel98@gmail.com"
    },
    {
      "company": "Halvorson, Lockman and Bins",
      "firstName": "Kole",
      "lastName": "Hamill",
      "street": "9354 Wilderman Walks",
      "city": "Alison ton",
      "state": "NY",
      "zip": "92977-0042",
      "phone": "922.624.9608 x758",
      "email": "Lois.Harber68@gmail.com"
    },
    {
      "company": "Hegmann Inc",
      "firstName": "Brooklyn",
      "lastName": "Reichel",
      "street": "6367 Emard Meadows",
      "city": "Port Eldora chester",
      "state": "NH",
      "zip": "45578-0192",
      "phone": "337-953-9761 x03891",
      "email": "Mackenzie61@hotmail.com"
    },
    {
      "company": "Hyatt LLC",
      "firstName": "Demario",
      "lastName": "McClure",
      "street": "45738 Hahn Crossing",
      "city": "Prosacco mouth",
      "state": "KY",
      "zip": "01644",
      "phone": "136.422.8261",
      "email": "Arely26@yahoo.com"
    },
    {
      "company": "Schultz, O'Conner and Corwin",
      "firstName": "Taya",
      "lastName": "Bernier",
      "street": "291 Hilpert Mills",
      "city": "Pouros town",
      "state": "AL",
      "zip": "18020-4545",
      "phone": "(706) 907-1540 x8233",
      "email": "Amira_Rolfson51@yahoo.com"
    },
    {
      "company": "Hartmann - Dicki",
      "firstName": "Kristy",
      "lastName": "Rolfson",
      "street": "9662 Hackett Square",
      "city": "Streich fort",
      "state": "PA",
      "zip": "55071",
      "phone": "1-021-838-2779",
      "email": "Bonita.Considine@gmail.com"
    },
    {
      "company": "Pouros, Purdy and Parisian",
      "firstName": "Duane",
      "lastName": "Sporer",
      "street": "886 Connelly Garden",
      "city": "Maggio port",
      "state": "HI",
      "zip": "25067-8741",
      "phone": "1-582-834-9334 x35517",
      "email": "Lennie.Von@hotmail.com"
    },
    {
      "company": "Block and Sons",
      "firstName": "Ephraim",
      "lastName": "Rice",
      "street": "188 Tremblay Bypass",
      "city": "South Everardo",
      "state": "MT",
      "zip": "00644",
      "phone": "1-569-299-4448",
      "email": "Amina_Wolf@hotmail.com"
    },
    {
      "company": "Bayer Group",
      "firstName": "Jaylon",
      "lastName": "King",
      "street": "943 Ayla Crest",
      "city": "West Waino",
      "state": "IA",
      "zip": "95195-8923",
      "phone": "1-186-794-3464 x279",
      "email": "Samanta_Becker@hotmail.com"
    },
    {
      "company": "Prosacco - Graham",
      "firstName": "Lew",
      "lastName": "Kerluke",
      "street": "808 Jacobson Pass",
      "city": "West Gideon",
      "state": "CT",
      "zip": "72322",
      "phone": "1-614-804-9669 x26854",
      "email": "Harmony87@yahoo.com"
    },
    {
      "company": "Little, Borer and Kuphal",
      "firstName": "Howell",
      "lastName": "Windler",
      "street": "73450 Lelah Plaza",
      "city": "Wilton chester",
      "state": "HI",
      "zip": "62358-3348",
      "phone": "277-228-3684 x427",
      "email": "Dorothy.Parisian54@hotmail.com"
    },
    {
      "company": "Nolan, Gleason and Gottlieb",
      "firstName": "Hilbert",
      "lastName": "Mertz",
      "street": "051 Crist Crescent",
      "city": "North Ava",
      "state": "SC",
      "zip": "95048-3056",
      "phone": "342-317-3037 x0127",
      "email": "Mike47@hotmail.com"
    },
    {
      "company": "Denesik LLC",
      "firstName": "Grady",
      "lastName": "Fritsch",
      "street": "937 Armani Throughway",
      "city": "Esperanza fort",
      "state": "AL",
      "zip": "23229-3554",
      "phone": "867-807-3487 x3883",
      "email": "Krystina93@yahoo.com"
    },
    {
      "company": "Gulgowski, Bogan and Halvorson",
      "firstName": "Zechariah",
      "lastName": "Zulauf",
      "street": "96352 Heathcote Plains",
      "city": "Helena chester",
      "state": "IN",
      "zip": "12337",
      "phone": "060.310.9658",
      "email": "Janick.Koss@hotmail.com"
    },
    {
      "company": "Gibson - Swift",
      "firstName": "Wilton",
      "lastName": "Runte",
      "street": "21957 Kimberly Keys",
      "city": "New Davonte view",
      "state": "AZ",
      "zip": "69175",
      "phone": "155.125.6938",
      "email": "Ulises_Towne@gmail.com"
    },
    {
      "company": "Shanahan and Sons",
      "firstName": "Earlene",
      "lastName": "Reichel",
      "street": "839 Legros Mount",
      "city": "Andreane ville",
      "state": "WA",
      "zip": "40001-5544",
      "phone": "612-861-4624 x5285",
      "email": "Aglae75@gmail.com"
    },
    {
      "company": "Turcotte, Nikolaus and Mayert",
      "firstName": "Judd",
      "lastName": "Dibbert",
      "street": "5420 Winston Fork",
      "city": "Port Alison ville",
      "state": "AZ",
      "zip": "54678",
      "phone": "931-647-9827 x9854",
      "email": "Hyman_Frami@yahoo.com"
    },
    {
      "company": "Rosenbaum - Renner",
      "firstName": "Arthur",
      "lastName": "Ullrich",
      "street": "28330 Madelyn Square",
      "city": "Prohaska fort",
      "state": "IA",
      "zip": "50347-1482",
      "phone": "125-513-4328",
      "email": "Rigoberto.Bartoletti@hotmail.com"
    },
    {
      "company": "Collier - Waelchi",
      "firstName": "Kiley",
      "lastName": "Hackett",
      "street": "51669 Meggie Forges",
      "city": "Faustino fort",
      "state": "IA",
      "zip": "58774",
      "phone": "(268) 292-0860",
      "email": "Newell_Botsford15@yahoo.com"
    },
    {
      "company": "Jacobson - Rippin",
      "firstName": "Tabitha",
      "lastName": "Willms",
      "street": "3854 Reichel Corner",
      "city": "Port Brando",
      "state": "OH",
      "zip": "18721",
      "phone": "714.116.6608 x94409",
      "email": "Muhammad9@gmail.com"
    },
    {
      "company": "Nikolaus, Moen and O'Kon",
      "firstName": "Bertrand",
      "lastName": "Hand",
      "street": "5165 Hilll Mountains",
      "city": "South Ansley",
      "state": "ID",
      "zip": "97213",
      "phone": "(709) 069-4196 x4332",
      "email": "Omer_Mills@gmail.com"
    },
    {
      "company": "Schamberger, Adams and Bode",
      "firstName": "Edna",
      "lastName": "Rodriguez",
      "street": "81216 Cassin Crossing",
      "city": "John fort",
      "state": "AZ",
      "zip": "06787",
      "phone": "1-731-519-2564",
      "email": "Noah36@yahoo.com"
    },
    {
      "company": "Donnelly, Swaniawski and Harber",
      "firstName": "Jamar",
      "lastName": "Hagenes",
      "street": "3771 Keeling Summit",
      "city": "Terry berg",
      "state": "NJ",
      "zip": "74864-8737",
      "phone": "761.703.6928 x67374",
      "email": "Pearl.Herman20@hotmail.com"
    },
    {
      "company": "Weber - Stanton",
      "firstName": "Quincy",
      "lastName": "Grady",
      "street": "73193 Champlin Neck",
      "city": "Schoen fort",
      "state": "DE",
      "zip": "62466-7331",
      "phone": "850.562.5508 x73571",
      "email": "Toby2@yahoo.com"
    },
    {
      "company": "Wunsch LLC",
      "firstName": "Bertram",
      "lastName": "Bergnaum",
      "street": "94116 Arthur Drive",
      "city": "West Frederic",
      "state": "MI",
      "zip": "81801-7610",
      "phone": "(210) 068-2550",
      "email": "Alba.Dach@yahoo.com"
    },
    {
      "company": "Beer and Sons",
      "firstName": "Jana",
      "lastName": "Auer",
      "street": "7533 Kirlin Centers",
      "city": "North Trystan shire",
      "state": "AR",
      "zip": "76194",
      "phone": "660.599.6475",
      "email": "Ned_Graham@yahoo.com"
    },
    {
      "company": "MacGyver LLC",
      "firstName": "April",
      "lastName": "Heller",
      "street": "7960 Gregory Manor",
      "city": "South Christ",
      "state": "IL",
      "zip": "29939",
      "phone": "412.364.5056",
      "email": "Eveline.Kerluke62@gmail.com"
    },
    {
      "company": "Price - Kulas",
      "firstName": "Casandra",
      "lastName": "Sauer",
      "street": "727 Toy Wall",
      "city": "Coty side",
      "state": "NV",
      "zip": "71151-4170",
      "phone": "915-825-5929 x268",
      "email": "Meagan91@yahoo.com"
    },
    {
      "company": "Rutherford, Botsford and Mayer",
      "firstName": "Karley",
      "lastName": "Morar",
      "street": "3923 Lowell Key",
      "city": "Elise side",
      "state": "IA",
      "zip": "34349",
      "phone": "182.545.2286",
      "email": "Lia66@hotmail.com"
    },
    {
      "company": "Wuckert, Macejkovic and Swaniawski",
      "firstName": "Selina",
      "lastName": "Heaney",
      "street": "73202 Deckow Plains",
      "city": "North Stella mouth",
      "state": "MO",
      "zip": "96718-5632",
      "phone": "805.186.4130 x52066",
      "email": "Cullen15@hotmail.com"
    },
    {
      "company": "Zboncak and Sons",
      "firstName": "Andrew",
      "lastName": "Walker",
      "street": "810 Watsica Center",
      "city": "Reichert burgh",
      "state": "OR",
      "zip": "97508",
      "phone": "893-769-9766 x425",
      "email": "Gwendolyn_DAmore@yahoo.com"
    },
    {
      "company": "Kutch, Bergstrom and Harvey",
      "firstName": "Raina",
      "lastName": "Bins",
      "street": "92484 Enid Squares",
      "city": "Tianna berg",
      "state": "NJ",
      "zip": "16978",
      "phone": "(223) 220-1260 x415",
      "email": "Felicia_Bode0@yahoo.com"
    },
    {
      "company": "Renner - Mitchell",
      "firstName": "Danyka",
      "lastName": "Quigley",
      "street": "60280 Pearline Turnpike",
      "city": "New Frank port",
      "state": "IN",
      "zip": "36182-4740",
      "phone": "118.227.7678 x61191",
      "email": "Ward63@gmail.com"
    },
    {
      "company": "Nienow - Rogahn",
      "firstName": "Lea",
      "lastName": "Gulgowski",
      "street": "4137 Russel Island",
      "city": "Drake mouth",
      "state": "ID",
      "zip": "87173",
      "phone": "985-265-6955 x081",
      "email": "Abe3@hotmail.com"
    },
    {
      "company": "O'Conner, Crist and Boehm",
      "firstName": "Skyla",
      "lastName": "Gutmann",
      "street": "4832 Wuckert Villages",
      "city": "South Sibyl mouth",
      "state": "ME",
      "zip": "55256-9930",
      "phone": "946.349.2552 x75264",
      "email": "Orland82@yahoo.com"
    },
    {
      "company": "Nikolaus, Lebsack and Abshire",
      "firstName": "Deanna",
      "lastName": "Rippin",
      "street": "28300 Howe Viaduct",
      "city": "Lake Ezekiel",
      "state": "WA",
      "zip": "91981-6001",
      "phone": "693-662-5009 x6245",
      "email": "Amy_Auer@hotmail.com"
    },
    {
      "company": "Walter - Pagac",
      "firstName": "Noel",
      "lastName": "O'Connell",
      "street": "330 Lindsay Rapids",
      "city": "Lake Yasmin",
      "state": "NH",
      "zip": "73458-7875",
      "phone": "972.426.4408 x61166",
      "email": "Jaeden76@hotmail.com"
    }
  ];

  /**
   * Class constructor
   * @param {HttpClient} http
   */
  constructor(public http: HttpClient) {}

  /**
   * Retrieves contact-list list
   * @returns {Observable<Contact[]>}
   */
  getContacts(): Observable<Contact[]> {
    return Observable.of(this.contacts);
  }

}
