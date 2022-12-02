        let dayArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        
        let map1 = new Map();
        map1.set('Asar','Altamash + Ahmed');
        map1.set('Magrib','Altamash + Rehan');
        map1.set('Isha','Rehan + Ahmed');
       
        let map2 = new Map();
        map2.set('Asar','Rehan + Ahmed');
        map2.set('Magrib','Altamash + Ahmed');
        map2.set('Isha','Altamash + Rehan');

        let map3 = new Map();
        map3.set('Asar','Altamash + Rehan');
        map3.set('Magrib','Rehan + Ahmed');
        map3.set('Isha','Altamash + Ahmed');

        let mapArr = [map1,map2,map3];

        let todaysDay = new Date();
        let day = todaysDay.getDay();

        mySwitch(day);


        function mySwitch(day) {
            let len = mapArr.length;
            let dayLen = day -1 % len;

            switch(day) {
                case 1: showOnScreen(day,mapArr[dayLen]);
                break;
                case 2: showOnScreen(day,mapArr[dayLen]);
                break;
                case 3: showOnScreen(day,mapArr[dayLen]);
                break;
                case 4: showOnScreen(day,mapArr[dayLen]);
                break;
                case 5: showOnScreen(day,dayArray[dayLen]);
                break;
            }

        }
            
        function showOnScreen(day,map) {
            const h1 = document.getElementById('day');
            h1.textContent = dayArray[day];


            map.forEach((value,key) => {

                let table = document.getElementById('table');
                let row = document.createElement('tr');
                let keyRow = document.createElement('td');
                keyRow.textContent = `${key}`;
                let keyCol = document.createElement('td');
                keyCol.textContent = `${value}`;
                

                row.appendChild(keyRow);
                row.appendChild(keyCol);

                table.appendChild(row);


                
            });

            }

            let nextBtn = document.getElementById('next');
            nextBtn.addEventListener('click',next);


            function next() {
                const h1 = document.getElementById('day');
                let text = h1.textContent;
                let day = dayArray.indexOf(text) + 1;
                if(day == 6) {
                    day = 1;
                }
                let table = document.getElementById('table');
                for(let i = 0; i<3; i++) {
                    table.firstElementChild.remove();
                }


                mySwitch(day);
                
                
                
            }

            let preBtn = document.getElementById('pre');
            preBtn.addEventListener('click',pre);


            function pre() {
                const h1 = document.getElementById('day');
                let text = h1.textContent;
                let day = dayArray.indexOf(text) - 1;
                console.log(day);
                if(day == 0) {
                    day = 5;
                }
                let table = document.getElementById('table');
                for(let i = 0; i<3; i++) {
                    table.firstElementChild.remove();
                }


                mySwitch(day);
                
                
                
            }