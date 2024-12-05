# `ospGatewayAddressActionVerification` Submodule <a name="`ospGatewayAddressActionVerification` Submodule" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OspGatewayAddressActionVerification <a name="OspGatewayAddressActionVerification" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification oci_osp_gateway_address_action_verification}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_address_action_verification.OspGatewayAddressActionVerification;

OspGatewayAddressActionVerification.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .ospHomeRegion(java.lang.String)
//  .addressKey(java.lang.String)
//  .city(java.lang.String)
//  .companyName(java.lang.String)
//  .contributorClass(java.lang.String)
//  .country(java.lang.String)
//  .county(java.lang.String)
//  .departmentName(java.lang.String)
//  .emailAddress(java.lang.String)
//  .firstName(java.lang.String)
//  .id(java.lang.String)
//  .internalNumber(java.lang.String)
//  .jobTitle(java.lang.String)
//  .lastName(java.lang.String)
//  .line1(java.lang.String)
//  .line2(java.lang.String)
//  .line3(java.lang.String)
//  .line4(java.lang.String)
//  .middleName(java.lang.String)
//  .municipalInscription(java.lang.String)
//  .phoneCountryCode(java.lang.String)
//  .phoneNumber(java.lang.String)
//  .postalCode(java.lang.String)
//  .province(java.lang.String)
//  .state(java.lang.String)
//  .stateInscription(java.lang.String)
//  .streetName(java.lang.String)
//  .streetNumber(java.lang.String)
//  .timeouts(OspGatewayAddressActionVerificationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.addressKey">addressKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.companyName">companyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.contributorClass">contributorClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.county">county</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.departmentName">departmentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.internalNumber">internalNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line1">line1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line2">line2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line3">line3</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line4">line4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.middleName">middleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.municipalInscription">municipalInscription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.phoneCountryCode">phoneCountryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.province">province</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.stateInscription">stateInscription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.streetName">streetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.streetNumber">streetNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.ospHomeRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}.

---

##### `addressKey`<sup>Optional</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.addressKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}.

---

##### `city`<sup>Optional</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.city"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}.

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.companyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}.

---

##### `contributorClass`<sup>Optional</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.contributorClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}.

---

##### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.country"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.county"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}.

---

##### `departmentName`<sup>Optional</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.departmentName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.emailAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.firstName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalNumber`<sup>Optional</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.internalNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}.

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.jobTitle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.lastName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}.

---

##### `line1`<sup>Optional</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line1"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}.

---

##### `line2`<sup>Optional</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line2"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}.

---

##### `line3`<sup>Optional</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line3"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}.

---

##### `line4`<sup>Optional</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.line4"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}.

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.middleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}.

---

##### `municipalInscription`<sup>Optional</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.municipalInscription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}.

---

##### `phoneCountryCode`<sup>Optional</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.phoneCountryCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.phoneNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.postalCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.province"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}.

---

##### `stateInscription`<sup>Optional</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.stateInscription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}.

---

##### `streetName`<sup>Optional</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.streetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}.

---

##### `streetNumber`<sup>Optional</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.streetNumber"></a>

- *Type:* java.lang.String

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
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetAddressKey">resetAddressKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCompanyName">resetCompanyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetContributorClass">resetContributorClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetDepartmentName">resetDepartmentName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetInternalNumber">resetInternalNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetJobTitle">resetJobTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine1">resetLine1</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine2">resetLine2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine3">resetLine3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine4">resetLine4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMiddleName">resetMiddleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMunicipalInscription">resetMunicipalInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneCountryCode">resetPhoneCountryCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStateInscription">resetStateInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetName">resetStreetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetNumber">resetStreetNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts"></a>

```java
public void putTimeouts(OspGatewayAddressActionVerificationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

---

##### `resetAddressKey` <a name="resetAddressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetAddressKey"></a>

```java
public void resetAddressKey()
```

##### `resetCity` <a name="resetCity" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCity"></a>

```java
public void resetCity()
```

##### `resetCompanyName` <a name="resetCompanyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCompanyName"></a>

```java
public void resetCompanyName()
```

##### `resetContributorClass` <a name="resetContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetContributorClass"></a>

```java
public void resetContributorClass()
```

##### `resetCountry` <a name="resetCountry" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetCounty` <a name="resetCounty" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCounty"></a>

```java
public void resetCounty()
```

##### `resetDepartmentName` <a name="resetDepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetDepartmentName"></a>

```java
public void resetDepartmentName()
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetEmailAddress"></a>

```java
public void resetEmailAddress()
```

##### `resetFirstName` <a name="resetFirstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetId"></a>

```java
public void resetId()
```

##### `resetInternalNumber` <a name="resetInternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetInternalNumber"></a>

```java
public void resetInternalNumber()
```

##### `resetJobTitle` <a name="resetJobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetJobTitle"></a>

```java
public void resetJobTitle()
```

##### `resetLastName` <a name="resetLastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetLine1` <a name="resetLine1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine1"></a>

```java
public void resetLine1()
```

##### `resetLine2` <a name="resetLine2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine2"></a>

```java
public void resetLine2()
```

##### `resetLine3` <a name="resetLine3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine3"></a>

```java
public void resetLine3()
```

##### `resetLine4` <a name="resetLine4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine4"></a>

```java
public void resetLine4()
```

##### `resetMiddleName` <a name="resetMiddleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMiddleName"></a>

```java
public void resetMiddleName()
```

##### `resetMunicipalInscription` <a name="resetMunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMunicipalInscription"></a>

```java
public void resetMunicipalInscription()
```

##### `resetPhoneCountryCode` <a name="resetPhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneCountryCode"></a>

```java
public void resetPhoneCountryCode()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetPostalCode` <a name="resetPostalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetProvince` <a name="resetProvince" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetProvince"></a>

```java
public void resetProvince()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetState"></a>

```java
public void resetState()
```

##### `resetStateInscription` <a name="resetStateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStateInscription"></a>

```java
public void resetStateInscription()
```

##### `resetStreetName` <a name="resetStreetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetName"></a>

```java
public void resetStreetName()
```

##### `resetStreetNumber` <a name="resetStreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetNumber"></a>

```java
public void resetStreetNumber()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OspGatewayAddressActionVerification resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_address_action_verification.OspGatewayAddressActionVerification;

OspGatewayAddressActionVerification.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_address_action_verification.OspGatewayAddressActionVerification;

OspGatewayAddressActionVerification.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_address_action_verification.OspGatewayAddressActionVerification;

OspGatewayAddressActionVerification.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_address_action_verification.OspGatewayAddressActionVerification;

OspGatewayAddressActionVerification.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OspGatewayAddressActionVerification.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OspGatewayAddressActionVerification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OspGatewayAddressActionVerification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OspGatewayAddressActionVerification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OspGatewayAddressActionVerification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.address">address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList">OspGatewayAddressActionVerificationAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.quality">quality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference">OspGatewayAddressActionVerificationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.verificationCode">verificationCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKeyInput">addressKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyNameInput">companyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClassInput">contributorClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countyInput">countyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentNameInput">departmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumberInput">internalNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitleInput">jobTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1Input">line1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2Input">line2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3Input">line3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4Input">line4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleNameInput">middleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscriptionInput">municipalInscriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCodeInput">phoneCountryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provinceInput">provinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscriptionInput">stateInscriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNameInput">streetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumberInput">streetNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKey">addressKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClass">contributorClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentName">departmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumber">internalNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1">line1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2">line2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3">line3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4">line4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleName">middleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscription">municipalInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCode">phoneCountryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscription">stateInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetName">streetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumber">streetNumber</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.address"></a>

```java
public OspGatewayAddressActionVerificationAddressList getAddress();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList">OspGatewayAddressActionVerificationAddressList</a>

---

##### `quality`<sup>Required</sup> <a name="quality" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.quality"></a>

```java
public java.lang.String getQuality();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeouts"></a>

```java
public OspGatewayAddressActionVerificationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference">OspGatewayAddressActionVerificationTimeoutsOutputReference</a>

---

##### `verificationCode`<sup>Required</sup> <a name="verificationCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.verificationCode"></a>

```java
public java.lang.String getVerificationCode();
```

- *Type:* java.lang.String

---

##### `addressKeyInput`<sup>Optional</sup> <a name="addressKeyInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKeyInput"></a>

```java
public java.lang.String getAddressKeyInput();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyNameInput"></a>

```java
public java.lang.String getCompanyNameInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `contributorClassInput`<sup>Optional</sup> <a name="contributorClassInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClassInput"></a>

```java
public java.lang.String getContributorClassInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countyInput"></a>

```java
public java.lang.String getCountyInput();
```

- *Type:* java.lang.String

---

##### `departmentNameInput`<sup>Optional</sup> <a name="departmentNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentNameInput"></a>

```java
public java.lang.String getDepartmentNameInput();
```

- *Type:* java.lang.String

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internalNumberInput`<sup>Optional</sup> <a name="internalNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumberInput"></a>

```java
public java.lang.String getInternalNumberInput();
```

- *Type:* java.lang.String

---

##### `jobTitleInput`<sup>Optional</sup> <a name="jobTitleInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitleInput"></a>

```java
public java.lang.String getJobTitleInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `line1Input`<sup>Optional</sup> <a name="line1Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1Input"></a>

```java
public java.lang.String getLine1Input();
```

- *Type:* java.lang.String

---

##### `line2Input`<sup>Optional</sup> <a name="line2Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2Input"></a>

```java
public java.lang.String getLine2Input();
```

- *Type:* java.lang.String

---

##### `line3Input`<sup>Optional</sup> <a name="line3Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3Input"></a>

```java
public java.lang.String getLine3Input();
```

- *Type:* java.lang.String

---

##### `line4Input`<sup>Optional</sup> <a name="line4Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4Input"></a>

```java
public java.lang.String getLine4Input();
```

- *Type:* java.lang.String

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleNameInput"></a>

```java
public java.lang.String getMiddleNameInput();
```

- *Type:* java.lang.String

---

##### `municipalInscriptionInput`<sup>Optional</sup> <a name="municipalInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscriptionInput"></a>

```java
public java.lang.String getMunicipalInscriptionInput();
```

- *Type:* java.lang.String

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegionInput"></a>

```java
public java.lang.String getOspHomeRegionInput();
```

- *Type:* java.lang.String

---

##### `phoneCountryCodeInput`<sup>Optional</sup> <a name="phoneCountryCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCodeInput"></a>

```java
public java.lang.String getPhoneCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provinceInput"></a>

```java
public java.lang.String getProvinceInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `stateInscriptionInput`<sup>Optional</sup> <a name="stateInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscriptionInput"></a>

```java
public java.lang.String getStateInscriptionInput();
```

- *Type:* java.lang.String

---

##### `streetNameInput`<sup>Optional</sup> <a name="streetNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNameInput"></a>

```java
public java.lang.String getStreetNameInput();
```

- *Type:* java.lang.String

---

##### `streetNumberInput`<sup>Optional</sup> <a name="streetNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumberInput"></a>

```java
public java.lang.String getStreetNumberInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKey"></a>

```java
public java.lang.String getAddressKey();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClass"></a>

```java
public java.lang.String getContributorClass();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentName"></a>

```java
public java.lang.String getDepartmentName();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumber"></a>

```java
public java.lang.String getInternalNumber();
```

- *Type:* java.lang.String

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1"></a>

```java
public java.lang.String getLine1();
```

- *Type:* java.lang.String

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2"></a>

```java
public java.lang.String getLine2();
```

- *Type:* java.lang.String

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3"></a>

```java
public java.lang.String getLine3();
```

- *Type:* java.lang.String

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4"></a>

```java
public java.lang.String getLine4();
```

- *Type:* java.lang.String

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscription"></a>

```java
public java.lang.String getMunicipalInscription();
```

- *Type:* java.lang.String

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCode"></a>

```java
public java.lang.String getPhoneCountryCode();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscription"></a>

```java
public java.lang.String getStateInscription();
```

- *Type:* java.lang.String

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetName"></a>

```java
public java.lang.String getStreetName();
```

- *Type:* java.lang.String

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumber"></a>

```java
public java.lang.String getStreetNumber();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OspGatewayAddressActionVerificationAddress <a name="OspGatewayAddressActionVerificationAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_address_action_verification.OspGatewayAddressActionVerificationAddress;

OspGatewayAddressActionVerificationAddress.builder()
    .build();
```


### OspGatewayAddressActionVerificationConfig <a name="OspGatewayAddressActionVerificationConfig" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_address_action_verification.OspGatewayAddressActionVerificationConfig;

OspGatewayAddressActionVerificationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .ospHomeRegion(java.lang.String)
//  .addressKey(java.lang.String)
//  .city(java.lang.String)
//  .companyName(java.lang.String)
//  .contributorClass(java.lang.String)
//  .country(java.lang.String)
//  .county(java.lang.String)
//  .departmentName(java.lang.String)
//  .emailAddress(java.lang.String)
//  .firstName(java.lang.String)
//  .id(java.lang.String)
//  .internalNumber(java.lang.String)
//  .jobTitle(java.lang.String)
//  .lastName(java.lang.String)
//  .line1(java.lang.String)
//  .line2(java.lang.String)
//  .line3(java.lang.String)
//  .line4(java.lang.String)
//  .middleName(java.lang.String)
//  .municipalInscription(java.lang.String)
//  .phoneCountryCode(java.lang.String)
//  .phoneNumber(java.lang.String)
//  .postalCode(java.lang.String)
//  .province(java.lang.String)
//  .state(java.lang.String)
//  .stateInscription(java.lang.String)
//  .streetName(java.lang.String)
//  .streetNumber(java.lang.String)
//  .timeouts(OspGatewayAddressActionVerificationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.addressKey">addressKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.companyName">companyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.contributorClass">contributorClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.county">county</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.departmentName">departmentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.internalNumber">internalNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line1">line1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line2">line2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line3">line3</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line4">line4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.middleName">middleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.municipalInscription">municipalInscription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneCountryCode">phoneCountryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.province">province</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.stateInscription">stateInscription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetName">streetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetNumber">streetNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}.

---

##### `addressKey`<sup>Optional</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.addressKey"></a>

```java
public java.lang.String getAddressKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}.

---

##### `city`<sup>Optional</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}.

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}.

---

##### `contributorClass`<sup>Optional</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.contributorClass"></a>

```java
public java.lang.String getContributorClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}.

---

##### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}.

---

##### `departmentName`<sup>Optional</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.departmentName"></a>

```java
public java.lang.String getDepartmentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalNumber`<sup>Optional</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.internalNumber"></a>

```java
public java.lang.String getInternalNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}.

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}.

---

##### `line1`<sup>Optional</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line1"></a>

```java
public java.lang.String getLine1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}.

---

##### `line2`<sup>Optional</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line2"></a>

```java
public java.lang.String getLine2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}.

---

##### `line3`<sup>Optional</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line3"></a>

```java
public java.lang.String getLine3();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}.

---

##### `line4`<sup>Optional</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line4"></a>

```java
public java.lang.String getLine4();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}.

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}.

---

##### `municipalInscription`<sup>Optional</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.municipalInscription"></a>

```java
public java.lang.String getMunicipalInscription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}.

---

##### `phoneCountryCode`<sup>Optional</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneCountryCode"></a>

```java
public java.lang.String getPhoneCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}.

---

##### `stateInscription`<sup>Optional</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.stateInscription"></a>

```java
public java.lang.String getStateInscription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}.

---

##### `streetName`<sup>Optional</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetName"></a>

```java
public java.lang.String getStreetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}.

---

##### `streetNumber`<sup>Optional</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetNumber"></a>

```java
public java.lang.String getStreetNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.timeouts"></a>

```java
public OspGatewayAddressActionVerificationTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#timeouts OspGatewayAddressActionVerification#timeouts}

---

### OspGatewayAddressActionVerificationTimeouts <a name="OspGatewayAddressActionVerificationTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_address_action_verification.OspGatewayAddressActionVerificationTimeouts;

OspGatewayAddressActionVerificationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#create OspGatewayAddressActionVerification#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#delete OspGatewayAddressActionVerification#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#update OspGatewayAddressActionVerification#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#create OspGatewayAddressActionVerification#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#delete OspGatewayAddressActionVerification#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#update OspGatewayAddressActionVerification#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OspGatewayAddressActionVerificationAddressList <a name="OspGatewayAddressActionVerificationAddressList" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_address_action_verification.OspGatewayAddressActionVerificationAddressList;

new OspGatewayAddressActionVerificationAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get"></a>

```java
public OspGatewayAddressActionVerificationAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OspGatewayAddressActionVerificationAddressOutputReference <a name="OspGatewayAddressActionVerificationAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_address_action_verification.OspGatewayAddressActionVerificationAddressOutputReference;

new OspGatewayAddressActionVerificationAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.addressKey">addressKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.contributorClass">contributorClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.departmentName">departmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalNumber">internalNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line1">line1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line2">line2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line3">line3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line4">line4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.middleName">middleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.municipalInscription">municipalInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneCountryCode">phoneCountryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.stateInscription">stateInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetName">streetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress">OspGatewayAddressActionVerificationAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.addressKey"></a>

```java
public java.lang.String getAddressKey();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.contributorClass"></a>

```java
public java.lang.String getContributorClass();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.departmentName"></a>

```java
public java.lang.String getDepartmentName();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalNumber"></a>

```java
public java.lang.String getInternalNumber();
```

- *Type:* java.lang.String

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line1"></a>

```java
public java.lang.String getLine1();
```

- *Type:* java.lang.String

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line2"></a>

```java
public java.lang.String getLine2();
```

- *Type:* java.lang.String

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line3"></a>

```java
public java.lang.String getLine3();
```

- *Type:* java.lang.String

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line4"></a>

```java
public java.lang.String getLine4();
```

- *Type:* java.lang.String

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.municipalInscription"></a>

```java
public java.lang.String getMunicipalInscription();
```

- *Type:* java.lang.String

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneCountryCode"></a>

```java
public java.lang.String getPhoneCountryCode();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.stateInscription"></a>

```java
public java.lang.String getStateInscription();
```

- *Type:* java.lang.String

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetName"></a>

```java
public java.lang.String getStreetName();
```

- *Type:* java.lang.String

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetNumber"></a>

```java
public java.lang.String getStreetNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalValue"></a>

```java
public OspGatewayAddressActionVerificationAddress getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress">OspGatewayAddressActionVerificationAddress</a>

---


### OspGatewayAddressActionVerificationTimeoutsOutputReference <a name="OspGatewayAddressActionVerificationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_address_action_verification.OspGatewayAddressActionVerificationTimeoutsOutputReference;

new OspGatewayAddressActionVerificationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

---



