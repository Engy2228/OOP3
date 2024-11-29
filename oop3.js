class Dictionary {
  constructor(name) {
    this.name = name
    this.words ={}
  }
  add(word,description) {
    if (!this.words[word]) {
      this.words[word] = {word, description}
    }
  }

  remove(word) {
    delete this.words[word]
  }

  get(word) {
    return this.words[word]
  }
  
  showAllWords() {
    Object.values(this.words)
    .forEach((word) => {
      console.log(`${word.word} - ${word.description}`)
    })
    console.log(this.words)
}
}

const dictionary = new Dictionary('Толковый словарь');

dictionary.add('JavaScript', 'популярный язык программирования');

dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.remove('JavaScript');
dictionary.showAllWords();
console.log(dictionary)
