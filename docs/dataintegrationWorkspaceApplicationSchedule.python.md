# `dataintegrationWorkspaceApplicationSchedule` Submodule <a name="`dataintegrationWorkspaceApplicationSchedule` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceApplicationSchedule <a name="DataintegrationWorkspaceApplicationSchedule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule oci_dataintegration_workspace_application_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_key: str,
  identifier: str,
  name: str,
  workspace_id: str,
  description: str = None,
  frequency_details: DataintegrationWorkspaceApplicationScheduleFrequencyDetails = None,
  id: str = None,
  is_daylight_adjustment_enabled: typing.Union[bool, IResolvable] = None,
  key: str = None,
  model_version: str = None,
  object_status: typing.Union[int, float] = None,
  object_version: typing.Union[int, float] = None,
  registry_metadata: DataintegrationWorkspaceApplicationScheduleRegistryMetadata = None,
  timeouts: DataintegrationWorkspaceApplicationScheduleTimeouts = None,
  timezone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.applicationKey">application_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#application_key DataintegrationWorkspaceApplicationSchedule#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#identifier DataintegrationWorkspaceApplicationSchedule#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#name DataintegrationWorkspaceApplicationSchedule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#workspace_id DataintegrationWorkspaceApplicationSchedule#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#description DataintegrationWorkspaceApplicationSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.frequencyDetails">frequency_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a></code> | frequency_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#id DataintegrationWorkspaceApplicationSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.isDaylightAdjustmentEnabled">is_daylight_adjustment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_daylight_adjustment_enabled DataintegrationWorkspaceApplicationSchedule#is_daylight_adjustment_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.modelVersion">model_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_version DataintegrationWorkspaceApplicationSchedule#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.objectStatus">object_status</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_status DataintegrationWorkspaceApplicationSchedule#object_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.objectVersion">object_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_version DataintegrationWorkspaceApplicationSchedule#object_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.registryMetadata">registry_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a></code> | registry_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timezone DataintegrationWorkspaceApplicationSchedule#timezone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.applicationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#application_key DataintegrationWorkspaceApplicationSchedule#application_key}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#identifier DataintegrationWorkspaceApplicationSchedule#identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#name DataintegrationWorkspaceApplicationSchedule#name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#workspace_id DataintegrationWorkspaceApplicationSchedule#workspace_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#description DataintegrationWorkspaceApplicationSchedule#description}.

---

##### `frequency_details`<sup>Optional</sup> <a name="frequency_details" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.frequencyDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

frequency_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#frequency_details DataintegrationWorkspaceApplicationSchedule#frequency_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#id DataintegrationWorkspaceApplicationSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_daylight_adjustment_enabled`<sup>Optional</sup> <a name="is_daylight_adjustment_enabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.isDaylightAdjustmentEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_daylight_adjustment_enabled DataintegrationWorkspaceApplicationSchedule#is_daylight_adjustment_enabled}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}.

---

##### `model_version`<sup>Optional</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.modelVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_version DataintegrationWorkspaceApplicationSchedule#model_version}.

---

##### `object_status`<sup>Optional</sup> <a name="object_status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.objectStatus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_status DataintegrationWorkspaceApplicationSchedule#object_status}.

---

##### `object_version`<sup>Optional</sup> <a name="object_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.objectVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_version DataintegrationWorkspaceApplicationSchedule#object_version}.

---

##### `registry_metadata`<sup>Optional</sup> <a name="registry_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.registryMetadata"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

registry_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#registry_metadata DataintegrationWorkspaceApplicationSchedule#registry_metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timeouts DataintegrationWorkspaceApplicationSchedule#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timezone DataintegrationWorkspaceApplicationSchedule#timezone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails">put_frequency_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata">put_registry_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetFrequencyDetails">reset_frequency_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetIsDaylightAdjustmentEnabled">reset_is_daylight_adjustment_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetModelVersion">reset_model_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetObjectStatus">reset_object_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetObjectVersion">reset_object_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetRegistryMetadata">reset_registry_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_frequency_details` <a name="put_frequency_details" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails"></a>

```python
def put_frequency_details(
  model_type: str,
  custom_expression: str = None,
  day_of_week: str = None,
  days: typing.List[typing.Union[int, float]] = None,
  frequency: str = None,
  interval: typing.Union[int, float] = None,
  time: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime = None,
  week_of_month: str = None
) -> None
```

###### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails.parameter.modelType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_type DataintegrationWorkspaceApplicationSchedule#model_type}.

---

###### `custom_expression`<sup>Optional</sup> <a name="custom_expression" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails.parameter.customExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#custom_expression DataintegrationWorkspaceApplicationSchedule#custom_expression}.

---

###### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails.parameter.dayOfWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#day_of_week DataintegrationWorkspaceApplicationSchedule#day_of_week}.

---

###### `days`<sup>Optional</sup> <a name="days" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails.parameter.days"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#days DataintegrationWorkspaceApplicationSchedule#days}.

---

###### `frequency`<sup>Optional</sup> <a name="frequency" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#frequency DataintegrationWorkspaceApplicationSchedule#frequency}.

---

###### `interval`<sup>Optional</sup> <a name="interval" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#interval DataintegrationWorkspaceApplicationSchedule#interval}.

---

###### `time`<sup>Optional</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails.parameter.time"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#time DataintegrationWorkspaceApplicationSchedule#time}

---

###### `week_of_month`<sup>Optional</sup> <a name="week_of_month" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails.parameter.weekOfMonth"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#week_of_month DataintegrationWorkspaceApplicationSchedule#week_of_month}.

---

##### `put_registry_metadata` <a name="put_registry_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata"></a>

```python
def put_registry_metadata(
  aggregator_key: str = None,
  is_favorite: typing.Union[bool, IResolvable] = None,
  key: str = None,
  labels: typing.List[str] = None,
  registry_version: typing.Union[int, float] = None
) -> None
```

###### `aggregator_key`<sup>Optional</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata.parameter.aggregatorKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#aggregator_key DataintegrationWorkspaceApplicationSchedule#aggregator_key}.

---

###### `is_favorite`<sup>Optional</sup> <a name="is_favorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata.parameter.isFavorite"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_favorite DataintegrationWorkspaceApplicationSchedule#is_favorite}.

---

###### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}.

---

###### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata.parameter.labels"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#labels DataintegrationWorkspaceApplicationSchedule#labels}.

---

###### `registry_version`<sup>Optional</sup> <a name="registry_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata.parameter.registryVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#registry_version DataintegrationWorkspaceApplicationSchedule#registry_version}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#create DataintegrationWorkspaceApplicationSchedule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#delete DataintegrationWorkspaceApplicationSchedule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#update DataintegrationWorkspaceApplicationSchedule#update}.

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_frequency_details` <a name="reset_frequency_details" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetFrequencyDetails"></a>

```python
def reset_frequency_details() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_daylight_adjustment_enabled` <a name="reset_is_daylight_adjustment_enabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetIsDaylightAdjustmentEnabled"></a>

```python
def reset_is_daylight_adjustment_enabled() -> None
```

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_model_version` <a name="reset_model_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetModelVersion"></a>

```python
def reset_model_version() -> None
```

##### `reset_object_status` <a name="reset_object_status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetObjectStatus"></a>

```python
def reset_object_status() -> None
```

##### `reset_object_version` <a name="reset_object_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetObjectVersion"></a>

```python
def reset_object_version() -> None
```

##### `reset_registry_metadata` <a name="reset_registry_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetRegistryMetadata"></a>

```python
def reset_registry_metadata() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetTimezone"></a>

```python
def reset_timezone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceApplicationSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataintegrationWorkspaceApplicationSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataintegrationWorkspaceApplicationSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataintegrationWorkspaceApplicationSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceApplicationSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.frequencyDetails">frequency_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList">DataintegrationWorkspaceApplicationScheduleMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.parentRef">parent_ref</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList">DataintegrationWorkspaceApplicationScheduleParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.registryMetadata">registry_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference">DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference">DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.applicationKeyInput">application_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.frequencyDetailsInput">frequency_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.isDaylightAdjustmentEnabledInput">is_daylight_adjustment_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelVersionInput">model_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectStatusInput">object_status_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectVersionInput">object_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.registryMetadataInput">registry_metadata_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.applicationKey">application_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.isDaylightAdjustmentEnabled">is_daylight_adjustment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelVersion">model_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectStatus">object_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectVersion">object_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `frequency_details`<sup>Required</sup> <a name="frequency_details" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.frequencyDetails"></a>

```python
frequency_details: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.metadata"></a>

```python
metadata: DataintegrationWorkspaceApplicationScheduleMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList">DataintegrationWorkspaceApplicationScheduleMetadataList</a>

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `parent_ref`<sup>Required</sup> <a name="parent_ref" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.parentRef"></a>

```python
parent_ref: DataintegrationWorkspaceApplicationScheduleParentRefList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList">DataintegrationWorkspaceApplicationScheduleParentRefList</a>

---

##### `registry_metadata`<sup>Required</sup> <a name="registry_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.registryMetadata"></a>

```python
registry_metadata: DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference">DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timeouts"></a>

```python
timeouts: DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference">DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference</a>

---

##### `application_key_input`<sup>Optional</sup> <a name="application_key_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.applicationKeyInput"></a>

```python
application_key_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `frequency_details_input`<sup>Optional</sup> <a name="frequency_details_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.frequencyDetailsInput"></a>

```python
frequency_details_input: DataintegrationWorkspaceApplicationScheduleFrequencyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_daylight_adjustment_enabled_input`<sup>Optional</sup> <a name="is_daylight_adjustment_enabled_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.isDaylightAdjustmentEnabledInput"></a>

```python
is_daylight_adjustment_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `model_version_input`<sup>Optional</sup> <a name="model_version_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelVersionInput"></a>

```python
model_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_status_input`<sup>Optional</sup> <a name="object_status_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectStatusInput"></a>

```python
object_status_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_version_input`<sup>Optional</sup> <a name="object_version_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectVersionInput"></a>

```python
object_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `registry_metadata_input`<sup>Optional</sup> <a name="registry_metadata_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.registryMetadataInput"></a>

```python
registry_metadata_input: DataintegrationWorkspaceApplicationScheduleRegistryMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataintegrationWorkspaceApplicationScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `is_daylight_adjustment_enabled`<sup>Required</sup> <a name="is_daylight_adjustment_enabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.isDaylightAdjustmentEnabled"></a>

```python
is_daylight_adjustment_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `model_version`<sup>Required</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_status`<sup>Required</sup> <a name="object_status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectStatus"></a>

```python
object_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectVersion"></a>

```python
object_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceApplicationScheduleConfig <a name="DataintegrationWorkspaceApplicationScheduleConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_key: str,
  identifier: str,
  name: str,
  workspace_id: str,
  description: str = None,
  frequency_details: DataintegrationWorkspaceApplicationScheduleFrequencyDetails = None,
  id: str = None,
  is_daylight_adjustment_enabled: typing.Union[bool, IResolvable] = None,
  key: str = None,
  model_version: str = None,
  object_status: typing.Union[int, float] = None,
  object_version: typing.Union[int, float] = None,
  registry_metadata: DataintegrationWorkspaceApplicationScheduleRegistryMetadata = None,
  timeouts: DataintegrationWorkspaceApplicationScheduleTimeouts = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.applicationKey">application_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#application_key DataintegrationWorkspaceApplicationSchedule#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#identifier DataintegrationWorkspaceApplicationSchedule#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#name DataintegrationWorkspaceApplicationSchedule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#workspace_id DataintegrationWorkspaceApplicationSchedule#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#description DataintegrationWorkspaceApplicationSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.frequencyDetails">frequency_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a></code> | frequency_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#id DataintegrationWorkspaceApplicationSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.isDaylightAdjustmentEnabled">is_daylight_adjustment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_daylight_adjustment_enabled DataintegrationWorkspaceApplicationSchedule#is_daylight_adjustment_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.modelVersion">model_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_version DataintegrationWorkspaceApplicationSchedule#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.objectStatus">object_status</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_status DataintegrationWorkspaceApplicationSchedule#object_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.objectVersion">object_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_version DataintegrationWorkspaceApplicationSchedule#object_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.registryMetadata">registry_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a></code> | registry_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timezone DataintegrationWorkspaceApplicationSchedule#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#application_key DataintegrationWorkspaceApplicationSchedule#application_key}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#identifier DataintegrationWorkspaceApplicationSchedule#identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#name DataintegrationWorkspaceApplicationSchedule#name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#workspace_id DataintegrationWorkspaceApplicationSchedule#workspace_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#description DataintegrationWorkspaceApplicationSchedule#description}.

---

##### `frequency_details`<sup>Optional</sup> <a name="frequency_details" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.frequencyDetails"></a>

```python
frequency_details: DataintegrationWorkspaceApplicationScheduleFrequencyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

frequency_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#frequency_details DataintegrationWorkspaceApplicationSchedule#frequency_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#id DataintegrationWorkspaceApplicationSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_daylight_adjustment_enabled`<sup>Optional</sup> <a name="is_daylight_adjustment_enabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.isDaylightAdjustmentEnabled"></a>

```python
is_daylight_adjustment_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_daylight_adjustment_enabled DataintegrationWorkspaceApplicationSchedule#is_daylight_adjustment_enabled}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}.

---

##### `model_version`<sup>Optional</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_version DataintegrationWorkspaceApplicationSchedule#model_version}.

---

##### `object_status`<sup>Optional</sup> <a name="object_status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.objectStatus"></a>

```python
object_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_status DataintegrationWorkspaceApplicationSchedule#object_status}.

---

##### `object_version`<sup>Optional</sup> <a name="object_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.objectVersion"></a>

```python
object_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_version DataintegrationWorkspaceApplicationSchedule#object_version}.

---

##### `registry_metadata`<sup>Optional</sup> <a name="registry_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.registryMetadata"></a>

```python
registry_metadata: DataintegrationWorkspaceApplicationScheduleRegistryMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

registry_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#registry_metadata DataintegrationWorkspaceApplicationSchedule#registry_metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.timeouts"></a>

```python
timeouts: DataintegrationWorkspaceApplicationScheduleTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timeouts DataintegrationWorkspaceApplicationSchedule#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timezone DataintegrationWorkspaceApplicationSchedule#timezone}.

---

### DataintegrationWorkspaceApplicationScheduleFrequencyDetails <a name="DataintegrationWorkspaceApplicationScheduleFrequencyDetails" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails(
  model_type: str,
  custom_expression: str = None,
  day_of_week: str = None,
  days: typing.List[typing.Union[int, float]] = None,
  frequency: str = None,
  interval: typing.Union[int, float] = None,
  time: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime = None,
  week_of_month: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.modelType">model_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_type DataintegrationWorkspaceApplicationSchedule#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.customExpression">custom_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#custom_expression DataintegrationWorkspaceApplicationSchedule#custom_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#day_of_week DataintegrationWorkspaceApplicationSchedule#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.days">days</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#days DataintegrationWorkspaceApplicationSchedule#days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#frequency DataintegrationWorkspaceApplicationSchedule#frequency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#interval DataintegrationWorkspaceApplicationSchedule#interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.time">time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a></code> | time block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.weekOfMonth">week_of_month</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#week_of_month DataintegrationWorkspaceApplicationSchedule#week_of_month}. |

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_type DataintegrationWorkspaceApplicationSchedule#model_type}.

---

##### `custom_expression`<sup>Optional</sup> <a name="custom_expression" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.customExpression"></a>

```python
custom_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#custom_expression DataintegrationWorkspaceApplicationSchedule#custom_expression}.

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#day_of_week DataintegrationWorkspaceApplicationSchedule#day_of_week}.

---

##### `days`<sup>Optional</sup> <a name="days" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.days"></a>

```python
days: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#days DataintegrationWorkspaceApplicationSchedule#days}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#frequency DataintegrationWorkspaceApplicationSchedule#frequency}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#interval DataintegrationWorkspaceApplicationSchedule#interval}.

---

##### `time`<sup>Optional</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.time"></a>

```python
time: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#time DataintegrationWorkspaceApplicationSchedule#time}

---

##### `week_of_month`<sup>Optional</sup> <a name="week_of_month" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.weekOfMonth"></a>

```python
week_of_month: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#week_of_month DataintegrationWorkspaceApplicationSchedule#week_of_month}.

---

### DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime <a name="DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime(
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None,
  second: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#hour DataintegrationWorkspaceApplicationSchedule#hour}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#minute DataintegrationWorkspaceApplicationSchedule#minute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.second">second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#second DataintegrationWorkspaceApplicationSchedule#second}. |

---

##### `hour`<sup>Optional</sup> <a name="hour" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#hour DataintegrationWorkspaceApplicationSchedule#hour}.

---

##### `minute`<sup>Optional</sup> <a name="minute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#minute DataintegrationWorkspaceApplicationSchedule#minute}.

---

##### `second`<sup>Optional</sup> <a name="second" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.second"></a>

```python
second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#second DataintegrationWorkspaceApplicationSchedule#second}.

---

### DataintegrationWorkspaceApplicationScheduleMetadata <a name="DataintegrationWorkspaceApplicationScheduleMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata()
```


### DataintegrationWorkspaceApplicationScheduleMetadataAggregator <a name="DataintegrationWorkspaceApplicationScheduleMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator()
```


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics()
```


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct()
```


### DataintegrationWorkspaceApplicationScheduleParentRef <a name="DataintegrationWorkspaceApplicationScheduleParentRef" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef()
```


### DataintegrationWorkspaceApplicationScheduleRegistryMetadata <a name="DataintegrationWorkspaceApplicationScheduleRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata(
  aggregator_key: str = None,
  is_favorite: typing.Union[bool, IResolvable] = None,
  key: str = None,
  labels: typing.List[str] = None,
  registry_version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.aggregatorKey">aggregator_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#aggregator_key DataintegrationWorkspaceApplicationSchedule#aggregator_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.isFavorite">is_favorite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_favorite DataintegrationWorkspaceApplicationSchedule#is_favorite}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.labels">labels</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#labels DataintegrationWorkspaceApplicationSchedule#labels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.registryVersion">registry_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#registry_version DataintegrationWorkspaceApplicationSchedule#registry_version}. |

---

##### `aggregator_key`<sup>Optional</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.aggregatorKey"></a>

```python
aggregator_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#aggregator_key DataintegrationWorkspaceApplicationSchedule#aggregator_key}.

---

##### `is_favorite`<sup>Optional</sup> <a name="is_favorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.isFavorite"></a>

```python
is_favorite: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_favorite DataintegrationWorkspaceApplicationSchedule#is_favorite}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#labels DataintegrationWorkspaceApplicationSchedule#labels}.

---

##### `registry_version`<sup>Optional</sup> <a name="registry_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.registryVersion"></a>

```python
registry_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#registry_version DataintegrationWorkspaceApplicationSchedule#registry_version}.

---

### DataintegrationWorkspaceApplicationScheduleTimeouts <a name="DataintegrationWorkspaceApplicationScheduleTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#create DataintegrationWorkspaceApplicationSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#delete DataintegrationWorkspaceApplicationSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#update DataintegrationWorkspaceApplicationSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#create DataintegrationWorkspaceApplicationSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#delete DataintegrationWorkspaceApplicationSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#update DataintegrationWorkspaceApplicationSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference <a name="DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.putTime">put_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetCustomExpression">reset_custom_expression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetDayOfWeek">reset_day_of_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetTime">reset_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetWeekOfMonth">reset_week_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_time` <a name="put_time" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.putTime"></a>

```python
def put_time(
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None,
  second: typing.Union[int, float] = None
) -> None
```

###### `hour`<sup>Optional</sup> <a name="hour" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.putTime.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#hour DataintegrationWorkspaceApplicationSchedule#hour}.

---

###### `minute`<sup>Optional</sup> <a name="minute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.putTime.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#minute DataintegrationWorkspaceApplicationSchedule#minute}.

---

###### `second`<sup>Optional</sup> <a name="second" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.putTime.parameter.second"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#second DataintegrationWorkspaceApplicationSchedule#second}.

---

##### `reset_custom_expression` <a name="reset_custom_expression" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetCustomExpression"></a>

```python
def reset_custom_expression() -> None
```

##### `reset_day_of_week` <a name="reset_day_of_week" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetDayOfWeek"></a>

```python
def reset_day_of_week() -> None
```

##### `reset_days` <a name="reset_days" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_frequency` <a name="reset_frequency" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_interval` <a name="reset_interval" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_time` <a name="reset_time" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetTime"></a>

```python
def reset_time() -> None
```

##### `reset_week_of_month` <a name="reset_week_of_month" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetWeekOfMonth"></a>

```python
def reset_week_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.time">time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.customExpressionInput">custom_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.daysInput">days_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.modelTypeInput">model_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.timeInput">time_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.weekOfMonthInput">week_of_month_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.customExpression">custom_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.days">days</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.weekOfMonth">week_of_month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.time"></a>

```python
time: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference</a>

---

##### `custom_expression_input`<sup>Optional</sup> <a name="custom_expression_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.customExpressionInput"></a>

```python
custom_expression_input: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.daysInput"></a>

```python
days_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_type_input`<sup>Optional</sup> <a name="model_type_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.modelTypeInput"></a>

```python
model_type_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.timeInput"></a>

```python
time_input: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a>

---

##### `week_of_month_input`<sup>Optional</sup> <a name="week_of_month_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.weekOfMonthInput"></a>

```python
week_of_month_input: str
```

- *Type:* str

---

##### `custom_expression`<sup>Required</sup> <a name="custom_expression" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.customExpression"></a>

```python
custom_expression: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.days"></a>

```python
days: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `week_of_month`<sup>Required</sup> <a name="week_of_month" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.weekOfMonth"></a>

```python
week_of_month: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationScheduleFrequencyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

---


### DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference <a name="DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetHour">reset_hour</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetMinute">reset_minute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetSecond">reset_second</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hour` <a name="reset_hour" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```

##### `reset_minute` <a name="reset_minute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetMinute"></a>

```python
def reset_minute() -> None
```

##### `reset_second` <a name="reset_second" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetSecond"></a>

```python
def reset_second() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.secondInput">second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.second">second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `second_input`<sup>Optional</sup> <a name="second_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.secondInput"></a>

```python
second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour`<sup>Required</sup> <a name="hour" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `second`<sup>Required</sup> <a name="second" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.second"></a>

```python
second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a>

---


### DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList <a name="DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference <a name="DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator">DataintegrationWorkspaceApplicationScheduleMetadataAggregator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationScheduleMetadataAggregator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator">DataintegrationWorkspaceApplicationScheduleMetadataAggregator</a>

---


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">object_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_count`<sup>Required</sup> <a name="object_count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```python
object_count: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.objectTypeCountList">object_type_count_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics">DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_type_count_list`<sup>Required</sup> <a name="object_type_count_list" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```python
object_type_count_list: DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics">DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics</a>

---


### DataintegrationWorkspaceApplicationScheduleMetadataList <a name="DataintegrationWorkspaceApplicationScheduleMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataintegrationWorkspaceApplicationScheduleMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataintegrationWorkspaceApplicationScheduleMetadataOutputReference <a name="DataintegrationWorkspaceApplicationScheduleMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.aggregator">aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList">DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.aggregatorKey">aggregator_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.countStatistics">count_statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.createdByName">created_by_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.identifierPath">identifier_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.infoFields">info_fields</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.isFavorite">is_favorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.registryVersion">registry_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.updatedByName">updated_by_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata">DataintegrationWorkspaceApplicationScheduleMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.aggregator"></a>

```python
aggregator: DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList">DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList</a>

---

##### `aggregator_key`<sup>Required</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.aggregatorKey"></a>

```python
aggregator_key: str
```

- *Type:* str

---

##### `count_statistics`<sup>Required</sup> <a name="count_statistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.countStatistics"></a>

```python
count_statistics: DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `created_by_name`<sup>Required</sup> <a name="created_by_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.createdByName"></a>

```python
created_by_name: str
```

- *Type:* str

---

##### `identifier_path`<sup>Required</sup> <a name="identifier_path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.identifierPath"></a>

```python
identifier_path: str
```

- *Type:* str

---

##### `info_fields`<sup>Required</sup> <a name="info_fields" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.infoFields"></a>

```python
info_fields: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_favorite`<sup>Required</sup> <a name="is_favorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.isFavorite"></a>

```python
is_favorite: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registry_version`<sup>Required</sup> <a name="registry_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.registryVersion"></a>

```python
registry_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `updated_by_name`<sup>Required</sup> <a name="updated_by_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.updatedByName"></a>

```python
updated_by_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationScheduleMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata">DataintegrationWorkspaceApplicationScheduleMetadata</a>

---


### DataintegrationWorkspaceApplicationScheduleParentRefList <a name="DataintegrationWorkspaceApplicationScheduleParentRefList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataintegrationWorkspaceApplicationScheduleParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataintegrationWorkspaceApplicationScheduleParentRefOutputReference <a name="DataintegrationWorkspaceApplicationScheduleParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.rootDocId">root_doc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef">DataintegrationWorkspaceApplicationScheduleParentRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `root_doc_id`<sup>Required</sup> <a name="root_doc_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.rootDocId"></a>

```python
root_doc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationScheduleParentRef
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef">DataintegrationWorkspaceApplicationScheduleParentRef</a>

---


### DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference <a name="DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetAggregatorKey">reset_aggregator_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetIsFavorite">reset_is_favorite</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetRegistryVersion">reset_registry_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregator_key` <a name="reset_aggregator_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetAggregatorKey"></a>

```python
def reset_aggregator_key() -> None
```

##### `reset_is_favorite` <a name="reset_is_favorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetIsFavorite"></a>

```python
def reset_is_favorite() -> None
```

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_labels` <a name="reset_labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_registry_version` <a name="reset_registry_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetRegistryVersion"></a>

```python
def reset_registry_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.aggregatorKeyInput">aggregator_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.isFavoriteInput">is_favorite_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.registryVersionInput">registry_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.aggregatorKey">aggregator_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.isFavorite">is_favorite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.registryVersion">registry_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregator_key_input`<sup>Optional</sup> <a name="aggregator_key_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.aggregatorKeyInput"></a>

```python
aggregator_key_input: str
```

- *Type:* str

---

##### `is_favorite_input`<sup>Optional</sup> <a name="is_favorite_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.isFavoriteInput"></a>

```python
is_favorite_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registry_version_input`<sup>Optional</sup> <a name="registry_version_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.registryVersionInput"></a>

```python
registry_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregator_key`<sup>Required</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.aggregatorKey"></a>

```python
aggregator_key: str
```

- *Type:* str

---

##### `is_favorite`<sup>Required</sup> <a name="is_favorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.isFavorite"></a>

```python
is_favorite: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registry_version`<sup>Required</sup> <a name="registry_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.registryVersion"></a>

```python
registry_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationScheduleRegistryMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

---


### DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference <a name="DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_schedule

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataintegrationWorkspaceApplicationScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>]

---



