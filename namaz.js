        let dayArray = ['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'];
        
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

        let todaysDay = new Date();
        let day = todaysDay.getDay();

        switch(day) {
            case 1: showOnScreen(day,map1);
            break;
            case 2: showOnScreen(day,map3);
            break;
            case 3: showOnScreen(day,map1);
            break;
            case 4: showOnScreen(day,map2);
            break;
            case 5: showOnScreen(day,map3);
            break;
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
