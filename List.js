const url ='https://us-west-2.cloudconformity.com/v1/services';
async function createList(){
      const res = await fetch(url);
      const  apiData = await res.json();
      console.log(apiData);
      function sortByKey(array, key) {
            return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
            }
      sortByKey(apiData.data, 'id');
      console.log(apiData.data);
      let output = '<div class="container">' 
      apiData.data.forEach(
            service=>{
                  output +=  `<div class='wrap'><h3><a href="https://www.cloudconformity.com/conformity-rules/${service.id}">${service.id}</a></h3>`
                  service.relationships.rules.data.forEach(
                        rule=>{

                              apiData.included.forEach(
                                   content=>{
                                         if(content.id===rule.id){
                                          output +=  ` <div><a href="https://www.cloudconformity.com/conformity-rules/ACM/${content.attributes.slug}.html">
                                          ${content.attributes.title}</a></div>`
                                   }
                                   })
                        }
                  )
                  output +=  `</div>`
            }
         )
         output +=  `</div>`;
         document.getElementById('grid').innerHTML= output;
 }
 createList();
