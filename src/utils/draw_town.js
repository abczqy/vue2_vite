/*
 * @Author: L
 * @Date: 2022-10-31 12:25:14
 * @LastEditTime: 2023-03-03 11:36:25
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import { pointsToDegreesArray } from "@/utils/index";
// 渠道
import {
	panlian_town,
	deshi_town,
	salian_town,
	baima_town,
	caochang_town,
	wanqiu_town,
	yakou_town,
    malong_town,
	binggu_town,
	xinshan_town,
	puwei_town,
	// baipo_town
} from "@/utils/town_path";

const _town_path_obj = {
    panlian_town,
    deshi_town,
    salian_town,
    baima_town,
    caochang_town,
    wanqiu_town,
    yakou_town,
    malong_town,
    binggu_town,
    xinshan_town,
    puwei_town,
    // baipo_town
}


/**
 * 
 * @param {string} map_show_mode road 
 */

export function __map_init_bg(map_show_mode, Cesium, cesium_entities_removeById, viewer) {
    const sk_material = Cesium.Color.fromCssColorString("#C6FFC5");
    const keys = Object.keys(_town_path_obj);
    const value = Object.values(_town_path_obj);
    const len = keys.length;
    for (let i = 0; i < len; i++) {
        createLine(keys[i], value[i],Cesium, cesium_entities_removeById, viewer,sk_material)
    }
}

//移除所有区县描线
export function __remove_map_town_path(cesium_entities_removeById) {
    const keys = Object.keys(_town_path_obj);
    const len = keys.length;
    for (let i = 0; i < len; i++) {
        const new_item_id = keys[i];
        cesium_entities_removeById(new_item_id);
    }
}


function createLine(name, path,Cesium, cesium_entities_removeById, viewer,sk_material) {
    const new_item_id = name;
    cesium_entities_removeById(new_item_id);
    const path_DA = pointsToDegreesArray(path);
    const c_path = Cesium.Cartesian3.fromDegreesArray(path_DA);
    // console.log(c_path);
    viewer.entities.add({
        id: new_item_id,
        polyline: {
            show: true,
            positions: c_path,
            width: 2,
            material: sk_material,
            clampToGround: true,
        },
        label: {
            text: new_item_id,
        },
    });
}

