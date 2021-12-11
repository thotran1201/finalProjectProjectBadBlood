import femaleCelebrities from '../data/femaleCelebrities.json';
import maleCelebrities from '../data/maleCelebrities.json';

const Card = () => {
    return ( 
        <div className="Card">
            <p>Name: Ariana Grande</p>
            <p>Alias: Sweet Snowflake</p>
            <p>Location: Los Angeles</p>
        </div>
     );
}

const Card2 = () => {
    return ( 
        <div className="Card2">
            <p>Name: Anthony Mackie</p>
            <p>Alias: Captain</p>
            <p>Location: New York City</p>
        </div>
     );
}

// const FemaleCard = ({femaleCelebrities}) => (
//     <div>
//       {femaleCelebrities.map(female => (
//         <div key={female.name}>
            
//             <p>{female.name}</p>
//             <p>{female.alias}</p>
//             <p>{female.location}</p>

//         </div>
//       ))}
//     </div>
//   );

console.log(maleCelebrities);
console.log(femaleCelebrities);

export default Card;