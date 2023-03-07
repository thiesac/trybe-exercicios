const employeesData = (fullName) => {
    // fullName.split(' ').join('_');
    // fullName.replace(' ', '_');
    // console.log(fullName)
    const createEmail = (`${fullName}@trybe.com`).toLowerCase().replace(' ', '_');
    // createEmail.split(' ').join('_');
    console.log(createEmail);
    return createEmail
}

employeesData('Mafalda Forofa');

const newEmployees = (employeesData) => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

