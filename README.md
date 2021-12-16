# typescript-solid
BeCode Typescript Learning Challenge
original challenge repository: [Typescript/SOLID](https://github.com/becodeorg/ANT-Lamarr-5.34/tree/main/2.The-Hill/typescript/solid-typescript)
# Title: Using TypeScript

- Repository: `typescript-solid`
- Type of Challenge: `Learning Challenge`
- Duration: `1 week` ~ 4 days because of Cevora training. Done in 2 days and a morning. 
- Deployment strategy : `NA`
- Team challenge : `solo`

## Challenge Description
We were challenged to understand SOLID in 4 days.  
For this we received a file with several files that contained "bad"-code.  
We had to grasp and utilize the concepts and principles to keep functionality the same but make the code best-practice. 


## For running the code on your machine: 

disclaimer : running PhpStorm on Windows myself. So if you have a different setup I can't account for all differences.   
If you have parcel and node globally installed on your machine, should run fine after compiling.   
Otherwise,   
following steps should work.  
1.`npm init` + steps  
2.`npm install parcel`  
3.`npx parcel index.html`    
if that doesn't work, check if the node modules are in the folder, add them if needed through  
`npm install typescript`    


## Learning objectives
- Installing Typescript (elapsed time: 30m) 
- Installing Parcel (elapsed time: 30 m)
- Work with TypeScript (elapsed time: 2d )
- Understanding SOLID principles for better (elapsed time: 2d)

## Strategy
Read the whole challenge carefully. 
There is a description of necessary actions to take such as installing a few tools and programs. 
So I'll start with that and once I'm through there I'll strategise for the next part. 
After I get stuck I 


## Log/Self-reflection

####Day 1: Tuesday 14/12/21  

9:00 - 9:30 : read and initial commit of readme & reading of TypeScript for JavaScript Programmers.  
possible further steps after reading the 5 min intro: after lunch maybe, installation of the programs and tools has priority.  
Read the full Handbook [from start to finish](https://www.typescriptlang.org/docs/handbook/intro.html) (30m)   
Explore the [Playground examples](https://www.typescriptlang.org/play#show-examples)  
9:30 - 10:00: Installing Typescript and parcel. Asked some clarification how to install Typescript globally, noticed that I don't have to go to any specific folders for global installs, taking that with me.  
Mentioned the previous link gave a 404 and asked some clarification. Everything clear now. Made it apparent to me that the main goal of this week is to learn how to wrtie proper OOP code that will be able to be used effectively in team.  
10:00 -11:00: finish installing Parcel, start with exercises, reading and working on understanding of [S]OLID: Single Responsibility Principle. also, coffee.   
11:00 - 12:30 Started on the exercises, first one Car class to Car-, Engine-, MusicPlayer-classes.   
Working on understanding the current way they work together to then deconstruct and reconfigure through separate classes.  
We will first move the elements in the Car.ts file that 100% sure belong to the separate classes.  
there are some that are still not clear if they need to be elsewhere but will figure that out as I go on.  
12:30 : Lunch Break 
14:00 : expected end of break after Watch.  
14:00 - 17:00: Continuation of SOLID. Not much progress made.   

####Day 2: Wednesday  15/12/21

9:00 S is for Single Responsibility Principle(SRP) for solid continuation. Feel almost finished.  
Started a completely new file and took a different approach.  
 ~ Classes only impact one specific thing at a time.  
finished at 10:00.  
10:00-10:30: O is for Open–closed principle. This went very quickly. If you create a new class you shouldn't have to go edit a different one, this is bad because if you forget, code won't work.  
10:30-10:45 : Start on Liskov.  
11:00-11:35: Liskov start -> finished. understanding polymorphisms. An interface checks if different classes adhere to the same structures.  
11:35-11:40: Updating README.md. Making good time now. Not sure why I got stuck on the first one so bad. Need to revisit and review. Listening to Homage-Roses on loop for focus, ambient lo-fi hiphop.  
11:40-12:15: Expecting to spend time on [I] for Interface Segregation Principle. finished in a little over half an hour.  
12:15-12:30: Updating README.md starting on [D] for Dependency Inversion Principle.  
12:30-14:00: Lunch Break and the Watch (by Zain about npm editor module, really cool presentation).  
14:00-15:00: non-project related time for feedback  
15:00-16:00: Continuation of [D] for Dependency Inversion Principle. Problem with "npx parcel index.html" command, afaik all code should be working.  
16:00-17:00: ask for help finding problem with npx command, updating README.md, thinking about own project and thinking of ways to showcase what I can and challenge myself.  

Day 3: Thursday  16/12/21: finishing up README.md and getting npm working again.  
9:00 - 9:30: after help from one of our coaches [Sicco](https://github.com/Sick-0) I got the advice to run the `npm init`+steps , `npm install typescript`, `npm install parcel`, `npx parcel index.html` command in succession. after which the project loaded without issue.  

### Working with Parcel

Parcel is a web application bundler, that will compile all the JS code.



[You also need to install parcel](https://parceljs.org/getting_started.html), after which you should be able to run `parcel index.html` in your project directory.

### SOLID

SOLID is a set of 5 principles that helps you write good OOP code, and is considered one of the leading theories for modern code.

* [Single Responsibility Principle](SOLID/0.S/readme.md) — Classes should have a single responsibility and thus only a single reason to change.
* Reinout: Whenever a class has too many responsibilities it becomes the time to think how to more effectively divide the load.  
* This is needed to make it so that if an issue turns up that it becomes very clear where it is happening. 
* Thus reducing time to fix it and making it easy to improve upon.  
* "Gather together the things that change for the same reasons. Separate those things that change for different reasons." - Robert C. Martin, Clean Code Blog on the Single Responsibility Principle  
* [Open–closed principle](SOLID/1.O/readme.md) — Classes and other entities should be open for extension but closed for modification.
* Reinout: Make it, so you can build on previously made classes through extending them, . 
* Creating software entities whose behavior can be changed without the need to edit and recompile the code itself.
* [Liskov Substitution Principle](SOLID/2.L/readme.md) — Objects should be replaceable by their subtypes. See also design by contract. = polymorpism
* Reinout: When implementing an interface all subtypes should fit the initial type's interface mold. 
* [Interface Segregation Principle](SOLID/3.I/readme.md) — Interfaces should be client specific rather than general. 
* Reinout: When an interface is insufficient for the necessary functionality, use multiple to get the desired functionality.
* [Dependency Inversion Principle](SOLID/4.D/readme.md) — Depend on abstractions rather than concretions.
* Reinout: Make sure when building that you build on a concept that is scalable. Not a specific situation.


