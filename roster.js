function Player(jersey, position, first, last, height, weight, b, t, college, grade, hometown) {
	this.jersey   = jersey
	this.position = position
	this.first    = first
	this.last     = last
	this.height   = height
	this.weight   = weight
	this.dex      = {'b':b,'t':t}
	this.college  = college
	this.grade    = grade
	this.hometown = hometown
}

var BAL = [
	new Player(31,'CF','Cedric','Mullins'),
	new Player( 6,'1B','Ryan','Mountcastle'),
	new Player(25,'DH','Anthony','Santander'),
	new Player(21,'LF','Austin','Hays'),
	new Player(35,'C' ,'Adley','Rutschman'),
	new Player(12,'2B','Rougned','Odor'),
	new Player(41,'3B','Tyler','Nevin'),
	new Player(26,'RF','Ryan','McKenna'),
	new Player( 3,'SS','Jorge','Mateo'),
]

var BOS = [
	new Player(39,'CF','Kevin','Kiermaier'),
	new Player(13,'LF','Manuel','Margot'),
	new Player( 2,'3B','Yandy','D&#237;az'),
	new Player(26,'1B','Ji-Man','Choi'),
	new Player(56,'DH','Randy','Arozarena'),
	new Player(21,'C' ,'Francisco','Mej237a'),
	new Player(35,'RF','Brett','Phillips'),
	new Player( 7,'2B','Vidal','Bruj225n'),
	new Player( 6,'SS','Taylor','Walls'),
]

R = 'right'
L = 'left'
S = 'ambidextrous'

var Keene = [
	null,
	new Player( 1,'P' ,'Zachary', 'Davidson',   71, 187, L, L, 'Radford U',                       4, 'Hartsburg, MO'),
	new Player( 2,'I' ,'Zack',    'Whitacre',   70, 185, R, R, 'Radford U',                       3, 'Ridgeley, WV'),
	new Player( 3,'I' ,'Tony',    'Santa Maria',71, 185, R, R, 'Rutgers U New Brunswick',         2, 'Absecon, NJ'),
	new Player( 4,'P' ,'Riley',   'Skeen',      72, 175, R, R, 'Florida Southwestern State',      2, 'Pompano Beach, FL'),
	new Player( 5,'I' ,'Paxton',  'Tomaini',    71, 185, S, R, 'Florida Southwestern State',      3, 'Crawfordville, FL'),
	new Player( 6,'P' ,'Parker',  'Murphy',     70, 195, L, L, 'Jacksonville U',                  4, 'Fernandina Beach, FL'),
	new Player( 7,'P' ,'Matthew', 'Buchanan',   72, 185, L, L, 'Virginia (U of)',                 2, 'Lebanon, VA'),
	new Player( 8,'P' ,'Caden',   'Leonard',    77, 205, R, R, 'Kent St U',                       2, 'Mokena, IL'),
	null,
	new Player(10,'P' ,'William', 'Flanagan',   74, 207, R, R, 'Radford U',                       4, 'North Chesterfield, VA'),
	new Player(11,'P' ,'Garrett', 'French',     75, 205, R, R, 'Rutgers U New Brunswick',         4, 'Red Bank, NJ'),
	new Player(12,'P' ,'Alex',    'Greene',     74, 200, R, R, 'Virginia (U of)',                 3, 'Edgewater, MD'),
	new Player(13,'I' ,'Dan',     'Covino',     70, 190, L, R, 'Central Connecticut St U',        4, 'Weston, CT'),
	new Player(14,'O' ,'Matt',    'Almonte',    72, 200, R, R, 'Pace U',                          4, 'New Rochelle, NY'),
	null,
	new Player(16,'P' ,'Michael', 'Ross',       75, 205, R, R, 'Samford U',                       3, 'Lakeland, FL'),
	new Player(17,'C' ,'Colin',   'Wetterau',   73, 205, L, R, 'St Johns U',                      4, 'Medford, NJ'),
	new Player(18,'I' ,'Brandon', 'Anderson',   76, 200, L, R, 'Louisville (U of)',               2, 'Richmond, KY'),
	new Player(19,'O' ,'Lucas',   'Costello',   74, 195, R, R, 'Wake Forest U',                   3, 'Miami, FL'),
	new Player(20,'I' ,'Jackson', 'Ross',       72, 200, R, R, 'Florida Atlantic U',              4, 'Lakeland, FL'),
	new Player(21,'C' ,'Jake',    'Berg',       71, 195, L, R, 'Jacksonville U',                  3, 'Green Bay, WI'),
	new Player(22,'I' ,'James',   'Broderick',  72, 190, L, R, 'Wake Forest U',                   2, 'Wellesley, MA'),
	new Player(23,'P' ,'Robert',  'Wegielnik',  71, 195, R, R, 'Florida Atlantic U',              4, 'Fort Myers, FL'),
	new Player(24,'I' ,'Garrett', 'Rice',       74, 230, R, R, 'Missouri Columbia (U of)',        2, 'Willard, MO'),
	null,
	null,
	null,
	new Player(28,'P' ,'Adam',    'Dowler',     76, 215, L, L, 'Louisville (U of)',               4, 'Aurora, IL'),
	new Player(29,'O' ,'Carter',  'Mathison',   73, 210, L, L, 'Indiana U',                       2, 'Fort Wayne, IN'),
	new Player(30,'O' ,'Tyler',   'McKenzie',   73, 180, R, R, 'Vanderbilt U',                    4, 'Loxahatchee, FL'),
	new Player(31,'P' ,'Noah',    'Dean',       74, 200, L, L, 'Old Dominion U',                  4, 'Little Egg Harbor, NJ'),
	new Player(32,'C' ,'Nate',    'Darwin',     77, 225, R, R, 'LaGrange Col',                    4, 'Keene, NH'),
	new Player(33,'I' ,'Jaden',   'Brown',      73, 195, R, R, 'Texas Arlington (U of)',          2, 'Mississauga, ON'),
	new Player(34,'P' ,'Greysen', 'Carter',     76, 225, S, R, 'Vanderbilt U',                    2, 'Louisville, CO'),
	new Player(35,'P' ,'Noah',    'Lewis',      74, 225, R, R, 'Maine Orono (U of)',              4, 'South Portland, ME'),
	new Player(36,'P' ,'Grant',   'Besser',     70, 185, R, L, 'Florida Southwestern State',      2, 'Berne, IN'),
	new Player( 0,'P' ,'Erry',    'Baldayac',   72, 200, R, R, 'Rhode Island Col',                4, 'Providence, RI'),
	new Player( 0,'P' ,'Nick',    'Hohenstein', 73, 220, L, R, 'Siena Col',                       4, 'Lincroft, NJ'),
	new Player( 0,'P' ,'Dylan',   'Johnson',    74, 200, R, R, 'St Johns U',                      2, 'Selden, NY'),
	new Player( 0,'C' ,'Caleb',   'Pendleton',  74, 200, R, R, 'Florida Atlantic U',              3, 'Jensen Beach, FL'),
]

var Sanford = [
	null,
	new Player( 1,'F' ,'Wolf',    'Elkan',      61, 155, R, R, 'Landmark Col',                    3, 'Bethesda, MD'),
	new Player( 2,'O' ,'Alex',    'Knapp',      68, 180, R,	R, 'George Mason U',                  2, 'Lancaster, PA'),
	null,
	new Player( 4,'I' ,'Quinn',   'McDaniel',   71, 175, R,	R, 'Maine Orono (U of)',              3, 'Eliot, ME'),
	new Player( 5,'I' ,'Devan',   'Bade',       71, 178, R,	R, 'Binghamton U',                    2, 'Southington, CT'),
	null,
	new Player( 7,'I' ,'David',   'Bermudez',   68, 195, R,	R, 'Manhattan Col',                   4, 'East Brunswick, NJ'),
	new Player( 8,'I' ,'Matthew', 'Polk',       71, 175, R,	R, 'Vanderbilt U',                    2, 'Long Beach, CA'),
	null,
	new Player(10,'P' ,'Brady',   'Afthim',     72, 175, R,	R, 'Connecticut (U of)',              2, 'Windham, ME'),
	null,
	new Player(12,'O' ,'Jacob',   'Humphrey',   70, 175, R,	R, 'Massachusetts Lowell (U of)',     2, 'Standish, ME'),
	null,
	new Player(14,'I' ,'Jake',    'Rainess',    74, 195, R,	R, 'Maine Orono (U of)',              4, 'Baltimore, MD'),
	new Player(15,'O' ,'Jayson',  'Kramer',     72, 190, L,	L, 'St Johns U',                      3, 'Cape Coral, FL'),
	new Player(16,'O' ,'Joey',    'Rezek',      72, 205, L,	R, 'East Carolina U',                 3, 'Colfax, NC'),
	new Player(17,'O' ,'Kevin',   'Skagerlind', 72, 195, R,	R, 'Massachusetts Amherst (U of)',    3, 'Holden, MA'),
	new Player(18,'P' ,'Ryan',    'Douglas',    73, 215, L,	R, 'North Carolina Asheville (U of)', 4, 'Climax, NC'),
	new Player(19,'C' ,'Adam',    'Dapkewicz',  72, 200, L,	R, 'Georgetown U',                    4, 'Davis, CA'),
	new Player(20,'P' ,'Zackary', 'Given',      73, 175, L,	L, 'Massachusetts Amherst (U of)',    4, 'Boulder, CO'),
	new Player(21,'P' ,'Spencer', 'Hill',       75, 210, L,	R, 'North Carolina Asheville (U of)', 3, 'New Albany, OH'),
	new Player(22,'P' ,'Brian',   'Craven',     72, 205, R,	R, 'Davidson Col',                    4, 'Hingham, MA'),
	new Player(23,'C' ,'Grant',   'Knipp',      75, 220, R,	R, 'Campbell U',                      3, 'Louisville, KY'),
	new Player(24,'O' ,'Calvin',  'Hewett',     75, 210, R,	L, 'Vanderbilt U',                    3, 'Greenland, NH'),
	new Player(25,'P' ,'Bryce',   'Afthim',     75, 235, R,	R, 'Southern Maine (U of)',           4, 'Windham, ME'),
	new Player(26,'P' ,'Kyle',    'Magrans',    74, 210, R,	R, 'Vanderbilt U',                    2, 'Clarksville, TN'),
	new Player(27,'P' ,'Sonny',   'Fauci',      75, 195, R,	R, 'St Johns U',                      4, 'Old Bridge, NJ'),
	new Player(28,'P' ,'Jack',    'Mullen',     75, 210, R,	R, 'Bowdoin Col',                     3, 'Freeport, ME'),
	new Player(29,'P' ,'Ryan',    'Butler',     75, 205, R,	R, 'Liberty U',                       2, 'Salem, VA'),
	new Player(30,'P' ,'Jake',    'Poindexter', 72, 190, R,	R, 'Georgia (U of)',                  2, 'Chickamauga, GA'),
	new Player(31,'P' ,'Zachary', 'Rodgers',    72, 180, R,	R, 'Massachusetts Lowell (U of)',     4, 'Parrish, FL'),
	new Player(32,'P' ,'Matthew', 'Sapienza',   74, 210, R,	R, 'Georgetown U',                    2, 'North Andover, MA'),
	new Player(33,'C' ,'MJ',      'Lucas',      73, 190, L,	R, 'North Carolina Asheville (U of)', 3, 'Waxhaw, NC'),
	new Player(34,'P' ,'Coleman', 'Willis',     79, 220, L,	R, 'Georgia (U of)',                  2, 'Warner Robins, GA'),
	new Player(35,'P' ,'Jacob',   'Marshall',   78, 215, R,	R, 'Le Moyne Col',                    4, 'Baldwinsville, NY'),
	new Player(36,'P' ,'Blake',   'MacMillan',  77, 210, R,	L, 'Niagara U',                       2, 'Mississauga, ON'),
	null,
	new Player(38,'I' ,'Marco',   'Castillo',   75, 215, R,	R, 'Georgetown U',                    3, 'Corte Madera, CA'),
	new Player(39,'P' ,'Gavin',   'Stellpflug', 78, 225, R,	R, 'Maryland College Park (U of)',    3, 'Whitehouse Station, NJ'),
	new Player(40,'I' ,'Aidan',   'Kane',       76, 205, L,	R, 'Delaware (U of)',                 2, 'Madison, NJ'),
]

// var roster = {'away': BAL, 'home': BOS}

// var roster = {
// 	'away':[4,8,7,23,24,40,19,5,16],
// 	'home':[19,13,20,29,3,40,24,30,22],
// }

var Abbott = Costello = [
	null,
	new Player(1,'1B',"Who"),
	new Player(2,'2B',"What"),
	new Player(3,'3B',"I Don't Know"),
	new Player(4,'LF',"Why"),
	new Player(5,'CF',"Because"),
	new Player(6,'P' ,"Tomorrow"),
	new Player(7,'C' ,"Today"),
	new Player(8,'SS',"I Don't Give A Darn"),
	new Player(9,'RF',"Nobody"),
]

var roster = {
	'away':[1,2,3,4,5,6,7,8,9],
	'home':[1,2,3,4,5,6,7,8,9],
}

function get_players(away, home, order) {
	var roster = {
		'away':[],
		'home':[],
	}	
	for (var i = 0; i < 9; i++) {
		roster.home.push(home[order.home[i]])
		roster.away.push(away[order.away[i]])
	}
	return roster
}

roster = get_players(Abbott, Costello, roster)




