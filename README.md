# typescript-solid
Becode Typescript Learning Challenge
original challenge repository: [Typescript/SOLID](https://github.com/becodeorg/ANT-Lamarr-5.34/tree/main/2.The-Hill/typescript/solid-typescript)
# Title: Using TypeScript

- Repository: `typescript-solid`
- Type of Challenge: `Learning Challenge`
- Duration: `1 week` ~ 4 days because of Cevora training. 
- Deployment strategy : `NA`
- Team challenge : `solo`

## Learning objectives
- Installing Typescript (elapsed time:) 
- Installing Parcel (elapsed time:)
- Work with TypeScript (elapsed time:)
- Understanding SOLID principles for better (elapsed time:)

## Strategy
read the whole challenge carefully. There is a description of necessary actions to take such as installing a few tools and programs, so i'll start with that and once i'm through there i'll strategise for the next part. 

## Log/Self-reflection
Day 1: Tuesday 14/12/21
9:00 - 9:30 : read and initial commit of readme & reading of TypeScript for JavaScript Programmers.
possible further steps after reading the 5 min intro: after lunch maybe, installation of the programs and tools has priority. 
Read the full Handbook [from start to finish](https://www.typescriptlang.org/docs/handbook/intro.html) (30m) 
Explore the [Playground examples](https://www.typescriptlang.org/play#show-examples)
9:30 - 10:00: Installing Typescript and parcel. Asked some clarification how to install Typescript globally, noticed that I don't have to go to any specific folders for global installs, taking that with me.
Mentioned the previous link gave a 404 and asked some clarification. Everything clear now. Made it apparent to me that the main goal of this week is to learn how to wrtie proper OOP code that will be able to be used effectively in team.
10:00 -11:00: finish installing Parcel, start with exercises, reading and working on understanding of [S]OLID: Single Responsibility Principle. also, coffee. 
11:00 - 12:30 Started on the exercises, first one Car class to Car-, Engine-, MusicPlayer-classes. 
Working on understanding the current way they work together to then deconstruct and reconfigure through separate classes. 
Will first of all move the elements in the Car.ts file that 100% sure belong to the separate classes. 
there are some that are still not clear if they need to be elsewhere but will figure that out as i go on. 
12:30 : Lunch Break
14:00 : expected end of break after Watch. 
14:00 - 17:00: Continuation of SOLID. Not much progress made. 

Day 2: Wednesday
9:00 S is for Single Responsibility Principle(SRP) for solid continuation. Feel almost finished. 
Started a completely new file and took a different approach. 
 ~ Classes only impact one specific thing at a time. 
finished at 10:00.
10:00-10:30: O is for Open–closed principle. This went very quickly. If you create a new class you shouldn't have to go edit a different one, this is bad because if you forget, code won't work. 
10:30-10:45 : Start on Liskov. 
11:00-11:35: Liskov start -> finished. understanding polymorphisms. An inferface checks if different classes adhere to the same structures. 
11:35-11:40: Updating README.md. Making good time now. Not sure why I got stuck on the first one so bad. Need to revisit and review. Listening to Homage-Roses on loop for focus, ambient lo-fi hiphop. 
11:40-12:15: Expecting to spend time on [I] for Interface Segregation Principle. finished in a little over half an hour. 
12:15-12:30: Updating README.md starting on [D] for Dependency Inversion Principle.
12:30-14:00: Lunch Break and the Watch (by Zain about npm modules). 
14:00 - 17:00: Continuation of [D] for Dependency Inversion Principle.



### Working with Parcel
Parcel is a web application bundler, that will compile all the JS code

[You also need to install parcel](https://parceljs.org/getting_started.html), after which you should be able to run `parcel index.html` in your project directory.

### SOLID
SOLID is a set of 5 principles that helps you write good OOP code, and is considered one of the leading theories for modern code.

## The Mission
This all probably means very little to you, which is why we are going to see each principle separably on small refactor exercises.

* [Single Responsibility Principle](SOLID/0.S/readme.md) — Classes should have a single responsibility and thus only a single reason to change.
* [Open–closed principle](SOLID/1.O/readme.md) — Classes and other entities should be open for extension but closed for modification.
* [Liskov Substitution Principle](SOLID/2.L/readme.md) — Objects should be replaceable by their subtypes. See also design by contract. = polymorpism
* [Interface Segregation Principle](SOLID/3.I/readme.md) — Interfaces should be client specific rather than general.
* [Dependency Inversion Principle](SOLID/4.D/readme.md) — Depend on abstractions rather than concretions.



