import React from 'react'

export default function Subscribe() {
  return (
    <div id="gtco-subscribe">
		<div className="gtco-container">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 text-center gtco-heading">
					<h2>Subscribe</h2>
					<p>Be the first to know about the new templates.</p>
				</div>
			</div>
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2">
					<form className="form-inline">
						<div className="col-md-6 col-sm-6">
							<div className="form-group">
								<label htmlFor="email" className="sr-only">Email</label>
								<input type="email" className="form-control" id="email" placeholder="Your Email"/>
							</div>
						</div>
						<div className="col-md-6 col-sm-6">
							<button type="submit" className="btn btn-default btn-block">Subscribe</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
  )
}
