import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

// Promisify GET
const getAsync = promisify(client.get).bind(client);

// Function to set a new school (same as Task 2)
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

// Function to display a school value using async/await
async function displaySchoolValue(schoolName) {
  const value = await getAsync(schoolName);
  console.log(value);
}

// Calls required by the task
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

