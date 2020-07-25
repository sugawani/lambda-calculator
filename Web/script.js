let func = () => {
    window.alert('hello world');
}

let addition = async () => {
    const url = 'https://n47n91mso0.execute-api.ap-northeast-1.amazonaws.com/default/aws-toolkit-lambda-test';
    let result = await fetch(url);
    console.log(result.json());
}