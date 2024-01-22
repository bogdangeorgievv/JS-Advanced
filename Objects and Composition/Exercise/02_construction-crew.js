function constructionCrew(worker) {
    if(worker.dizziness == true) {
        let requiredWater = 0.1 * worker.weight * worker.experience;
        worker.dizziness = !worker.dizziness;
        worker.levelOfHydrated += requiredWater;
    }
    return worker;
}
constructionCrew({
  weight: 80,

  experience: 1,

  levelOfHydrated: 0,

  dizziness: true,
});
