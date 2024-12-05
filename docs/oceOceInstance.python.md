# `oceOceInstance` Submodule <a name="`oceOceInstance` Submodule" id="rhizo-co-terraform-provider-oci.oceOceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceOceInstance <a name="OceOceInstance" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance oci_oce_oce_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import oce_oce_instance

oceOceInstance.OceOceInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_email: str,
  compartment_id: str,
  idcs_access_token: str,
  name: str,
  object_storage_namespace: str,
  tenancy_id: str,
  tenancy_name: str,
  add_on_features: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  dr_region: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  instance_access_type: str = None,
  instance_license_type: str = None,
  instance_usage_type: str = None,
  timeouts: OceOceInstanceTimeouts = None,
  upgrade_schedule: str = None,
  waf_primary_domain: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.adminEmail">admin_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#name OceOceInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.objectStorageNamespace">object_storage_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.tenancyName">tenancy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.addOnFeatures">add_on_features</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#description OceOceInstance#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.drRegion">dr_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#id OceOceInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.instanceAccessType">instance_access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.instanceLicenseType">instance_license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.instanceUsageType">instance_usage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.upgradeSchedule">upgrade_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.wafPrimaryDomain">waf_primary_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_email`<sup>Required</sup> <a name="admin_email" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.adminEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}.

---

##### `idcs_access_token`<sup>Required</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.idcsAccessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#name OceOceInstance#name}.

---

##### `object_storage_namespace`<sup>Required</sup> <a name="object_storage_namespace" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.objectStorageNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}.

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.tenancyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}.

---

##### `tenancy_name`<sup>Required</sup> <a name="tenancy_name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.tenancyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}.

---

##### `add_on_features`<sup>Optional</sup> <a name="add_on_features" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.addOnFeatures"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#description OceOceInstance#description}.

---

##### `dr_region`<sup>Optional</sup> <a name="dr_region" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.drRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#id OceOceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_access_type`<sup>Optional</sup> <a name="instance_access_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.instanceAccessType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}.

---

##### `instance_license_type`<sup>Optional</sup> <a name="instance_license_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.instanceLicenseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}.

---

##### `instance_usage_type`<sup>Optional</sup> <a name="instance_usage_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.instanceUsageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#timeouts OceOceInstance#timeouts}

---

##### `upgrade_schedule`<sup>Optional</sup> <a name="upgrade_schedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.upgradeSchedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}.

---

##### `waf_primary_domain`<sup>Optional</sup> <a name="waf_primary_domain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.wafPrimaryDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetAddOnFeatures">reset_add_on_features</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDrRegion">reset_dr_region</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceAccessType">reset_instance_access_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceLicenseType">reset_instance_license_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceUsageType">reset_instance_usage_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetUpgradeSchedule">reset_upgrade_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetWafPrimaryDomain">reset_waf_primary_domain</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#create OceOceInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#delete OceOceInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#update OceOceInstance#update}.

---

##### `reset_add_on_features` <a name="reset_add_on_features" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetAddOnFeatures"></a>

```python
def reset_add_on_features() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dr_region` <a name="reset_dr_region" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDrRegion"></a>

```python
def reset_dr_region() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_access_type` <a name="reset_instance_access_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceAccessType"></a>

```python
def reset_instance_access_type() -> None
```

##### `reset_instance_license_type` <a name="reset_instance_license_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceLicenseType"></a>

```python
def reset_instance_license_type() -> None
```

##### `reset_instance_usage_type` <a name="reset_instance_usage_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceUsageType"></a>

```python
def reset_instance_usage_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_upgrade_schedule` <a name="reset_upgrade_schedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetUpgradeSchedule"></a>

```python
def reset_upgrade_schedule() -> None
```

##### `reset_waf_primary_domain` <a name="reset_waf_primary_domain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetWafPrimaryDomain"></a>

```python
def reset_waf_primary_domain() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OceOceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import oce_oce_instance

oceOceInstance.OceOceInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import oce_oce_instance

oceOceInstance.OceOceInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import oce_oce_instance

oceOceInstance.OceOceInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import oce_oce_instance

oceOceInstance.OceOceInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OceOceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OceOceInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OceOceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceOceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsTenancy">idcs_tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.service">service</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference">OceOceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeaturesInput">add_on_features_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmailInput">admin_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegionInput">dr_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessTokenInput">idcs_access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessTypeInput">instance_access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseTypeInput">instance_license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageTypeInput">instance_usage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespaceInput">object_storage_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyIdInput">tenancy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyNameInput">tenancy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeScheduleInput">upgrade_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomainInput">waf_primary_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeatures">add_on_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmail">admin_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegion">dr_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessType">instance_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseType">instance_license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageType">instance_usage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespace">object_storage_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyName">tenancy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeSchedule">upgrade_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomain">waf_primary_domain</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `guid`<sup>Required</sup> <a name="guid" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `idcs_tenancy`<sup>Required</sup> <a name="idcs_tenancy" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsTenancy"></a>

```python
idcs_tenancy: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.service"></a>

```python
service: StringMap
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeouts"></a>

```python
timeouts: OceOceInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference">OceOceInstanceTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `add_on_features_input`<sup>Optional</sup> <a name="add_on_features_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeaturesInput"></a>

```python
add_on_features_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_email_input`<sup>Optional</sup> <a name="admin_email_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmailInput"></a>

```python
admin_email_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dr_region_input`<sup>Optional</sup> <a name="dr_region_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegionInput"></a>

```python
dr_region_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `idcs_access_token_input`<sup>Optional</sup> <a name="idcs_access_token_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessTokenInput"></a>

```python
idcs_access_token_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_access_type_input`<sup>Optional</sup> <a name="instance_access_type_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessTypeInput"></a>

```python
instance_access_type_input: str
```

- *Type:* str

---

##### `instance_license_type_input`<sup>Optional</sup> <a name="instance_license_type_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseTypeInput"></a>

```python
instance_license_type_input: str
```

- *Type:* str

---

##### `instance_usage_type_input`<sup>Optional</sup> <a name="instance_usage_type_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageTypeInput"></a>

```python
instance_usage_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_storage_namespace_input`<sup>Optional</sup> <a name="object_storage_namespace_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespaceInput"></a>

```python
object_storage_namespace_input: str
```

- *Type:* str

---

##### `tenancy_id_input`<sup>Optional</sup> <a name="tenancy_id_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyIdInput"></a>

```python
tenancy_id_input: str
```

- *Type:* str

---

##### `tenancy_name_input`<sup>Optional</sup> <a name="tenancy_name_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyNameInput"></a>

```python
tenancy_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OceOceInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>]

---

##### `upgrade_schedule_input`<sup>Optional</sup> <a name="upgrade_schedule_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeScheduleInput"></a>

```python
upgrade_schedule_input: str
```

- *Type:* str

---

##### `waf_primary_domain_input`<sup>Optional</sup> <a name="waf_primary_domain_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomainInput"></a>

```python
waf_primary_domain_input: str
```

- *Type:* str

---

##### `add_on_features`<sup>Required</sup> <a name="add_on_features" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeatures"></a>

```python
add_on_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_email`<sup>Required</sup> <a name="admin_email" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmail"></a>

```python
admin_email: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dr_region`<sup>Required</sup> <a name="dr_region" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegion"></a>

```python
dr_region: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_access_token`<sup>Required</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessToken"></a>

```python
idcs_access_token: str
```

- *Type:* str

---

##### `instance_access_type`<sup>Required</sup> <a name="instance_access_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessType"></a>

```python
instance_access_type: str
```

- *Type:* str

---

##### `instance_license_type`<sup>Required</sup> <a name="instance_license_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseType"></a>

```python
instance_license_type: str
```

- *Type:* str

---

##### `instance_usage_type`<sup>Required</sup> <a name="instance_usage_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageType"></a>

```python
instance_usage_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_storage_namespace`<sup>Required</sup> <a name="object_storage_namespace" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespace"></a>

```python
object_storage_namespace: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `tenancy_name`<sup>Required</sup> <a name="tenancy_name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyName"></a>

```python
tenancy_name: str
```

- *Type:* str

---

##### `upgrade_schedule`<sup>Required</sup> <a name="upgrade_schedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeSchedule"></a>

```python
upgrade_schedule: str
```

- *Type:* str

---

##### `waf_primary_domain`<sup>Required</sup> <a name="waf_primary_domain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomain"></a>

```python
waf_primary_domain: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OceOceInstanceConfig <a name="OceOceInstanceConfig" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import oce_oce_instance

oceOceInstance.OceOceInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_email: str,
  compartment_id: str,
  idcs_access_token: str,
  name: str,
  object_storage_namespace: str,
  tenancy_id: str,
  tenancy_name: str,
  add_on_features: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  dr_region: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  instance_access_type: str = None,
  instance_license_type: str = None,
  instance_usage_type: str = None,
  timeouts: OceOceInstanceTimeouts = None,
  upgrade_schedule: str = None,
  waf_primary_domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.adminEmail">admin_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#name OceOceInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.objectStorageNamespace">object_storage_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyName">tenancy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.addOnFeatures">add_on_features</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#description OceOceInstance#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.drRegion">dr_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#id OceOceInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceAccessType">instance_access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceLicenseType">instance_license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceUsageType">instance_usage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.upgradeSchedule">upgrade_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.wafPrimaryDomain">waf_primary_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_email`<sup>Required</sup> <a name="admin_email" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.adminEmail"></a>

```python
admin_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}.

---

##### `idcs_access_token`<sup>Required</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.idcsAccessToken"></a>

```python
idcs_access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#name OceOceInstance#name}.

---

##### `object_storage_namespace`<sup>Required</sup> <a name="object_storage_namespace" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.objectStorageNamespace"></a>

```python
object_storage_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}.

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}.

---

##### `tenancy_name`<sup>Required</sup> <a name="tenancy_name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyName"></a>

```python
tenancy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}.

---

##### `add_on_features`<sup>Optional</sup> <a name="add_on_features" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.addOnFeatures"></a>

```python
add_on_features: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#description OceOceInstance#description}.

---

##### `dr_region`<sup>Optional</sup> <a name="dr_region" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.drRegion"></a>

```python
dr_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#id OceOceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_access_type`<sup>Optional</sup> <a name="instance_access_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceAccessType"></a>

```python
instance_access_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}.

---

##### `instance_license_type`<sup>Optional</sup> <a name="instance_license_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceLicenseType"></a>

```python
instance_license_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}.

---

##### `instance_usage_type`<sup>Optional</sup> <a name="instance_usage_type" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceUsageType"></a>

```python
instance_usage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.timeouts"></a>

```python
timeouts: OceOceInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#timeouts OceOceInstance#timeouts}

---

##### `upgrade_schedule`<sup>Optional</sup> <a name="upgrade_schedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.upgradeSchedule"></a>

```python
upgrade_schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}.

---

##### `waf_primary_domain`<sup>Optional</sup> <a name="waf_primary_domain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.wafPrimaryDomain"></a>

```python
waf_primary_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}.

---

### OceOceInstanceTimeouts <a name="OceOceInstanceTimeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import oce_oce_instance

oceOceInstance.OceOceInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#create OceOceInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#delete OceOceInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#update OceOceInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#create OceOceInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#delete OceOceInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#update OceOceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceOceInstanceTimeoutsOutputReference <a name="OceOceInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import oce_oce_instance

oceOceInstance.OceOceInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceOceInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>]

---



