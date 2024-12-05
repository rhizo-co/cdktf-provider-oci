# `dataOciLogAnalyticsNamespaceStorageRecalledDataSize` Submodule <a name="`dataOciLogAnalyticsNamespaceStorageRecalledDataSize` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceStorageRecalledDataSize <a name="DataOciLogAnalyticsNamespaceStorageRecalledDataSize" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size oci_log_analytics_namespace_storage_recalled_data_size}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_recalled_data_size

dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize(
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
  id: str = None,
  time_data_ended: str = None,
  time_data_started: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#namespace DataOciLogAnalyticsNamespaceStorageRecalledDataSize#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#id DataOciLogAnalyticsNamespaceStorageRecalledDataSize#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.timeDataEnded">time_data_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_ended DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.timeDataStarted">time_data_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_started DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_started}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#namespace DataOciLogAnalyticsNamespaceStorageRecalledDataSize#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#id DataOciLogAnalyticsNamespaceStorageRecalledDataSize#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_data_ended`<sup>Optional</sup> <a name="time_data_ended" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.timeDataEnded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_ended DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_ended}.

---

##### `time_data_started`<sup>Optional</sup> <a name="time_data_started" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.timeDataStarted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_started DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_started}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetTimeDataEnded">reset_time_data_ended</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetTimeDataStarted">reset_time_data_started</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_data_ended` <a name="reset_time_data_ended" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetTimeDataEnded"></a>

```python
def reset_time_data_ended() -> None
```

##### `reset_time_data_started` <a name="reset_time_data_started" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetTimeDataStarted"></a>

```python
def reset_time_data_started() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageRecalledDataSize resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_recalled_data_size

dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_recalled_data_size

dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_recalled_data_size

dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_recalled_data_size

dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageRecalledDataSize resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceStorageRecalledDataSize to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLogAnalyticsNamespaceStorageRecalledDataSize that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceStorageRecalledDataSize to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.notRecalledDataInBytes">not_recalled_data_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.recalledDataInBytes">recalled_data_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataEndedInput">time_data_ended_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataStartedInput">time_data_started_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataEnded">time_data_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataStarted">time_data_started</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `not_recalled_data_in_bytes`<sup>Required</sup> <a name="not_recalled_data_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.notRecalledDataInBytes"></a>

```python
not_recalled_data_in_bytes: str
```

- *Type:* str

---

##### `recalled_data_in_bytes`<sup>Required</sup> <a name="recalled_data_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.recalledDataInBytes"></a>

```python
recalled_data_in_bytes: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `time_data_ended_input`<sup>Optional</sup> <a name="time_data_ended_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataEndedInput"></a>

```python
time_data_ended_input: str
```

- *Type:* str

---

##### `time_data_started_input`<sup>Optional</sup> <a name="time_data_started_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataStartedInput"></a>

```python
time_data_started_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `time_data_ended`<sup>Required</sup> <a name="time_data_ended" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataEnded"></a>

```python
time_data_ended: str
```

- *Type:* str

---

##### `time_data_started`<sup>Required</sup> <a name="time_data_started" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataStarted"></a>

```python
time_data_started: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig <a name="DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_recalled_data_size

dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: str,
  id: str = None,
  time_data_ended: str = None,
  time_data_started: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#namespace DataOciLogAnalyticsNamespaceStorageRecalledDataSize#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#id DataOciLogAnalyticsNamespaceStorageRecalledDataSize#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.timeDataEnded">time_data_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_ended DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.timeDataStarted">time_data_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_started DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_started}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#namespace DataOciLogAnalyticsNamespaceStorageRecalledDataSize#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#id DataOciLogAnalyticsNamespaceStorageRecalledDataSize#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_data_ended`<sup>Optional</sup> <a name="time_data_ended" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.timeDataEnded"></a>

```python
time_data_ended: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_ended DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_ended}.

---

##### `time_data_started`<sup>Optional</sup> <a name="time_data_started" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.timeDataStarted"></a>

```python
time_data_started: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_started DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_started}.

---



