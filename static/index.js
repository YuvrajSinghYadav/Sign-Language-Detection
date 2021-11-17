const webcamElement = document.getElementById("webCam");
        const canvasElement = document.getElementById("canvas");
        const cam = new Webcam(webcamElement, 'user', canvasElement);
        cam.start()
            .then(result => {
                console.log("webcam started");
            })
            .catch(err => {
                console.log(err);
            });

        function takeAPicture() {

            var picture = cam.snap();
            document.querySelector('takePhoto').href = picture;
        }

        function clearCanvas() {
            var canvasPicture = document.getElementById('canvas');
            var context = canvasPicture.getContext('2d');
            context.clearRect(0, 0, 300, 300);
        }


        const realBtn = document.getElementById('realButton');
        const customBtn = document.getElementById('customButton');

        customBtn.addEventListener('click', function () {
            realBtn.click();
        });
