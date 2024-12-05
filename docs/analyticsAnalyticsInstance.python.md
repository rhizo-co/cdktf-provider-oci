# `analyticsAnalyticsInstance` Submodule <a name="`analyticsAnalyticsInstance` Submodule" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnalyticsAnalyticsInstance <a name="AnalyticsAnalyticsInstance" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance oci_analytics_analytics_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity: AnalyticsAnalyticsInstanceCapacity,
  compartment_id: str,
  feature_set: str,
  license_type: str,
  name: str,
  admin_user: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  domain_id: str = None,
  email_notification: str = None,
  feature_bundle: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  idcs_access_token: str = None,
  kms_key_id: str = None,
  network_endpoint_details: AnalyticsAnalyticsInstanceNetworkEndpointDetails = None,
  state: str = None,
  timeouts: AnalyticsAnalyticsInstanceTimeouts = None,
  update_channel: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a></code> | capacity block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#compartment_id AnalyticsAnalyticsInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.featureSet">feature_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#feature_set AnalyticsAnalyticsInstance#feature_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#license_type AnalyticsAnalyticsInstance#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#name AnalyticsAnalyticsInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.adminUser">admin_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#admin_user AnalyticsAnalyticsInstance#admin_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#defined_tags AnalyticsAnalyticsInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#description AnalyticsAnalyticsInstance#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#domain_id AnalyticsAnalyticsInstance#domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.emailNotification">email_notification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#email_notification AnalyticsAnalyticsInstance#email_notification}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.featureBundle">feature_bundle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#feature_bundle AnalyticsAnalyticsInstance#feature_bundle}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#freeform_tags AnalyticsAnalyticsInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#id AnalyticsAnalyticsInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#idcs_access_token AnalyticsAnalyticsInstance#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#kms_key_id AnalyticsAnalyticsInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.networkEndpointDetails">network_endpoint_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a></code> | network_endpoint_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#state AnalyticsAnalyticsInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.updateChannel">update_channel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#update_channel AnalyticsAnalyticsInstance#update_channel}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.capacity"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity AnalyticsAnalyticsInstance#capacity}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#compartment_id AnalyticsAnalyticsInstance#compartment_id}.

---

##### `feature_set`<sup>Required</sup> <a name="feature_set" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.featureSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#feature_set AnalyticsAnalyticsInstance#feature_set}.

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.licenseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#license_type AnalyticsAnalyticsInstance#license_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#name AnalyticsAnalyticsInstance#name}.

---

##### `admin_user`<sup>Optional</sup> <a name="admin_user" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.adminUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#admin_user AnalyticsAnalyticsInstance#admin_user}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#defined_tags AnalyticsAnalyticsInstance#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#description AnalyticsAnalyticsInstance#description}.

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.domainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#domain_id AnalyticsAnalyticsInstance#domain_id}.

---

##### `email_notification`<sup>Optional</sup> <a name="email_notification" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.emailNotification"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#email_notification AnalyticsAnalyticsInstance#email_notification}.

---

##### `feature_bundle`<sup>Optional</sup> <a name="feature_bundle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.featureBundle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#feature_bundle AnalyticsAnalyticsInstance#feature_bundle}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#freeform_tags AnalyticsAnalyticsInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#id AnalyticsAnalyticsInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idcs_access_token`<sup>Optional</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.idcsAccessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#idcs_access_token AnalyticsAnalyticsInstance#idcs_access_token}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#kms_key_id AnalyticsAnalyticsInstance#kms_key_id}.

---

##### `network_endpoint_details`<sup>Optional</sup> <a name="network_endpoint_details" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.networkEndpointDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a>

network_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_endpoint_details AnalyticsAnalyticsInstance#network_endpoint_details}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#state AnalyticsAnalyticsInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#timeouts AnalyticsAnalyticsInstance#timeouts}

---

##### `update_channel`<sup>Optional</sup> <a name="update_channel" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.updateChannel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#update_channel AnalyticsAnalyticsInstance#update_channel}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putCapacity">put_capacity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putNetworkEndpointDetails">put_network_endpoint_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetAdminUser">reset_admin_user</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetDomainId">reset_domain_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetEmailNotification">reset_email_notification</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetFeatureBundle">reset_feature_bundle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetIdcsAccessToken">reset_idcs_access_token</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetNetworkEndpointDetails">reset_network_endpoint_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetUpdateChannel">reset_update_channel</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capacity` <a name="put_capacity" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putCapacity"></a>

```python
def put_capacity(
  capacity_type: str,
  capacity_value: typing.Union[int, float]
) -> None
```

###### `capacity_type`<sup>Required</sup> <a name="capacity_type" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putCapacity.parameter.capacityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity_type AnalyticsAnalyticsInstance#capacity_type}.

---

###### `capacity_value`<sup>Required</sup> <a name="capacity_value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putCapacity.parameter.capacityValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity_value AnalyticsAnalyticsInstance#capacity_value}.

---

##### `put_network_endpoint_details` <a name="put_network_endpoint_details" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putNetworkEndpointDetails"></a>

```python
def put_network_endpoint_details(
  network_endpoint_type: str,
  network_security_group_ids: typing.List[str] = None,
  subnet_id: str = None,
  vcn_id: str = None,
  whitelisted_ips: typing.List[str] = None,
  whitelisted_services: typing.List[str] = None,
  whitelisted_vcns: typing.Union[IResolvable, typing.List[AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns]] = None
) -> None
```

###### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putNetworkEndpointDetails.parameter.networkEndpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_endpoint_type AnalyticsAnalyticsInstance#network_endpoint_type}.

---

###### `network_security_group_ids`<sup>Optional</sup> <a name="network_security_group_ids" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putNetworkEndpointDetails.parameter.networkSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_security_group_ids AnalyticsAnalyticsInstance#network_security_group_ids}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putNetworkEndpointDetails.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#subnet_id AnalyticsAnalyticsInstance#subnet_id}.

---

###### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putNetworkEndpointDetails.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#vcn_id AnalyticsAnalyticsInstance#vcn_id}.

---

###### `whitelisted_ips`<sup>Optional</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putNetworkEndpointDetails.parameter.whitelistedIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_ips AnalyticsAnalyticsInstance#whitelisted_ips}.

---

###### `whitelisted_services`<sup>Optional</sup> <a name="whitelisted_services" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putNetworkEndpointDetails.parameter.whitelistedServices"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_services AnalyticsAnalyticsInstance#whitelisted_services}.

---

###### `whitelisted_vcns`<sup>Optional</sup> <a name="whitelisted_vcns" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putNetworkEndpointDetails.parameter.whitelistedVcns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>]]

whitelisted_vcns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_vcns AnalyticsAnalyticsInstance#whitelisted_vcns}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#create AnalyticsAnalyticsInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#delete AnalyticsAnalyticsInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#update AnalyticsAnalyticsInstance#update}.

---

##### `reset_admin_user` <a name="reset_admin_user" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetAdminUser"></a>

```python
def reset_admin_user() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_id` <a name="reset_domain_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetDomainId"></a>

```python
def reset_domain_id() -> None
```

##### `reset_email_notification` <a name="reset_email_notification" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetEmailNotification"></a>

```python
def reset_email_notification() -> None
```

##### `reset_feature_bundle` <a name="reset_feature_bundle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetFeatureBundle"></a>

```python
def reset_feature_bundle() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idcs_access_token` <a name="reset_idcs_access_token" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetIdcsAccessToken"></a>

```python
def reset_idcs_access_token() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_network_endpoint_details` <a name="reset_network_endpoint_details" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetNetworkEndpointDetails"></a>

```python
def reset_network_endpoint_details() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_channel` <a name="reset_update_channel" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetUpdateChannel"></a>

```python
def reset_update_channel() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AnalyticsAnalyticsInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AnalyticsAnalyticsInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AnalyticsAnalyticsInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AnalyticsAnalyticsInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AnalyticsAnalyticsInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference">AnalyticsAnalyticsInstanceCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.networkEndpointDetails">network_endpoint_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference">AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.serviceUrl">service_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference">AnalyticsAnalyticsInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.adminUserInput">admin_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.capacityInput">capacity_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.emailNotificationInput">email_notification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureBundleInput">feature_bundle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureSetInput">feature_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.idcsAccessTokenInput">idcs_access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.networkEndpointDetailsInput">network_endpoint_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.updateChannelInput">update_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.adminUser">admin_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.emailNotification">email_notification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureBundle">feature_bundle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureSet">feature_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.updateChannel">update_channel</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.capacity"></a>

```python
capacity: AnalyticsAnalyticsInstanceCapacityOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference">AnalyticsAnalyticsInstanceCapacityOutputReference</a>

---

##### `network_endpoint_details`<sup>Required</sup> <a name="network_endpoint_details" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.networkEndpointDetails"></a>

```python
network_endpoint_details: AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference">AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference</a>

---

##### `service_url`<sup>Required</sup> <a name="service_url" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.serviceUrl"></a>

```python
service_url: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeouts"></a>

```python
timeouts: AnalyticsAnalyticsInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference">AnalyticsAnalyticsInstanceTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `admin_user_input`<sup>Optional</sup> <a name="admin_user_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.adminUserInput"></a>

```python
admin_user_input: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.capacityInput"></a>

```python
capacity_input: AnalyticsAnalyticsInstanceCapacity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `email_notification_input`<sup>Optional</sup> <a name="email_notification_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.emailNotificationInput"></a>

```python
email_notification_input: str
```

- *Type:* str

---

##### `feature_bundle_input`<sup>Optional</sup> <a name="feature_bundle_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureBundleInput"></a>

```python
feature_bundle_input: str
```

- *Type:* str

---

##### `feature_set_input`<sup>Optional</sup> <a name="feature_set_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureSetInput"></a>

```python
feature_set_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `idcs_access_token_input`<sup>Optional</sup> <a name="idcs_access_token_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.idcsAccessTokenInput"></a>

```python
idcs_access_token_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_endpoint_details_input`<sup>Optional</sup> <a name="network_endpoint_details_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.networkEndpointDetailsInput"></a>

```python
network_endpoint_details_input: AnalyticsAnalyticsInstanceNetworkEndpointDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AnalyticsAnalyticsInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a>]

---

##### `update_channel_input`<sup>Optional</sup> <a name="update_channel_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.updateChannelInput"></a>

```python
update_channel_input: str
```

- *Type:* str

---

##### `admin_user`<sup>Required</sup> <a name="admin_user" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.adminUser"></a>

```python
admin_user: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `email_notification`<sup>Required</sup> <a name="email_notification" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.emailNotification"></a>

```python
email_notification: str
```

- *Type:* str

---

##### `feature_bundle`<sup>Required</sup> <a name="feature_bundle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureBundle"></a>

```python
feature_bundle: str
```

- *Type:* str

---

##### `feature_set`<sup>Required</sup> <a name="feature_set" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureSet"></a>

```python
feature_set: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_access_token`<sup>Required</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.idcsAccessToken"></a>

```python
idcs_access_token: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `update_channel`<sup>Required</sup> <a name="update_channel" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.updateChannel"></a>

```python
update_channel: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AnalyticsAnalyticsInstanceCapacity <a name="AnalyticsAnalyticsInstanceCapacity" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity(
  capacity_type: str,
  capacity_value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity.property.capacityType">capacity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity_type AnalyticsAnalyticsInstance#capacity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity.property.capacityValue">capacity_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity_value AnalyticsAnalyticsInstance#capacity_value}. |

---

##### `capacity_type`<sup>Required</sup> <a name="capacity_type" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity.property.capacityType"></a>

```python
capacity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity_type AnalyticsAnalyticsInstance#capacity_type}.

---

##### `capacity_value`<sup>Required</sup> <a name="capacity_value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity.property.capacityValue"></a>

```python
capacity_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity_value AnalyticsAnalyticsInstance#capacity_value}.

---

### AnalyticsAnalyticsInstanceConfig <a name="AnalyticsAnalyticsInstanceConfig" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity: AnalyticsAnalyticsInstanceCapacity,
  compartment_id: str,
  feature_set: str,
  license_type: str,
  name: str,
  admin_user: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  domain_id: str = None,
  email_notification: str = None,
  feature_bundle: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  idcs_access_token: str = None,
  kms_key_id: str = None,
  network_endpoint_details: AnalyticsAnalyticsInstanceNetworkEndpointDetails = None,
  state: str = None,
  timeouts: AnalyticsAnalyticsInstanceTimeouts = None,
  update_channel: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a></code> | capacity block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#compartment_id AnalyticsAnalyticsInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.featureSet">feature_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#feature_set AnalyticsAnalyticsInstance#feature_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#license_type AnalyticsAnalyticsInstance#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#name AnalyticsAnalyticsInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.adminUser">admin_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#admin_user AnalyticsAnalyticsInstance#admin_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#defined_tags AnalyticsAnalyticsInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#description AnalyticsAnalyticsInstance#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#domain_id AnalyticsAnalyticsInstance#domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.emailNotification">email_notification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#email_notification AnalyticsAnalyticsInstance#email_notification}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.featureBundle">feature_bundle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#feature_bundle AnalyticsAnalyticsInstance#feature_bundle}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#freeform_tags AnalyticsAnalyticsInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#id AnalyticsAnalyticsInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#idcs_access_token AnalyticsAnalyticsInstance#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#kms_key_id AnalyticsAnalyticsInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.networkEndpointDetails">network_endpoint_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a></code> | network_endpoint_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#state AnalyticsAnalyticsInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.updateChannel">update_channel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#update_channel AnalyticsAnalyticsInstance#update_channel}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.capacity"></a>

```python
capacity: AnalyticsAnalyticsInstanceCapacity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity AnalyticsAnalyticsInstance#capacity}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#compartment_id AnalyticsAnalyticsInstance#compartment_id}.

---

##### `feature_set`<sup>Required</sup> <a name="feature_set" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.featureSet"></a>

```python
feature_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#feature_set AnalyticsAnalyticsInstance#feature_set}.

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#license_type AnalyticsAnalyticsInstance#license_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#name AnalyticsAnalyticsInstance#name}.

---

##### `admin_user`<sup>Optional</sup> <a name="admin_user" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.adminUser"></a>

```python
admin_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#admin_user AnalyticsAnalyticsInstance#admin_user}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#defined_tags AnalyticsAnalyticsInstance#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#description AnalyticsAnalyticsInstance#description}.

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#domain_id AnalyticsAnalyticsInstance#domain_id}.

---

##### `email_notification`<sup>Optional</sup> <a name="email_notification" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.emailNotification"></a>

```python
email_notification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#email_notification AnalyticsAnalyticsInstance#email_notification}.

---

##### `feature_bundle`<sup>Optional</sup> <a name="feature_bundle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.featureBundle"></a>

```python
feature_bundle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#feature_bundle AnalyticsAnalyticsInstance#feature_bundle}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#freeform_tags AnalyticsAnalyticsInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#id AnalyticsAnalyticsInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idcs_access_token`<sup>Optional</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.idcsAccessToken"></a>

```python
idcs_access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#idcs_access_token AnalyticsAnalyticsInstance#idcs_access_token}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#kms_key_id AnalyticsAnalyticsInstance#kms_key_id}.

---

##### `network_endpoint_details`<sup>Optional</sup> <a name="network_endpoint_details" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.networkEndpointDetails"></a>

```python
network_endpoint_details: AnalyticsAnalyticsInstanceNetworkEndpointDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a>

network_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_endpoint_details AnalyticsAnalyticsInstance#network_endpoint_details}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#state AnalyticsAnalyticsInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.timeouts"></a>

```python
timeouts: AnalyticsAnalyticsInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#timeouts AnalyticsAnalyticsInstance#timeouts}

---

##### `update_channel`<sup>Optional</sup> <a name="update_channel" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.updateChannel"></a>

```python
update_channel: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#update_channel AnalyticsAnalyticsInstance#update_channel}.

---

### AnalyticsAnalyticsInstanceNetworkEndpointDetails <a name="AnalyticsAnalyticsInstanceNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails(
  network_endpoint_type: str,
  network_security_group_ids: typing.List[str] = None,
  subnet_id: str = None,
  vcn_id: str = None,
  whitelisted_ips: typing.List[str] = None,
  whitelisted_services: typing.List[str] = None,
  whitelisted_vcns: typing.Union[IResolvable, typing.List[AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_endpoint_type AnalyticsAnalyticsInstance#network_endpoint_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.networkSecurityGroupIds">network_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_security_group_ids AnalyticsAnalyticsInstance#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#subnet_id AnalyticsAnalyticsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#vcn_id AnalyticsAnalyticsInstance#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.whitelistedIps">whitelisted_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_ips AnalyticsAnalyticsInstance#whitelisted_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.whitelistedServices">whitelisted_services</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_services AnalyticsAnalyticsInstance#whitelisted_services}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.whitelistedVcns">whitelisted_vcns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>]]</code> | whitelisted_vcns block. |

---

##### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_endpoint_type AnalyticsAnalyticsInstance#network_endpoint_type}.

---

##### `network_security_group_ids`<sup>Optional</sup> <a name="network_security_group_ids" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.networkSecurityGroupIds"></a>

```python
network_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_security_group_ids AnalyticsAnalyticsInstance#network_security_group_ids}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#subnet_id AnalyticsAnalyticsInstance#subnet_id}.

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#vcn_id AnalyticsAnalyticsInstance#vcn_id}.

---

##### `whitelisted_ips`<sup>Optional</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.whitelistedIps"></a>

```python
whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_ips AnalyticsAnalyticsInstance#whitelisted_ips}.

---

##### `whitelisted_services`<sup>Optional</sup> <a name="whitelisted_services" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.whitelistedServices"></a>

```python
whitelisted_services: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_services AnalyticsAnalyticsInstance#whitelisted_services}.

---

##### `whitelisted_vcns`<sup>Optional</sup> <a name="whitelisted_vcns" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.whitelistedVcns"></a>

```python
whitelisted_vcns: typing.Union[IResolvable, typing.List[AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>]]

whitelisted_vcns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_vcns AnalyticsAnalyticsInstance#whitelisted_vcns}

---

### AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns <a name="AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns(
  id: str = None,
  whitelisted_ips: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#id AnalyticsAnalyticsInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns.property.whitelistedIps">whitelisted_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_ips AnalyticsAnalyticsInstance#whitelisted_ips}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#id AnalyticsAnalyticsInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `whitelisted_ips`<sup>Optional</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns.property.whitelistedIps"></a>

```python
whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_ips AnalyticsAnalyticsInstance#whitelisted_ips}.

---

### AnalyticsAnalyticsInstanceTimeouts <a name="AnalyticsAnalyticsInstanceTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#create AnalyticsAnalyticsInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#delete AnalyticsAnalyticsInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#update AnalyticsAnalyticsInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#create AnalyticsAnalyticsInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#delete AnalyticsAnalyticsInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#update AnalyticsAnalyticsInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnalyticsAnalyticsInstanceCapacityOutputReference <a name="AnalyticsAnalyticsInstanceCapacityOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityTypeInput">capacity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityValueInput">capacity_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityType">capacity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityValue">capacity_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_type_input`<sup>Optional</sup> <a name="capacity_type_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityTypeInput"></a>

```python
capacity_type_input: str
```

- *Type:* str

---

##### `capacity_value_input`<sup>Optional</sup> <a name="capacity_value_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityValueInput"></a>

```python
capacity_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_type`<sup>Required</sup> <a name="capacity_type" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityType"></a>

```python
capacity_type: str
```

- *Type:* str

---

##### `capacity_value`<sup>Required</sup> <a name="capacity_value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityValue"></a>

```python
capacity_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.internalValue"></a>

```python
internal_value: AnalyticsAnalyticsInstanceCapacity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a>

---


### AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference <a name="AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.putWhitelistedVcns">put_whitelisted_vcns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetNetworkSecurityGroupIds">reset_network_security_group_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetVcnId">reset_vcn_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetWhitelistedIps">reset_whitelisted_ips</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetWhitelistedServices">reset_whitelisted_services</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetWhitelistedVcns">reset_whitelisted_vcns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_whitelisted_vcns` <a name="put_whitelisted_vcns" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.putWhitelistedVcns"></a>

```python
def put_whitelisted_vcns(
  value: typing.Union[IResolvable, typing.List[AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.putWhitelistedVcns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>]]

---

##### `reset_network_security_group_ids` <a name="reset_network_security_group_ids" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetNetworkSecurityGroupIds"></a>

```python
def reset_network_security_group_ids() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_vcn_id` <a name="reset_vcn_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetVcnId"></a>

```python
def reset_vcn_id() -> None
```

##### `reset_whitelisted_ips` <a name="reset_whitelisted_ips" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetWhitelistedIps"></a>

```python
def reset_whitelisted_ips() -> None
```

##### `reset_whitelisted_services` <a name="reset_whitelisted_services" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetWhitelistedServices"></a>

```python
def reset_whitelisted_services() -> None
```

##### `reset_whitelisted_vcns` <a name="reset_whitelisted_vcns" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetWhitelistedVcns"></a>

```python
def reset_whitelisted_vcns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedVcns">whitelisted_vcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointTypeInput">network_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIdsInput">network_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedIpsInput">whitelisted_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedServicesInput">whitelisted_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedVcnsInput">whitelisted_vcns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIds">network_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedIps">whitelisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedServices">whitelisted_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `whitelisted_vcns`<sup>Required</sup> <a name="whitelisted_vcns" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedVcns"></a>

```python
whitelisted_vcns: AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList</a>

---

##### `network_endpoint_type_input`<sup>Optional</sup> <a name="network_endpoint_type_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointTypeInput"></a>

```python
network_endpoint_type_input: str
```

- *Type:* str

---

##### `network_security_group_ids_input`<sup>Optional</sup> <a name="network_security_group_ids_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIdsInput"></a>

```python
network_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `whitelisted_ips_input`<sup>Optional</sup> <a name="whitelisted_ips_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedIpsInput"></a>

```python
whitelisted_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `whitelisted_services_input`<sup>Optional</sup> <a name="whitelisted_services_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedServicesInput"></a>

```python
whitelisted_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `whitelisted_vcns_input`<sup>Optional</sup> <a name="whitelisted_vcns_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedVcnsInput"></a>

```python
whitelisted_vcns_input: typing.Union[IResolvable, typing.List[AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>]]

---

##### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

---

##### `network_security_group_ids`<sup>Required</sup> <a name="network_security_group_ids" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIds"></a>

```python
network_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `whitelisted_ips`<sup>Required</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedIps"></a>

```python
whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `whitelisted_services`<sup>Required</sup> <a name="whitelisted_services" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedServices"></a>

```python
whitelisted_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```python
internal_value: AnalyticsAnalyticsInstanceNetworkEndpointDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a>

---


### AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList <a name="AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>]]

---


### AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference <a name="AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resetWhitelistedIps">reset_whitelisted_ips</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_whitelisted_ips` <a name="reset_whitelisted_ips" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resetWhitelistedIps"></a>

```python
def reset_whitelisted_ips() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIpsInput">whitelisted_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIps">whitelisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `whitelisted_ips_input`<sup>Optional</sup> <a name="whitelisted_ips_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIpsInput"></a>

```python
whitelisted_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `whitelisted_ips`<sup>Required</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIps"></a>

```python
whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>]

---


### AnalyticsAnalyticsInstanceTimeoutsOutputReference <a name="AnalyticsAnalyticsInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import analytics_analytics_instance

analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AnalyticsAnalyticsInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a>]

---



