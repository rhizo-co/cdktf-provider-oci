# `aiAnomalyDetectionDataAsset` Submodule <a name="`aiAnomalyDetectionDataAsset` Submodule" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiAnomalyDetectionDataAsset <a name="AiAnomalyDetectionDataAsset" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset oci_ai_anomaly_detection_data_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_data_asset

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset(
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
  data_source_details: AiAnomalyDetectionDataAssetDataSourceDetails,
  project_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  private_endpoint_id: str = None,
  timeouts: AiAnomalyDetectionDataAssetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.dataSourceDetails">data_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | data_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}.

---

##### `data_source_details`<sup>Required</sup> <a name="data_source_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.dataSourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

data_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_details AiAnomalyDetectionDataAsset#data_source_details}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_endpoint_id`<sup>Optional</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.privateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#timeouts AiAnomalyDetectionDataAsset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails">put_data_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetPrivateEndpointId">reset_private_endpoint_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_source_details` <a name="put_data_source_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails"></a>

```python
def put_data_source_details(
  data_source_type: str,
  atp_password_secret_id: str = None,
  atp_user_name: str = None,
  bucket: str = None,
  cwallet_file_secret_id: str = None,
  database_name: str = None,
  ewallet_file_secret_id: str = None,
  key_store_file_secret_id: str = None,
  measurement_name: str = None,
  namespace: str = None,
  object: str = None,
  ojdbc_file_secret_id: str = None,
  password_secret_id: str = None,
  table_name: str = None,
  tnsnames_file_secret_id: str = None,
  truststore_file_secret_id: str = None,
  url: str = None,
  user_name: str = None,
  version_specific_details: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails = None,
  wallet_password_secret_id: str = None
) -> None
```

###### `data_source_type`<sup>Required</sup> <a name="data_source_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.dataSourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_type AiAnomalyDetectionDataAsset#data_source_type}.

---

###### `atp_password_secret_id`<sup>Optional</sup> <a name="atp_password_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.atpPasswordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_password_secret_id AiAnomalyDetectionDataAsset#atp_password_secret_id}.

---

###### `atp_user_name`<sup>Optional</sup> <a name="atp_user_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.atpUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_user_name AiAnomalyDetectionDataAsset#atp_user_name}.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}.

---

###### `cwallet_file_secret_id`<sup>Optional</sup> <a name="cwallet_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.cwalletFileSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#cwallet_file_secret_id AiAnomalyDetectionDataAsset#cwallet_file_secret_id}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}.

---

###### `ewallet_file_secret_id`<sup>Optional</sup> <a name="ewallet_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.ewalletFileSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ewallet_file_secret_id AiAnomalyDetectionDataAsset#ewallet_file_secret_id}.

---

###### `key_store_file_secret_id`<sup>Optional</sup> <a name="key_store_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.keyStoreFileSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#key_store_file_secret_id AiAnomalyDetectionDataAsset#key_store_file_secret_id}.

---

###### `measurement_name`<sup>Optional</sup> <a name="measurement_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.measurementName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#measurement_name AiAnomalyDetectionDataAsset#measurement_name}.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#namespace AiAnomalyDetectionDataAsset#namespace}.

---

###### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#object AiAnomalyDetectionDataAsset#object}.

---

###### `ojdbc_file_secret_id`<sup>Optional</sup> <a name="ojdbc_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.ojdbcFileSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ojdbc_file_secret_id AiAnomalyDetectionDataAsset#ojdbc_file_secret_id}.

---

###### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.passwordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#password_secret_id AiAnomalyDetectionDataAsset#password_secret_id}.

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#table_name AiAnomalyDetectionDataAsset#table_name}.

---

###### `tnsnames_file_secret_id`<sup>Optional</sup> <a name="tnsnames_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.tnsnamesFileSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#tnsnames_file_secret_id AiAnomalyDetectionDataAsset#tnsnames_file_secret_id}.

---

###### `truststore_file_secret_id`<sup>Optional</sup> <a name="truststore_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.truststoreFileSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#truststore_file_secret_id AiAnomalyDetectionDataAsset#truststore_file_secret_id}.

---

###### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#url AiAnomalyDetectionDataAsset#url}.

---

###### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#user_name AiAnomalyDetectionDataAsset#user_name}.

---

###### `version_specific_details`<sup>Optional</sup> <a name="version_specific_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.versionSpecificDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

version_specific_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#version_specific_details AiAnomalyDetectionDataAsset#version_specific_details}

---

###### `wallet_password_secret_id`<sup>Optional</sup> <a name="wallet_password_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.walletPasswordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#wallet_password_secret_id AiAnomalyDetectionDataAsset#wallet_password_secret_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#create AiAnomalyDetectionDataAsset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#delete AiAnomalyDetectionDataAsset#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#update AiAnomalyDetectionDataAsset#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_private_endpoint_id` <a name="reset_private_endpoint_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetPrivateEndpointId"></a>

```python
def reset_private_endpoint_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_data_asset

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_data_asset

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_data_asset

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_data_asset

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiAnomalyDetectionDataAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiAnomalyDetectionDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AiAnomalyDetectionDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetails">data_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference">AiAnomalyDetectionDataAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetailsInput">data_source_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointIdInput">private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_details`<sup>Required</sup> <a name="data_source_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetails"></a>

```python
data_source_details: AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeouts"></a>

```python
timeouts: AiAnomalyDetectionDataAssetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference">AiAnomalyDetectionDataAssetTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `data_source_details_input`<sup>Optional</sup> <a name="data_source_details_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetailsInput"></a>

```python
data_source_details_input: AiAnomalyDetectionDataAssetDataSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_endpoint_id_input`<sup>Optional</sup> <a name="private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointIdInput"></a>

```python
private_endpoint_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AiAnomalyDetectionDataAssetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiAnomalyDetectionDataAssetConfig <a name="AiAnomalyDetectionDataAssetConfig" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_data_asset

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  data_source_details: AiAnomalyDetectionDataAssetDataSourceDetails,
  project_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  private_endpoint_id: str = None,
  timeouts: AiAnomalyDetectionDataAssetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dataSourceDetails">data_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | data_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}.

---

##### `data_source_details`<sup>Required</sup> <a name="data_source_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dataSourceDetails"></a>

```python
data_source_details: AiAnomalyDetectionDataAssetDataSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

data_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_details AiAnomalyDetectionDataAsset#data_source_details}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_endpoint_id`<sup>Optional</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.timeouts"></a>

```python
timeouts: AiAnomalyDetectionDataAssetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#timeouts AiAnomalyDetectionDataAsset#timeouts}

---

### AiAnomalyDetectionDataAssetDataSourceDetails <a name="AiAnomalyDetectionDataAssetDataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_data_asset

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails(
  data_source_type: str,
  atp_password_secret_id: str = None,
  atp_user_name: str = None,
  bucket: str = None,
  cwallet_file_secret_id: str = None,
  database_name: str = None,
  ewallet_file_secret_id: str = None,
  key_store_file_secret_id: str = None,
  measurement_name: str = None,
  namespace: str = None,
  object: str = None,
  ojdbc_file_secret_id: str = None,
  password_secret_id: str = None,
  table_name: str = None,
  tnsnames_file_secret_id: str = None,
  truststore_file_secret_id: str = None,
  url: str = None,
  user_name: str = None,
  version_specific_details: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails = None,
  wallet_password_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.dataSourceType">data_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_type AiAnomalyDetectionDataAsset#data_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpPasswordSecretId">atp_password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_password_secret_id AiAnomalyDetectionDataAsset#atp_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpUserName">atp_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_user_name AiAnomalyDetectionDataAsset#atp_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.cwalletFileSecretId">cwallet_file_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#cwallet_file_secret_id AiAnomalyDetectionDataAsset#cwallet_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ewalletFileSecretId">ewallet_file_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ewallet_file_secret_id AiAnomalyDetectionDataAsset#ewallet_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.keyStoreFileSecretId">key_store_file_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#key_store_file_secret_id AiAnomalyDetectionDataAsset#key_store_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.measurementName">measurement_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#measurement_name AiAnomalyDetectionDataAsset#measurement_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#namespace AiAnomalyDetectionDataAsset#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#object AiAnomalyDetectionDataAsset#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ojdbcFileSecretId">ojdbc_file_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ojdbc_file_secret_id AiAnomalyDetectionDataAsset#ojdbc_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#password_secret_id AiAnomalyDetectionDataAsset#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#table_name AiAnomalyDetectionDataAsset#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tnsnamesFileSecretId">tnsnames_file_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#tnsnames_file_secret_id AiAnomalyDetectionDataAsset#tnsnames_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.truststoreFileSecretId">truststore_file_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#truststore_file_secret_id AiAnomalyDetectionDataAsset#truststore_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#url AiAnomalyDetectionDataAsset#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#user_name AiAnomalyDetectionDataAsset#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.versionSpecificDetails">version_specific_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | version_specific_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.walletPasswordSecretId">wallet_password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#wallet_password_secret_id AiAnomalyDetectionDataAsset#wallet_password_secret_id}. |

---

##### `data_source_type`<sup>Required</sup> <a name="data_source_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.dataSourceType"></a>

```python
data_source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_type AiAnomalyDetectionDataAsset#data_source_type}.

---

##### `atp_password_secret_id`<sup>Optional</sup> <a name="atp_password_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpPasswordSecretId"></a>

```python
atp_password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_password_secret_id AiAnomalyDetectionDataAsset#atp_password_secret_id}.

---

##### `atp_user_name`<sup>Optional</sup> <a name="atp_user_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpUserName"></a>

```python
atp_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_user_name AiAnomalyDetectionDataAsset#atp_user_name}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}.

---

##### `cwallet_file_secret_id`<sup>Optional</sup> <a name="cwallet_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.cwalletFileSecretId"></a>

```python
cwallet_file_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#cwallet_file_secret_id AiAnomalyDetectionDataAsset#cwallet_file_secret_id}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}.

---

##### `ewallet_file_secret_id`<sup>Optional</sup> <a name="ewallet_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ewalletFileSecretId"></a>

```python
ewallet_file_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ewallet_file_secret_id AiAnomalyDetectionDataAsset#ewallet_file_secret_id}.

---

##### `key_store_file_secret_id`<sup>Optional</sup> <a name="key_store_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.keyStoreFileSecretId"></a>

```python
key_store_file_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#key_store_file_secret_id AiAnomalyDetectionDataAsset#key_store_file_secret_id}.

---

##### `measurement_name`<sup>Optional</sup> <a name="measurement_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.measurementName"></a>

```python
measurement_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#measurement_name AiAnomalyDetectionDataAsset#measurement_name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#namespace AiAnomalyDetectionDataAsset#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#object AiAnomalyDetectionDataAsset#object}.

---

##### `ojdbc_file_secret_id`<sup>Optional</sup> <a name="ojdbc_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ojdbcFileSecretId"></a>

```python
ojdbc_file_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ojdbc_file_secret_id AiAnomalyDetectionDataAsset#ojdbc_file_secret_id}.

---

##### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#password_secret_id AiAnomalyDetectionDataAsset#password_secret_id}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#table_name AiAnomalyDetectionDataAsset#table_name}.

---

##### `tnsnames_file_secret_id`<sup>Optional</sup> <a name="tnsnames_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tnsnamesFileSecretId"></a>

```python
tnsnames_file_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#tnsnames_file_secret_id AiAnomalyDetectionDataAsset#tnsnames_file_secret_id}.

---

##### `truststore_file_secret_id`<sup>Optional</sup> <a name="truststore_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.truststoreFileSecretId"></a>

```python
truststore_file_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#truststore_file_secret_id AiAnomalyDetectionDataAsset#truststore_file_secret_id}.

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#url AiAnomalyDetectionDataAsset#url}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#user_name AiAnomalyDetectionDataAsset#user_name}.

---

##### `version_specific_details`<sup>Optional</sup> <a name="version_specific_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.versionSpecificDetails"></a>

```python
version_specific_details: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

version_specific_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#version_specific_details AiAnomalyDetectionDataAsset#version_specific_details}

---

##### `wallet_password_secret_id`<sup>Optional</sup> <a name="wallet_password_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.walletPasswordSecretId"></a>

```python
wallet_password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#wallet_password_secret_id AiAnomalyDetectionDataAsset#wallet_password_secret_id}.

---

### AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails <a name="AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_data_asset

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails(
  influx_version: str,
  bucket: str = None,
  database_name: str = None,
  organization_name: str = None,
  retention_policy_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.influxVersion">influx_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#influx_version AiAnomalyDetectionDataAsset#influx_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.organizationName">organization_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#organization_name AiAnomalyDetectionDataAsset#organization_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.retentionPolicyName">retention_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#retention_policy_name AiAnomalyDetectionDataAsset#retention_policy_name}. |

---

##### `influx_version`<sup>Required</sup> <a name="influx_version" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.influxVersion"></a>

```python
influx_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#influx_version AiAnomalyDetectionDataAsset#influx_version}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}.

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#organization_name AiAnomalyDetectionDataAsset#organization_name}.

---

##### `retention_policy_name`<sup>Optional</sup> <a name="retention_policy_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.retentionPolicyName"></a>

```python
retention_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#retention_policy_name AiAnomalyDetectionDataAsset#retention_policy_name}.

---

### AiAnomalyDetectionDataAssetTimeouts <a name="AiAnomalyDetectionDataAssetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_data_asset

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#create AiAnomalyDetectionDataAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#delete AiAnomalyDetectionDataAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#update AiAnomalyDetectionDataAsset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#create AiAnomalyDetectionDataAsset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#delete AiAnomalyDetectionDataAsset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#update AiAnomalyDetectionDataAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference <a name="AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_data_asset

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails">put_version_specific_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpPasswordSecretId">reset_atp_password_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpUserName">reset_atp_user_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetCwalletFileSecretId">reset_cwallet_file_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetEwalletFileSecretId">reset_ewallet_file_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetKeyStoreFileSecretId">reset_key_store_file_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetMeasurementName">reset_measurement_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetOjdbcFileSecretId">reset_ojdbc_file_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetPasswordSecretId">reset_password_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTnsnamesFileSecretId">reset_tnsnames_file_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTruststoreFileSecretId">reset_truststore_file_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetVersionSpecificDetails">reset_version_specific_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetWalletPasswordSecretId">reset_wallet_password_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_version_specific_details` <a name="put_version_specific_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails"></a>

```python
def put_version_specific_details(
  influx_version: str,
  bucket: str = None,
  database_name: str = None,
  organization_name: str = None,
  retention_policy_name: str = None
) -> None
```

###### `influx_version`<sup>Required</sup> <a name="influx_version" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails.parameter.influxVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#influx_version AiAnomalyDetectionDataAsset#influx_version}.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}.

---

###### `organization_name`<sup>Optional</sup> <a name="organization_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails.parameter.organizationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#organization_name AiAnomalyDetectionDataAsset#organization_name}.

---

###### `retention_policy_name`<sup>Optional</sup> <a name="retention_policy_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails.parameter.retentionPolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#retention_policy_name AiAnomalyDetectionDataAsset#retention_policy_name}.

---

##### `reset_atp_password_secret_id` <a name="reset_atp_password_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpPasswordSecretId"></a>

```python
def reset_atp_password_secret_id() -> None
```

##### `reset_atp_user_name` <a name="reset_atp_user_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpUserName"></a>

```python
def reset_atp_user_name() -> None
```

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_cwallet_file_secret_id` <a name="reset_cwallet_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetCwalletFileSecretId"></a>

```python
def reset_cwallet_file_secret_id() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_ewallet_file_secret_id` <a name="reset_ewallet_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetEwalletFileSecretId"></a>

```python
def reset_ewallet_file_secret_id() -> None
```

##### `reset_key_store_file_secret_id` <a name="reset_key_store_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetKeyStoreFileSecretId"></a>

```python
def reset_key_store_file_secret_id() -> None
```

##### `reset_measurement_name` <a name="reset_measurement_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetMeasurementName"></a>

```python
def reset_measurement_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_ojdbc_file_secret_id` <a name="reset_ojdbc_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetOjdbcFileSecretId"></a>

```python
def reset_ojdbc_file_secret_id() -> None
```

##### `reset_password_secret_id` <a name="reset_password_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetPasswordSecretId"></a>

```python
def reset_password_secret_id() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_tnsnames_file_secret_id` <a name="reset_tnsnames_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTnsnamesFileSecretId"></a>

```python
def reset_tnsnames_file_secret_id() -> None
```

##### `reset_truststore_file_secret_id` <a name="reset_truststore_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTruststoreFileSecretId"></a>

```python
def reset_truststore_file_secret_id() -> None
```

##### `reset_url` <a name="reset_url" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```

##### `reset_version_specific_details` <a name="reset_version_specific_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetVersionSpecificDetails"></a>

```python
def reset_version_specific_details() -> None
```

##### `reset_wallet_password_secret_id` <a name="reset_wallet_password_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetWalletPasswordSecretId"></a>

```python
def reset_wallet_password_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails">version_specific_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretIdInput">atp_password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserNameInput">atp_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretIdInput">cwallet_file_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceTypeInput">data_source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretIdInput">ewallet_file_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretIdInput">key_store_file_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementNameInput">measurement_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretIdInput">ojdbc_file_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretIdInput">password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretIdInput">tnsnames_file_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretIdInput">truststore_file_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetailsInput">version_specific_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretIdInput">wallet_password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId">atp_password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName">atp_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId">cwallet_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType">data_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId">ewallet_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId">key_store_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName">measurement_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId">ojdbc_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId">tnsnames_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId">truststore_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId">wallet_password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `version_specific_details`<sup>Required</sup> <a name="version_specific_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails"></a>

```python
version_specific_details: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference</a>

---

##### `atp_password_secret_id_input`<sup>Optional</sup> <a name="atp_password_secret_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretIdInput"></a>

```python
atp_password_secret_id_input: str
```

- *Type:* str

---

##### `atp_user_name_input`<sup>Optional</sup> <a name="atp_user_name_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserNameInput"></a>

```python
atp_user_name_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `cwallet_file_secret_id_input`<sup>Optional</sup> <a name="cwallet_file_secret_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretIdInput"></a>

```python
cwallet_file_secret_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `data_source_type_input`<sup>Optional</sup> <a name="data_source_type_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceTypeInput"></a>

```python
data_source_type_input: str
```

- *Type:* str

---

##### `ewallet_file_secret_id_input`<sup>Optional</sup> <a name="ewallet_file_secret_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretIdInput"></a>

```python
ewallet_file_secret_id_input: str
```

- *Type:* str

---

##### `key_store_file_secret_id_input`<sup>Optional</sup> <a name="key_store_file_secret_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretIdInput"></a>

```python
key_store_file_secret_id_input: str
```

- *Type:* str

---

##### `measurement_name_input`<sup>Optional</sup> <a name="measurement_name_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementNameInput"></a>

```python
measurement_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `ojdbc_file_secret_id_input`<sup>Optional</sup> <a name="ojdbc_file_secret_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretIdInput"></a>

```python
ojdbc_file_secret_id_input: str
```

- *Type:* str

---

##### `password_secret_id_input`<sup>Optional</sup> <a name="password_secret_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretIdInput"></a>

```python
password_secret_id_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `tnsnames_file_secret_id_input`<sup>Optional</sup> <a name="tnsnames_file_secret_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretIdInput"></a>

```python
tnsnames_file_secret_id_input: str
```

- *Type:* str

---

##### `truststore_file_secret_id_input`<sup>Optional</sup> <a name="truststore_file_secret_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretIdInput"></a>

```python
truststore_file_secret_id_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `version_specific_details_input`<sup>Optional</sup> <a name="version_specific_details_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetailsInput"></a>

```python
version_specific_details_input: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---

##### `wallet_password_secret_id_input`<sup>Optional</sup> <a name="wallet_password_secret_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretIdInput"></a>

```python
wallet_password_secret_id_input: str
```

- *Type:* str

---

##### `atp_password_secret_id`<sup>Required</sup> <a name="atp_password_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId"></a>

```python
atp_password_secret_id: str
```

- *Type:* str

---

##### `atp_user_name`<sup>Required</sup> <a name="atp_user_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName"></a>

```python
atp_user_name: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `cwallet_file_secret_id`<sup>Required</sup> <a name="cwallet_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId"></a>

```python
cwallet_file_secret_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `data_source_type`<sup>Required</sup> <a name="data_source_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType"></a>

```python
data_source_type: str
```

- *Type:* str

---

##### `ewallet_file_secret_id`<sup>Required</sup> <a name="ewallet_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId"></a>

```python
ewallet_file_secret_id: str
```

- *Type:* str

---

##### `key_store_file_secret_id`<sup>Required</sup> <a name="key_store_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId"></a>

```python
key_store_file_secret_id: str
```

- *Type:* str

---

##### `measurement_name`<sup>Required</sup> <a name="measurement_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName"></a>

```python
measurement_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `ojdbc_file_secret_id`<sup>Required</sup> <a name="ojdbc_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId"></a>

```python
ojdbc_file_secret_id: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `tnsnames_file_secret_id`<sup>Required</sup> <a name="tnsnames_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId"></a>

```python
tnsnames_file_secret_id: str
```

- *Type:* str

---

##### `truststore_file_secret_id`<sup>Required</sup> <a name="truststore_file_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId"></a>

```python
truststore_file_secret_id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `wallet_password_secret_id`<sup>Required</sup> <a name="wallet_password_secret_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId"></a>

```python
wallet_password_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: AiAnomalyDetectionDataAssetDataSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---


### AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference <a name="AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_data_asset

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetOrganizationName">reset_organization_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetRetentionPolicyName">reset_retention_policy_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

##### `reset_retention_policy_name` <a name="reset_retention_policy_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetRetentionPolicyName"></a>

```python
def reset_retention_policy_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersionInput">influx_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyNameInput">retention_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion">influx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName">retention_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `influx_version_input`<sup>Optional</sup> <a name="influx_version_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersionInput"></a>

```python
influx_version_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `retention_policy_name_input`<sup>Optional</sup> <a name="retention_policy_name_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyNameInput"></a>

```python
retention_policy_name_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `influx_version`<sup>Required</sup> <a name="influx_version" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion"></a>

```python
influx_version: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `retention_policy_name`<sup>Required</sup> <a name="retention_policy_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName"></a>

```python
retention_policy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue"></a>

```python
internal_value: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---


### AiAnomalyDetectionDataAssetTimeoutsOutputReference <a name="AiAnomalyDetectionDataAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_data_asset

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AiAnomalyDetectionDataAssetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>]

---



