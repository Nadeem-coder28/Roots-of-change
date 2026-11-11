const animalProfiles = {
    cow: {
        habitat: "Cows are commonly found in grasslands, pastures, and meadows.",
        habitatRequirements: "Cows require access to fresh water, shelter from extreme weather conditions, and ample grazing areas.",
        feeding: "Cows primarily feed on grass, hay, silage, and grains.",
        breeding: "The gestation period for a cow is approximately 9 months. Calves are typically weaned at 6-8 months.",
        lifespan: "The average lifespan of a cow is 15-20 years.",
        healthcare: "Cows require regular vaccinations, deworming, and hoof care. They should be monitored for signs of illness and disease, and veterinary care should be sought when necessary."
    },
    buffallo: {
        habitat: "Buffaloes are found in grasslands, wetlands, and agricultural areas.",
        habitatRequirements: "Buffaloes need access to grazing land, fresh water, and shade.",
        feeding: "Buffaloes primarily graze on grass and other vegetation.",
        breeding: "The gestation period for a buffalo is approximately 9 months. Calves are weaned at around 6-8 months.",
        lifespan: "The average lifespan of a buffalo is 20-25 years.",
        healthcare: "Buffaloes require vaccinations, deworming, and regular veterinary check-ups. Proper nutrition and hygiene are essential for their health."
    },
    dog: {
        habitat: "Dogs are domesticated animals that can be found in a variety of habitats, including homes, parks, and urban areas.",
        habitatRequirements: "Dogs require shelter, access to water, and a safe environment for exercise and play.",
        feeding: "Dogs require a balanced diet consisting of high-quality dog food. Treats can be given in moderation.",
        breeding: "The gestation period for a dog is approximately 9 weeks. Puppies should be weaned at around 6-8 weeks.",
        lifespan: "The lifespan of a dog varies by breed but averages between 10 to 15 years.",
        healthcare: "Dogs require regular vaccinations, parasite prevention, dental care, and exercise to maintain good health. Regular check-ups with a veterinarian are essential."
    },
    cat: {
        habitat: "Cats are domesticated animals that can be found in homes, urban areas, and rural environments.",
        habitatRequirements: "Cats need access to shelter, food, water, and a safe environment for hunting and exploring.",
        feeding: "Cats are obligate carnivores and require a diet rich in animal protein. They may eat commercial cat food or prey on small animals.",
        breeding: "Cats reach sexual maturity at around 6-9 months of age. The gestation period for a cat is approximately 9 weeks.",
        lifespan: "The average lifespan of a cat is 12-15 years, although many cats live into their late teens or early twenties.",
        healthcare: "Cats require regular vaccinations, parasite prevention, dental care, and annual veterinary check-ups. They should be spayed or neutered to prevent overpopulation."
    },
    goat: {
        habitat: "Goats are commonly found in rugged, mountainous terrain, but they can adapt to various environments.",
        habitatRequirements: "Goats require access to grazing land, clean water, and shelter from extreme weather conditions.",
        feeding: "Goats are browsers and eat a variety of vegetation including grass, leaves, shrubs, and tree bark.",
        breeding: "The gestation period for a goat is approximately 5 months. Kids are weaned at around 3 months.",
        lifespan: "The average lifespan of a goat is 10-15 years.",
        healthcare: "Goats require vaccinations, deworming, and hoof trimming. They should be monitored for signs of illness and disease, and veterinary care should be sought when necessary."
    },
    sheep: {
        habitat: "Sheep are found in grasslands, pastures, and agricultural areas.",
        habitatRequirements: "Sheep need access to grazing land, clean water, and shelter from extreme weather conditions.",
        feeding: "Sheep primarily graze on grass and other vegetation. They may also be supplemented with hay and grains.",
        breeding: "The gestation period for a sheep is approximately 5 months. Lambs are weaned at around 2-3 months.",
        lifespan: "The average lifespan of a sheep is 10-12 years.",
        healthcare: "Sheep require vaccinations, deworming, and regular hoof trimming. They should be monitored for signs of illness and disease."
    },
    pigeon: {
        habitat: "Pigeons are found in urban areas, parks, and agricultural fields.",
        habitatRequirements: "Pigeons need access to roosting sites, nesting materials, and sources of food and water.",
        feeding: "Pigeons eat grains, seeds, and small insects.",
        breeding: "Pigeons breed throughout the year and typically lay 2 eggs per clutch. Incubation period is around 17-19 days.",
        lifespan: "The average lifespan of a pigeon is 3-5 years.",
        healthcare: "Pigeons require a clean environment, proper nutrition, and protection from predators. Regular monitoring for signs of illness is important."
    },
    pig: {
        habitat: "Pigs are typically found in barns, pens, and outdoor enclosures.",
        habitatRequirements: "Pigs need access to shelter, clean water, and a comfortable resting area.",
        feeding: "Pigs are omnivores and eat a variety of foods including grains, vegetables, and protein sources.",
        breeding: "The gestation period for a pig is approximately 3 months, 3 weeks, and 3 days. Piglets are weaned at around 6-8 weeks.",
        lifespan: "The average lifespan of a pig is 10-15 years.",
        healthcare: "Pigs require vaccinations, deworming, and regular veterinary check-ups. Proper nutrition and housing are essential for their health and well-being."
    }
    // Add more animal profiles as needed
};

function displayAnimalInfo(animal) {
    const animalInfoDiv = document.getElementById('animal-info');

    if (animalProfiles[animal]) {
        const profile = animalProfiles[animal];
        animalInfoDiv.innerHTML = `
        <p><strong>Animal Profile:</strong> ${animal.charAt(0).toUpperCase() + animal.slice(1)}</p>
        <p><strong>Habitat:</strong> ${profile.habitat}</p>
        <p><strong>Habitat Requirements:</strong> ${profile.habitatRequirements}</p>
        <p><strong>Feeding:</strong> ${profile.feeding}</p>
        <p><strong>Breeding and Reproduction:</strong> ${profile.breeding}</p>
        <p><strong>Lifespan:</strong> ${profile.lifespan}</p>
        <p><strong>Healthcare and Veterinary Care:</strong> ${profile.healthcare}</p>
    `;
    } else {
        animalInfoDiv.innerHTML = '';
    }
}

document.getElementById('animal-select').addEventListener('change', function() {
    const selectedAnimal = this.value;
    displayAnimalInfo(selectedAnimal);
});
