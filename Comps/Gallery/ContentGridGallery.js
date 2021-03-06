import React from 'react'
import ImageCard from '../ImageComps/ImageCard';
import styles from './ContentGridGallery.module.scss'
export default function ContentGridGallery(props) {
    let {images} = props;

    images = grid_layout_mixer(images);

    return (
        <div className={styles.gridcon}>
            {
                images.map((img,i) => {

                    let girdstyle = {
                        display: 'grid',
                        gridArea: `${i+1} / 1 / auto / auto`
                    }

                    if(typeof img === 'object'){
                        return (
                            <div key={i} style={girdstyle}>
                                <div className={styles.gridholder}>
                                    {
                                        img.map((image,i) => {
                                            return (
                                                <div className={styles.gridrow} key={i}>
                                                    <div className={styles.imagecon}>
                                                        <ImageCard src={image} />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }else{
                        return (
                            <div key={i} style={girdstyle}>
                                <div className={styles.gridrow}>
                                    <div className={styles.imagecon}>
                                        <ImageCard src={img} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

function grid_layout_mixer(sets){

    let total = sets.length;

    let li = 0;
    let arr = [];
    for(let i = 0; i < total; i ++){
        if(li < total){

            if( i % 3 === 0 && i !== 0){
                let end_index = li +1;
                let start_item = sets[li];
                let end_item = sets[end_index];
                let inner = (typeof end_item !== 'undefined')
                    ?   [start_item, end_item]
                    :   start_item;

                arr.push(inner);
                li = end_index + 1;
            }else{

                arr.push(sets[li]);
                li ++;
            }  

        }
    }
    return arr
}
