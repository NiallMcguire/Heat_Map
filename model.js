class Model {

    newRates(elem){
        let DataDict = {
            "Drumchapel": [],
            "Blairdardie": [],
            "Knightswood": [],
            "Anniesland": [],
            "Yoker": [],
            "Jordanhill": [],
            "Broomhill": [],
            "Hyndland": [],
            "Kelvindale": [],
            "Summerston": [],
            "Milton": [],
            "Possilpark": [],
            "Hillhead": [],
            "Maryhill": [],
            "City_centre": [],
            "Yorkhill": [],
            "Ibrox": [],
            "Govan": [],
            "Bellahouston": [],
            "Penilee": [],
            "Crookston" : [],
            "Corkerhill": [],
            "Pollokshaws": [],
            "Pollock": [],
            "Preisthill": [],
            "Darnley": [],
            "Arden": [],
            "Newlands": [],
            "Langside": [],
            "Shawlands": [],
            "Pollokshields_west": [],
            "Pollokshields_east": [],
            "Gorbals": [],
            "Bridgeton": [],
            "Dennistoun": [],
            "Roystonhill": [],
            "Springburn": [],
            "Balornock": [],
            "Robroyston": [],
            "Ruchazie": [],
            "Blackhill": [],
            "Easterhouse": [],
            "Barlanark": [],
            "Riddrie": [],
            "Haghill": [],
            "West_shettleston": [],
            "Parkhead": [],
            "East_shettleston": [],
            "Garrowhill": [],
            "Toryglen": [],
            "Govanhill": [],
            "Kings_path": [],
            "Croftfoot": [],
            "Cathcart": [],
            "Castlemilk": [],
            "Carmunnock": []
        };
        let parser=new DOMParser();
        let xmlDoc=parser.parseFromString(elem,"text/xml");
        for(let i = 1; i <= 56; i++){
            let toField = xmlDoc.getElementsByTagName("Cube")[i];
            let Area = toField.getAttribute("area");
            let Stats = toField.getAttribute("stats");
            Stats = JSON.parse(Stats);
                console.log(Area, Stats);
            DataDict[Area] = Stats
        }
        let jsonRates = JSON.stringify(DataDict);
        localStorage.setItem('storedRates', jsonRates);
    }
    getData(){
        let storedRates = localStorage.getItem("storedRates");
        storedRates = JSON.parse(storedRates);
        return storedRates;
    }




}
