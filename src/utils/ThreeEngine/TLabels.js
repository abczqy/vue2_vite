/*
 * @Author: L
 * @Date: 2022-05-16 15:56:11
 * @LastEditTime: 2022-07-05 15:32:30
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import { Sprite, SpriteMaterial, Texture} from 'three';
import {  CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import {  CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
// import { pic } from './TTextures'

export const label_List = []

const tag_info = [
    {
        title: 'GNSS(0+50)',
        x: '2.3mm',
        y: '2.3mm',
        z: '2.3mm',
    },
    {
        title: 'GNSS(0+100)',
        x: '2.3mm',
        y: '2.3mm',
        z: '2.3mm',
    },
    {
        title: 'GNSS(0+150)',
        x: '2.3mm',
        y: '2.3mm',
        z: '2.3mm',
    },
    {
        title: 'GNSS(0+200)',
        x: '2.3mm',
        y: '2.3mm',
        z: '2.3mm',
    },
    {
        title: 'GNSS(0+250)',
        x: '2.3mm',
        y: '2.3mm',
        z: '2.3mm',
    },
]

const tag_info2 = [
    {
        title: '渗压(0+50)',
        frontValue: '6.2m',
        topValue: '5.2m',
        middleValue: '4.2m',
        bottomValue: '1.2m'
    },
    {
        title: '渗压(0+100)',
        frontValue: '6.2m',
        topValue: '5.2m',
        middleValue: '4.2m',
        bottomValue: '1.2m'
    },
    {
        title: '渗压(0+150)',
        frontValue: '6.2m',
        topValue: '5.2m',
        middleValue: '4.2m',
        bottomValue: '1.2m'
    },
    {
        title: '渗压(0+200)',
        frontValue: '6.2m',
        topValue: '5.2m',
        middleValue: '4.2m',
        bottomValue: '1.2m'
    },
    {
        title: '渗压(0+250)',
        frontValue: '6.2m',
        topValue: '5.2m',
        middleValue: '4.2m',
        bottomValue: '1.2m'
    },
    
    
]

function add_tags() {

    // tag_info.forEach((item, index, arr) => {
    //     // css2d
    //     const divEle = document.createElement('div');
    //     divEle.innerHTML = `
    //     <div class="tag_container">
    //         <div class="tag_header">
    //             ${ item.title }
    //         </div>
    //         <div class="tag_body">
    //             <span>X:${ item.x }</span>
    //             <span>Y:${ item.y }</span>
    //             <span>Z:${ item.z }</span>
    //         </div>
    //         <div class="line"></div>
    //         <div class="circle"></div>
    //     </div>
    //     `;
    //     // const label_one = new CSS3DObject(div)
    //     const label_one = new CSS2DObject(divEle)
    //     label_one.position.x = 0
    //     label_one.position.y = 20
    //     label_one.position.z = -30 + index * 30
    //     label_List.push(label_one)
    // })

    // tag_info2.forEach((item, index, arr) => {
    //     const divContainer = document.createElement('div');
    //     divContainer.innerHTML = `
    //     <div class="tag_box">
    //         <div class="tag_header">
    //             ${ item.title }
    //         </div>
    //         <div class="tag_body">
    //             <span>迎水:${ item.frontValue }</span>
    //             <span>坝上:${ item.topValue }</span>
    //             <span>坝腰:${ item.middleValue }</span>
    //             <span>坝底:${ item.bottomValue }</span>
    //         </div>
    //         <div class="line"></div>
    //         <div class="tag_circle"></div>
    //     </div>
    //     `

    //     const label_temp = new CSS2DObject(divContainer)
    //     label_temp.position.x = 22
    //     label_temp.position.y = 20
    //     label_temp.position.z = -30 + index * 30
    //     label_List.push(label_temp)
    // })


    const divEle = document.createElement('div');
        divEle.innerHTML = `
        <div style="background: #ffffff ">
            hello world
        </div>
        `;
        // const label_one = new CSS3DObject(div)
        const label_one = new CSS2DObject(divEle)
        label_one.position.x = 0
        label_one.position.y = 20
        label_one.position.z = 30
        label_List.push(label_one)
    
}

add_tags()
    



let canvas = document.createElement("canvas");
canvas.width = 200;
canvas.height = 100
let context =canvas.getContext("2d");
context.font = "Bold 40px Georgia";
context.fillStyle = "red";
context.fillText('你好', 0, 40);
// context.fillText(100, 0, 90);


let spritelTexture = new Texture(canvas);
spritelTexture.needsUpdate = true;

//Sprite
const spriteMaterial = new SpriteMaterial({
    map: spritelTexture,//设置精灵纹理贴图
    depthTest: false,
});
// 创建精灵模型对象
const sprite = new Sprite(spriteMaterial);
// const sprite = new Sprite(div);
// 控制精灵大小
sprite.scale.set(20, 20, 1); //// 只需要设置x、y两个分量就可以
sprite.position.set(30, 20, 0)

label_List.push(sprite)


