export interface AvailableOption {
    id: string;
    name: string;
    applies_to: string;
    applies_every: string;
    type: string;
    selected_option_id: string;
    min: number;
    max: number;
    amount: number;
    amount_per_option: Price;
}
export interface Hotel {
    version: number;
    hotel_id: string;
    hotel_name: string;
    hotel_types: Array<string>;
    description: string;
    city: string;
    areas: Array<string>;
    star: string;
    telephone: string;
    fax: string;
    address: string;
    amenities: Array<string>;
    remarks: Array<string>;
    location: Location;
    room_classes: Array<RoomClass>;
    children_age_to: number;
    children_age_from: number;
    room_class_sequence_number: number;
    reservation_email: string;
    official_email: string;
    allotment_email: string;
    sales_email: string;
    finance_email: string;
    payee_id: string;
    images: Array<HotelImage>;
    default_currency: string;
    seasons: Array<any>
    applicable_rate_providers: Array<string>;
    translations: {
        hotel_name: Translations;
        description: Translations;
    };
    search_cache_status: boolean;
    paid_advert: boolean;
    id: string;
    created_date: string;
    last_updated_date: string;
}
export interface HotelImage {
    room_class_id?: string;
    image_url: string;
    thumbnail_url: string;
    primary: boolean;
}

export interface HotelResultSummary {
    hotel_id: string;
    name: string;
    address: string;
    city: string;
    phone: string;
    star: string;
    images: Array<HotelImage>;
    remark: string;
    location: Location;
    date_from: string;
    date_to: string;
    rejected_reasons: Array<string>;
    currency: string;
    thumbnail: string;
    areas: Array<string>;
    amenities: Array<string>;
    hotel_types: Array<string>;
    translations: {
        hotel_name: Translations;
        description: Translations
    };
    cached: boolean;
    state: 'INSTANT' | 'ON_REQUEST';
    promotion_tags: Array<string>;
    promotion_types: Array<string>;
    cheapest_price: string;
    best_offer_price: string;
    low_cost_price: string;
    instant_price: string;
    low_cost_samples: Array<SampleSummary>;
    instant_samples: Array<SampleSummary>;
    best_offer_samples: Array<SampleSummary>
}

export interface BedRoom {
    room_id: string;
    max_occupancy: number;
    max_adults: number;
    max_children: number;
    bed_combinations: Array<{ [bedType: string]: number }>
    extra_bed: {
        extra_bed_id: string;
        max_occupancy: number;
        max_adults: number;
        max_children: number;
        bed_combinations: Array<{ [bedType: string]: number }>
    }
}

export interface RoomClassResult {
    room_class_id: string;
    room_class_name: string;
    samples: Array<Sample>;
    bed_types: string;
    cancellation_deadline: string;
    max_occupancy: number;
    max_total_occupancy: number;
    max_adult: number;
    max_child: number;
    child_can_consume_spare: true;
    availability: 'INSTANT' | 'ON_REQUEST';
    min_room_left: string;
    rooms: Array<BedRoom>;
    translations: {
        room_class_name: Translations
    };
    occupancy_solutions: Array<OccupancySolution>
}

export interface Room {
    index: string;
    adults: number;
    children: Array<string>;
    room_classes: Array<RoomClassResult>;
}

export interface HotelResult {
    hotel_id: string;
    name: string;
    address: string;
    city: string;
    phone: string;
    star: string;
    images: Array<HotelImage>;
    remark: string;
    location: Location;
    date_from: string;
    date_to: string;
    room: Array<Room>;
    rejected_reasons: Array<string>;
    currency: string;
    thumbnail: string;
    areas: Array<string>;
    amenities: Array<string>;
    hotel_types: Array<string>;
    applicable_rate_providers: Array<string>;
    translations: {
        hotel_name: Translations;
        description: Translations;
    };
    cached: boolean;
    state: 'INSTANT' | 'ON_REQUEST';
    promotion_tags: Array<string>;
    promotion_types: Array<string>;
    cheapest_price: string;
    best_offer_price: string;
    low_cost_price: string;
    instant_price: string;
    low_cost_samples: Array<SampleSummary>;
    instant_samples: Array<SampleSummary>;
    best_offer_samples: Array<SampleSummary>;
}

export interface Location {
    latitude: string;
    longitude: string;
}

export interface Night {
    date: string;
    amount_per_night: Price;
    rooms_left: string;
    selected_options: Array<SelectedOption>;
    total_amount_per_night: Price;
}

export interface OccupancySolution {
    id: string;
    adults_in_main_beds: number;
    adults_in_extra_beds: number;
    children_in_main_beds: number;
    children_in_extra_beds: number;
    empty_extra_beds: number;
    children_consuming_spare_resources: number;
    weight: number;
}

export interface Price {
    amount: string;
    currency: string;
}

export interface RoomClass {
    room_class_id: string;
    room_class_name: string;
    order: number;
    max_total_occupancy: number;
    max_child_occupancy: number;
    max_occupancy: number;
    max_adults: number;
    max_children: number;
    mix_child_in_main_bed_if_adult_in_extra_bed: boolean;
    child_can_consume_spare_resources: boolean;
    child_extra_bed_compulsory: boolean;
    translations: {
        room_class_name: Translations
    };
    rooms: Array<BedRoom>
}

export interface Sample {
    sample_name: string;
    provider_id: string;
    provider_allotment_containers: Array<{
        allotment_provider: string;
        provider_container_id: string;
        min_room_left: number;
    }>;
    is_promotion: boolean;
    availability: 'INSTANT' | 'ON_REQUEST';
    sample_id: string;
    room_no: number;
    selected_occupancy_solution_id: string;
    available_options: Array<AvailableOption>;
    rate_code: string;
    cancellation_deadline: string;
    nights: Array<Night>;
    total_amount: Price;
    rate_plan_code: string;
    rate_plan_name: string;
    min_rooms_left: string;
    room_left: string;
    is_have_extra_bed: false;
    adult_main_bed: number;
    child_main_bed: number;
    child_main_bed_with_consume_spare_resource: number;
    adult_extra_bed: number;
    child_extra_bed: number;
    room_class_id: string;
    room_class_name: string;
    child_can_consume_spare: true;
    number_of_adult: number;
    number_of_child: number;
    number_of_adult_after_use_spare: number;
    number_of_child_after_use_spare: number;
    allow_external_extra_bed_and_child_policy: true;
    extra_bed_option: {
        child_extra_bed_price: string;
        adult_extra_bed_price: string;
        currency: string;
    };
    ignore_extra_person_rate_for_child: false;
    dont_send_extra_person: false;
    translations: {
        sample_name: Translations
    }
}

export interface SampleSummary {
    room_index: string;
    sample_id: string;
}

export interface SelectedOption {
    name: string;
    applies_to: string;
    applies_every: string;
    compulsory: true;
    type: string;
    amount_per_option: {
        amount: string;
        currency: string;
    };
    translations: {
        name: Translations
    };
    selected_option_id: string;
    min: number;
    max: number;
}

export interface Criteria {
    from: string;
    to: string;
    hotel_ids?: Array<string>;
    city?: string
    room_class_ids?: Array<string>;
    customer_country: string;
    rooms: Array<{
        adults: number;
        children: Array<number>
    }>;
    instant_confirm_only: boolean;
}



export interface Translations {
    th_TH: string;
    zh_HK: string;
    zh_CN: string;
    ko_KR: string;
    ja_JP: string;
}

export interface Booking {
    invoice_no: string;
    booking_id: string;
    document_type: string;
    city: string;
    agent_id: string;
    user_id: string;
    hotel_id: string;
    hotel_name: string;
    hotel_address: string;
    hotel_phone: string;
    ttid: string;
    booking_date: string;
    from_date: string;
    to_date: string;
    cancellation_deadline: string;
    promotion_container_id: string;
    flight_information: {

    };
    remarks: Array<string>;
    rooms: Array<{
        no: number;
        guests: Array<{
            title: string;
            first_name: string;
            last_name: string;
            age: number;
        }>;
        nights: Array<{
            date: string;
            amount_per_night: {
                amount: string;
                currency: string;
            };
            sale_amount_per_night: {
                amount: string;
                currency: string;
            };
            rooms_left: string;
            available_options: Array<{
                id: string;
                name: string;
                applies_to: string;
                applies_every: string;
                compulsory: true;
                include_breakfast: false;
                charge_first_child: false;
                type: string;
                translations: {
                    name: Translations
                };
                selected_option_id: string;
                min: number;
                max: number;
                amount: number;
                amount_per_option: {
                    amount: string;
                    currency: string;
                }
            }>;
            selected_options: Array<{
                id: string;
                name: string;
                applies_to: string;
                applies_every: string;
                compulsory: true;
                include_breakfast: false;
                charge_first_child: false;
                type: string;
                amount_per_option: {
                    amount: string;
                    currency: string;
                };
                sale_amount_per_option: {
                    amount: string;
                    currency: string;
                };
                selected_option_id: string;
                min: number;
                max: number;
            }>;
            total_amount_per_night: {
                amount: string;
                currency: string;
            };
            total_sale_amount_per_night: {
                amount: string;
                currency: string;
            }
        }>;
        room_class: {
            id: string;
            name: string;
            max_occupancy: string;
            room_left: string;
        };
        room_type: string;
        promotion_container: {
            name: string;
            id: string;
            promotions: Array<{
                defaultOrder: number;
                type: string;
                id: string;
                code: string;
                is_force_combine: boolean;
                is_exclusive_combine: boolean;
                is_inflexible: boolean;
                applicable_from: string;
                applicable_to: string;
                market: string;
                early_birds_days: number;
                minimum_rooms: number;
                maximum_night_stay: number;
                minimum_night_stay: number;
                minimum_night_stay_apply_inside_promotion: boolean;
                maximum_applied_nights: number;
                applicable_days_of_weeks: Array<string>;
                applicable_room_classes: Array<string>;
                promotion_charges: Array<any>;
                blackout_periods: Array<any>;
                currency_code: string;
                maximum_rooms: number;
                order: number;
            }>;
            applicable_rate_providers: Array<string>;
            promotion_allotment_enabled: boolean;
            show_cheapest_price_only: boolean;
            using_promotion_allotment_provider_map: {

            };
            code: string;
            promotion_tags: Array<string>;
            agents: Array<any>;
            translations: {
                name: Translations;
                description: Translations
            }
        };
        total_price: {
            currency_code: string;
            display_price: string;
        };
        rate_code: string;
        applied_promotion: string;
        adults: string;
        real_adults_for_reserved: string;
        children: string;
        children_age: Array<number>;
        permanent_allotment_success: boolean;
        hotel_discount_percentage: string;
        availability: string;
        conversion_rate_as_gson_table: string;
    }>;
    booking_state: string;
    agent_recipient_list: Array<string>;
    total_price: {
        currency_code: string;
        display_price: string;
    };
    agent_reference: string;
    track_price: Array<any>;
    availability: string;
    currency: string;
    instant_confirm_only: boolean;
    is_booked: boolean;
    agent_type: string;
    cancellation_ids: Array<string>;
    child_age_from: number;
    child_age_to: number;
    id: string;
}

export interface RequestPayload {
    id: string;
    ttid: string;
    origin: string;
}

export interface Country {
    code: string;
    country_id: string;
    id: string;
    name: string;
    translations: {
        name: Translations
    }
}

export interface City {
    code: string;
    country_id: string;
    id: string;
    name: string;
    translations: {
        name: Translations
    }
}
