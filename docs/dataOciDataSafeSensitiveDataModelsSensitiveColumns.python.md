# `dataOciDataSafeSensitiveDataModelsSensitiveColumns` Submodule <a name="`dataOciDataSafeSensitiveDataModelsSensitiveColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumns <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns oci_data_safe_sensitive_data_models_sensitive_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sensitive_data_model_id: str,
  column_group: str = None,
  column_name: typing.List[str] = None,
  data_type: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter]] = None,
  id: str = None,
  is_case_in_sensitive: typing.Union[bool, IResolvable] = None,
  object: typing.List[str] = None,
  object_type: typing.List[str] = None,
  parent_column_key: typing.List[str] = None,
  relation_type: typing.List[str] = None,
  schema_name: typing.List[str] = None,
  sensitive_column_lifecycle_state: str = None,
  sensitive_type_id: typing.List[str] = None,
  status: typing.List[str] = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None,
  time_updated_greater_than_or_equal_to: str = None,
  time_updated_less_than: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.columnGroup">column_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_group DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.dataType">data_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#data_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#id DataOciDataSafeSensitiveDataModelsSensitiveColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.isCaseInSensitive">is_case_in_sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#is_case_in_sensitive DataOciDataSafeSensitiveDataModelsSensitiveColumns#is_case_in_sensitive}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.object">object</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object DataOciDataSafeSensitiveDataModelsSensitiveColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.objectType">object_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.parentColumnKey">parent_column_key</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#parent_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumns#parent_column_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.relationType">relation_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#relation_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#relation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#schema_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.sensitiveColumnLifecycleState">sensitive_column_lifecycle_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_column_lifecycle_state DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_column_lifecycle_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.sensitiveTypeId">sensitive_type_id</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_type_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.status">status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#status DataOciDataSafeSensitiveDataModelsSensitiveColumns#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.timeUpdatedGreaterThanOrEqualTo">time_updated_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.timeUpdatedLessThan">time_updated_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.sensitiveDataModelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_data_model_id}.

---

##### `column_group`<sup>Optional</sup> <a name="column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.columnGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_group DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_group}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.columnName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_name}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.dataType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#data_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#data_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#filter DataOciDataSafeSensitiveDataModelsSensitiveColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#id DataOciDataSafeSensitiveDataModelsSensitiveColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_case_in_sensitive`<sup>Optional</sup> <a name="is_case_in_sensitive" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.isCaseInSensitive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#is_case_in_sensitive DataOciDataSafeSensitiveDataModelsSensitiveColumns#is_case_in_sensitive}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.object"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object DataOciDataSafeSensitiveDataModelsSensitiveColumns#object}.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.objectType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#object_type}.

---

##### `parent_column_key`<sup>Optional</sup> <a name="parent_column_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.parentColumnKey"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#parent_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumns#parent_column_key}.

---

##### `relation_type`<sup>Optional</sup> <a name="relation_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.relationType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#relation_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#relation_type}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.schemaName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#schema_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#schema_name}.

---

##### `sensitive_column_lifecycle_state`<sup>Optional</sup> <a name="sensitive_column_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.sensitiveColumnLifecycleState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_column_lifecycle_state DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_column_lifecycle_state}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.sensitiveTypeId"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_type_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_type_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.status"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#status DataOciDataSafeSensitiveDataModelsSensitiveColumns#status}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_less_than}.

---

##### `time_updated_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.timeUpdatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_greater_than_or_equal_to}.

---

##### `time_updated_less_than`<sup>Optional</sup> <a name="time_updated_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.timeUpdatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetColumnGroup">reset_column_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetIsCaseInSensitive">reset_is_case_in_sensitive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetObjectType">reset_object_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetParentColumnKey">reset_parent_column_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetRelationType">reset_relation_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSensitiveColumnLifecycleState">reset_sensitive_column_lifecycle_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSensitiveTypeId">reset_sensitive_type_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeCreatedGreaterThanOrEqualTo">reset_time_created_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeCreatedLessThan">reset_time_created_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeUpdatedGreaterThanOrEqualTo">reset_time_updated_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeUpdatedLessThan">reset_time_updated_less_than</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>]]

---

##### `reset_column_group` <a name="reset_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetColumnGroup"></a>

```python
def reset_column_group() -> None
```

##### `reset_column_name` <a name="reset_column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_case_in_sensitive` <a name="reset_is_case_in_sensitive" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetIsCaseInSensitive"></a>

```python
def reset_is_case_in_sensitive() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetObjectType"></a>

```python
def reset_object_type() -> None
```

##### `reset_parent_column_key` <a name="reset_parent_column_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetParentColumnKey"></a>

```python
def reset_parent_column_key() -> None
```

##### `reset_relation_type` <a name="reset_relation_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetRelationType"></a>

```python
def reset_relation_type() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_sensitive_column_lifecycle_state` <a name="reset_sensitive_column_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSensitiveColumnLifecycleState"></a>

```python
def reset_sensitive_column_lifecycle_state() -> None
```

##### `reset_sensitive_type_id` <a name="reset_sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSensitiveTypeId"></a>

```python
def reset_sensitive_type_id() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_time_created_greater_than_or_equal_to` <a name="reset_time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeCreatedGreaterThanOrEqualTo"></a>

```python
def reset_time_created_greater_than_or_equal_to() -> None
```

##### `reset_time_created_less_than` <a name="reset_time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeCreatedLessThan"></a>

```python
def reset_time_created_less_than() -> None
```

##### `reset_time_updated_greater_than_or_equal_to` <a name="reset_time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeUpdatedGreaterThanOrEqualTo"></a>

```python
def reset_time_updated_greater_than_or_equal_to() -> None
```

##### `reset_time_updated_less_than` <a name="reset_time_updated_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeUpdatedLessThan"></a>

```python
def reset_time_updated_less_than() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumns resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelsSensitiveColumns to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSensitiveDataModelsSensitiveColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelsSensitiveColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnCollection">sensitive_column_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnGroupInput">column_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnNameInput">column_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dataTypeInput">data_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.isCaseInSensitiveInput">is_case_in_sensitive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectInput">object_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectTypeInput">object_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.parentColumnKeyInput">parent_column_key_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.relationTypeInput">relation_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.schemaNameInput">schema_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnLifecycleStateInput">sensitive_column_lifecycle_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveDataModelIdInput">sensitive_data_model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveTypeIdInput">sensitive_type_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.statusInput">status_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedGreaterThanOrEqualToInput">time_created_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedLessThanInput">time_created_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedGreaterThanOrEqualToInput">time_updated_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedLessThanInput">time_updated_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnGroup">column_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dataType">data_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.isCaseInSensitive">is_case_in_sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.object">object</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectType">object_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.parentColumnKey">parent_column_key</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.relationType">relation_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnLifecycleState">sensitive_column_lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.status">status</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedGreaterThanOrEqualTo">time_updated_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedLessThan">time_updated_less_than</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.filter"></a>

```python
filter: DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList</a>

---

##### `sensitive_column_collection`<sup>Required</sup> <a name="sensitive_column_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnCollection"></a>

```python
sensitive_column_collection: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList</a>

---

##### `column_group_input`<sup>Optional</sup> <a name="column_group_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnGroupInput"></a>

```python
column_group_input: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnNameInput"></a>

```python
column_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dataTypeInput"></a>

```python
data_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_case_in_sensitive_input`<sup>Optional</sup> <a name="is_case_in_sensitive_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.isCaseInSensitiveInput"></a>

```python
is_case_in_sensitive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectInput"></a>

```python
object_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectTypeInput"></a>

```python
object_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parent_column_key_input`<sup>Optional</sup> <a name="parent_column_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.parentColumnKeyInput"></a>

```python
parent_column_key_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `relation_type_input`<sup>Optional</sup> <a name="relation_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.relationTypeInput"></a>

```python
relation_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.schemaNameInput"></a>

```python
schema_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_column_lifecycle_state_input`<sup>Optional</sup> <a name="sensitive_column_lifecycle_state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnLifecycleStateInput"></a>

```python
sensitive_column_lifecycle_state_input: str
```

- *Type:* str

---

##### `sensitive_data_model_id_input`<sup>Optional</sup> <a name="sensitive_data_model_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveDataModelIdInput"></a>

```python
sensitive_data_model_id_input: str
```

- *Type:* str

---

##### `sensitive_type_id_input`<sup>Optional</sup> <a name="sensitive_type_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveTypeIdInput"></a>

```python
sensitive_type_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.statusInput"></a>

```python
status_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedGreaterThanOrEqualToInput"></a>

```python
time_created_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_created_less_than_input`<sup>Optional</sup> <a name="time_created_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedLessThanInput"></a>

```python
time_created_less_than_input: str
```

- *Type:* str

---

##### `time_updated_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_updated_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedGreaterThanOrEqualToInput"></a>

```python
time_updated_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_updated_less_than_input`<sup>Optional</sup> <a name="time_updated_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedLessThanInput"></a>

```python
time_updated_less_than_input: str
```

- *Type:* str

---

##### `column_group`<sup>Required</sup> <a name="column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnGroup"></a>

```python
column_group: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dataType"></a>

```python
data_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_case_in_sensitive`<sup>Required</sup> <a name="is_case_in_sensitive" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.isCaseInSensitive"></a>

```python
is_case_in_sensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.object"></a>

```python
object: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectType"></a>

```python
object_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parent_column_key`<sup>Required</sup> <a name="parent_column_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.parentColumnKey"></a>

```python
parent_column_key: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `relation_type`<sup>Required</sup> <a name="relation_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.relationType"></a>

```python
relation_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_column_lifecycle_state`<sup>Required</sup> <a name="sensitive_column_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnLifecycleState"></a>

```python
sensitive_column_lifecycle_state: str
```

- *Type:* str

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveTypeId"></a>

```python
sensitive_type_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created_greater_than_or_equal_to`<sup>Required</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_created_less_than`<sup>Required</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

---

##### `time_updated_greater_than_or_equal_to`<sup>Required</sup> <a name="time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedGreaterThanOrEqualTo"></a>

```python
time_updated_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_updated_less_than`<sup>Required</sup> <a name="time_updated_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedLessThan"></a>

```python
time_updated_less_than: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sensitive_data_model_id: str,
  column_group: str = None,
  column_name: typing.List[str] = None,
  data_type: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter]] = None,
  id: str = None,
  is_case_in_sensitive: typing.Union[bool, IResolvable] = None,
  object: typing.List[str] = None,
  object_type: typing.List[str] = None,
  parent_column_key: typing.List[str] = None,
  relation_type: typing.List[str] = None,
  schema_name: typing.List[str] = None,
  sensitive_column_lifecycle_state: str = None,
  sensitive_type_id: typing.List[str] = None,
  status: typing.List[str] = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None,
  time_updated_greater_than_or_equal_to: str = None,
  time_updated_less_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.columnGroup">column_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_group DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.dataType">data_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#data_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#id DataOciDataSafeSensitiveDataModelsSensitiveColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.isCaseInSensitive">is_case_in_sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#is_case_in_sensitive DataOciDataSafeSensitiveDataModelsSensitiveColumns#is_case_in_sensitive}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.object">object</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object DataOciDataSafeSensitiveDataModelsSensitiveColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.objectType">object_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.parentColumnKey">parent_column_key</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#parent_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumns#parent_column_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.relationType">relation_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#relation_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#relation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#schema_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveColumnLifecycleState">sensitive_column_lifecycle_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_column_lifecycle_state DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_column_lifecycle_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_type_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.status">status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#status DataOciDataSafeSensitiveDataModelsSensitiveColumns#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeUpdatedGreaterThanOrEqualTo">time_updated_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeUpdatedLessThan">time_updated_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_data_model_id}.

---

##### `column_group`<sup>Optional</sup> <a name="column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.columnGroup"></a>

```python
column_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_group DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_group}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_name}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.dataType"></a>

```python
data_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#data_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#data_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#filter DataOciDataSafeSensitiveDataModelsSensitiveColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#id DataOciDataSafeSensitiveDataModelsSensitiveColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_case_in_sensitive`<sup>Optional</sup> <a name="is_case_in_sensitive" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.isCaseInSensitive"></a>

```python
is_case_in_sensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#is_case_in_sensitive DataOciDataSafeSensitiveDataModelsSensitiveColumns#is_case_in_sensitive}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.object"></a>

```python
object: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object DataOciDataSafeSensitiveDataModelsSensitiveColumns#object}.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.objectType"></a>

```python
object_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#object_type}.

---

##### `parent_column_key`<sup>Optional</sup> <a name="parent_column_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.parentColumnKey"></a>

```python
parent_column_key: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#parent_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumns#parent_column_key}.

---

##### `relation_type`<sup>Optional</sup> <a name="relation_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.relationType"></a>

```python
relation_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#relation_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#relation_type}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#schema_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#schema_name}.

---

##### `sensitive_column_lifecycle_state`<sup>Optional</sup> <a name="sensitive_column_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveColumnLifecycleState"></a>

```python
sensitive_column_lifecycle_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_column_lifecycle_state DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_column_lifecycle_state}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveTypeId"></a>

```python
sensitive_type_id: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_type_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_type_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#status DataOciDataSafeSensitiveDataModelsSensitiveColumns#status}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_less_than}.

---

##### `time_updated_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeUpdatedGreaterThanOrEqualTo"></a>

```python
time_updated_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_greater_than_or_equal_to}.

---

##### `time_updated_less_than`<sup>Optional</sup> <a name="time_updated_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeUpdatedLessThan"></a>

```python
time_updated_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_less_than}.

---

### DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#name DataOciDataSafeSensitiveDataModelsSensitiveColumns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#values DataOciDataSafeSensitiveDataModelsSensitiveColumns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#regex DataOciDataSafeSensitiveDataModelsSensitiveColumns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#name DataOciDataSafeSensitiveDataModelsSensitiveColumns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#values DataOciDataSafeSensitiveDataModelsSensitiveColumns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#regex DataOciDataSafeSensitiveDataModelsSensitiveColumns#regex}.

---

### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection()
```


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>]]

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>]

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.appDefinedChildColumnKeys">app_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.columnGroups">column_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.dbDefinedChildColumnKeys">db_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.estimatedDataValueCount">estimated_data_value_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.parentColumnKeys">parent_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.relationType">relation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sampleDataValues">sample_data_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_defined_child_column_keys`<sup>Required</sup> <a name="app_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.appDefinedChildColumnKeys"></a>

```python
app_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `column_groups`<sup>Required</sup> <a name="column_groups" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.columnGroups"></a>

```python
column_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `db_defined_child_column_keys`<sup>Required</sup> <a name="db_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.dbDefinedChildColumnKeys"></a>

```python
db_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `estimated_data_value_count`<sup>Required</sup> <a name="estimated_data_value_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.estimatedDataValueCount"></a>

```python
estimated_data_value_count: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `parent_column_keys`<sup>Required</sup> <a name="parent_column_keys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.parentColumnKeys"></a>

```python
parent_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `relation_type`<sup>Required</sup> <a name="relation_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.relationType"></a>

```python
relation_type: str
```

- *Type:* str

---

##### `sample_data_values`<sup>Required</sup> <a name="sample_data_values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sampleDataValues"></a>

```python
sample_data_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems</a>

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_columns

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection</a>

---



