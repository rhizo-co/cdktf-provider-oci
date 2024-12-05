# `ospGatewayAddressActionVerification` Submodule <a name="`ospGatewayAddressActionVerification` Submodule" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OspGatewayAddressActionVerification <a name="OspGatewayAddressActionVerification" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification oci_osp_gateway_address_action_verification}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_address_action_verification

ospGatewayAddressActionVerification.OspGatewayAddressActionVerification(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  osp_home_region: str,
  address_key: str = None,
  city: str = None,
  company_name: str = None,
  contributor_class: str = None,
  country: str = None,
  county: str = None,
  department_name: str = None,
  email_address: str = None,
  first_name: str = None,
  id: str = None,
  internal_number: str = None,
  job_title: str = None,
  last_name: str = None,
  line1: str = None,
  line2: str = None,
  line3: str = None,
  line4: str = None,
  middle_name: str = None,
  municipal_inscription: str = None,
  phone_country_code: str = None,
  phone_number: str = None,
  postal_code: str = None,
  province: str = None,
  state: str = None,
  state_inscription: str = None,
  street_name: str = None,
  street_number: str = None,
  timeouts: OspGatewayAddressActionVerificationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.addressKey">address_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.companyName">company_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.contributorClass">contributor_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.county">county</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.departmentName">department_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.internalNumber">internal_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.jobTitle">job_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line1">line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line2">line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line3">line3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line4">line4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.middleName">middle_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.municipalInscription">municipal_inscription</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.phoneCountryCode">phone_country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.province">province</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.stateInscription">state_inscription</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.streetName">street_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.streetNumber">street_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.ospHomeRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}.

---

##### `address_key`<sup>Optional</sup> <a name="address_key" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.addressKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}.

---

##### `city`<sup>Optional</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.city"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}.

---

##### `company_name`<sup>Optional</sup> <a name="company_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.companyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}.

---

##### `contributor_class`<sup>Optional</sup> <a name="contributor_class" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.contributorClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}.

---

##### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.county"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}.

---

##### `department_name`<sup>Optional</sup> <a name="department_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.departmentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.emailAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.firstName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internal_number`<sup>Optional</sup> <a name="internal_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.internalNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}.

---

##### `job_title`<sup>Optional</sup> <a name="job_title" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.jobTitle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.lastName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}.

---

##### `line1`<sup>Optional</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}.

---

##### `line2`<sup>Optional</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}.

---

##### `line3`<sup>Optional</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line3"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}.

---

##### `line4`<sup>Optional</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line4"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}.

---

##### `middle_name`<sup>Optional</sup> <a name="middle_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.middleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}.

---

##### `municipal_inscription`<sup>Optional</sup> <a name="municipal_inscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.municipalInscription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}.

---

##### `phone_country_code`<sup>Optional</sup> <a name="phone_country_code" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.phoneCountryCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.phoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}.

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.postalCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.province"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}.

---

##### `state_inscription`<sup>Optional</sup> <a name="state_inscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.stateInscription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}.

---

##### `street_name`<sup>Optional</sup> <a name="street_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.streetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}.

---

##### `street_number`<sup>Optional</sup> <a name="street_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.streetNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#timeouts OspGatewayAddressActionVerification#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetAddressKey">reset_address_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCompanyName">reset_company_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetContributorClass">reset_contributor_class</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCounty">reset_county</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetDepartmentName">reset_department_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetInternalNumber">reset_internal_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetJobTitle">reset_job_title</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine1">reset_line1</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine2">reset_line2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine3">reset_line3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine4">reset_line4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMiddleName">reset_middle_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMunicipalInscription">reset_municipal_inscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneCountryCode">reset_phone_country_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStateInscription">reset_state_inscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetName">reset_street_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetNumber">reset_street_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#create OspGatewayAddressActionVerification#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#delete OspGatewayAddressActionVerification#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#update OspGatewayAddressActionVerification#update}.

---

##### `reset_address_key` <a name="reset_address_key" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetAddressKey"></a>

```python
def reset_address_key() -> None
```

##### `reset_city` <a name="reset_city" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_company_name` <a name="reset_company_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCompanyName"></a>

```python
def reset_company_name() -> None
```

##### `reset_contributor_class` <a name="reset_contributor_class" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetContributorClass"></a>

```python
def reset_contributor_class() -> None
```

##### `reset_country` <a name="reset_country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_county` <a name="reset_county" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCounty"></a>

```python
def reset_county() -> None
```

##### `reset_department_name` <a name="reset_department_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetDepartmentName"></a>

```python
def reset_department_name() -> None
```

##### `reset_email_address` <a name="reset_email_address" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internal_number` <a name="reset_internal_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetInternalNumber"></a>

```python
def reset_internal_number() -> None
```

##### `reset_job_title` <a name="reset_job_title" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetJobTitle"></a>

```python
def reset_job_title() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_line1` <a name="reset_line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine1"></a>

```python
def reset_line1() -> None
```

##### `reset_line2` <a name="reset_line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine2"></a>

```python
def reset_line2() -> None
```

##### `reset_line3` <a name="reset_line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine3"></a>

```python
def reset_line3() -> None
```

##### `reset_line4` <a name="reset_line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine4"></a>

```python
def reset_line4() -> None
```

##### `reset_middle_name` <a name="reset_middle_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMiddleName"></a>

```python
def reset_middle_name() -> None
```

##### `reset_municipal_inscription` <a name="reset_municipal_inscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMunicipalInscription"></a>

```python
def reset_municipal_inscription() -> None
```

##### `reset_phone_country_code` <a name="reset_phone_country_code" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneCountryCode"></a>

```python
def reset_phone_country_code() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_province` <a name="reset_province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_state_inscription` <a name="reset_state_inscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStateInscription"></a>

```python
def reset_state_inscription() -> None
```

##### `reset_street_name` <a name="reset_street_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetName"></a>

```python
def reset_street_name() -> None
```

##### `reset_street_number` <a name="reset_street_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetNumber"></a>

```python
def reset_street_number() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OspGatewayAddressActionVerification resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_address_action_verification

ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_address_action_verification

ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_address_action_verification

ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_address_action_verification

ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OspGatewayAddressActionVerification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OspGatewayAddressActionVerification to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OspGatewayAddressActionVerification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OspGatewayAddressActionVerification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.address">address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList">OspGatewayAddressActionVerificationAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.quality">quality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference">OspGatewayAddressActionVerificationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.verificationCode">verification_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKeyInput">address_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyNameInput">company_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClassInput">contributor_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countyInput">county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentNameInput">department_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumberInput">internal_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitleInput">job_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1Input">line1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2Input">line2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3Input">line3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4Input">line4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleNameInput">middle_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscriptionInput">municipal_inscription_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegionInput">osp_home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCodeInput">phone_country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provinceInput">province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscriptionInput">state_inscription_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNameInput">street_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumberInput">street_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKey">address_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClass">contributor_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentName">department_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumber">internal_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1">line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2">line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3">line3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4">line4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscription">municipal_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCode">phone_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscription">state_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetName">street_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumber">street_number</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.address"></a>

```python
address: OspGatewayAddressActionVerificationAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList">OspGatewayAddressActionVerificationAddressList</a>

---

##### `quality`<sup>Required</sup> <a name="quality" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.quality"></a>

```python
quality: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeouts"></a>

```python
timeouts: OspGatewayAddressActionVerificationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference">OspGatewayAddressActionVerificationTimeoutsOutputReference</a>

---

##### `verification_code`<sup>Required</sup> <a name="verification_code" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.verificationCode"></a>

```python
verification_code: str
```

- *Type:* str

---

##### `address_key_input`<sup>Optional</sup> <a name="address_key_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKeyInput"></a>

```python
address_key_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `company_name_input`<sup>Optional</sup> <a name="company_name_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyNameInput"></a>

```python
company_name_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `contributor_class_input`<sup>Optional</sup> <a name="contributor_class_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClassInput"></a>

```python
contributor_class_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `county_input`<sup>Optional</sup> <a name="county_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countyInput"></a>

```python
county_input: str
```

- *Type:* str

---

##### `department_name_input`<sup>Optional</sup> <a name="department_name_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentNameInput"></a>

```python
department_name_input: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internal_number_input`<sup>Optional</sup> <a name="internal_number_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumberInput"></a>

```python
internal_number_input: str
```

- *Type:* str

---

##### `job_title_input`<sup>Optional</sup> <a name="job_title_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitleInput"></a>

```python
job_title_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `line1_input`<sup>Optional</sup> <a name="line1_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1Input"></a>

```python
line1_input: str
```

- *Type:* str

---

##### `line2_input`<sup>Optional</sup> <a name="line2_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2Input"></a>

```python
line2_input: str
```

- *Type:* str

---

##### `line3_input`<sup>Optional</sup> <a name="line3_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3Input"></a>

```python
line3_input: str
```

- *Type:* str

---

##### `line4_input`<sup>Optional</sup> <a name="line4_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4Input"></a>

```python
line4_input: str
```

- *Type:* str

---

##### `middle_name_input`<sup>Optional</sup> <a name="middle_name_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleNameInput"></a>

```python
middle_name_input: str
```

- *Type:* str

---

##### `municipal_inscription_input`<sup>Optional</sup> <a name="municipal_inscription_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscriptionInput"></a>

```python
municipal_inscription_input: str
```

- *Type:* str

---

##### `osp_home_region_input`<sup>Optional</sup> <a name="osp_home_region_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegionInput"></a>

```python
osp_home_region_input: str
```

- *Type:* str

---

##### `phone_country_code_input`<sup>Optional</sup> <a name="phone_country_code_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCodeInput"></a>

```python
phone_country_code_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provinceInput"></a>

```python
province_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `state_inscription_input`<sup>Optional</sup> <a name="state_inscription_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscriptionInput"></a>

```python
state_inscription_input: str
```

- *Type:* str

---

##### `street_name_input`<sup>Optional</sup> <a name="street_name_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNameInput"></a>

```python
street_name_input: str
```

- *Type:* str

---

##### `street_number_input`<sup>Optional</sup> <a name="street_number_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumberInput"></a>

```python
street_number_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OspGatewayAddressActionVerificationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>]

---

##### `address_key`<sup>Required</sup> <a name="address_key" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKey"></a>

```python
address_key: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `contributor_class`<sup>Required</sup> <a name="contributor_class" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClass"></a>

```python
contributor_class: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `department_name`<sup>Required</sup> <a name="department_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentName"></a>

```python
department_name: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_number`<sup>Required</sup> <a name="internal_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumber"></a>

```python
internal_number: str
```

- *Type:* str

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1"></a>

```python
line1: str
```

- *Type:* str

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2"></a>

```python
line2: str
```

- *Type:* str

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3"></a>

```python
line3: str
```

- *Type:* str

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4"></a>

```python
line4: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `municipal_inscription`<sup>Required</sup> <a name="municipal_inscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscription"></a>

```python
municipal_inscription: str
```

- *Type:* str

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

---

##### `phone_country_code`<sup>Required</sup> <a name="phone_country_code" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCode"></a>

```python
phone_country_code: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_inscription`<sup>Required</sup> <a name="state_inscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscription"></a>

```python
state_inscription: str
```

- *Type:* str

---

##### `street_name`<sup>Required</sup> <a name="street_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetName"></a>

```python
street_name: str
```

- *Type:* str

---

##### `street_number`<sup>Required</sup> <a name="street_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumber"></a>

```python
street_number: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OspGatewayAddressActionVerificationAddress <a name="OspGatewayAddressActionVerificationAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_address_action_verification

ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress()
```


### OspGatewayAddressActionVerificationConfig <a name="OspGatewayAddressActionVerificationConfig" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_address_action_verification

ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  osp_home_region: str,
  address_key: str = None,
  city: str = None,
  company_name: str = None,
  contributor_class: str = None,
  country: str = None,
  county: str = None,
  department_name: str = None,
  email_address: str = None,
  first_name: str = None,
  id: str = None,
  internal_number: str = None,
  job_title: str = None,
  last_name: str = None,
  line1: str = None,
  line2: str = None,
  line3: str = None,
  line4: str = None,
  middle_name: str = None,
  municipal_inscription: str = None,
  phone_country_code: str = None,
  phone_number: str = None,
  postal_code: str = None,
  province: str = None,
  state: str = None,
  state_inscription: str = None,
  street_name: str = None,
  street_number: str = None,
  timeouts: OspGatewayAddressActionVerificationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.addressKey">address_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.companyName">company_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.contributorClass">contributor_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.county">county</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.departmentName">department_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.internalNumber">internal_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.jobTitle">job_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line1">line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line2">line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line3">line3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line4">line4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.middleName">middle_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.municipalInscription">municipal_inscription</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneCountryCode">phone_country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.province">province</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.stateInscription">state_inscription</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetName">street_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetNumber">street_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}.

---

##### `address_key`<sup>Optional</sup> <a name="address_key" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.addressKey"></a>

```python
address_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}.

---

##### `city`<sup>Optional</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}.

---

##### `company_name`<sup>Optional</sup> <a name="company_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}.

---

##### `contributor_class`<sup>Optional</sup> <a name="contributor_class" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.contributorClass"></a>

```python
contributor_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}.

---

##### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.county"></a>

```python
county: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}.

---

##### `department_name`<sup>Optional</sup> <a name="department_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.departmentName"></a>

```python
department_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internal_number`<sup>Optional</sup> <a name="internal_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.internalNumber"></a>

```python
internal_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}.

---

##### `job_title`<sup>Optional</sup> <a name="job_title" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}.

---

##### `line1`<sup>Optional</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line1"></a>

```python
line1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}.

---

##### `line2`<sup>Optional</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line2"></a>

```python
line2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}.

---

##### `line3`<sup>Optional</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line3"></a>

```python
line3: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}.

---

##### `line4`<sup>Optional</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line4"></a>

```python
line4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}.

---

##### `middle_name`<sup>Optional</sup> <a name="middle_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}.

---

##### `municipal_inscription`<sup>Optional</sup> <a name="municipal_inscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.municipalInscription"></a>

```python
municipal_inscription: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}.

---

##### `phone_country_code`<sup>Optional</sup> <a name="phone_country_code" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneCountryCode"></a>

```python
phone_country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}.

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.province"></a>

```python
province: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}.

---

##### `state_inscription`<sup>Optional</sup> <a name="state_inscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.stateInscription"></a>

```python
state_inscription: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}.

---

##### `street_name`<sup>Optional</sup> <a name="street_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetName"></a>

```python
street_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}.

---

##### `street_number`<sup>Optional</sup> <a name="street_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetNumber"></a>

```python
street_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.timeouts"></a>

```python
timeouts: OspGatewayAddressActionVerificationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#timeouts OspGatewayAddressActionVerification#timeouts}

---

### OspGatewayAddressActionVerificationTimeouts <a name="OspGatewayAddressActionVerificationTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_address_action_verification

ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#create OspGatewayAddressActionVerification#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#delete OspGatewayAddressActionVerification#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#update OspGatewayAddressActionVerification#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#create OspGatewayAddressActionVerification#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#delete OspGatewayAddressActionVerification#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#update OspGatewayAddressActionVerification#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OspGatewayAddressActionVerificationAddressList <a name="OspGatewayAddressActionVerificationAddressList" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_address_action_verification

ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OspGatewayAddressActionVerificationAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OspGatewayAddressActionVerificationAddressOutputReference <a name="OspGatewayAddressActionVerificationAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_address_action_verification

ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.addressKey">address_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.contributorClass">contributor_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.departmentName">department_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalNumber">internal_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line1">line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line2">line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line3">line3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line4">line4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.municipalInscription">municipal_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneCountryCode">phone_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.stateInscription">state_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetName">street_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetNumber">street_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress">OspGatewayAddressActionVerificationAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_key`<sup>Required</sup> <a name="address_key" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.addressKey"></a>

```python
address_key: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `contributor_class`<sup>Required</sup> <a name="contributor_class" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.contributorClass"></a>

```python
contributor_class: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `department_name`<sup>Required</sup> <a name="department_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.departmentName"></a>

```python
department_name: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `internal_number`<sup>Required</sup> <a name="internal_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalNumber"></a>

```python
internal_number: str
```

- *Type:* str

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line1"></a>

```python
line1: str
```

- *Type:* str

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line2"></a>

```python
line2: str
```

- *Type:* str

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line3"></a>

```python
line3: str
```

- *Type:* str

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line4"></a>

```python
line4: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `municipal_inscription`<sup>Required</sup> <a name="municipal_inscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.municipalInscription"></a>

```python
municipal_inscription: str
```

- *Type:* str

---

##### `phone_country_code`<sup>Required</sup> <a name="phone_country_code" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneCountryCode"></a>

```python
phone_country_code: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_inscription`<sup>Required</sup> <a name="state_inscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.stateInscription"></a>

```python
state_inscription: str
```

- *Type:* str

---

##### `street_name`<sup>Required</sup> <a name="street_name" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetName"></a>

```python
street_name: str
```

- *Type:* str

---

##### `street_number`<sup>Required</sup> <a name="street_number" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetNumber"></a>

```python
street_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalValue"></a>

```python
internal_value: OspGatewayAddressActionVerificationAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress">OspGatewayAddressActionVerificationAddress</a>

---


### OspGatewayAddressActionVerificationTimeoutsOutputReference <a name="OspGatewayAddressActionVerificationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_address_action_verification

ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OspGatewayAddressActionVerificationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>]

---



