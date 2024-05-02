import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-w2';
  index = 0;
  tempRating = 0;
  tempPeople = 0;

  showBook = true;
  showOptions = false;

  public bookList  = 
  [
    {
      title: 'How to sound like...?',
      desc: 'You want to be heard as Toni Storaro or Adele? This is the book for you!',
      author: 'Panaiot Panaiotov',
      rating: 0,
      peopleRated: 0
    },
    {
      title: 'Titanic',
      desc: 'The tragedy of a ship, love and old cleaning lady.',
      author: 'Sad Dramatic',
      rating: 0,
      peopleRated: 0
    },
    {
      title: 'Guitar for Dummies',
      desc: 'Learn the parts of the guitar, chords and how to play your favourite song',
      author: 'Eddie Van Halen',
      rating: 0,
      peopleRated: 0
    },
    {
      title: 'Angular for Dummies',
      desc: 'Learn the basics of Angular, which will help you dive into it',
      author: 'Mihail Petrov',
      rating: 0,
      peopleRated: 0
    },
    {
      title: 'School is cool!',
      desc: 'You think school is boring? This book will change your mind!',
      author: 'Masha Rubnikova',
      rating: 0,
      peopleRated: 0
    }
  ];
  public rateBook(num : number)
  {
    if(this.bookList[this.index].rating==0)
      {
        this.bookList[this.index].rating = num;
        this.bookList[this.index].peopleRated++;
      }
      else
      {
        this.tempRating = this.bookList[this.index].rating*this.bookList[this.index].peopleRated;
        this.bookList[this.index].peopleRated++;
        this.bookList[this.index].rating=(this.tempRating+num)/this.bookList[this.index].peopleRated;
      }
      this.index++;
      if(this.index==this.bookList.length)
        {
          this.showBook = false;
          this.showOptions = true;
        }
  }
  public optionChoose(opt : string)
  {
    if(opt == 'again')
      {
          this.index = 0;
          this.showBook = true;
          this.showOptions = false;
      }
  }
}
