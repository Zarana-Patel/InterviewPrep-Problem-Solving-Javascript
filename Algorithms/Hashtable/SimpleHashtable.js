/**
 * Created by zaranapatel on 8/30/17.
 */
class HashTable {
    constructor(){
        this.table= [];
    }

    createhashkey(key) {
        let hash="";
        for (let i = 0; i < key.length; i++) {
            hash += key.charAt(i);
        }
        return hash;
    }

    hashCode(key) {
        return this.createhashkey(key);
    }

    put(key, value) {
        let position = this.hashCode(key);
        console.log(position + ' - ' + value);
        this.table[position] = value;
    }

    get(key) {
        return this.table[this.hashCode(key)];
    }

    remove(key){
        this.table[hashCode(key)] = undefined;
    }

    printtable() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }
}

var hash = new HashTable();
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');

hash.put('Nathan', 'nathan@email.com');
hash.printtable();
console.log(hash.get('Paul'));
