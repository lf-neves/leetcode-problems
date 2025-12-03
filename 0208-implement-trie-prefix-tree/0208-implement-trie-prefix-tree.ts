class TrieNode {
    children: Map<string, TrieNode>
    isEnd: boolean

    constructor(){
        this.children = new Map<string, TrieNode>()
        this.isEnd = false
    }
}

class Trie {
    head: TrieNode

    constructor() {
        this.head = new TrieNode()
    }

    insert(word: string): void {
        let currentNode = this.head

        for(const letter of word){
            if(currentNode.children.has(letter)){
                currentNode = currentNode.children.get(letter)
            } else {
                const newTrieNode = new TrieNode()
                currentNode.children.set(letter, newTrieNode)
                currentNode = newTrieNode
            }
        }

        currentNode.isEnd = true;
    }

    search(word: string): boolean {
        let currentNode = this.head

        for(const letter of word){
            if(!currentNode.children.has(letter)){
                return false;
            }

            currentNode = currentNode.children.get(letter)
        }

        return currentNode.isEnd
    }

    startsWith(prefix: string): boolean {
        let currentNode = this.head

        for(const letter of prefix){
            if(!currentNode.children.has(letter)){
                return false;
            }

            currentNode = currentNode.children.get(letter)
        }

        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */