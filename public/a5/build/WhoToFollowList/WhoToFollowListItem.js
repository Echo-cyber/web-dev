
const WhoToFollowListItem = (who) => {
    return (`
            <div class="row">
                <div class="col-12 col-xl-2 col-lg-3">
                    <img class="rounded-circle" src=${who.avatarIcon} width="40px" height="40px">
                </div>

                <div class="col-12 col-xl-7 col-lg-5">
                    <div>${who.userName} <i class="fas fa-check-circle"></i></div>
                    <small class="text-muted">@ ${who.handle}</small>
                </div>

                <div class="col-12 col-xl-3 col-lg-4">
                    <button type="button" class="btn btn-primary">Follow</button>
                </div>
            </div>
    `);
}

export default WhoToFollowListItem;