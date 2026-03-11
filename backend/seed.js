const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Load models
const Hospital = require('./models/Hospital');
const Medicine = require('./models/Medicine');

// Connect to DB
mongoose.connect(process.env.MONGODB_URI);

// Import data
const hospitals = [
  {
    name: 'City Care General Hospital',
    address: '123 Health Ave, Central District',
    city: 'New York',
    rating: 4.8,
    reviews: 1250,
    specializations: ['Cardiology', 'Neurology', 'Pediatrics'],
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'St. Mary Specialized Clinic',
    address: '456 Wellness Blvd, North Side',
    city: 'Chicago',
    rating: 4.6,
    reviews: 840,
    specializations: ['Orthopedics', 'Dermatology'],
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Metro Heart Institute',
    address: '789 Life St, South Plaza',
    city: 'San Francisco',
    rating: 4.9,
    reviews: 2100,
    specializations: ['Cardiology', 'Surgery'],
    imageUrl: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800'
  }
];

const medicines = [
  {
    name: 'Amoxicillin 500mg',
    description: 'Broad-spectrum antibiotic used to treat various bacterial infections.',
    price: 12.50,
    tags: ['Antibiotic', 'Bestseller'],
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Ibuprofen 200mg',
    description: 'Pain reliever and fever reducer used for headaches, muscle aches, and more.',
    price: 8.99,
    tags: ['Pain Relief'],
    imageUrl: 'https://images.unsplash.com/photo-1550572017-ed20015ade0e?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Vitamin D3 Supplement',
    description: 'High-potency vitamin D for bone health and immune support.',
    price: 15.25,
    tags: ['Wellness', 'New'],
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-ad599f5732a0?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Loratadine 10mg',
    description: 'Non-drowsy antihistamine for allergy relief from sneezing and watery eyes.',
    price: 10.50,
    tags: ['Allergy'],
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=300&q=80'
  }
];

// Load into DB
const importData = async () => {
  try {
    await Hospital.create(hospitals);
    await Medicine.create(medicines);

    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Hospital.deleteMany();
    await Medicine.deleteMany();

    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
