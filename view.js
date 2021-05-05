const model = new Model();

class View {

    ClickOn(id){
        this.updateText(id)
    }


    Population(){
        let index = 0;
        let data = model.getData();
        for (let key in data){
            if(data[key][index] >= 15000) {
                let sheet = document.createElement('style');
                console.log(key, data[key]);
                sheet.innerText = "#" + key + "{fill:#F5793A}";
                document.body.appendChild(sheet);
            }
            else if(data[key][index] >= 10000 && data[key][index] < 15000) {
                let sheet = document.createElement('style');
                console.log(key, data[key]);
                sheet.innerText = "#" + key + "{fill:#A95AA1}";
                document.body.appendChild(sheet);
            }
            else if(data[key][index] >= 5000 && data[key][index] < 10000){
                let sheet = document.createElement('style');
                console.log(key, data[key]);
                sheet.innerText = "#" + key + "{fill:#B5C0F9}";
                document.body.appendChild(sheet);
            }
            else if(data[key][index] >= 0 && data[key][index] < 5000){
                let sheet = document.createElement('style');
                console.log(key, data[key]);
                sheet.innerText = "#" + key + "{fill:#0F2080}";
                document.body.appendChild(sheet);
            }
        }
        this.updateDisplayText("Pop")
    }

    PastCases(){
        let index = 1;
        let data = model.getData();
        for (let key in data){
            if(data[key][index] >= 20) {
                let sheet = document.createElement('style');
                console.log(key, data[key]);
                sheet.innerText = "#" + key + "{fill:#F5793A}";
                document.body.appendChild(sheet);
            }
            else if(data[key][index] >= 15 && data[key][index] < 20){
                let sheet = document.createElement('style');
                console.log(key, data[key]);
                sheet.innerText = "#" + key + "{fill:#A95AA1}";
                document.body.appendChild(sheet);
            }
            else if(data[key][index] >= 10 && data[key][index] < 15){
                let sheet = document.createElement('style');
                console.log(key, data[key]);
                sheet.innerText = "#" + key + "{fill:#B5C0F9}";
                document.body.appendChild(sheet);
            }
            else if(data[key][index] >= 0 && data[key][index] < 10){
                let sheet = document.createElement('style');
                console.log(key, data[key]);
                sheet.innerText = "#" + key + "{fill:#0F2080}";
                document.body.appendChild(sheet);
            }
        }
        this.updateDisplayText("Cases")
    }

    Vaccinations(){
        let index = 2;
        let data = model.getData();
        for (let key in data){
            if(data[key][index] >= 60) {
                let sheet = document.createElement('style');
                console.log(key, data[key]);
                sheet.innerText = "#" + key + "{fill:#F5793A}";
                document.body.appendChild(sheet);
            }
            else if(data[key][index] >= 40 && data[key][index] < 60){
                let sheet = document.createElement('style');
                console.log(key, data[key]);
                sheet.innerText = "#" + key + "{fill:#A95AA1}";
                document.body.appendChild(sheet);
            }
            else if(data[key][index] >= 20 && data[key][index] < 40){
                let sheet = document.createElement('style');
                console.log(key, data[key]);
                sheet.innerText = "#" + key + "{fill:#B5C0F9}";
                document.body.appendChild(sheet);
            }
            else if(data[key][index] >= 0 && data[key][index] < 20){
                let sheet = document.createElement('style');
                console.log(key, data[key]);
                sheet.innerText = "#" + key + "{fill:#0F2080}";
                document.body.appendChild(sheet);
            }
        }
        this.updateDisplayText("Vaccinations")
    }

    updateDisplayText(Type){
        let elem = document.getElementById("mapScale");
        let text = document.getElementById("DisplayText");
        if(Type === "Pop"){
            elem.setAttribute("src", 'Pop.PNG');
            text.innerText = "Displaying: Population"
        }
        else if(Type === "Cases"){
            elem.setAttribute("src", 'Cases.PNG');
            text.innerText = "Displaying: Cases"
        }
        else if(Type === "Vaccinations"){
            elem.setAttribute("src", 'Vaccinations.PNG');
            text.innerText = "Displaying: Vaccinations"
        }
    }

    updateText(id){
        let AreaText = document.getElementById("AreaText");
        let popText = document.getElementById("PopulationText");
        let Covidtext = document.getElementById("CovidCasesText");
        let VaccinationsText = document.getElementById("CovidVaccinationsText");

        let dict = model.getData();
        let pop = dict[id][0];
        let cases = dict[id][1];
        let Vaccinations = dict[id][2];
        AreaText.innerText = "Area: "+ id;
        popText.innerText = "population: "+pop;
        Covidtext.innerText = "Covid cases: "+cases;
        VaccinationsText.innerText = "Vaccinations: "+Vaccinations;
    }

    Clear(){
        let data = model.getData();
        for (let key in data){
            let sheet = document.createElement('style');
            sheet.innerText = "#" + key + "{fill:#808080}";
            document.body.appendChild(sheet);
        }

    }



    openNav1() {
        document.getElementById("mySidebar1").style.width = "100vw";
        localStorage.setItem('Open', "Nav1");
    }
    openNav2() {
        document.getElementById("mySidebar2").style.width = "100vw";
        localStorage.setItem('Open', "Nav2");
    }
    closeNav1() {
        document.getElementById("mySidebar1").style.width = "0";

    }
    closeNav2() {
        document.getElementById("mySidebar2").style.width = "0";

    }


}
