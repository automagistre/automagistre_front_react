import React from 'react'
import {data} from '../../../../../../vars/texts/sec_data/sec_features_data'

class FutureSecItems extends React.Component {
    renderFutureItems = items => items.map((value) => {
        const cls = "feature__icon feature__icon icon-f_" + value.img;
        return (
            <li className="feature sec-features__item">
                <i className={cls} />
                <h3 className="feature__title">{value.title}</h3>
                <div className="feature__note">{value.note}</div>
            </li>
        )
    });

    render() {
        return (
          <ul className="sec-features__list">
              { this.renderFutureItems(data) }
          </ul>
        )
      }

}

export default FutureSecItems