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

                    if(img.length == 2){
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
                                        <ImageCard src={img[0]} />
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

    let total = sets.length, res = [];
    for(let i = 0; i<total; i++){
        if( i%4 != 3 ){
            let tem = [sets[i]];
            if( i%4 == 2 && (total > (i+1))){
                tem.push(sets[i+1]);
            }
            res.push(tem);
        }
    }
    return res;
}
