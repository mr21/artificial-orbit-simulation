opd = {
	render: function() {
		var	ctx = this.ctx,
			fTime = this.cnv.frameTime();
		ctx.save();
			ctx.translate(this.w / 2, this.h / 2);
				this.space.draw();
				this.earth.draw(ctx, fTime);
		ctx.restore();
	}
};
