const nodes = {

    //  FLOOR 1 

    // Staircases & Elevators
    "h_elevator_101": { x: 0.7500, y: 0.2800, floor: 1, name: "Elevator 1st Floor" },
    "h_staircase_101": { x: 0.8000, y: 0.2800, floor: 1, name: "Staircase 101 (East)" },
    "h_staircase_102": { x: 0.4300, y: 0.2800, floor: 1, name: "Staircase 102 (Center)" },
    "h_staircase_103": { x: 0.3800, y: 0.8800, floor: 1, name: "Staircase 103 (South)" },

    // Hallways - West
    "h_west_end": { x: 0.2400, y: 0.7600, floor: 1, name: "Hallway End (West)" },
    "h_west_118": { x: 0.2400, y: 0.6650, floor: 1, name: "Hallway 118" },
    "h_west_119": { x: 0.2400, y: 0.6000, floor: 1, name: "Hallway 119" },
    "h_west_122": { x: 0.2400, y: 0.5400, floor: 1, name: "Hallway 122" },
    "h_west_122_back": { x: 0.2400, y: 0.3800, floor: 1, name: "Hallway 122 Back" },

    // Hallways - North
    "h_corner_NW": { x: 0.2400, y: 0.2600, floor: 1, name: "North West Corner" },
    "h_top_124": { x: 0.4300, y: 0.2600, floor: 1, name: "Hallway 124" },
    "h_top_125": { x: 0.6200, y: 0.2600, floor: 1, name: "Hallway 125" },
    "h_corner_NE": { x: 0.6800, y: 0.2600, floor: 1, name: "North East Corner" },
    "h_top_126": { x: 0.8000, y: 0.2600, floor: 1, name: " Hallway 126" },

    // Hallways - East
    "h_east_1": { x: 0.6800, y: 0.3100, floor: 1, name: "East Hall 1" },
    "h_east_wc_b": { x: 0.6800, y: 0.3700, floor: 1, name: "East WC Boys" },
    "h_east_wc_g": { x: 0.6800, y: 0.4400, floor: 1, name: "East WC Girls" },
    "h_east_2": { x: 0.6800, y: 0.5700, floor: 1, name: "East Hall 2" },
    "h_east_3": { x: 0.6800, y: 0.6900, floor: 1, name: "East Hall 3" },
    "h_corner_SE": { x: 0.6800, y: 0.7300, floor: 1, name: "South East Corner" },

    // Hallways - South & Lobby
    "h_south_1": { x: 0.5600, y: 0.7300, floor: 1, name: "South Hall 1" },
    "h_south_2": { x: 0.4200, y: 0.7300, floor: 1, name: "South Hall 2" },
    "Lobby": { x: 0.3500, y: 0.7600, floor: 1, name: "Lobby 1 Floor" },

    // Rooms - West Side
    "117": { x: 0.2100, y: 0.7600, floor: 1, name: "Room 117" },
    "118": { x: 0.2100, y: 0.6650, floor: 1, name: "Room 118" },
    "119": { x: 0.2100, y: 0.6000, floor: 1, name: "Room 119" },
    "122": { x: 0.2100, y: 0.5400, floor: 1, name: "Room 122" },
    "122_1": { x: 0.2100, y: 0.3900, floor: 1, name: "Room 122 Back" },
    "122A": { x: 0.2100, y: 0.3400, floor: 1, name: "Tech" },
    "123": { x: 0.2100, y: 0.2500, floor: 1, name: "Room 123" },
    "128": { x: 0.2700, y: 0.4000, floor: 1, name: "Room 128" },
    "131": { x: 0.2700, y: 0.6500, floor: 1, name: "Room 131" },

    // Rooms - North Side
    "124": { x: 0.4300, y: 0.2400, floor: 1, name: "Room 124" },
    "125": { x: 0.6200, y: 0.2400, floor: 1, name: "Room 125" },
    "133": { x: 0.2700, y: 0.2900, floor: 1, name: "Room 133" },
    "134": { x: 0.2700, y: 0.2000, floor: 1, name: "Room 134" },
    "126": { x: 0.8200, y: 0.2400, floor: 1, name: "Room 126" },

    // Rooms - East Side
    "102": { x: 0.7000, y: 0.3100, floor: 1, name: "102" },
    "103_wc_b": { x: 0.7000, y: 0.3700, floor: 1, name: "WC Boy 1 floor" },
    "104": { x: 0.7000, y: 0.4200, floor: 1, name: "Tech" },
    "105": { x: 0.7000, y: 0.4400, floor: 1, name: "WC Girl 1 floor" },
    "106": { x: 0.7000, y: 0.4700, floor: 1, name: "Room 106" },
    "107": { x: 0.7000, y: 0.5700, floor: 1, name: "Room 107" },
    "108": { x: 0.7000, y: 0.6500, floor: 1, name: "Tech 108" },
    "109": { x: 0.7000, y: 0.7000, floor: 1, name: "Room 109" },
    "109A": { x: 0.7000, y: 0.7200, floor: 1, name: "Room 109A" },
    "128H": { x: 0.6500, y: 0.4600, floor: 1, name: "Room 128H" },
    "129": { x: 0.6500, y: 0.5700, floor: 1, name: "Room 129" },
    "129B": { x: 0.6500, y: 0.7000, floor: 1, name: "Room 129B" },

    // Rooms - South & Center
    "112": { x: 0.4300, y: 0.7600, floor: 1, name: "Room 112" },
    "110": { x: 0.5500, y: 0.7600, floor: 1, name: "Room 110" },
    "110-2": { x: 0.6300, y: 0.7600, floor: 1, name: "Room 110-2" },


    //  FLOOR 2 

    // Staircases & Elevators
    "h_staircase_201": { x: 0.4100, y: 0.2800, floor: 2, name: "Staircase 201 (Center)" },
    "h_elevator_201": { x: 0.6900, y: 0.2800, floor: 2, name: "Elevator 2nd Floor" },
    "h_staircase_202": { x: 0.7500, y: 0.2800, floor: 2, name: "Staircase 202 (East)" },
    "h_staircase_203": { x: 0.3500, y: 0.8400, floor: 2, name: "Staircase 203 (South)" },

    // Hallways - West
    "h_201_0": { x: 0.2400, y: 0.2500, floor: 2, name: "NW Corner" },
    "h_201_1": { x: 0.2300, y: 0.3200, floor: 2, name: "West Hall 1" },
    "h_201_2": { x: 0.2000, y: 0.3200, floor: 2, name: "West Hall 2" },
    "h_201_3": { x: 0.2000, y: 0.3600, floor: 2, name: "West Hall 2" },
    "h_201_4": { x: 0.2000, y: 0.4000, floor: 2, name: "West Hall 3" },
    "h_201_5": { x: 0.2000, y: 0.4400, floor: 2, name: "West Hall 4" },
    "h_201_6": { x: 0.2000, y: 0.4800, floor: 2, name: "West Hall 5" },
    "h_201_7": { x: 0.2000, y: 0.5350, floor: 2, name: "West Hall 5" },
    "h_201_8": { x: 0.2300, y: 0.5350, floor: 2, name: "West Hall 6" },
    "h_201_9": { x: 0.2300, y: 0.5650, floor: 2, name: "West Hall 7" },
    "h_201_10": { x: 0.2300, y: 0.6250, floor: 2, name: "West Hall 8" },
    "h_201_11": { x: 0.2300, y: 0.6700, floor: 2, name: "West Hall 9" },
    "h_201_12": { x: 0.2300, y: 0.7100, floor: 2, name: "West Hall 10" },
    "h_201_13": { x: 0.2800, y: 0.7100, floor: 2, name: "West Hall 10" },
    "h_201_211": { x: 0.2050, y: 0.8200, floor: 2, name: "Corridor End 211" },

    // Hallways - South
    "h_203_0": { x: 0.2800, y: 0.7900, floor: 2, name: "South Hall" },
    "h_203_1": { x: 0.3300, y: 0.7900, floor: 2, name: "South Hall" },
    "h_203_2": { x: 0.5000, y: 0.8200, floor: 2, name: "South Hall 1" },
    "h_203_3": { x: 0.4000, y: 0.8200, floor: 2, name: "South Hall 2" },
    "h_203_209": { x: 0.6800, y: 0.8700, floor: 2, name: "209 Hallway" },

    // Hallways - East
    "h_202_1": { x: 0.6250, y: 0.2500, floor: 2, name: "East Hall 1" },
    "h_202_2": { x: 0.6250, y: 0.3100, floor: 2, name: "East Hall 2" },
    "h_202_3": { x: 0.6250, y: 0.3800, floor: 2, name: "East Hall 3" },
    "h_202_4": { x: 0.6250, y: 0.4700, floor: 2, name: "East Hall 4" },
    "h_202_5": { x: 0.6250, y: 0.5300, floor: 2, name: "East Hall 5" },
    "h_202_6": { x: 0.6250, y: 0.5900, floor: 2, name: "East Hall 6" },
    "h_202_7": { x: 0.6250, y: 0.6400, floor: 2, name: "East Hall 7" },
    "h_202_8": { x: 0.6250, y: 0.7800, floor: 2, name: "East Hall 8" },
    "h_202_9": { x: 0.6250, y: 0.8200, floor: 2, name: "SE Corner" },

    // Hallways - Corridor 206-208
    "h_206_208_1": { x: 0.7600, y: 0.6800, floor: 2, name: "Corridor 206–208" },
    "h_206_208_2": { x: 0.7600, y: 0.7700, floor: 2, name: "Corridor 206–208" },

    // Rooms - West Side
    "213": { x: 0.4100, y: 0.2400, floor: 2, name: "Room 213" },
    "213A": { x: 0.5900, y: 0.2000, floor: 2, name: "Room 213A" },
    "215": { x: 0.3700, y: 0.2700, floor: 2, name: "Room 215" },
    "212Q": { x: 0.2500, y: 0.2300, floor: 2, name: "Room 212Q" },
    "h_213": { x: 0.2800, y: 0.2500, floor: 2, name: "Room 213" },
    "212P": { x: 0.2000, y: 0.2900, floor: 2, name: "Room 212P" },
    "212P_2": { x: 0.2100, y: 0.2500, floor: 2, name: "Room 212P_2" },
    "212L": { x: 0.1900, y: 0.3550, floor: 2, name: "Room 212L" },
    "212K": { x: 0.1900, y: 0.3950, floor: 2, name: "Room 212K" },
    "212H": { x: 0.1900, y: 0.4400, floor: 2, name: "Room 212H" },
    "212G": { x: 0.1900, y: 0.4800, floor: 2, name: "Room 212G" },
    "212F": { x: 0.1900, y: 0.5200, floor: 2, name: "Room 212F" },
    "212E": { x: 0.1900, y: 0.5650, floor: 2, name: "Room 212E" },
    "212D": { x: 0.1900, y: 0.6250, floor: 2, name: "Room 212D" },
    "212C": { x: 0.1900, y: 0.6700, floor: 2, name: "Room 212C" },
    "212B": { x: 0.1900, y: 0.7100, floor: 2, name: "Room 212B" },
    "212A": { x: 0.1900, y: 0.7300, floor: 2, name: "Room 212A" },
    "212R": { x: 0.2200, y: 0.5000, floor: 2, name: "Room 212R" },
    "212S": { x: 0.2800, y: 0.5450, floor: 2, name: "Room 212S" },
    "212T": { x: 0.2800, y: 0.5650, floor: 2, name: "Room 212T" },
    "212U": { x: 0.2800, y: 0.6250, floor: 2, name: "Room 212U" },
    "212V": { x: 0.2800, y: 0.6500, floor: 2, name: "Room 212V" },
    "211": { x: 0.2050, y: 0.7900, floor: 2, name: "Room 211" },
    "211F": { x: 0.1900, y: 0.8100, floor: 2, name: "Room 211F" },
    "211A": { x: 0.2600, y: 0.8100, floor: 2, name: "Room 211A" },
    "211E": { x: 0.1900, y: 0.8300, floor: 2, name: "Room 211E" },

    // Rooms - East Side
    "200": { x: 0.7400, y: 0.2400, floor: 2, name: "Room 200" },
    "200B": { x: 0.7600, y: 0.1500, floor: 2, name: "Room 200B" },
    "200A": { x: 0.7600, y: 0.1000, floor: 2, name: "Room 200A" },
    "200C": { x: 0.6800, y: 0.1700, floor: 2, name: "Room 200C" },
    "204A": { x: 0.6500, y: 0.3000, floor: 2, name: "Room 204A" },
    "203B": { x: 0.7300, y: 0.4700, floor: 2, name: "Room 203B" },
    "204": { x: 0.6500, y: 0.5300, floor: 2, name: "Room 204" },

    "206": { x: 0.7100, y: 0.6400, floor: 2, name: "Room 206" },
    "206B": { x: 0.7100, y: 0.5400, floor: 2, name: "Room 206B" },
    "206A": { x: 0.7000, y: 0.5900, floor: 2, name: "Room 206A" },
    "206C": { x: 0.7300, y: 0.5900, floor: 2, name: "Room 206C" },

    "206D": { x: 0.7800, y: 0.6600, floor: 2, name: "Room 206D" },
    "206E": { x: 0.7800, y: 0.7200, floor: 2, name: "Room 206E" },
    "206F": { x: 0.7800, y: 0.7500, floor: 2, name: "Room 206F" },
    "206G": { x: 0.7600, y: 0.7900, floor: 2, name: "Room 206G" },
    "206J": { x: 0.7600, y: 0.7400, floor: 2, name: "Room 206J" },
    "206H": { x: 0.7200, y: 0.7700, floor: 2, name: "Room 206H" },

    "208": { x: 0.6500, y: 0.7700, floor: 2, name: "Room 208" },
    "209": { x: 0.6500, y: 0.8300, floor: 2, name: "Room 209" },
    "209A": { x: 0.6900, y: 0.8500, floor: 2, name: "Room 209A" },
    "209B": { x: 0.7300, y: 0.8900, floor: 2, name: "Room 209B" },
    "209C": { x: 0.7100, y: 0.9100, floor: 2, name: "Room 209C" },
    "209D": { x: 0.6800, y: 0.9100, floor: 2, name: "Room 209D" },
    "210": { x: 0.6000, y: 0.8400, floor: 2, name: "Room 210" },
    "210A": { x: 0.6000, y: 0.9100, floor: 2, name: "Room 210A" },
    "210B": { x: 0.5900, y: 0.9000, floor: 2, name: "Room 210B" },
    "210C": { x: 0.5900, y: 0.8800, floor: 2, name: "Room 210C" },
    "218": { x: 0.6000, y: 0.4000, floor: 2, name: "Room 218" },
    "222": { x: 0.6000, y: 0.5900, floor: 2, name: "Room 222" },
    "221": { x: 0.4000, y: 0.7800, floor: 2, name: "Room 221" },

    // Service Rooms
    "wc_b_2": { x: 0.6500, y: 0.3700, floor: 2, name: "WC Boy 2" },
    "wc_g_2": { x: 0.7200, y: 0.4600, floor: 2, name: "WC Girl 2" },
    "207B": { x: 0.6500, y: 0.7200, floor: 2, name: "Tech Room 207B" },
    "207": { x: 0.6500, y: 0.6800, floor: 2, name: "Tech Room 207" },
    "212W": { x: 0.2400, y: 0.3500, floor: 2, name: "Tech Room 212W" },
    "212M": { x: 0.2200, y: 0.2800, floor: 2, name: "Phone Booth 2" },


    //  FLOOR 3 

    // Staircases & Elevators
    "h_staircase_301": { x: 0.3700, y: 0.1600, floor: 3, name: "Staircase 301" },
    "h_staircase_302": { x: 0.7800, y: 0.1600, floor: 3, name: "Staircase 302" },
    "h_elevator_301": { x: 0.7000, y: 0.1600, floor: 3, name: "Elevator 301" },

    // Hallways
    "h_301_1": { x: 0.3800, y: 0.1300, floor: 3, name: "Hallway 301" },
    "h_301_2": { x: 0.4500, y: 0.1300, floor: 3, name: "Hallway 301" },
    "h_301_3": { x: 0.5300, y: 0.1300, floor: 3, name: "Hallway 301" },
    "h_301_4": { x: 0.6100, y: 0.1300, floor: 3, name: "Hallway 301" },
    "h_301_5": { x: 0.6700, y: 0.1300, floor: 3, name: "Hallway 301" },
    "h_301_6": { x: 0.7600, y: 0.1300, floor: 3, name: "Hallway 301" },

    // Rooms
    "305": { x: 0.3400, y: 0.1300, floor: 3, name: "Room 305" },
    "306": { x: 0.3100, y: 0.0800, floor: 3, name: "Room 306" },
    "305C": { x: 0.3000, y: 0.1000, floor: 3, name: "Room 305C" },
    "305B": { x: 0.3000, y: 0.2200, floor: 3, name: "Room 305B" },
    "305A": { x: 0.3100, y: 0.2400, floor: 3, name: "Room 305A" },
    "Deck": { x: 0.2200, y: 0.2200, floor: 3, name: "Deck 3 Floor" },
    "307": { x: 0.3800, y: 0.1000, floor: 3, name: "Room 307" },
    "308": { x: 0.4600, y: 0.1000, floor: 3, name: "Room 308" },
    "309": { x: 0.5300, y: 0.1000, floor: 3, name: "Room 309" },
    "310": { x: 0.6100, y: 0.1000, floor: 3, name: "Room 310" },
    "311": { x: 0.6700, y: 0.1000, floor: 3, name: "Room 311" },
    "312": { x: 0.7500, y: 0.1000, floor: 3, name: "Room 312" },
    "317": { x: 0.8200, y: 0.1300, floor: 3, name: "Room 312" },
    "303": { x: 0.5200, y: 0.1600, floor: 3, name: "Room 303" },
    "301": { x: 0.6200, y: 0.1600, floor: 3, name: "Room 301" },
    "301A": { x: 0.6700, y: 0.2300, floor: 3, name: "Room 301A" },
    "317A": { x: 0.8500, y: 0.2500, floor: 3, name: "Room 317A" },
    "316A": { x: 0.9300, y: 0.2300, floor: 3, name: "Room 316A" },
    "314": { x: 0.8200, y: 0.1100, floor: 3, name: "Room 314" },

    // Service Rooms
    "phone_booth_3": { x: 0.7800, y: 0.1100, floor: 3, name: "Phone Booth 3" },
    "318": { x: 0.7500, y: 0.1600, floor: 3, name: "Technical Room 318" },
    "302_wc_b": { x: 0.5400, y: 0.1600, floor: 3, name: "WC Boy 302" },
    "304_wc_g": { x: 0.4300, y: 0.1600, floor: 3, name: "WC Girl 304" },


    //  FLOOR 4 

    // Staircases & Elevators
    "h_staircase_402": { x: 0.8100, y: 0.2800, floor: 4, name: "Staircase 402" },
    "h_staircase_401": { x: 0.4100, y: 0.2600, floor: 4, name: "Staircase 401" },
    "h_elevator_401": { x: 0.7200, y: 0.2700, floor: 4, name: "Elevator 401" },

    // Hallways
    "h_401_1": { x: 0.8400, y: 0.2800, floor: 4, name: "Hallway 401" },
    "h_401_2": { x: 0.8400, y: 0.2400, floor: 4, name: "Hallway 401" },
    "h_401_3": { x: 0.8000, y: 0.2400, floor: 4, name: "Hallway 401" },
    "h_401_4": { x: 0.7200, y: 0.2400, floor: 4, name: "Hallway 401" },
    "h_401_5": { x: 0.6500, y: 0.2400, floor: 4, name: "Hallway 401" },
    "h_401_6": { x: 0.6200, y: 0.2400, floor: 4, name: "Hallway 401" },
    "h_401_7": { x: 0.5600, y: 0.2400, floor: 4, name: "Hallway 401" },
    "h_401_8": { x: 0.5000, y: 0.2400, floor: 4, name: "Hallway 401" },
    "h_401_9": { x: 0.4550, y: 0.2400, floor: 4, name: "Hallway 401" },
    "h_401_10": { x: 0.4100, y: 0.2400, floor: 4, name: "Hallway 401" },

    "h_407_408_1": { x: 0.4100, y: 0.2100, floor: 4, name: "Corridor 407–408" },
    "h_407_408_2": { x: 0.4100, y: 0.1800, floor: 4, name: "Corridor 407–408" },
    "h_408_409": { x: 0.4700, y: 0.2100, floor: 4, name: "Corridor 408–409" },

    // Rooms
    "407": { x: 0.3400, y: 0.2700, floor: 4, name: "Room 407" },
    "407A": { x: 0.3400, y: 0.3200, floor: 4, name: "Room 407A" },
    "407B": { x: 0.3200, y: 0.3200, floor: 4, name: "Room 407B" },
    "407C": { x: 0.2700, y: 0.2400, floor: 4, name: "Room 407C" },
    "408A": { x: 0.3700, y: 0.1600, floor: 4, name: "Room 408A" },
    "408": { x: 0.4600, y: 0.2200, floor: 4, name: "Room 408" },
    "409": { x: 0.5600, y: 0.2200, floor: 4, name: "Room 409" },
    "410": { x: 0.7500, y: 0.2000, floor: 4, name: "Room 410" },
    "411": { x: 0.8000, y: 0.2000, floor: 4, name: "Room 411" },
    "412": { x: 0.8200, y: 0.2000, floor: 4, name: "Room 412" },
    "413": { x: 0.9000, y: 0.2300, floor: 4, name: "Room 413" },
    "413A": { x: 0.9000, y: 0.2000, floor: 4, name: "Room 413A" },
    "414": { x: 0.9000, y: 0.2900, floor: 4, name: "Room 414" },
    "415": { x: 0.8300, y: 0.3100, floor: 4, name: "Room 415" },
    "402": { x: 0.6100, y: 0.2600, floor: 4, name: "Room 402" },
    "401": { x: 0.6500, y: 0.2600, floor: 4, name: "Room 401" },
    "401B": { x: 0.6600, y: 0.3100, floor: 4, name: "Room 401B" },
    "401A": { x: 0.6800, y: 0.3100, floor: 4, name: "Room 401A" },

    // Service Rooms
    "wc_g_4": { x: 0.4600, y: 0.2600, floor: 4, name: "WC Girl" },
    "wc_b_4": { x: 0.5700, y: 0.2600, floor: 4, name: "WC Boy" },
    "404": { x: 0.4900, y: 0.2600, floor: 4, name: "Tech Room 404" },
    "416": { x: 0.7800, y: 0.2600, floor: 4, name: "Tech Room 416" },


    // FLOOR 5 

    // Staircases & Elevators
    "h_staircase_502": { x: 0.7900, y: 0.2700, floor: 5, name: "Staircase 502" },
    "h_elevator_501": { x: 0.7200, y: 0.2300, floor: 5, name: "Elevator 501" },

    // Hallways
    "h_501A_1": { x: 0.8300, y: 0.2400, floor: 5, name: "Hallway 501A" },
    "h_501A_2": { x: 0.8000, y: 0.2300, floor: 5, name: "Hallway 501A" },
    "h_501A_3": { x: 0.7300, y: 0.2100, floor: 5, name: "Hallway 501A" },
    "h_501": { x: 0.5400, y: 0.2200, floor: 5, name: "Corridor X501" },

    // Rooms
    "X501": { x: 0.8300, y: 0.2700, floor: 5, name: "Room X501" },
    "X501A": { x: 0.8700, y: 0.2800, floor: 5, name: "Room X501A" },
    "X501B": { x: 0.8600, y: 0.3000, floor: 5, name: "Room X501B" },
    "X501C": { x: 0.8200, y: 0.3000, floor: 5, name: "Room X501C" },
    "502": { x: 0.8200, y: 0.2100, floor: 5, name: "Room 502" },
    "507": { x: 0.5200, y: 0.2200, floor: 5, name: "Room 507" },
    "506": { x: 0.5100, y: 0.2400, floor: 5, name: "Room 506" },
    "505": { x: 0.5400, y: 0.2500, floor: 5, name: "Room 505" },
    "501B": { x: 0.5300, y: 0.2000, floor: 5, name: "Room 501B" }

};


// 2. GRAPH CONNECTIONS
const graph = {

    // FLOOR 1 

    // West Main Hall
    "h_west_end": { "117": 10, "h_west_118": 10, "Lobby": 10 },
    "h_west_118": { "h_west_end": 10, "118": 10, "h_west_119": 10, "131": 10 },
    "h_west_119": { "h_west_118": 10, "119": 10, "h_west_122": 10 },
    "h_west_122": { "h_west_119": 10, "122": 10, "h_west_122_back": 10 },
    "h_west_122_back": { "h_west_122": 10, "122_1": 10, "122A": 5, "128": 10, "133": 10, "h_corner_NW": 10 },

    // North Hall
    "h_corner_NW": { "h_west_122_back": 10, "h_top_124": 10, "123": 10, "133": 10, "134": 10, "122A": 10 },
    "h_top_124": { "h_corner_NW": 10, "124": 10, "h_top_125": 10, "h_staircase_102": 10 },
    "h_top_125": { "h_top_124": 10, "125": 10, "h_corner_NE": 10 },
    "h_corner_NE": { "h_top_125": 10, "h_east_1": 10, "h_elevator_101": 10, "h_top_126": 10 },
    "h_top_126": { "h_corner_NE": 10, "h_staircase_101": 10, "h_elevator_101": 10, "126": 10 },

    // East Main Hall
    "h_east_1": { "h_corner_NE": 10, "102": 10, "h_east_wc_b": 10 },
    "h_east_wc_b": { "h_east_1": 10, "103_wc_b": 5, "h_east_wc_g": 10 },
    "h_east_wc_g": { "h_east_wc_b": 10, "104": 5, "105": 5, "106": 10, "128H": 5, "h_east_2": 10 },
    "h_east_2": { "h_east_wc_g": 10, "107": 5, "129": 5, "h_east_3": 10, "108": 10 },
    "h_east_3": { "h_east_2": 10, "108": 5, "109": 10, "129B": 5, "h_corner_SE": 10 },
    "h_corner_SE": { "h_east_3": 10, "h_south_1": 10, "109A": 10, "110-2": 10 },

    // South Hall
    "h_south_1": { "h_corner_SE": 10, "110-2": 10, "110": 5, "h_south_2": 10 },
    "h_south_2": { "h_south_1": 10, "112": 10, "Lobby": 10 },

    // Lobby & Center
    "Lobby": { "h_west_end": 10, "h_south_2": 10, "h_staircase_103": 10 },

    // Rooms
    "117": { "h_west_end": 10 },
    "118": { "h_west_118": 10 },
    "119": { "h_west_119": 10 },
    "122": { "h_west_122": 10 },
    "122_1": { "h_west_122_back": 10 },
    "122A": { "h_west_122_back": 10 },
    "123": { "h_corner_NW": 10 },

    "124": { "h_top_124": 10 },
    "125": { "h_top_125": 10 },
    "126": { "h_top_126": 10 },
    "133": { "h_corner_NW": 10, "h_west_122_back": 10, },
    "134": { "h_corner_NW": 10 },

    "102": { "h_east_1": 10 },
    "103_wc_b": { "h_east_wc_b": 5 },
    "104": { "h_east_wc_g": 5 },
    "105": { "h_east_wc_g": 5 },
    "106": { "h_east_wc_g": 10 },
    "107": { "h_east_2": 5 },
    "108": { "h_east_3": 5, "h_east_2": 10 },
    "109": { "h_east_3": 10 },
    "109A": { "h_corner_SE": 10 },
    "128H": { "h_east_wc_g": 5 },
    "129": { "h_east_2": 5 },
    "129B": { "h_east_3": 5 },

    "110": { "h_south_1": 5 },
    "110-2": { "h_south_1": 10, "h_corner_SE": 10 },
    "112": { "h_south_2": 10 },
    "128": { "h_west_122_back": 10 },
    "131": { "h_west_118": 10 },

    // Stairs & Elevators
    "h_elevator_101": { "h_corner_NE": 10, "h_top_126": 10 },
    "h_staircase_101": { "h_top_126": 10 },
    "h_staircase_102": { "h_top_124": 10 },
    "h_staircase_103": { "Lobby": 10 },


    // FLOOR 2 

    // West Main Hall (201 / 212)
    "h_201_0": { "h_201_1": 10, "212Q": 10, "h_213": 10, "212P_2": 10, "212M": 5 },
    "h_201_1": { "h_201_0": 10, "h_201_2": 10, "212M": 5, "212W": 5 },
    "h_201_2": { "h_201_1": 10, "h_201_3": 10, "212P": 2 },
    "h_201_3": { "h_201_2": 10, "h_201_4": 10, "212L": 2 },
    "h_201_4": { "h_201_3": 10, "h_201_5": 10, "212K": 2 },
    "h_201_5": { "h_201_4": 10, "h_201_6": 10, "212H": 2 },
    "h_201_6": { "h_201_5": 10, "h_201_7": 10, "212G": 2, "212R": 2 },
    "h_201_7": { "h_201_6": 10, "h_201_8": 10, "212F": 2 },
    "h_201_8": { "h_201_7": 10, "h_201_9": 10, "212S": 5 },
    "h_201_9": { "h_201_8": 10, "h_201_10": 10, "212T": 5, "212E": 5 },
    "h_201_10": { "h_201_9": 10, "h_201_11": 10, "212D": 5, "212U": 5, "212V": 5 },
    "h_201_11": { "h_201_10": 10, "h_201_12": 10, "212C": 10, "212V": 5 },
    "h_201_12": { "h_201_11": 10, "h_201_13": 10, "212B": 5, "212A": 5, "211": 10 },
    "h_201_13": { "h_201_12": 10, "h_203_0": 10 },
    "h_201_211": { "211": 10, "211F": 5, "211E": 5, "211A": 5 },
    "h_213": { "h_201_0": 10, "213": 10, "215": 10 },

    // South Hall
    "h_203_0": { "211": 10, "h_203_1": 10, "h_201_13": 10 },
    "h_203_1": { "h_203_0": 10, "221": 10, "h_staircase_203": 10, "h_203_3": 10 },
    "h_203_2": { "h_203_3": 10, "h_203_9": 10, "210": 5 },
    "h_203_3": { "h_203_2": 10, "221": 10, "h_staircase_203": 5, "h_203_1": 10 },

    "h_203_209": { "209": 5, "209A": 5, "209B": 5, "209C": 5, "209D": 5, },

    // East Main Hall
    "h_202_1": { "200": 10, "213": 10, "h_202_2": 10, "h_elevator_201": 5 },
    "h_202_2": { "h_202_1": 10, "h_202_3": 10, "204A": 10 },
    "h_202_3": { "h_202_2": 10, "h_202_4": 10, "212": 10, "wc_b_2": 10, "218": 5 },
    "h_202_4": { "h_202_3": 10, "h_202_5": 10, "wc_g_2": 10, "203B": 10 },
    "h_202_5": { "h_202_4": 10, "h_202_6": 10, "204": 10 },
    "h_202_6": { "h_202_5": 10, "h_202_7": 10, "222": 10 },
    "h_202_7": { "h_202_6": 10, "h_202_8": 10, "206": 10, "207": 10, "207B": 10 },
    "h_202_8": { "h_202_7": 10, "h_202_9": 10, "208": 10, "207": 10, "207B": 10 },
    "h_202_9": { "h_202_8": 10, "h_203_2": 10, "209": 10, "210": 10, },

    // Corridor 206–208
    "h_206_208_1": { "206D": 5, "h_206_208_2": 10, "206": 10, "206E": 5, "206J": 5, },
    "h_206_208_2": { "h_206_208_1": 10, "206G": 5, "206F": 5, "206H": 5, "206E": 5, "206J": 5 },

    // Rooms
    "204": { "h_202_5": 10 },
    "212E": { "h_201_9": 5 },
    "204A": { "h_202_2": 10 },
    "213": { "h_staircase_201": 5, "h_202_1": 10, "h_213": 10, "215": 10 },
    "213A": { "213": 10 },
    "215": { "h_213": 10, "213": 10 },
    "218": { "h_202_3": 5 },
    "200": { "h_202_1": 10, "200B": 10, "200C": 10, "h_elevator_201": 5, "h_staircase_202": 5 },
    "200A": { "200B": 10 },
    "200B": { "200": 10, "200A": 10 },
    "200C": { "200": 10 },
    "206": { "h_202_7": 10, "h_206_208_1": 10, "206A": 10, "206B": 10, "206C": 10, "206D": 10 },
    "206A": { "206": 10 },
    "206B": { "206": 10 },
    "206C": { "206": 10 },
    "206D": { "206": 10, "h_206_208_1": 5, },
    "206E": { "h_206_208_1": 5, "h_206_208_2": 5 },
    "206F": { "h_206_208_2": 5 },
    "206G": { "h_206_208_2": 5 },
    "206H": { "h_206_208_2": 5, "208": 5 },
    "206J": { "h_206_208_1": 5, "h_206_208_2": 5 },
    "208": { "h_202_8": 10, "206H": 5 },
    "209": { "h_202_9": 10, "h_203_209": 5, },
    "209A": { "h_203_209": 5 },
    "209B": { "h_203_209": 5 },
    "209C": { "h_203_209": 5 },
    "209D": { "h_203_209": 5 },
    "210": { "h_203_2": 5, "h_202_9": 10, "210A": 5, "210B": 5, "210C": 5, },
    "210A": { "210": 5 },
    "210B": { "210": 5 },
    "210C": { "210": 5 },
    "221": { "h_203_1": 10, "h_203_3": 10 },

    // Service Rooms
    "wc_b_2": { "h_202_3": 10 },
    "wc_g_2": { "h_202_4": 10 },
    "207": { "h_202_7": 10, "h_202_8": 10 },
    "207B": { "h_202_7": 10, "h_202_8": 10 },
    "212W": { "h_201_1": 5 },
    "212M": { "h_201_0": 5, "h_201_1": 5 },

    // Stairs & Elevators
    "h_staircase_201": { "213": 5 },
    "h_staircase_202": { "200": 5 },
    "h_staircase_203": { "h_203_3": 5, "h_203_1": 10 },
    "h_elevator_201": { "h_202_1": 5, "200": 5 },


    // FLOOR 3 

    // Main Hallway 301
    "h_301_1": { "h_301_2": 10, "307": 10, "305": 10, "h_staircase_301": 5 },
    "h_301_2": { "h_301_1": 10, "h_301_3": 10, "308": 10, "304_wc_g": 10 },
    "h_301_3": { "h_301_2": 10, "h_301_4": 10, "309": 10, "303": 10, "302_wc_b": 10 },
    "h_301_4": { "h_301_3": 10, "h_301_5": 10, "310": 10, "301": 10 },
    "h_301_5": { "h_301_4": 10, "h_301_6": 10, "311": 10, "h_elevator_301": 5 },
    "h_301_6": { "h_301_5": 10, "312": 10, "317": 5, "h_staircase_302": 5, "phone_booth": 5, "318": 10, "h_elevator_301": 15 },

    // Rooms
    "305": { "h_301_1": 10, "305A": 10, "305B": 10, "305C": 10, "306": 10 },
    "305A": { "305": 10, "305B": 10 },
    "305B": { "305": 10, "Deck": 10, "305A": 10, "305C": 15 },
    "305C": { "305": 10, "306": 10, "305B": 15 },
    "306": { "305C": 10, "305": 10 },
    "Deck": { "305B": 10 },
    "307": { "h_301_1": 10 },
    "308": { "h_301_2": 10 },
    "309": { "h_301_3": 10 },
    "310": { "h_301_4": 10 },
    "311": { "h_301_5": 10 },
    "312": { "h_301_6": 10 },
    "314": { "317": 5 },
    "317": { "316A": 10, "317A": 10, "h_301_6": 5, "314": 5 },
    "317A": { "317": 10 },
    "316A": { "317": 10 },
    "303": { "h_301_3": 10 },
    "301": { "h_301_4": 10, "301A": 10 },
    "301A": { "301": 10 },

    // Service Rooms
    "318": { "h_301_6": 10 },
    "phone_booth": { "h_301_6": 5 },
    "304_wc_g": { "h_301_2": 10 },
    "302_wc_b": { "h_301_3": 10 },

    // Stairs & Elevators
    "h_staircase_301": { "h_301_1": 5 },
    "h_staircase_302": { "h_301_6": 5 },
    "h_elevator_301": { "h_301_5": 5, "h_301_6": 15 },


    // FLOOR 4 

    // Hallway 401
    "h_401_1": { "h_401_2": 10, "415": 10, "h_staircase_402": 5 },
    "h_401_2": { "h_401_1": 10, "h_401_3": 10, "412": 10, "413": 10 },
    "h_401_3": { "h_401_2": 10, "h_401_4": 10, "411": 10, "416": 10 },
    "h_401_4": { "h_401_3": 10, "h_401_5": 10, "h_elevator_401": 5 },
    "h_401_5": { "h_401_4": 10, "h_401_6": 10, "401": 10 },
    "h_401_6": { "h_401_5": 10, "h_401_7": 10, "402": 10 },
    "h_401_7": { "h_401_6": 10, "h_401_8": 10, "409": 5, "wc_b_4": 5 },
    "h_401_8": { "h_401_7": 10, "h_401_9": 10, "404": 10 },
    "h_401_9": { "h_401_8": 10, "h_401_10": 10, "408": 10, "wc_g_4": 5 },
    "h_401_10": { "h_401_9": 10, "h_staircase_401": 5, "407": 10 },

    "h_407_408_2": { "h_407_408_1": 5, "408A": 10, "407C": 30 },
    "h_407_408_1": { "h_407_408_2": 5, "408": 5 },
    "h_408_409": { "408": 5, "409": 20 },

    // Rooms
    "407": { "h_401_10": 10, "407A": 10, "407B": 10, "407C": 10 },
    "407A": { "407": 10 },
    "407B": { "407": 10 },
    "407C": { "407": 10, "408A": 20, "h_407_408_2": 30 },
    "408A": { "h_407_408_2": 10, "407C": 20 },
    "408": { "h_408_409": 5, "h_401_9": 10, "h_407_408_1": 5 },
    "409": { "h_408_409": 20, "h_401_7": 5 },
    "410": { "411": 10 },
    "411": { "h_401_3": 10, "410": 10 },
    "412": { "h_401_2": 10 },
    "413": { "h_401_2": 10, "413A": 10, "414": 10 },
    "413A": { "413": 10 },
    "414": { "413": 10 },
    "415": { "h_401_1": 10 },
    "402": { "h_401_6": 10 },
    "401": { "h_401_5": 10, "401A": 10, "401B": 10, },
    "401A": { "401": 10, "401B": 2 },
    "401B": { "401": 10, "401A": 2 },
    "404": { "h_401_8": 10 },
    "416": { "h_401_3": 10 },
    "wc_g_4": { "h_401_9": 5 },
    "wc_b_4": { "h_401_7": 5 },

    // Stairs & Elevators
    "h_staircase_401": { "h_401_10": 5 },
    "h_staircase_402": { "h_401_1": 5 },
    "h_elevator_401": { "h_401_4": 5 },


    // FLOOR 5 

    // Stairs & Elevators
    "h_elevator_501": { "h_501A_3": 10, "h_501A_2": 30 },
    "h_staircase_502": { "X501": 10 },

    // Hallway 501A
    "h_501A_3": { "h_501": 60, "h_501A_2": 30, "h_elevator_501": 10 },
    "h_501A_2": { "h_501A_3": 30, "h_501A_1": 15, "h_elevator_501": 30, "502": 10 },
    "h_501A_1": { "h_501A_2": 15, "X501": 20 },

    // Corridor 501
    "h_501": { "h_501A_3": 60, "501B": 10, "505": 10, "506": 10, "507": 10 },

    // Rooms
    "502": { "h_501A_2": 10 },
    "501B": { "h_501": 10 },
    "505": { "h_501": 10 },
    "506": { "h_501": 10 },
    "507": { "h_501": 10 },

    // X501 Cluster
    "X501": { "h_501A_1": 20, "h_staircase_502": 10, "X501A": 15, "X501B": 15, "X501C": 15 },
    "X501A": { "X501": 15 },
    "X501B": { "X501": 15 },
    "X501C": { "X501": 15 },


    //  MULTI- FLOOR CONNECTIONS


    //EAST STAIRCASE (Staircase 101/202/302/402/502) 
    // F1 <-> F2
    "h_staircase_101": { "h_top_126": 10, "h_staircase_202": 50 },
    // F2 <-> F1 & F3
    "h_staircase_202": { "200": 5, "h_staircase_101": 50, "h_staircase_302": 50 },
    // F3 <-> F2 & F4
    "h_staircase_302": { "h_301_6": 5, "h_staircase_202": 50, "h_staircase_402": 50 },
    // F4 <-> F3 & F5
    "h_staircase_402": { "h_401_1": 5, "h_staircase_302": 50, "h_staircase_502": 50 },
    // F5 <-> F4
    "h_staircase_502": { "X501": 10, "h_staircase_402": 50 },


    //CENTER STAIRCASE (Staircase 102/201/301/401) 
    // F1 <-> F2
    "h_staircase_102": { "h_top_124": 10, "h_staircase_201": 50 },
    // F2 <-> F1 & F3
    "h_staircase_201": { "213": 5, "h_staircase_102": 50, "h_staircase_301": 50 },
    // F3 <-> F2 & F4
    "h_staircase_301": { "h_301_1": 5, "h_staircase_201": 50, "h_staircase_401": 50 },
    // F4 <-> F3
    "h_staircase_401": { "h_401_10": 5, "h_staircase_301": 50 },


    //SOUTH STAIRCASE (Staircase 103/203) 
    // F1 <-> F2 
    "h_staircase_103": { "Lobby": 10, "h_staircase_203": 50 },
    // F2 <-> F1
    "h_staircase_203": { "h_203_3": 5, "h_staircase_103": 50 },


    //ELEVATOR (F1 -> F5) 
    "h_elevator_101": { "h_corner_NE": 10, "h_elevator_201": 20 },

    "h_elevator_201": { "h_202_1": 5, "200": 5, "h_elevator_101": 20, "h_elevator_301": 20 },

    "h_elevator_301": { "h_301_5": 5, "h_elevator_201": 20, "h_elevator_401": 20 },

    "h_elevator_401": { "h_401_4": 5, "h_elevator_301": 20, "h_elevator_501": 20 },

    "h_elevator_501": { "h_501A_3": 10, "h_501A_2": 30, "h_elevator_401": 20 }

};