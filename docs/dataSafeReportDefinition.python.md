# `dataSafeReportDefinition` Submodule <a name="`dataSafeReportDefinition` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeReportDefinition <a name="DataSafeReportDefinition" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition oci_data_safe_report_definition}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_filters: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnFilters]],
  column_info: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnInfo]],
  column_sortings: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnSortings]],
  compartment_id: str,
  display_name: str,
  parent_id: str,
  summary: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionSummary]],
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DataSafeReportDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.columnFilters">column_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>]]</code> | column_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.columnInfo">column_info</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>]]</code> | column_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.columnSortings">column_sortings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>]]</code> | column_sortings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.summary">summary</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>]]</code> | summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_filters`<sup>Required</sup> <a name="column_filters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.columnFilters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>]]

column_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_filters DataSafeReportDefinition#column_filters}

---

##### `column_info`<sup>Required</sup> <a name="column_info" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.columnInfo"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>]]

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_info DataSafeReportDefinition#column_info}

---

##### `column_sortings`<sup>Required</sup> <a name="column_sortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.columnSortings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>]]

column_sortings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_sortings DataSafeReportDefinition#column_sortings}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}.

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.parentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}.

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.summary"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>]]

summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#summary DataSafeReportDefinition#summary}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#timeouts DataSafeReportDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnFilters">put_column_filters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnInfo">put_column_info</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnSortings">put_column_sortings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putSummary">put_summary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_column_filters` <a name="put_column_filters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnFilters"></a>

```python
def put_column_filters(
  value: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>]]

---

##### `put_column_info` <a name="put_column_info" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnInfo"></a>

```python
def put_column_info(
  value: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnInfo]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnInfo.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>]]

---

##### `put_column_sortings` <a name="put_column_sortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnSortings"></a>

```python
def put_column_sortings(
  value: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnSortings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnSortings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>]]

---

##### `put_summary` <a name="put_summary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putSummary"></a>

```python
def put_summary(
  value: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionSummary]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putSummary.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#create DataSafeReportDefinition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#delete DataSafeReportDefinition#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#update DataSafeReportDefinition#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeReportDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeReportDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeReportDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeReportDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeReportDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFilters">column_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList">DataSafeReportDefinitionColumnFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfo">column_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList">DataSafeReportDefinitionColumnInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortings">column_sortings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList">DataSafeReportDefinitionColumnSortingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.complianceStandards">compliance_standards</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayOrder">display_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.isSeeded">is_seeded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.recordTimeSpan">record_time_span</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportCompartmentId">scheduled_report_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportMimeType">scheduled_report_mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportName">scheduled_report_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportRowLimit">scheduled_report_row_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scimFilter">scim_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summary">summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList">DataSafeReportDefinitionSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference">DataSafeReportDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFiltersInput">column_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfoInput">column_info_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortingsInput">column_sortings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summaryInput">summary_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `column_filters`<sup>Required</sup> <a name="column_filters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFilters"></a>

```python
column_filters: DataSafeReportDefinitionColumnFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList">DataSafeReportDefinitionColumnFiltersList</a>

---

##### `column_info`<sup>Required</sup> <a name="column_info" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfo"></a>

```python
column_info: DataSafeReportDefinitionColumnInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList">DataSafeReportDefinitionColumnInfoList</a>

---

##### `column_sortings`<sup>Required</sup> <a name="column_sortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortings"></a>

```python
column_sortings: DataSafeReportDefinitionColumnSortingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList">DataSafeReportDefinitionColumnSortingsList</a>

---

##### `compliance_standards`<sup>Required</sup> <a name="compliance_standards" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.complianceStandards"></a>

```python
compliance_standards: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `display_order`<sup>Required</sup> <a name="display_order" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayOrder"></a>

```python
display_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_seeded`<sup>Required</sup> <a name="is_seeded" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.isSeeded"></a>

```python
is_seeded: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `record_time_span`<sup>Required</sup> <a name="record_time_span" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.recordTimeSpan"></a>

```python
record_time_span: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `scheduled_report_compartment_id`<sup>Required</sup> <a name="scheduled_report_compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportCompartmentId"></a>

```python
scheduled_report_compartment_id: str
```

- *Type:* str

---

##### `scheduled_report_mime_type`<sup>Required</sup> <a name="scheduled_report_mime_type" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportMimeType"></a>

```python
scheduled_report_mime_type: str
```

- *Type:* str

---

##### `scheduled_report_name`<sup>Required</sup> <a name="scheduled_report_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportName"></a>

```python
scheduled_report_name: str
```

- *Type:* str

---

##### `scheduled_report_row_limit`<sup>Required</sup> <a name="scheduled_report_row_limit" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportRowLimit"></a>

```python
scheduled_report_row_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scim_filter`<sup>Required</sup> <a name="scim_filter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scimFilter"></a>

```python
scim_filter: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summary"></a>

```python
summary: DataSafeReportDefinitionSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList">DataSafeReportDefinitionSummaryList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeouts"></a>

```python
timeouts: DataSafeReportDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference">DataSafeReportDefinitionTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `column_filters_input`<sup>Optional</sup> <a name="column_filters_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFiltersInput"></a>

```python
column_filters_input: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>]]

---

##### `column_info_input`<sup>Optional</sup> <a name="column_info_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfoInput"></a>

```python
column_info_input: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>]]

---

##### `column_sortings_input`<sup>Optional</sup> <a name="column_sortings_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortingsInput"></a>

```python
column_sortings_input: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnSortings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>]]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summaryInput"></a>

```python
summary_input: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionSummary]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeReportDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeReportDefinitionColumnFilters <a name="DataSafeReportDefinitionColumnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters(
  expressions: typing.List[str],
  field_name: str,
  is_enabled: typing.Union[bool, IResolvable],
  is_hidden: typing.Union[bool, IResolvable],
  operator: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.expressions">expressions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#expressions DataSafeReportDefinition#expressions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_enabled DataSafeReportDefinition#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isHidden">is_hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#operator DataSafeReportDefinition#operator}. |

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.expressions"></a>

```python
expressions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#expressions DataSafeReportDefinition#expressions}.

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}.

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_enabled DataSafeReportDefinition#is_enabled}.

---

##### `is_hidden`<sup>Required</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isHidden"></a>

```python
is_hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#operator DataSafeReportDefinition#operator}.

---

### DataSafeReportDefinitionColumnInfo <a name="DataSafeReportDefinitionColumnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo(
  display_name: str,
  display_order: typing.Union[int, float],
  field_name: str,
  is_hidden: typing.Union[bool, IResolvable],
  data_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayOrder">display_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.isHidden">is_hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#data_type DataSafeReportDefinition#data_type}. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}.

---

##### `display_order`<sup>Required</sup> <a name="display_order" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayOrder"></a>

```python
display_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}.

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}.

---

##### `is_hidden`<sup>Required</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.isHidden"></a>

```python
is_hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#data_type DataSafeReportDefinition#data_type}.

---

### DataSafeReportDefinitionColumnSortings <a name="DataSafeReportDefinitionColumnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings(
  field_name: str,
  is_ascending: typing.Union[bool, IResolvable],
  sorting_order: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.isAscending">is_ascending</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_ascending DataSafeReportDefinition#is_ascending}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.sortingOrder">sorting_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#sorting_order DataSafeReportDefinition#sorting_order}. |

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}.

---

##### `is_ascending`<sup>Required</sup> <a name="is_ascending" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.isAscending"></a>

```python
is_ascending: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_ascending DataSafeReportDefinition#is_ascending}.

---

##### `sorting_order`<sup>Required</sup> <a name="sorting_order" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.sortingOrder"></a>

```python
sorting_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#sorting_order DataSafeReportDefinition#sorting_order}.

---

### DataSafeReportDefinitionConfig <a name="DataSafeReportDefinitionConfig" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_filters: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnFilters]],
  column_info: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnInfo]],
  column_sortings: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnSortings]],
  compartment_id: str,
  display_name: str,
  parent_id: str,
  summary: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionSummary]],
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DataSafeReportDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnFilters">column_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>]]</code> | column_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnInfo">column_info</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>]]</code> | column_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnSortings">column_sortings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>]]</code> | column_sortings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.summary">summary</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>]]</code> | summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_filters`<sup>Required</sup> <a name="column_filters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnFilters"></a>

```python
column_filters: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>]]

column_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_filters DataSafeReportDefinition#column_filters}

---

##### `column_info`<sup>Required</sup> <a name="column_info" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnInfo"></a>

```python
column_info: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>]]

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_info DataSafeReportDefinition#column_info}

---

##### `column_sortings`<sup>Required</sup> <a name="column_sortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnSortings"></a>

```python
column_sortings: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnSortings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>]]

column_sortings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_sortings DataSafeReportDefinition#column_sortings}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}.

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}.

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.summary"></a>

```python
summary: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionSummary]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>]]

summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#summary DataSafeReportDefinition#summary}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.timeouts"></a>

```python
timeouts: DataSafeReportDefinitionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#timeouts DataSafeReportDefinition#timeouts}

---

### DataSafeReportDefinitionSummary <a name="DataSafeReportDefinitionSummary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionSummary(
  display_order: typing.Union[int, float],
  name: str,
  count_of: str = None,
  group_by_field_name: str = None,
  is_hidden: typing.Union[bool, IResolvable] = None,
  scim_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.displayOrder">display_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#name DataSafeReportDefinition#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.countOf">count_of</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#count_of DataSafeReportDefinition#count_of}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.groupByFieldName">group_by_field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#group_by_field_name DataSafeReportDefinition#group_by_field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.isHidden">is_hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.scimFilter">scim_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#scim_filter DataSafeReportDefinition#scim_filter}. |

---

##### `display_order`<sup>Required</sup> <a name="display_order" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.displayOrder"></a>

```python
display_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#name DataSafeReportDefinition#name}.

---

##### `count_of`<sup>Optional</sup> <a name="count_of" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.countOf"></a>

```python
count_of: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#count_of DataSafeReportDefinition#count_of}.

---

##### `group_by_field_name`<sup>Optional</sup> <a name="group_by_field_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.groupByFieldName"></a>

```python
group_by_field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#group_by_field_name DataSafeReportDefinition#group_by_field_name}.

---

##### `is_hidden`<sup>Optional</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.isHidden"></a>

```python
is_hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}.

---

##### `scim_filter`<sup>Optional</sup> <a name="scim_filter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.scimFilter"></a>

```python
scim_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#scim_filter DataSafeReportDefinition#scim_filter}.

---

### DataSafeReportDefinitionTimeouts <a name="DataSafeReportDefinitionTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#create DataSafeReportDefinition#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#delete DataSafeReportDefinition#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#update DataSafeReportDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#create DataSafeReportDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#delete DataSafeReportDefinition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#update DataSafeReportDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeReportDefinitionColumnFiltersList <a name="DataSafeReportDefinitionColumnFiltersList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeReportDefinitionColumnFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>]]

---


### DataSafeReportDefinitionColumnFiltersOutputReference <a name="DataSafeReportDefinitionColumnFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressionsInput">expressions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHiddenInput">is_hidden_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressions">expressions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHidden">is_hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expressions_input`<sup>Optional</sup> <a name="expressions_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressionsInput"></a>

```python
expressions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_hidden_input`<sup>Optional</sup> <a name="is_hidden_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHiddenInput"></a>

```python
is_hidden_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressions"></a>

```python
expressions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_hidden`<sup>Required</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHidden"></a>

```python
is_hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeReportDefinitionColumnFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>]

---


### DataSafeReportDefinitionColumnInfoList <a name="DataSafeReportDefinitionColumnInfoList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeReportDefinitionColumnInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>]]

---


### DataSafeReportDefinitionColumnInfoOutputReference <a name="DataSafeReportDefinitionColumnInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_type` <a name="reset_data_type" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrderInput">display_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHiddenInput">is_hidden_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrder">display_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHidden">is_hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `display_order_input`<sup>Optional</sup> <a name="display_order_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrderInput"></a>

```python
display_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `is_hidden_input`<sup>Optional</sup> <a name="is_hidden_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHiddenInput"></a>

```python
is_hidden_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_order`<sup>Required</sup> <a name="display_order" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrder"></a>

```python
display_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `is_hidden`<sup>Required</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHidden"></a>

```python
is_hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeReportDefinitionColumnInfo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>]

---


### DataSafeReportDefinitionColumnSortingsList <a name="DataSafeReportDefinitionColumnSortingsList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeReportDefinitionColumnSortingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionColumnSortings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>]]

---


### DataSafeReportDefinitionColumnSortingsOutputReference <a name="DataSafeReportDefinitionColumnSortingsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscendingInput">is_ascending_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrderInput">sorting_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscending">is_ascending</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrder">sorting_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `is_ascending_input`<sup>Optional</sup> <a name="is_ascending_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscendingInput"></a>

```python
is_ascending_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sorting_order_input`<sup>Optional</sup> <a name="sorting_order_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrderInput"></a>

```python
sorting_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `is_ascending`<sup>Required</sup> <a name="is_ascending" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscending"></a>

```python
is_ascending: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sorting_order`<sup>Required</sup> <a name="sorting_order" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrder"></a>

```python
sorting_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeReportDefinitionColumnSortings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>]

---


### DataSafeReportDefinitionSummaryList <a name="DataSafeReportDefinitionSummaryList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeReportDefinitionSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataSafeReportDefinitionSummary]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>]]

---


### DataSafeReportDefinitionSummaryOutputReference <a name="DataSafeReportDefinitionSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetCountOf">reset_count_of</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetGroupByFieldName">reset_group_by_field_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetIsHidden">reset_is_hidden</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetScimFilter">reset_scim_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count_of` <a name="reset_count_of" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetCountOf"></a>

```python
def reset_count_of() -> None
```

##### `reset_group_by_field_name` <a name="reset_group_by_field_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetGroupByFieldName"></a>

```python
def reset_group_by_field_name() -> None
```

##### `reset_is_hidden` <a name="reset_is_hidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetIsHidden"></a>

```python
def reset_is_hidden() -> None
```

##### `reset_scim_filter` <a name="reset_scim_filter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetScimFilter"></a>

```python
def reset_scim_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOfInput">count_of_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrderInput">display_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldNameInput">group_by_field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHiddenInput">is_hidden_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilterInput">scim_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOf">count_of</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrder">display_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldName">group_by_field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHidden">is_hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilter">scim_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_of_input`<sup>Optional</sup> <a name="count_of_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOfInput"></a>

```python
count_of_input: str
```

- *Type:* str

---

##### `display_order_input`<sup>Optional</sup> <a name="display_order_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrderInput"></a>

```python
display_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_by_field_name_input`<sup>Optional</sup> <a name="group_by_field_name_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldNameInput"></a>

```python
group_by_field_name_input: str
```

- *Type:* str

---

##### `is_hidden_input`<sup>Optional</sup> <a name="is_hidden_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHiddenInput"></a>

```python
is_hidden_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scim_filter_input`<sup>Optional</sup> <a name="scim_filter_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilterInput"></a>

```python
scim_filter_input: str
```

- *Type:* str

---

##### `count_of`<sup>Required</sup> <a name="count_of" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOf"></a>

```python
count_of: str
```

- *Type:* str

---

##### `display_order`<sup>Required</sup> <a name="display_order" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrder"></a>

```python
display_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_by_field_name`<sup>Required</sup> <a name="group_by_field_name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldName"></a>

```python
group_by_field_name: str
```

- *Type:* str

---

##### `is_hidden`<sup>Required</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHidden"></a>

```python
is_hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scim_filter`<sup>Required</sup> <a name="scim_filter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilter"></a>

```python
scim_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeReportDefinitionSummary]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>]

---


### DataSafeReportDefinitionTimeoutsOutputReference <a name="DataSafeReportDefinitionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_report_definition

dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeReportDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>]

---



