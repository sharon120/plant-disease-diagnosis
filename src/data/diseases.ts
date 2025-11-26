import { Disease } from '../types';

export const diseases: Disease[] = [
  {
    id: 'tomato-early-blight',
    name: 'Tomato Early Blight',
    plantType: 'Tomato',
    description: 'Early blight is a fungal disease caused by Alternaria solani that affects tomato leaves. It typically starts on the lower leaves and progresses upward, causing circular spots with concentric rings that resemble a target or bullseye pattern.',
    treatment: 'Remove infected leaves regularly, ensure proper plant spacing, improve air circulation, apply copper-based fungicides, avoid overhead watering, practice crop rotation, and consider resistant varieties.',
    symptoms: ['Brown circular spots with concentric rings', 'Yellowing of affected leaves', 'Stem cankers', 'Rapid leaf drop', 'Occurs on lower leaves first'],
    severity: 'high',
  },
  {
    id: 'tomato-late-blight',
    name: 'Tomato Late Blight',
    plantType: 'Tomato',
    description: 'Late blight is caused by Phytophthora infestans and is particularly destructive during cool, wet weather. It can destroy entire plants and fruit within days.',
    treatment: 'Apply copper or mancozeb fungicides regularly, improve air circulation, remove infected plant parts, destroy infected plants completely, practice crop rotation, water at soil level only, and consider resistant varieties.',
    symptoms: ['Water-soaked spots on leaves and stems', 'White fungal growth on leaf undersides', 'Rapid plant browning and death', 'Fruit rot with concentric rings', 'Musty smell from infected tissue'],
    severity: 'high',
  },
  {
    id: 'tomato-leaf-mold',
    name: 'Tomato Leaf Mold',
    plantType: 'Tomato',
    description: 'A fungal disease causing yellowing and browning of tomato leaves, commonly found in warm, humid greenhouse conditions.',
    treatment: 'Reduce humidity by improving ventilation, avoid overhead watering, apply sulfur-based fungicides, remove infected leaves, space plants properly, and maintain consistent temperature.',
    symptoms: ['Yellow patches on upper leaf surfaces', 'Brown fuzzy growth on undersides', 'Yellowing progresses to brown', 'Leaf curling', 'Fungal growth appears gray or brown'],
    severity: 'medium',
  },
  {
    id: 'tomato-septoria-leaf-spot',
    name: 'Tomato Septoria Leaf Spot',
    plantType: 'Tomato',
    description: 'Fungal disease causing small circular lesions with dark borders and gray centers on tomato leaves, caused by Septoria lycopersici.',
    treatment: 'Remove infected leaves, apply copper fungicides, improve airflow and spacing, avoid overhead watering, practice crop rotation, sanitize tools between cuts, and remove plant debris.',
    symptoms: ['Small circular spots (1/8 inch) with dark margins', 'Light gray centers with dark rings', 'Tiny black dots in center', 'Yellowing around spots', 'Spots may coalesce'],
    severity: 'medium',
  },
  {
    id: 'potato-early-blight',
    name: 'Potato Early Blight',
    plantType: 'Potato',
    description: 'Fungal disease affecting potato foliage causing leaf spots and defoliation, caused by Alternaria solani. Infected plants may lose all leaves before tubers mature.',
    treatment: 'Apply fungicides starting early in season, remove lower leaves as disease develops, ensure good spacing, practice crop rotation, avoid overhead watering, remove volunteer plants, and harvest tubers when vines die.',
    symptoms: ['Circular brown spots with concentric rings', 'Target-like appearance', 'Yellowing around lesions', 'Rapid leaf drop', 'Occurs on older leaves first'],
    severity: 'high',
  },
  {
    id: 'potato-late-blight',
    name: 'Potato Late Blight',
    plantType: 'Potato',
    description: 'Serious fungal disease caused by Phytophthora infestans causing rapid plant death and tuber rot. This disease caused the Irish potato famine.',
    treatment: 'Plant resistant varieties, apply fungicides starting before disease appears, destroy infected plants, remove cull piles, improve drainage, practice crop rotation, and avoid overhead irrigation.',
    symptoms: ['Water-soaked spots on leaves and stems', 'Rapid browning and death of foliage', 'White fungal growth on undersides', 'Brown or gray rot in tubers', 'Musty smell from rotting tissue'],
    severity: 'high',
  },
  {
    id: 'apple-cedar-rust',
    name: 'Apple Cedar Rust',
    plantType: 'Apple',
    description: 'Fungal disease that affects apple leaves and fruit, caused by Gymnosporangium species. The fungus alternates between apple trees and eastern red cedar trees.',
    treatment: 'Remove cedar trees within 1/4 mile if possible, apply fungicides starting in spring, prune infected branches, remove infected fruit, and remove galls from nearby cedars.',
    symptoms: ['Yellow spots on leaves', 'Orange fungal growths on leaf undersides', 'Warty growths on fruit', 'Leaf yellowing and early drop', 'Cylindrical orange tubes from leaf undersides'],
    severity: 'medium',
  },
  {
    id: 'apple-scab',
    name: 'Apple Scab',
    plantType: 'Apple',
    description: 'Common fungal disease caused by Venturia inaequalis causing dark spots on leaves and fruit. Spores overwinter in fallen leaves and emerge in spring.',
    treatment: 'Apply fungicides regularly during growing season, remove fallen leaves in autumn, prune to improve airflow, thin fruit, use resistant varieties, and sanitize pruning tools.',
    symptoms: ['Olive-brown velvety spots on leaves', 'Black scabby lesions on fruit', 'Distorted leaves and fruit', 'Premature leaf drop', 'Cracks in fruit skin'],
    severity: 'medium',
  },
  {
    id: 'corn-common-rust',
    name: 'Corn Common Rust',
    plantType: 'Corn',
    description: 'Fungal disease causing rust-colored pustules on corn leaves, caused by Puccinia sorghi. Requires cool nights and warm days with high humidity.',
    treatment: 'Plant resistant or tolerant varieties, apply fungicides if weather is favorable for disease, practice crop rotation, destroy infected crop residue, and consider hybrid selection.',
    symptoms: ['Rust-colored oval pustules on leaf surfaces', 'Pustules appear on both leaf sides', 'Reddish-brown color', 'Yellow halos around pustules', 'Occurs mid to late season'],
    severity: 'low',
  },
  {
    id: 'corn-gray-leaf-spot',
    name: 'Corn Gray Leaf Spot',
    plantType: 'Corn',
    description: 'Fungal disease causing rectangular lesions on corn leaves, caused by Cercospora zeae-maydis. Can significantly reduce yields in susceptible hybrids.',
    treatment: 'Use resistant or tolerant hybrids, apply fungicides if weather is favorable, practice crop rotation, remove crop residue, avoid no-till where possible, and monitor fields regularly.',
    symptoms: ['Rectangular gray lesions with dark borders', 'Lesions aligned between leaf veins', 'Brown to tan color with dark edges', 'May have concentric rings', 'Coalesces and kills leaf tissue'],
    severity: 'medium',
  },
  {
    id: 'healthy-plant',
    name: 'Healthy Plant',
    plantType: 'General',
    description: 'The plant appears to be healthy with no visible signs of disease. Maintain good growing conditions and regular monitoring.',
    treatment: 'Continue regular maintenance: proper watering, adequate sunlight, balanced fertilization, good air circulation, and regular inspection for early signs of disease.',
    symptoms: ['Green foliage', 'No spots or lesions', 'Normal leaf appearance', 'Vigorous growth', 'No wilting or discoloration'],
    severity: 'low',
  },
];

export const mockPredictions = [
  { diseaseId: 'tomato-early-blight', confidence: 0.92 },
  { diseaseId: 'tomato-late-blight', confidence: 0.88 },
  { diseaseId: 'tomato-leaf-mold', confidence: 0.85 },
  { diseaseId: 'potato-early-blight', confidence: 0.91 },
  { diseaseId: 'apple-scab', confidence: 0.87 },
  { diseaseId: 'corn-common-rust', confidence: 0.89 },
  { diseaseId: 'healthy-plant', confidence: 0.95 },
];

export function getRandomDiseaseResult(): Disease {
  return diseases[Math.floor(Math.random() * diseases.length)];
}

export function getDiseaseById(id: string): Disease | undefined {
  return diseases.find((disease) => disease.id === id);
}

export function getDiseassByPlantType(plantType: string): Disease[] {
  return diseases.filter((disease) => disease.plantType === plantType);
}
