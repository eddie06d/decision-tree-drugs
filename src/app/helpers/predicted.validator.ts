export const predictedDrug = (data: any) => {
  if(data.age <= 50.5 && data.bloodPressure == 'HIGH' && data.level_Na_K <= 14.8285) return { drug: "drugA", probability: 0.115 };
  else if(data.age > 50.5 && data.bloodPressure == 'HIGH' && data.level_Na_K <= 14.8285) return { drug: "drugB", probability: 0.08 };
  else if(data.cholesterol == 'HIGH' && data.bloodPressure == 'LOW' && data.level_Na_K <= 14.8285) return { drug: "drugC", probability: 0.08 };
  else if((data.cholesterol == 'NORMAL' && data.bloodPressure == 'LOW' && data.level_Na_K <= 14.8285) || (data.bloodPressure == 'NORMAL' && data.level_Na_K <= 14.8285)) return { drug: "drugX", probability: 0.27 };
  else if(data.level_Na_K > 14.8285) return { drug: "drugY", probability: 0.455 };
  else return { drug: "none", probability: 0 };
};
