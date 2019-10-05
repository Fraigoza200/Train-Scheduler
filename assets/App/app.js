 var Config = {
          apiKey: "AIzaSyBQy6XxbxwlcHhd-yd_xgvAKXwRDlQHypU",
          authDomain: "train-homework-8074a.firebaseapp.com",
          databaseURL: "https://train-homework-8074a.firebaseio.com",
          projectId: "train-homework-8074a",
          storageBucket: "",
          messagingSenderId: "194112307913",
          appId: "1:194112307913:web:99d806e9d1fdc8fc4f0318",
          measurementId: "G-0FYR02SR5H"
        }
        firebase.initializeApp(Config)

const db = firebase.firestore()

document.querySelector('#btn').addEventListener('click', e => {

    e.preventDefault()

    console.log("getting data")
    let trainInfo = {
        trainName: document.getElementById('trainInfo').value,
        Destination: document.getElementById('destination').value,
        trainTime: document.getElementById('trainTime').value,
        frequencies: document.getElementById('minutes').value
    }
    // console.log(trainInfo)

    db
        .collection('trains')
        .doc(trainInfo.trainName)
        .set(trainInfo)

        document.getElementById('trainInfo').value = ''
        document.getElementById('destination').value = ''
        document.getElementById('trainTime').value = ''
        document.getElementById('minutes').value = ''
})

db
.collection('trains')
.onSnapshot(({ docs }) => {
    console.log("hi")
    docs.forEach(train =>{
        console.log(train)
        let {trainName, Destination, trainTime,frequencies} = doc.data()
        console.log(doc.data())
            let trainElem = document.createElement('class')
            trainElem.innerHTML = `<tbody>
            <tr>
              <th scope="row">1</th>
              <td>${trainInfo}</td>
              <td>${destination}</td>
              <td>${trainTime}</td>
              <td>${minutes}
            </tr>
          </tbody>`

          document.querySelector('.table').append(trainElem)
    })
})

