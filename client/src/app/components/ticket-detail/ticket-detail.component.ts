export class TicketDetailComponent {
  ticketId: number;
  ticketDetails: any;

  constructor(private ticketService: TicketService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ticketId = +params['id'];
      this.getTicketDetails();
    });
  }

  getTicketDetails(): void {
    this.ticketService.getTicketById(this.ticketId).subscribe(
      data => {
        this.ticketDetails = data;
      },
      error => {
        console.error('Error fetching ticket details', error);
      }
    );
  }
}