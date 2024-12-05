# `dataOciDataSafeSqlCollectionLogInsights` Submodule <a name="`dataOciDataSafeSqlCollectionLogInsights` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlCollectionLogInsights <a name="DataOciDataSafeSqlCollectionLogInsights" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights oci_data_safe_sql_collection_log_insights}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sql_collection_id: str,
  time_ended: str,
  time_started: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlCollectionLogInsightsFilter]] = None,
  group_by: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.sqlCollectionId">sql_collection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#sql_collection_id DataOciDataSafeSqlCollectionLogInsights#sql_collection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.timeEnded">time_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_ended DataOciDataSafeSqlCollectionLogInsights#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.timeStarted">time_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_started DataOciDataSafeSqlCollectionLogInsights#time_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.groupBy">group_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#group_by DataOciDataSafeSqlCollectionLogInsights#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#id DataOciDataSafeSqlCollectionLogInsights#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sql_collection_id`<sup>Required</sup> <a name="sql_collection_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.sqlCollectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#sql_collection_id DataOciDataSafeSqlCollectionLogInsights#sql_collection_id}.

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.timeEnded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_ended DataOciDataSafeSqlCollectionLogInsights#time_ended}.

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.timeStarted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_started DataOciDataSafeSqlCollectionLogInsights#time_started}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#filter DataOciDataSafeSqlCollectionLogInsights#filter}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.groupBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#group_by DataOciDataSafeSqlCollectionLogInsights#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#id DataOciDataSafeSqlCollectionLogInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlCollectionLogInsightsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_group_by` <a name="reset_group_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlCollectionLogInsights resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSqlCollectionLogInsights resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSqlCollectionLogInsights to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSqlCollectionLogInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlCollectionLogInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList">DataOciDataSafeSqlCollectionLogInsightsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionLogInsightsCollection">sql_collection_log_insights_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupByInput">group_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionIdInput">sql_collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEndedInput">time_ended_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStartedInput">time_started_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupBy">group_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionId">sql_collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filter"></a>

```python
filter: DataOciDataSafeSqlCollectionLogInsightsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList">DataOciDataSafeSqlCollectionLogInsightsFilterList</a>

---

##### `sql_collection_log_insights_collection`<sup>Required</sup> <a name="sql_collection_log_insights_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionLogInsightsCollection"></a>

```python
sql_collection_log_insights_collection: DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlCollectionLogInsightsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>]]

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupByInput"></a>

```python
group_by_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `sql_collection_id_input`<sup>Optional</sup> <a name="sql_collection_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionIdInput"></a>

```python
sql_collection_id_input: str
```

- *Type:* str

---

##### `time_ended_input`<sup>Optional</sup> <a name="time_ended_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEndedInput"></a>

```python
time_ended_input: str
```

- *Type:* str

---

##### `time_started_input`<sup>Optional</sup> <a name="time_started_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStartedInput"></a>

```python
time_started_input: str
```

- *Type:* str

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupBy"></a>

```python
group_by: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sql_collection_id`<sup>Required</sup> <a name="sql_collection_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionId"></a>

```python
sql_collection_id: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlCollectionLogInsightsConfig <a name="DataOciDataSafeSqlCollectionLogInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sql_collection_id: str,
  time_ended: str,
  time_started: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlCollectionLogInsightsFilter]] = None,
  group_by: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.sqlCollectionId">sql_collection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#sql_collection_id DataOciDataSafeSqlCollectionLogInsights#sql_collection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeEnded">time_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_ended DataOciDataSafeSqlCollectionLogInsights#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeStarted">time_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_started DataOciDataSafeSqlCollectionLogInsights#time_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.groupBy">group_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#group_by DataOciDataSafeSqlCollectionLogInsights#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#id DataOciDataSafeSqlCollectionLogInsights#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sql_collection_id`<sup>Required</sup> <a name="sql_collection_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.sqlCollectionId"></a>

```python
sql_collection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#sql_collection_id DataOciDataSafeSqlCollectionLogInsights#sql_collection_id}.

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_ended DataOciDataSafeSqlCollectionLogInsights#time_ended}.

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_started DataOciDataSafeSqlCollectionLogInsights#time_started}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlCollectionLogInsightsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#filter DataOciDataSafeSqlCollectionLogInsights#filter}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.groupBy"></a>

```python
group_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#group_by DataOciDataSafeSqlCollectionLogInsights#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#id DataOciDataSafeSqlCollectionLogInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeSqlCollectionLogInsightsFilter <a name="DataOciDataSafeSqlCollectionLogInsightsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#name DataOciDataSafeSqlCollectionLogInsights#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#values DataOciDataSafeSqlCollectionLogInsights#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#regex DataOciDataSafeSqlCollectionLogInsights#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#name DataOciDataSafeSqlCollectionLogInsights#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#values DataOciDataSafeSqlCollectionLogInsights#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#regex DataOciDataSafeSqlCollectionLogInsights#regex}.

---

### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection()
```


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems()
```


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlCollectionLogInsightsFilterList <a name="DataOciDataSafeSqlCollectionLogInsightsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlCollectionLogInsightsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>]]

---


### DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSqlCollectionLogInsightsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>]

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientIp">client_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientOsUserName">client_os_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientProgram">client_program</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_ip`<sup>Required</sup> <a name="client_ip" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientIp"></a>

```python
client_ip: str
```

- *Type:* str

---

##### `client_os_user_name`<sup>Required</sup> <a name="client_os_user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientOsUserName"></a>

```python
client_os_user_name: str
```

- *Type:* str

---

##### `client_program`<sup>Required</sup> <a name="client_program" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientProgram"></a>

```python
client_program: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.sqlCollectionLogInsightCount">sql_collection_log_insight_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.dimensions"></a>

```python
dimensions: DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList</a>

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `sql_collection_log_insight_count`<sup>Required</sup> <a name="sql_collection_log_insight_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.sqlCollectionLogInsightCount"></a>

```python
sql_collection_log_insight_count: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems</a>

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_collection_log_insights

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection</a>

---



