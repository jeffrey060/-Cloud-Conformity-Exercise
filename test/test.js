var assert = require('chai').assert;
const url = 'https://us-west-2.cloudconformity.com/v1/services';
describe('arrays', function () {
      var apiData;
      before(function createList() {
            const res = await fetch(url);
            apiData = await res.json();
            function sortByKey(array, key) {
                  return array.sort(function (a, b) {
                        var x = a[key]; var y = b[key];
                        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                  });
            };
            sortByKey(apiData.data, 'id');
      });
      describe('test if sort function works', () => {
            it('first object id is ACM', () => {
                  assert.equal(apiData.data[0].id, "ACM")
            })
      })
})