const bloodCompatibility = {
    'A+': { donates_to: ['A+', 'AB+'], receives_from: ['A+', 'A-', 'O+', 'O-'] },
    'O+': { donates_to: ['O+', 'A+', 'B+', 'AB+'], receives_from: ['O+', 'O-'] },
    'B+': { donates_to: ['B+', 'AB+'], receives_from: ['B+', 'B-', 'O+', 'O-'] },
    'AB+': { donates_to: ['AB+'], receives_from: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
    'A-': { donates_to: ['A+', 'A-', 'AB+', 'AB-'], receives_from: ['A-', 'O-'] },
    'O-': { donates_to: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'], receives_from: ['O-'] },
    'B-': { donates_to: ['B+', 'B-', 'AB+', 'AB-'], receives_from: ['B-', 'O-'] },
    'AB-': { donates_to: ['AB+', 'AB-'], receives_from: ['AB-', 'A-', 'B-', 'O-'] },
};

function testBlood() {
    const donorName = document.getElementById('donorName').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const diseaseFree = document.getElementById('diseaseFree').value;

    const testingResult = document.getElementById('testingResult');
    if (diseaseFree === 'yes') {
        testingResult.textContent = `${donorName}'s blood group is ${bloodGroup} and is free from diseases.`;
        testingResult.style.color = 'green';
        setTimeout(() => {
            showCompatibilityForm(bloodGroup);
        }, 5000);
    } else {
        testingResult.textContent = `${donorName}'s blood group is ${bloodGroup} but it is not free from diseases.`;
        testingResult.style.color = 'red';
    }
}

function showCompatibilityForm(bloodGroup) {
    document.getElementById('testingSection').style.display = 'none';
    document.getElementById('compatibilitySection').style.display = 'block';
    document.getElementById('donor').value = bloodGroup;
}

function checkCompatibility() {
    const donor = document.getElementById('donor').value;
    const recipient = document.getElementById('recipient').value;

    const canDonate = bloodCompatibility[donor].donates_to.includes(recipient);
    const canReceive = bloodCompatibility[recipient].receives_from.includes(donor);

    const resultElement = document.getElementById('result');
    if (canDonate && canReceive) {
        resultElement.textContent = `Yes, ${donor} can donate to ${recipient} and ${recipient} can receive from ${donor}.`;
        resultElement.style.color = 'green';
    } else if (canDonate) {
        resultElement.textContent = `Yes, ${donor} can donate to ${recipient}.`;
        resultElement.style.color = 'green';
    } else if (canReceive) {
        resultElement.textContent = `Yes, ${recipient} can receive from ${donor}.`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `No, ${donor} cannot donate to ${recipient} and ${recipient} cannot receive from ${donor}.`;
        resultElement.style.color = 'red';
    }
}
