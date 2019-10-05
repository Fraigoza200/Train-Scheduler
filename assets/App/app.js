document.getElementById('btn').addEventListener('click', e => {
    e.preventDefault()

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
.onSnapshot(({docs}) => {
    docs.forEach(train =>{
        console.log(train)
        // let {trainName, Destination, trainTime,frequencies} = doc.data

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

