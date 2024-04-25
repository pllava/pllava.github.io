import lightGallery from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4";

import lgVideo from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4/plugins/video";

lightGallery(document.getElementById("gallery-container"), {
  speed: 500,
  plugins: [lgVideo]
});



import lgZoom from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/zoom";
import lgThumbnail from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/thumbnail";

console.log(lgVideo, 'lgVideo')



const $lgInlineVideoContainer = document.getElementById(
    'inline-video-gallery-container',
);

if ($lgInlineVideoContainer) {
    const _inlineGallery = lightGallery($lgInlineVideoContainer, {
        container: $lgInlineVideoContainer,
        dynamic: true,
        thumbnail: true,
        swipeToClose: false,
        // addClass: 'lg-inline',
        mode: 'lg-scale-up',
        slideShowAutoplay: true,
        hash: false,
        pager: false,
        closable: false,
        showMaximizeIcon: true,
        rotate: false,
        download: false,
        slideDelay: 400,
        plugins: [lgThumbnail, lgVideo],
        // appendSubHtmlTo: '.lg-item',
        dynamicEl: [
           {
                src: 'https://www.youtube.com/watch?v=NVKtsaG3EKA',
                subHtml: `The video appears to be a creative or artistic manipulation that combines elements of surfing with an indoor architectural setting. It shows a person surfing on a large wave, which is an unusual sight because waves of that size are typically found in the ocean and not in a building. The setting is a grand room with high ceilings and ornate decorations, which is not a typical environment for surfing. This juxtaposition of a natural outdoor activity with an indoor architectural space creates an unusual and surreal visual effect.`,
            },
            {
                src: 'https://www.youtube.com/watch?v=nL1qqVEKtDg',
                subHtml: `The video depicts a woman walking down a street at night. She is wearing a black leather jacket and sunglasses, and she is carrying a black purse. The street is wet, suggesting that it has recently rained. There are other people in the background, but they are not the focus of the video. The woman appears to be the main character, and she is walking with purpose. The overall atmosphere of the video is dark and moody`,
            },
            {
                src: 'https://www.youtube.com/watch?v=maCWAoEcUxE',
                subHtml: `The video captures a dynamic scene at a skate park during sunset. The main focus is a skateboarder performing a trick on a ramp. The skateboarder is dressed in casual attire, including jeans and sneakers, and is wearing a watch on their left wrist. The skateboarder is in mid-air, with their skateboard beneath them, indicating that they are in the midst of executing a trick. The background of the video features a fence and trees, adding depth to the scene. The overall atmosphere of the video is energetic and vibrant, with the warm hues of the sunset creating a striking contrast against the cool tones of the skate park.`,
            },
            {
                src: 'https://www.youtube.com/watch?v=SjEJKhyCvoQ',
                subHtml: `The video features a man engaging in an outdoor activity. He is wearing a blue shirt and orange shorts, and is equipped with a harness and ropes, suggesting that video is not clearly visible, but it seems to be an open outdoor space with a clear sky. The man appears to be in motion, possibly jumping or moving around the ball. he might be involved in a sport or activity that requires safety gear. The man is standing on a surface covered with colorful balls, which appear to be bouncing around him.`,
            },
            {
                src: 'https://www.youtube.com/watch?v=EziG2lSGU7o',
                subHtml: `The video captures a bustling city street scene, likely in a downtown area. The background is filled with tall buildings, suggesting a dense urban environment. The street is busy with pedestrians, some of whom are carrying backpacks, indicating that they might be commuters or tourists. The people are walking in various directions, some crossing the street, while others are walking along the sidewalk. The characters in the video are diverse, with individuals of different ages and styles of dress. Some are walking alone, while others are in groups. The actions of the people suggest a typical day in the city, with people going about their daily routines.\n\nOverall, the video provides a snapshot of urban life, capturing the hustle and bustle of a busy city street`,
            },
            {
                src: 'https://www.youtube.com/watch?v=1HQltzUJLRo',
                subHtml: `The video depicts a serene natural scene with a large tree standing in the middle of a body of water, possibly a river or a lake. The tree appears to be surrounded by water, with its reflection visible on the water's surface. In the background, there are several huts or houses built on stilts, suggesting a community living in this area. The sky is partly cloudy, indicating a changeable weather condition. The overall atmosphere of the video is calm and peaceful, with no visible human activity or movement`,
            },
            {
                src: 'https://www.youtube.com/watch?v=mqIhaq60TyA',
                subHtml: `这个视频显示了一个年轻男性在室内跳舞。他穿着一件黑色毛衣和灰色长裤，戴着一条项链。他的舞蹈动作包括踢腿、旋转和手势。他看起来很自信，并且舞蹈动作流畅。
                我对视频中人物的看法是，他是一个很有才华的舞者。他的舞蹈动作流畅，并且看起来很有自信。他的舞蹈风格看起来很现代，并且他的舞蹈动作看起来很有力量。总的来说，他是一个很有才华的舞者，并且他的舞蹈风格很有吸引力。
                
                在视频中，篮球起到了一个道具的作用，用于配合舞蹈动作。视频中的男子在跳舞时，将篮球抛起，然后接住，以此来增加舞蹈的动感和活力。篮球的运用使得舞蹈更加生动有趣，同时也展示了男子的舞蹈技巧和协调能力。
                `,
            },
        ],});
    _inlineGallery.openGallery();
}