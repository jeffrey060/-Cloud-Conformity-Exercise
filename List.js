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
     document.getElementById('grid').innerHTML= output;         
 }
createList();
