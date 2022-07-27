import { IDataType } from "../Models/Model";

export const queData:IDataType = {
    questions: [
        {
            id: "1",
            que: "1. who was the first prime minister of india?",
            queName:"question1",
            options: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Charan Singh", "Indira Gandhi"],
            answer: "Jawaharlal Nehru",
            type:"radioQue"
        },
        {
            id: "2",
            que: "2. Addition of 2+1",
            queName: "question2",
            options: ["5","3","1","2"],
            answer: "3",
            type: "radioQue"
        },
        {
            id: "3",
            que: "3. Which animal is known as the 'Ship of the Desert?",
            queName: "question3",
            options: ["Horse","Camel","Cow","Donkey"],
            answer: "Camel",
            type:"radioQue"
        },
        {
            id: "4",
            que: "4. How many days are there in a week?",
            queName: "question4",
            options: ["9","7","5","6"],
            answer: "7",
            type:"radioQue"
        },
        {
            id: "5",
            que: "5. What is the capital of India?",
            queName: "question5",
            options: ["Chandigarh","Mumbai","Chennai","Delhi"],
            answer: "Delhi",
            type:"radioQue"
        },
        {
            id: "6",
            que: "6. Name the largest mammal?",
            queName: "question6",
            options: ["Blue Whale", "Elephant", "Cow","White Whale"],
            answer: "Blue Whale",
            type:"radioQue"
        },
        {
            id: "7",
            que: "7. Mark Drinkable items",
            queName: "question7",
            options: ["Milk", "Burger", "Water","Chips"],
            answer: ["Milk","Water"],
            type: "checkQue"
        },
        {
            id: "8",
            que: "8. Which festival is known as the festival of light?",
            queName: "question8",
            options: ["Holi", "Diwali", "Christmas","Visakhi"],
            answer: "Diwali",
            type: "radioQue"
        },
        {
            id: "9",
            que: "9. Name the Oceans of the World?",
            queName: "question9",
            options: ["Bramputra", "Pacific", "Indian","Neil"],
            answer: ["Pacific", "Indian"],
            type: "checkQue"
        },
        {
            id: "10",
            que: "10. What type of gas is absorbed by plants?",
            queName: "question10",
            options: ["Oxygen", "Helium", "Carbon Dioxide","None of these"],
            answer: "Carbon Dioxide",
            type: "radioQue"
        }
    ]
}