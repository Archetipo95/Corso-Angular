import { Pipe, PipeTransform } from '@angular/core';
import { WSAECONNREFUSED } from 'constants';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): unknown {
    if(!value) return null;

    let words = value.split(' ');
    for (var i=0; i<words.length; i++) {
      let word = words[i];
      if (i>0 && this.isPreposition(word))
        words[i] = word.toLowerCase();
      else 
        words[i] = this.toTitleCase(word);
    }
    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      "di",
      "a",
      "da",
      "in",
      "con",
      "su",
      "per",
      "tra",
      "fra",
      "del",
      "dello",
      "della",
      "dei",
      "degli",
      "delle",
      "al",
      "allo",
      "alla",
      "ai",
      "agli",
      "alle",
      "dal",
      "dallo",
      "dalla",
      "dall'",
      "dai",
      "dagli",
      "dalle",
      "nel",
      "nello",
      "nella",
      "nei",
      "negli",
      "nelle",
      "col",
      "coi",
      "sul",
      "sullo",
      "sulla",
      "sui",
      "sugli",
      "sulle"
    ];
    return prepositions.includes(word.toLowerCase());
  }
}
