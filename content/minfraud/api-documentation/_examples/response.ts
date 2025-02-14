export const score = {
  disposition: {
    action: 'accept',
    reason: 'default',
    rule_label: 'my_custom_rule',
  },
  funds_remaining: 25.00,
  id: '5bc5d6c2-b2c8-40af-87f4-6d61af86b6ae',
  ip_address: {
    risk: 0.01,
  },
  queries_remaining: 5000,
  risk_score: 0.01,
  warnings: [
    {
      code: 'INPUT_INVALID',
      input_pointer: '/shipping/city',
      warning: 'Encountered value at /shipping/city that does not meet the required constraints',
    },
  ],
};

export const insights = {
  ...score,
  billing_address: {
    distance_to_ip_location: 100,
    is_in_ip_country: true,
    is_postal_in_city: true,
    latitude: 37.545,
    longitude: -122.421,
  },
  billing_phone: {
    country: "US",
    is_voip: true,
    network_operator: "Verizon/1",
    number_type: "fixed",
  },
  credit_card: {
    brand: 'Visa',
    country: 'US',
    is_business: true,
    is_issued_in_billing_address_country: true,
    is_prepaid: true,
    is_virtual: true,
    issuer: {
      matches_provided_name: true,
      matches_provided_phone_number: true,
      name: 'Bank of America',
      phone_number: '800-732-9194',
    },
    type: 'credit',
  },
  device: {
    confidence: 99,
    id: '7835b099-d385-4e5b-969e-7df26181d73b',
    last_seen: '2016-06-08T14:16:38Z',
    local_time: '2018-01-02T10:40:11-08:00',
  },
  disposition: {
    action: 'accept',
    reason: 'default',
    rule_label: 'my_custom_rule',
  },
  email: {
    domain: {
      first_seen: '2015-01-20',
    },
    first_seen: '2016-02-03',
    is_disposable: false,
    is_free: false,
    is_high_risk: true,
  },
  ip_address: {
    ...score.ip_address,
    city:  {
      confidence:  25,
      geoname_id: 54321,
      names:  {
        de:    'Los Angeles',
        en:    'Los Angeles',
        es:    'Los Ángeles',
        fr:    'Los Angeles',
        ja:    'ロサンゼルス市',
        'pt-BR':  'Los Angeles',
        ru:    'Лос-Анджелес',
        'zh-CN': '洛杉矶',
      },
    },
    continent:  {
      code:       'NA',
      geoname_id: 123456,
      names:  {
        de:    'Nordamerika',
        en:    'North America',
        es:    'América del Norte',
        fr:    'Amérique du Nord',
        ja:    '北アメリカ',
        'pt-BR': 'América do Norte',
        ru:    'Северная Америка',
        'zh-CN': '北美洲',

      },
    },
    country:  {
      confidence:  75,
      geoname_id:  6252001,
      is_in_european_union: true,
      iso_code:    'US',
      names:  {
        de:     'USA',
        en:     'United States',
        es:     'Estados Unidos',
        fr:     'États-Unis',
        ja:     'アメリカ合衆国',
        'pt-BR':  'Estados Unidos',
        ru:     'США',
        'zh-CN':  '美国',
      },
    },
    location:  {
      accuracy_radius:   20,
      average_income:    50321,
      latitude:          37.6293,
      local_time:        '2015-04-26T01:37:17-08:00',
      longitude:         -122.1163,
      metro_code:        807,
      population_density:  7122,
      time_zone:         'America/Los_Angeles',
    },
    postal: {
      code:       '90001',
      confidence: 10,
    },
    registered_country:  {
      geoname_id:  6252001,
      is_in_european_union: true,
      iso_code:    'US',
      names:  {
        de:     'USA',
        en:     'United States',
        es:     'Estados Unidos',
        fr:     'États-Unis',
        ja:     'アメリカ合衆国',
        'pt-BR':  'Estados Unidos',
        ru:     'США',
        'zh-CN':  '美国',
      },
    },
    represented_country:  {
      geoname_id:  6252001,
      is_in_european_union: true,
      iso_code:    'US',
      names:  {
        de:     'USA',
        en:     'United States',
        es:     'Estados Unidos',
        fr:     'États-Unis',
        ja:     'アメリカ合衆国',
        'pt-BR':  'Estados Unidos',
        ru:     'США',
        'zh-CN':  '美国',
      },
      type: 'military',
    },
    risk_reasons: [
      {
        code: 'ANONYMOUS_IP',
        reason: 'The IP address belongs to an anonymous network. See /ip_address/traits for more details.',
      },
      {
        code: 'MINFRAUD_NETWORK_ACTIVITY',
        reason: 'Suspicious activity has been seen on this IP address across minFraud customers.',
      },
    ],
    subdivisions:  [
      {
        confidence:  50,
        geoname_id:  5332921,
        iso_code:    'CA',
        names:  {
          de:    'Kalifornien',
          en:    'California',
          es:    'California',
          fr:    'Californie',
          ja:    'カリフォルニア',
          ru:    'Калифорния',
          'zh-CN': '加州',
        },
      },
    ],
    traits: {
      autonomous_system_number:      1239,
      autonomous_system_organization: 'Linkem IR WiMax Network',
      connection_type:               'Cable/DSL',
      domain:                        'example.com',
      ip_address:                    '1.2.3.4',
      is_anonymous:                  true,
      is_anonymous_proxy:            true,
      is_anonymous_vpn:              true,
      is_anycast:                    true,
      is_hosting_provider:           true,
      is_public_proxy:               true,
      is_residential_proxy:          true,
      is_satellite_provider:         true,
      is_tor_exit_node:              true,
      isp:                           'Linkem spa',
      mobile_country_code:           '310',
      mobile_network_code:           '004',
      network:                       '1.2.3.0/24',
      organization:                  'Linkem IR WiMax Network',
      static_ip_score:               1.5,
      user_count:                    1,
      user_type:                     'traveler',
    },
  },
  shipping_address: {
    distance_to_billing_address: 22,
    distance_to_ip_location: 15,
    is_high_risk: true,
    is_in_ip_country: true,
    is_postal_in_city: true,
    latitude: 37.632,
    longitude: -122.313,
  },
  shipping_phone: {
    country: "CA",
    is_voip: true,
    network_operator: "Telus Mobility-SVR/2",
    number_type: "mobile",
  },
};

export const factors = {
  ...insights,
  risk_score_reasons: [
    {
      "multiplier": 45,
      "reasons": [
        {
          "code": "ANONYMOUS_IP",
          "reason": "Risk due to IP being an Anonymous IP"
        }
      ]
    },
    {
      "multiplier": 1.8,
      "reasons": [
        {
          "code": "TIME_OF_DAY",
          "reason": "Risk due to local time of day"
        }
      ]
    },
    {
      "multiplier": 1.6,
      "reasons": [
        {
          "reason": "Riskiness of newly-sighted email domain",
          "code": "EMAIL_DOMAIN_NEW"
        }
      ]
    },
    {
      "multiplier": 0.34,
      "reasons": [
        {
          "code": "EMAIL_ADDRESS_NEW",
          "reason": "Riskiness of newly-sighted email address"
        }
      ]
    }
  ],
  subscores: {
    avs_result: 0.01,
    billing_address: 0.02,
    billing_address_distance_to_ip_location: 0.03,
    browser: 0.04,
    chargeback: 0.05,
    country: 0.06,
    country_mismatch: 0.07,
    cvv_result: 0.08,
    device: 0.09,
    email_address: 0.10,
    email_domain: 0.11,
    email_local_part: 0.12,
    issuer_id_number: 0.13,
    order_amount: 0.14,
    phone_number: 0.15,
    shipping_address: 0.16,
    shipping_address_distance_to_ip_location: 0.17,
    time_of_day: 0.18,
  },
};

export const error = {
  code: 'INSUFFICIENT_FUNDS',
  error: 'You do not have sufficient funds to use this service.',
};

export default factors;
