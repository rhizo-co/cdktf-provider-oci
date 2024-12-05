# `dataOciDataSafeMaskingReportsMaskedColumns` Submodule <a name="`dataOciDataSafeMaskingReportsMaskedColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingReportsMaskedColumns <a name="DataOciDataSafeMaskingReportsMaskedColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns oci_data_safe_masking_reports_masked_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  masking_report_id: str,
  column_name: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingReportsMaskedColumnsFilter]] = None,
  id: str = None,
  masking_column_group: typing.List[str] = None,
  object: typing.List[str] = None,
  object_type: typing.List[str] = None,
  schema_name: typing.List[str] = None,
  sensitive_type_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.maskingReportId">masking_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#masking_report_id DataOciDataSafeMaskingReportsMaskedColumns#masking_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#column_name DataOciDataSafeMaskingReportsMaskedColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter">DataOciDataSafeMaskingReportsMaskedColumnsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#id DataOciDataSafeMaskingReportsMaskedColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.maskingColumnGroup">masking_column_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#masking_column_group DataOciDataSafeMaskingReportsMaskedColumns#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.object">object</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#object DataOciDataSafeMaskingReportsMaskedColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.objectType">object_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#object_type DataOciDataSafeMaskingReportsMaskedColumns#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#schema_name DataOciDataSafeMaskingReportsMaskedColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumns#sensitive_type_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `masking_report_id`<sup>Required</sup> <a name="masking_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.maskingReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#masking_report_id DataOciDataSafeMaskingReportsMaskedColumns#masking_report_id}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.columnName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#column_name DataOciDataSafeMaskingReportsMaskedColumns#column_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter">DataOciDataSafeMaskingReportsMaskedColumnsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#filter DataOciDataSafeMaskingReportsMaskedColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#id DataOciDataSafeMaskingReportsMaskedColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masking_column_group`<sup>Optional</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.maskingColumnGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#masking_column_group DataOciDataSafeMaskingReportsMaskedColumns#masking_column_group}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.object"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#object DataOciDataSafeMaskingReportsMaskedColumns#object}.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.objectType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#object_type DataOciDataSafeMaskingReportsMaskedColumns#object_type}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.schemaName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#schema_name DataOciDataSafeMaskingReportsMaskedColumns#schema_name}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.Initializer.parameter.sensitiveTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumns#sensitive_type_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetMaskingColumnGroup">reset_masking_column_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetObjectType">reset_object_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetSensitiveTypeId">reset_sensitive_type_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingReportsMaskedColumnsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter">DataOciDataSafeMaskingReportsMaskedColumnsFilter</a>]]

---

##### `reset_column_name` <a name="reset_column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_masking_column_group` <a name="reset_masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetMaskingColumnGroup"></a>

```python
def reset_masking_column_group() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetObjectType"></a>

```python
def reset_object_type() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_sensitive_type_id` <a name="reset_sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.resetSensitiveTypeId"></a>

```python
def reset_sensitive_type_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingReportsMaskedColumns resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingReportsMaskedColumns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeMaskingReportsMaskedColumns to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeMaskingReportsMaskedColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingReportsMaskedColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList">DataOciDataSafeMaskingReportsMaskedColumnsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.maskedColumnCollection">masked_column_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList">DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.columnNameInput">column_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter">DataOciDataSafeMaskingReportsMaskedColumnsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.maskingColumnGroupInput">masking_column_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.maskingReportIdInput">masking_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.objectInput">object_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.objectTypeInput">object_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.schemaNameInput">schema_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.sensitiveTypeIdInput">sensitive_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.maskingColumnGroup">masking_column_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.maskingReportId">masking_report_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.object">object</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.objectType">object_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.filter"></a>

```python
filter: DataOciDataSafeMaskingReportsMaskedColumnsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList">DataOciDataSafeMaskingReportsMaskedColumnsFilterList</a>

---

##### `masked_column_collection`<sup>Required</sup> <a name="masked_column_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.maskedColumnCollection"></a>

```python
masked_column_collection: DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList">DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList</a>

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.columnNameInput"></a>

```python
column_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingReportsMaskedColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter">DataOciDataSafeMaskingReportsMaskedColumnsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `masking_column_group_input`<sup>Optional</sup> <a name="masking_column_group_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.maskingColumnGroupInput"></a>

```python
masking_column_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `masking_report_id_input`<sup>Optional</sup> <a name="masking_report_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.maskingReportIdInput"></a>

```python
masking_report_id_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.objectInput"></a>

```python
object_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.objectTypeInput"></a>

```python
object_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.schemaNameInput"></a>

```python
schema_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_type_id_input`<sup>Optional</sup> <a name="sensitive_type_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.sensitiveTypeIdInput"></a>

```python
sensitive_type_id_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masking_column_group`<sup>Required</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.maskingColumnGroup"></a>

```python
masking_column_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `masking_report_id`<sup>Required</sup> <a name="masking_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.maskingReportId"></a>

```python
masking_report_id: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.object"></a>

```python
object: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.objectType"></a>

```python
object_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumns.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingReportsMaskedColumnsConfig <a name="DataOciDataSafeMaskingReportsMaskedColumnsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  masking_report_id: str,
  column_name: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingReportsMaskedColumnsFilter]] = None,
  id: str = None,
  masking_column_group: typing.List[str] = None,
  object: typing.List[str] = None,
  object_type: typing.List[str] = None,
  schema_name: typing.List[str] = None,
  sensitive_type_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.maskingReportId">masking_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#masking_report_id DataOciDataSafeMaskingReportsMaskedColumns#masking_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#column_name DataOciDataSafeMaskingReportsMaskedColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter">DataOciDataSafeMaskingReportsMaskedColumnsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#id DataOciDataSafeMaskingReportsMaskedColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.maskingColumnGroup">masking_column_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#masking_column_group DataOciDataSafeMaskingReportsMaskedColumns#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.object">object</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#object DataOciDataSafeMaskingReportsMaskedColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.objectType">object_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#object_type DataOciDataSafeMaskingReportsMaskedColumns#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#schema_name DataOciDataSafeMaskingReportsMaskedColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumns#sensitive_type_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `masking_report_id`<sup>Required</sup> <a name="masking_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.maskingReportId"></a>

```python
masking_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#masking_report_id DataOciDataSafeMaskingReportsMaskedColumns#masking_report_id}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#column_name DataOciDataSafeMaskingReportsMaskedColumns#column_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingReportsMaskedColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter">DataOciDataSafeMaskingReportsMaskedColumnsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#filter DataOciDataSafeMaskingReportsMaskedColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#id DataOciDataSafeMaskingReportsMaskedColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masking_column_group`<sup>Optional</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.maskingColumnGroup"></a>

```python
masking_column_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#masking_column_group DataOciDataSafeMaskingReportsMaskedColumns#masking_column_group}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.object"></a>

```python
object: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#object DataOciDataSafeMaskingReportsMaskedColumns#object}.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.objectType"></a>

```python
object_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#object_type DataOciDataSafeMaskingReportsMaskedColumns#object_type}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#schema_name DataOciDataSafeMaskingReportsMaskedColumns#schema_name}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsConfig.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumns#sensitive_type_id}.

---

### DataOciDataSafeMaskingReportsMaskedColumnsFilter <a name="DataOciDataSafeMaskingReportsMaskedColumnsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#name DataOciDataSafeMaskingReportsMaskedColumns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#values DataOciDataSafeMaskingReportsMaskedColumns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#regex DataOciDataSafeMaskingReportsMaskedColumns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#name DataOciDataSafeMaskingReportsMaskedColumns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#values DataOciDataSafeMaskingReportsMaskedColumns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_columns#regex DataOciDataSafeMaskingReportsMaskedColumns#regex}.

---

### DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection <a name="DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection()
```


### DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems <a name="DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingReportsMaskedColumnsFilterList <a name="DataOciDataSafeMaskingReportsMaskedColumnsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter">DataOciDataSafeMaskingReportsMaskedColumnsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingReportsMaskedColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter">DataOciDataSafeMaskingReportsMaskedColumnsFilter</a>]]

---


### DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference <a name="DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter">DataOciDataSafeMaskingReportsMaskedColumnsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeMaskingReportsMaskedColumnsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsFilter">DataOciDataSafeMaskingReportsMaskedColumnsFilter</a>]

---


### DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList <a name="DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference <a name="DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.maskingColumnGroup">masking_column_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.maskingFormatUsed">masking_format_used</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.parentColumnKey">parent_column_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.totalMaskedValues">total_masked_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems">DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `masking_column_group`<sup>Required</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.maskingColumnGroup"></a>

```python
masking_column_group: str
```

- *Type:* str

---

##### `masking_format_used`<sup>Required</sup> <a name="masking_format_used" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.maskingFormatUsed"></a>

```python
masking_format_used: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `parent_column_key`<sup>Required</sup> <a name="parent_column_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.parentColumnKey"></a>

```python
parent_column_key: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `total_masked_values`<sup>Required</sup> <a name="total_masked_values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.totalMaskedValues"></a>

```python
total_masked_values: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems">DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems</a>

---


### DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList <a name="DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference <a name="DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_columns

dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList">DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection">DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList">DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumns.DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection">DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection</a>

---



