# `dataOciDataSafeMaskingReportsMaskedColumn` Submodule <a name="`dataOciDataSafeMaskingReportsMaskedColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingReportsMaskedColumn <a name="DataOciDataSafeMaskingReportsMaskedColumn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column oci_data_safe_masking_reports_masked_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_column

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn(
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.maskingReportId">masking_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_report_id DataOciDataSafeMaskingReportsMaskedColumn#masking_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#column_name DataOciDataSafeMaskingReportsMaskedColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#id DataOciDataSafeMaskingReportsMaskedColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.maskingColumnGroup">masking_column_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_column_group DataOciDataSafeMaskingReportsMaskedColumn#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.object">object</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object DataOciDataSafeMaskingReportsMaskedColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.objectType">object_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object_type DataOciDataSafeMaskingReportsMaskedColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#schema_name DataOciDataSafeMaskingReportsMaskedColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumn#sensitive_type_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `masking_report_id`<sup>Required</sup> <a name="masking_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.maskingReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_report_id DataOciDataSafeMaskingReportsMaskedColumn#masking_report_id}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.columnName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#column_name DataOciDataSafeMaskingReportsMaskedColumn#column_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#id DataOciDataSafeMaskingReportsMaskedColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masking_column_group`<sup>Optional</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.maskingColumnGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_column_group DataOciDataSafeMaskingReportsMaskedColumn#masking_column_group}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.object"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object DataOciDataSafeMaskingReportsMaskedColumn#object}.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.objectType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object_type DataOciDataSafeMaskingReportsMaskedColumn#object_type}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.schemaName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#schema_name DataOciDataSafeMaskingReportsMaskedColumn#schema_name}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.sensitiveTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumn#sensitive_type_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetMaskingColumnGroup">reset_masking_column_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObjectType">reset_object_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSensitiveTypeId">reset_sensitive_type_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_column_name` <a name="reset_column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_masking_column_group` <a name="reset_masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetMaskingColumnGroup"></a>

```python
def reset_masking_column_group() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObjectType"></a>

```python
def reset_object_type() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_sensitive_type_id` <a name="reset_sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSensitiveTypeId"></a>

```python
def reset_sensitive_type_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingReportsMaskedColumn resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_column

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_column

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_column

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_column

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingReportsMaskedColumn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeMaskingReportsMaskedColumn to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeMaskingReportsMaskedColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingReportsMaskedColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList">DataOciDataSafeMaskingReportsMaskedColumnItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnNameInput">column_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroupInput">masking_column_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportIdInput">masking_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectInput">object_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectTypeInput">object_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaNameInput">schema_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeIdInput">sensitive_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroup">masking_column_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportId">masking_report_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.object">object</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectType">object_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.items"></a>

```python
items: DataOciDataSafeMaskingReportsMaskedColumnItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList">DataOciDataSafeMaskingReportsMaskedColumnItemsList</a>

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnNameInput"></a>

```python
column_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `masking_column_group_input`<sup>Optional</sup> <a name="masking_column_group_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroupInput"></a>

```python
masking_column_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `masking_report_id_input`<sup>Optional</sup> <a name="masking_report_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportIdInput"></a>

```python
masking_report_id_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectInput"></a>

```python
object_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectTypeInput"></a>

```python
object_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaNameInput"></a>

```python
schema_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_type_id_input`<sup>Optional</sup> <a name="sensitive_type_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeIdInput"></a>

```python
sensitive_type_id_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masking_column_group`<sup>Required</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroup"></a>

```python
masking_column_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `masking_report_id`<sup>Required</sup> <a name="masking_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportId"></a>

```python
masking_report_id: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.object"></a>

```python
object: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectType"></a>

```python
object_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingReportsMaskedColumnConfig <a name="DataOciDataSafeMaskingReportsMaskedColumnConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_column

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  masking_report_id: str,
  column_name: typing.List[str] = None,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingReportId">masking_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_report_id DataOciDataSafeMaskingReportsMaskedColumn#masking_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#column_name DataOciDataSafeMaskingReportsMaskedColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#id DataOciDataSafeMaskingReportsMaskedColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingColumnGroup">masking_column_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_column_group DataOciDataSafeMaskingReportsMaskedColumn#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.object">object</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object DataOciDataSafeMaskingReportsMaskedColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.objectType">object_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object_type DataOciDataSafeMaskingReportsMaskedColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#schema_name DataOciDataSafeMaskingReportsMaskedColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumn#sensitive_type_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `masking_report_id`<sup>Required</sup> <a name="masking_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingReportId"></a>

```python
masking_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_report_id DataOciDataSafeMaskingReportsMaskedColumn#masking_report_id}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#column_name DataOciDataSafeMaskingReportsMaskedColumn#column_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#id DataOciDataSafeMaskingReportsMaskedColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masking_column_group`<sup>Optional</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingColumnGroup"></a>

```python
masking_column_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_column_group DataOciDataSafeMaskingReportsMaskedColumn#masking_column_group}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.object"></a>

```python
object: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object DataOciDataSafeMaskingReportsMaskedColumn#object}.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.objectType"></a>

```python
object_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object_type DataOciDataSafeMaskingReportsMaskedColumn#object_type}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#schema_name DataOciDataSafeMaskingReportsMaskedColumn#schema_name}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumn#sensitive_type_id}.

---

### DataOciDataSafeMaskingReportsMaskedColumnItems <a name="DataOciDataSafeMaskingReportsMaskedColumnItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_column

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingReportsMaskedColumnItemsList <a name="DataOciDataSafeMaskingReportsMaskedColumnItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_column

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference <a name="DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_reports_masked_column

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingColumnGroup">masking_column_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingFormatUsed">masking_format_used</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.parentColumnKey">parent_column_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.totalMaskedValues">total_masked_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems">DataOciDataSafeMaskingReportsMaskedColumnItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `masking_column_group`<sup>Required</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingColumnGroup"></a>

```python
masking_column_group: str
```

- *Type:* str

---

##### `masking_format_used`<sup>Required</sup> <a name="masking_format_used" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingFormatUsed"></a>

```python
masking_format_used: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `parent_column_key`<sup>Required</sup> <a name="parent_column_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.parentColumnKey"></a>

```python
parent_column_key: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `total_masked_values`<sup>Required</sup> <a name="total_masked_values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.totalMaskedValues"></a>

```python
total_masked_values: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingReportsMaskedColumnItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems">DataOciDataSafeMaskingReportsMaskedColumnItems</a>

---



