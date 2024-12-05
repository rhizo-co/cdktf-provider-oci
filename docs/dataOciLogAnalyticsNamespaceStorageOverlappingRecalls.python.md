# `dataOciLogAnalyticsNamespaceStorageOverlappingRecalls` Submodule <a name="`dataOciLogAnalyticsNamespaceStorageOverlappingRecalls` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceStorageOverlappingRecalls <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecalls" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls oci_log_analytics_namespace_storage_overlapping_recalls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: str,
  filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter]] = None,
  id: str = None,
  time_data_ended: str = None,
  time_data_started: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#namespace DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#id DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.timeDataEnded">time_data_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_ended DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.timeDataStarted">time_data_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_started DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_started}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#namespace DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#filter DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#id DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_data_ended`<sup>Optional</sup> <a name="time_data_ended" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.timeDataEnded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_ended DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_ended}.

---

##### `time_data_started`<sup>Optional</sup> <a name="time_data_started" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.timeDataStarted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_started DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_started}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetTimeDataEnded">reset_time_data_ended</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetTimeDataStarted">reset_time_data_started</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_data_ended` <a name="reset_time_data_ended" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetTimeDataEnded"></a>

```python
def reset_time_data_ended() -> None
```

##### `reset_time_data_started` <a name="reset_time_data_started" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetTimeDataStarted"></a>

```python
def reset_time_data_started() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageOverlappingRecalls resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageOverlappingRecalls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceStorageOverlappingRecalls to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLogAnalyticsNamespaceStorageOverlappingRecalls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceStorageOverlappingRecalls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.overlappingRecallCollection">overlapping_recall_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataEndedInput">time_data_ended_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataStartedInput">time_data_started_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataEnded">time_data_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataStarted">time_data_started</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.filter"></a>

```python
filter: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList</a>

---

##### `overlapping_recall_collection`<sup>Required</sup> <a name="overlapping_recall_collection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.overlappingRecallCollection"></a>

```python
overlapping_recall_collection: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `time_data_ended_input`<sup>Optional</sup> <a name="time_data_ended_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataEndedInput"></a>

```python
time_data_ended_input: str
```

- *Type:* str

---

##### `time_data_started_input`<sup>Optional</sup> <a name="time_data_started_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataStartedInput"></a>

```python
time_data_started_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `time_data_ended`<sup>Required</sup> <a name="time_data_ended" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataEnded"></a>

```python
time_data_ended: str
```

- *Type:* str

---

##### `time_data_started`<sup>Required</sup> <a name="time_data_started" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataStarted"></a>

```python
time_data_started: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: str,
  filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter]] = None,
  id: str = None,
  time_data_ended: str = None,
  time_data_started: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#namespace DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#id DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.timeDataEnded">time_data_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_ended DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.timeDataStarted">time_data_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_started DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_started}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#namespace DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#filter DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#id DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_data_ended`<sup>Optional</sup> <a name="time_data_ended" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.timeDataEnded"></a>

```python
time_data_ended: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_ended DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_ended}.

---

##### `time_data_started`<sup>Optional</sup> <a name="time_data_started" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.timeDataStarted"></a>

```python
time_data_started: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_started DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_started}.

---

### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#name DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#values DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#regex DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#name DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#values DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#regex DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#regex}.

---

### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection()
```


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>]]

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>]

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.logSets">log_sets</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.purpose">purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.recallId">recall_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeDataEnded">time_data_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeDataStarted">time_data_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `log_sets`<sup>Required</sup> <a name="log_sets" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.logSets"></a>

```python
log_sets: str
```

- *Type:* str

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `recall_id`<sup>Required</sup> <a name="recall_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.recallId"></a>

```python
recall_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_data_ended`<sup>Required</sup> <a name="time_data_ended" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeDataEnded"></a>

```python
time_data_ended: str
```

- *Type:* str

---

##### `time_data_started`<sup>Required</sup> <a name="time_data_started" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeDataStarted"></a>

```python
time_data_started: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems</a>

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_overlapping_recalls

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.items"></a>

```python
items: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection</a>

---



