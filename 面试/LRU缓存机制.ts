/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const map = this.map;
  if (map.has(key)) {
    const temp = map.get(key);
    map.delete(key);
    map.set(key, temp);
    return temp;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const map = this.map;
  if (map.has(key)) {
    map.delete(key);
  } else {
    if (map.size >= this.capacity) {
      map.delete(map.keys().next().value);
    }
  }
  map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
