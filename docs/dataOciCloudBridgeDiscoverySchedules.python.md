# `dataOciCloudBridgeDiscoverySchedules` Submodule <a name="`dataOciCloudBridgeDiscoverySchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeDiscoverySchedules <a name="DataOciCloudBridgeDiscoverySchedules" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules oci_cloud_bridge_discovery_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules(
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
  discovery_schedule_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudBridgeDiscoverySchedulesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#compartment_id DataOciCloudBridgeDiscoverySchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.discoveryScheduleId">discovery_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#discovery_schedule_id DataOciCloudBridgeDiscoverySchedules#discovery_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#display_name DataOciCloudBridgeDiscoverySchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter">DataOciCloudBridgeDiscoverySchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#id DataOciCloudBridgeDiscoverySchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#state DataOciCloudBridgeDiscoverySchedules#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#compartment_id DataOciCloudBridgeDiscoverySchedules#compartment_id}.

---

##### `discovery_schedule_id`<sup>Optional</sup> <a name="discovery_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.discoveryScheduleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#discovery_schedule_id DataOciCloudBridgeDiscoverySchedules#discovery_schedule_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#display_name DataOciCloudBridgeDiscoverySchedules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter">DataOciCloudBridgeDiscoverySchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#filter DataOciCloudBridgeDiscoverySchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#id DataOciCloudBridgeDiscoverySchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#state DataOciCloudBridgeDiscoverySchedules#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.resetDiscoveryScheduleId">reset_discovery_schedule_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCloudBridgeDiscoverySchedulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter">DataOciCloudBridgeDiscoverySchedulesFilter</a>]]

---

##### `reset_discovery_schedule_id` <a name="reset_discovery_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.resetDiscoveryScheduleId"></a>

```python
def reset_discovery_schedule_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeDiscoverySchedules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudBridgeDiscoverySchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudBridgeDiscoverySchedules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudBridgeDiscoverySchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeDiscoverySchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.discoveryScheduleCollection">discovery_schedule_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList">DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList">DataOciCloudBridgeDiscoverySchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.discoveryScheduleIdInput">discovery_schedule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter">DataOciCloudBridgeDiscoverySchedulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.discoveryScheduleId">discovery_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `discovery_schedule_collection`<sup>Required</sup> <a name="discovery_schedule_collection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.discoveryScheduleCollection"></a>

```python
discovery_schedule_collection: DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList">DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.filter"></a>

```python
filter: DataOciCloudBridgeDiscoverySchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList">DataOciCloudBridgeDiscoverySchedulesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `discovery_schedule_id_input`<sup>Optional</sup> <a name="discovery_schedule_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.discoveryScheduleIdInput"></a>

```python
discovery_schedule_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCloudBridgeDiscoverySchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter">DataOciCloudBridgeDiscoverySchedulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `discovery_schedule_id`<sup>Required</sup> <a name="discovery_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.discoveryScheduleId"></a>

```python
discovery_schedule_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeDiscoverySchedulesConfig <a name="DataOciCloudBridgeDiscoverySchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  discovery_schedule_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudBridgeDiscoverySchedulesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#compartment_id DataOciCloudBridgeDiscoverySchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.discoveryScheduleId">discovery_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#discovery_schedule_id DataOciCloudBridgeDiscoverySchedules#discovery_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#display_name DataOciCloudBridgeDiscoverySchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter">DataOciCloudBridgeDiscoverySchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#id DataOciCloudBridgeDiscoverySchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#state DataOciCloudBridgeDiscoverySchedules#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#compartment_id DataOciCloudBridgeDiscoverySchedules#compartment_id}.

---

##### `discovery_schedule_id`<sup>Optional</sup> <a name="discovery_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.discoveryScheduleId"></a>

```python
discovery_schedule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#discovery_schedule_id DataOciCloudBridgeDiscoverySchedules#discovery_schedule_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#display_name DataOciCloudBridgeDiscoverySchedules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCloudBridgeDiscoverySchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter">DataOciCloudBridgeDiscoverySchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#filter DataOciCloudBridgeDiscoverySchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#id DataOciCloudBridgeDiscoverySchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#state DataOciCloudBridgeDiscoverySchedules#state}.

---

### DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollection <a name="DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollection()
```


### DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItems <a name="DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItems()
```


### DataOciCloudBridgeDiscoverySchedulesFilter <a name="DataOciCloudBridgeDiscoverySchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#name DataOciCloudBridgeDiscoverySchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#values DataOciCloudBridgeDiscoverySchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#regex DataOciCloudBridgeDiscoverySchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#name DataOciCloudBridgeDiscoverySchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#values DataOciCloudBridgeDiscoverySchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedules#regex DataOciCloudBridgeDiscoverySchedules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList <a name="DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference <a name="DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.executionRecurrences">execution_recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItems">DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execution_recurrences`<sup>Required</sup> <a name="execution_recurrences" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.executionRecurrences"></a>

```python
execution_recurrences: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItems">DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItems</a>

---


### DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList <a name="DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference <a name="DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList">DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollection">DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.property.items"></a>

```python
items: DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList">DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollection">DataOciCloudBridgeDiscoverySchedulesDiscoveryScheduleCollection</a>

---


### DataOciCloudBridgeDiscoverySchedulesFilterList <a name="DataOciCloudBridgeDiscoverySchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeDiscoverySchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter">DataOciCloudBridgeDiscoverySchedulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCloudBridgeDiscoverySchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter">DataOciCloudBridgeDiscoverySchedulesFilter</a>]]

---


### DataOciCloudBridgeDiscoverySchedulesFilterOutputReference <a name="DataOciCloudBridgeDiscoverySchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_discovery_schedules

dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter">DataOciCloudBridgeDiscoverySchedulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCloudBridgeDiscoverySchedulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedules.DataOciCloudBridgeDiscoverySchedulesFilter">DataOciCloudBridgeDiscoverySchedulesFilter</a>]

---



