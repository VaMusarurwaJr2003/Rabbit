import BreedData from '../BreedData/BreedData';
import zealand1 from '../images/zealand1.jpeg';
import zealand2 from '../images/zealand2.jpg';
import carlifonia1 from '../images/carlifonia1.jpeg';
import carlifonia2 from '../images/carlifonia2.jpeg';
import florida1 from '../images/florida1.jpeg';
import florida3 from '../images/florida3.jpeg';
import red1 from '../images/red1.jpeg';
import red2 from '../images/red2.jpeg';
import "./Breed.css"

const Breed = () => {
    return (
        <div className="breeding">
            <h1>Rabbit <span>Breeding</span></h1>
            <p className='breed'>Here are all types of rabbits we breed and raise for meat, wool and fur!</p>
    
            <BreedData
                className = "first-breed"
                title = "breed-text"
                heading="New-Zealand"
                span = "White Rabbit"
                text = "New Zealand rabbits have a broad, muscular, and deep body of
                medium length, with well-rounded haunches. The ears stand
                straight up rather than being lopped. Fur is of normal length
                and flyback which means that when brushed in the wrong direction,
                it immediately returns to the original position. While they are the
                top meat producing breed, New Zealands are also excellent show rabbits.
                Surprisingly to some, New Zealands are not only white. There are also
                reds, blacks and newly discovered, the bluish, But we only keep the
                White breed as for now and some cross breeds."
                 img1= {zealand1}
                 img2= {zealand2}
            />
           

           <BreedData
                className = "first-breed-reverse"
                title = "breed-text-reverse"
                heading="Carlifonia"
                span = "Rabbit"
                text = "The Californian was first bred in the 1920's, with the intent of
                 creating a better commercial rabbit meat. It resulted from crosses between 
                 the Himalayan, the Standard Chinchilla, and the White New Zealand. The 
                 Californian is white with pink eyes and dark points on the ears, feet and 
                 tail. Californian rabbits are known to be very calm and gentle animals. 
                 While most rabbits do not like getting picked up, Californians are usually 
                 easy to lift and carry when you handle them properly. No matter the breed, 
                 rabbits are active and social animals. As for now we only keep black and white
                 carlifonia breeds and some are crossbreeds as we are on the verge of 
                 experimenting and creating new breeds."
                 img1= {carlifonia1}
                 img2= {carlifonia2}
            />

            <BreedData
                className = "first-breed"
                title = "breed-text"
                heading="Florida"
                span = "White Rabbit"
                text = "Florida Whites are generally docile, good-natured, gentle and relaxed rabbits.
                 This breed is generally hardy and healthy. They have an average lifespan of 5 to 8 
                 years. This breed was mainly bred for commercial purposes, for its meat and fur. 
                 As their name would suggest, these rabbits are plain white with no markings or 
                 patterns on the body, but as for us we keep the whites as well as some cross breeds
                 with black and white markings. They have red albino eyes too! Compared to other breeds of 
                 rabbits, these rabbits have a rounder body with a shorter neck, they have a 
                 well-developed body with thick upright ears. Their white fur has a good density and 
                 great texture!"
                 img1= {florida1}
                 img2= {florida3}
            />
           
           <BreedData 
                className = "first-breed-reverse"
                title = "breed-text-reverse"
                heading="New-Zealand"
                span = "Red Rabbit"
                text = "New Zealand Reds have a medium build; the body is fairly broad with a slightly arched
                  back, the head shapely with full cheeks and upright ears. New Zealand rabbits have medium-length
                  hair that feels coarser and less soft than most breeds. The Reds are good for meat and some keep
                  them as pets as they are calm and relaxed. New Zealand Reds are calm, easy-going and friendly
                  rabbits. Crossings involving the Belgian Hare, Flemish Giant and the extinct Golden Fawn are 
                  all believed to have played a part in the production of the New Zealand Red. New Zealand Reds
                  are a relaxed breed who are generally good with (calm) children. They are placid when being 
                  handled and make great beginner pets because of their easy going nature. These rabbits will 
                  rarely bite and will enjoy meeting every member of the family including any other pets."
                 img1= {red1}
                 img2= {red2}
            />


        </div>
    )
}

export default Breed;