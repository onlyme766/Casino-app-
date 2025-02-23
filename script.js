const diceElement = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');
const resultElement = document.getElementById('result');

rollButton.addEventListener('click', () => {
    // ডাইস রোল করুন (1 থেকে 6 পর্যন্ত র্যান্ডম সংখ্যা)
    const diceValue = Math.floor(Math.random() * 6) + 1;
    
    // ডাইস ভিজুয়াল আপডেট করুন
    diceElement.textContent = getDiceFace(diceValue);
    
    // রেজাল্ট দেখান
    resultElement.textContent = `You rolled a ${diceValue}`;
});

function getDiceFace(diceValue) {
    // ডাইস ভ্যালু অনুযায়ী ইমোজি রিটার্ন করুন
    const diceFaces = {
        1: '⚀',
        2: '⚁',
        3: '⚂',
        4: '⚃',
        5: '⚄',
        6: '⚅'
    };
    return diceFaces[diceValue];
}