class DictionaryNode {
    children: Map<string, DictionaryNode>
    isEnd: boolean

    constructor(){
        this.children = new Map()
        this.isEnd = false
    }
}

class WordDictionary {
    dictionaryHead: DictionaryNode

    constructor() {
        this.dictionaryHead = new DictionaryNode()
    }

    addWord(word: string): void {
        let currentNode = this.dictionaryHead;

        for(const letter of word){
            if(!currentNode.children.has(letter)){
                currentNode.children.set(letter, new DictionaryNode())
            }

            currentNode = currentNode.children.get(letter)
        }

        currentNode.isEnd = true;
    }

    search(word: string): boolean {
        const dfs = (node: DictionaryNode, index: number) => {
            if(index === word.length){
                return node.isEnd
            }

            const letter = word[index]

            if(letter !== '.' && !node.children.has(letter)){
                return false;
            }

            if(letter !== '.' && node.children.has(letter)){
                return dfs(node.children.get(letter), index + 1)
            }

            for(const child of node.children.values()){
                if(dfs(child, index+1)){
                    return true
                }
            }

            return false
        }

        return dfs(this.dictionaryHead, 0)
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */