# `dataSafeMaskingPolicy` Submodule <a name="`dataSafeMaskingPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeMaskingPolicy <a name="DataSafeMaskingPolicy" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy oci_data_safe_masking_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policy

dataSafeMaskingPolicy.DataSafeMaskingPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_source: typing.Union[IResolvable, typing.List[DataSafeMaskingPolicyColumnSource]],
  compartment_id: str,
  add_masking_columns_from_sdm_trigger: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  generate_health_report_trigger: typing.Union[int, float] = None,
  id: str = None,
  is_drop_temp_tables_enabled: typing.Union[bool, IResolvable] = None,
  is_redo_logging_enabled: typing.Union[bool, IResolvable] = None,
  is_refresh_stats_enabled: typing.Union[bool, IResolvable] = None,
  parallel_degree: str = None,
  post_masking_script: str = None,
  pre_masking_script: str = None,
  recompile: str = None,
  timeouts: DataSafeMaskingPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.columnSource">column_source</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>]]</code> | column_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#compartment_id DataSafeMaskingPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.addMaskingColumnsFromSdmTrigger">add_masking_columns_from_sdm_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#add_masking_columns_from_sdm_trigger DataSafeMaskingPolicy#add_masking_columns_from_sdm_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#defined_tags DataSafeMaskingPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#description DataSafeMaskingPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#display_name DataSafeMaskingPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#freeform_tags DataSafeMaskingPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.generateHealthReportTrigger">generate_health_report_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#generate_health_report_trigger DataSafeMaskingPolicy#generate_health_report_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#id DataSafeMaskingPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.isDropTempTablesEnabled">is_drop_temp_tables_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_drop_temp_tables_enabled DataSafeMaskingPolicy#is_drop_temp_tables_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.isRedoLoggingEnabled">is_redo_logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_redo_logging_enabled DataSafeMaskingPolicy#is_redo_logging_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.isRefreshStatsEnabled">is_refresh_stats_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_refresh_stats_enabled DataSafeMaskingPolicy#is_refresh_stats_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.parallelDegree">parallel_degree</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#parallel_degree DataSafeMaskingPolicy#parallel_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.postMaskingScript">post_masking_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#post_masking_script DataSafeMaskingPolicy#post_masking_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.preMaskingScript">pre_masking_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#pre_masking_script DataSafeMaskingPolicy#pre_masking_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.recompile">recompile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#recompile DataSafeMaskingPolicy#recompile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_source`<sup>Required</sup> <a name="column_source" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.columnSource"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>]]

column_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#compartment_id DataSafeMaskingPolicy#compartment_id}.

---

##### `add_masking_columns_from_sdm_trigger`<sup>Optional</sup> <a name="add_masking_columns_from_sdm_trigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.addMaskingColumnsFromSdmTrigger"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#add_masking_columns_from_sdm_trigger DataSafeMaskingPolicy#add_masking_columns_from_sdm_trigger}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#defined_tags DataSafeMaskingPolicy#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#description DataSafeMaskingPolicy#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#display_name DataSafeMaskingPolicy#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#freeform_tags DataSafeMaskingPolicy#freeform_tags}.

---

##### `generate_health_report_trigger`<sup>Optional</sup> <a name="generate_health_report_trigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.generateHealthReportTrigger"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#generate_health_report_trigger DataSafeMaskingPolicy#generate_health_report_trigger}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#id DataSafeMaskingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_drop_temp_tables_enabled`<sup>Optional</sup> <a name="is_drop_temp_tables_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.isDropTempTablesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_drop_temp_tables_enabled DataSafeMaskingPolicy#is_drop_temp_tables_enabled}.

---

##### `is_redo_logging_enabled`<sup>Optional</sup> <a name="is_redo_logging_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.isRedoLoggingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_redo_logging_enabled DataSafeMaskingPolicy#is_redo_logging_enabled}.

---

##### `is_refresh_stats_enabled`<sup>Optional</sup> <a name="is_refresh_stats_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.isRefreshStatsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_refresh_stats_enabled DataSafeMaskingPolicy#is_refresh_stats_enabled}.

---

##### `parallel_degree`<sup>Optional</sup> <a name="parallel_degree" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.parallelDegree"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#parallel_degree DataSafeMaskingPolicy#parallel_degree}.

---

##### `post_masking_script`<sup>Optional</sup> <a name="post_masking_script" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.postMaskingScript"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#post_masking_script DataSafeMaskingPolicy#post_masking_script}.

---

##### `pre_masking_script`<sup>Optional</sup> <a name="pre_masking_script" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.preMaskingScript"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#pre_masking_script DataSafeMaskingPolicy#pre_masking_script}.

---

##### `recompile`<sup>Optional</sup> <a name="recompile" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.recompile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#recompile DataSafeMaskingPolicy#recompile}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#timeouts DataSafeMaskingPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putColumnSource">put_column_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetAddMaskingColumnsFromSdmTrigger">reset_add_masking_columns_from_sdm_trigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetGenerateHealthReportTrigger">reset_generate_health_report_trigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsDropTempTablesEnabled">reset_is_drop_temp_tables_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsRedoLoggingEnabled">reset_is_redo_logging_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsRefreshStatsEnabled">reset_is_refresh_stats_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetParallelDegree">reset_parallel_degree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetPostMaskingScript">reset_post_masking_script</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetPreMaskingScript">reset_pre_masking_script</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetRecompile">reset_recompile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_column_source` <a name="put_column_source" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putColumnSource"></a>

```python
def put_column_source(
  value: typing.Union[IResolvable, typing.List[DataSafeMaskingPolicyColumnSource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putColumnSource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#create DataSafeMaskingPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#delete DataSafeMaskingPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#update DataSafeMaskingPolicy#update}.

---

##### `reset_add_masking_columns_from_sdm_trigger` <a name="reset_add_masking_columns_from_sdm_trigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetAddMaskingColumnsFromSdmTrigger"></a>

```python
def reset_add_masking_columns_from_sdm_trigger() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_generate_health_report_trigger` <a name="reset_generate_health_report_trigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetGenerateHealthReportTrigger"></a>

```python
def reset_generate_health_report_trigger() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_drop_temp_tables_enabled` <a name="reset_is_drop_temp_tables_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsDropTempTablesEnabled"></a>

```python
def reset_is_drop_temp_tables_enabled() -> None
```

##### `reset_is_redo_logging_enabled` <a name="reset_is_redo_logging_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsRedoLoggingEnabled"></a>

```python
def reset_is_redo_logging_enabled() -> None
```

##### `reset_is_refresh_stats_enabled` <a name="reset_is_refresh_stats_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsRefreshStatsEnabled"></a>

```python
def reset_is_refresh_stats_enabled() -> None
```

##### `reset_parallel_degree` <a name="reset_parallel_degree" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetParallelDegree"></a>

```python
def reset_parallel_degree() -> None
```

##### `reset_post_masking_script` <a name="reset_post_masking_script" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetPostMaskingScript"></a>

```python
def reset_post_masking_script() -> None
```

##### `reset_pre_masking_script` <a name="reset_pre_masking_script" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetPreMaskingScript"></a>

```python
def reset_pre_masking_script() -> None
```

##### `reset_recompile` <a name="reset_recompile" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetRecompile"></a>

```python
def reset_recompile() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeMaskingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policy

dataSafeMaskingPolicy.DataSafeMaskingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policy

dataSafeMaskingPolicy.DataSafeMaskingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policy

dataSafeMaskingPolicy.DataSafeMaskingPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policy

dataSafeMaskingPolicy.DataSafeMaskingPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeMaskingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeMaskingPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeMaskingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeMaskingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.columnSource">column_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList">DataSafeMaskingPolicyColumnSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference">DataSafeMaskingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTriggerInput">add_masking_columns_from_sdm_trigger_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.columnSourceInput">column_source_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.generateHealthReportTriggerInput">generate_health_report_trigger_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isDropTempTablesEnabledInput">is_drop_temp_tables_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRedoLoggingEnabledInput">is_redo_logging_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRefreshStatsEnabledInput">is_refresh_stats_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.parallelDegreeInput">parallel_degree_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.postMaskingScriptInput">post_masking_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.preMaskingScriptInput">pre_masking_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.recompileInput">recompile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTrigger">add_masking_columns_from_sdm_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.generateHealthReportTrigger">generate_health_report_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isDropTempTablesEnabled">is_drop_temp_tables_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRedoLoggingEnabled">is_redo_logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRefreshStatsEnabled">is_refresh_stats_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.parallelDegree">parallel_degree</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.postMaskingScript">post_masking_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.preMaskingScript">pre_masking_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.recompile">recompile</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_source`<sup>Required</sup> <a name="column_source" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.columnSource"></a>

```python
column_source: DataSafeMaskingPolicyColumnSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList">DataSafeMaskingPolicyColumnSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeouts"></a>

```python
timeouts: DataSafeMaskingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference">DataSafeMaskingPolicyTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `add_masking_columns_from_sdm_trigger_input`<sup>Optional</sup> <a name="add_masking_columns_from_sdm_trigger_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTriggerInput"></a>

```python
add_masking_columns_from_sdm_trigger_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column_source_input`<sup>Optional</sup> <a name="column_source_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.columnSourceInput"></a>

```python
column_source_input: typing.Union[IResolvable, typing.List[DataSafeMaskingPolicyColumnSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>]]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_health_report_trigger_input`<sup>Optional</sup> <a name="generate_health_report_trigger_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.generateHealthReportTriggerInput"></a>

```python
generate_health_report_trigger_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_drop_temp_tables_enabled_input`<sup>Optional</sup> <a name="is_drop_temp_tables_enabled_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isDropTempTablesEnabledInput"></a>

```python
is_drop_temp_tables_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_redo_logging_enabled_input`<sup>Optional</sup> <a name="is_redo_logging_enabled_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRedoLoggingEnabledInput"></a>

```python
is_redo_logging_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_refresh_stats_enabled_input`<sup>Optional</sup> <a name="is_refresh_stats_enabled_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRefreshStatsEnabledInput"></a>

```python
is_refresh_stats_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `parallel_degree_input`<sup>Optional</sup> <a name="parallel_degree_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.parallelDegreeInput"></a>

```python
parallel_degree_input: str
```

- *Type:* str

---

##### `post_masking_script_input`<sup>Optional</sup> <a name="post_masking_script_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.postMaskingScriptInput"></a>

```python
post_masking_script_input: str
```

- *Type:* str

---

##### `pre_masking_script_input`<sup>Optional</sup> <a name="pre_masking_script_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.preMaskingScriptInput"></a>

```python
pre_masking_script_input: str
```

- *Type:* str

---

##### `recompile_input`<sup>Optional</sup> <a name="recompile_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.recompileInput"></a>

```python
recompile_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeMaskingPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>]

---

##### `add_masking_columns_from_sdm_trigger`<sup>Required</sup> <a name="add_masking_columns_from_sdm_trigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTrigger"></a>

```python
add_masking_columns_from_sdm_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_health_report_trigger`<sup>Required</sup> <a name="generate_health_report_trigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.generateHealthReportTrigger"></a>

```python
generate_health_report_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_drop_temp_tables_enabled`<sup>Required</sup> <a name="is_drop_temp_tables_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isDropTempTablesEnabled"></a>

```python
is_drop_temp_tables_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_redo_logging_enabled`<sup>Required</sup> <a name="is_redo_logging_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRedoLoggingEnabled"></a>

```python
is_redo_logging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_refresh_stats_enabled`<sup>Required</sup> <a name="is_refresh_stats_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRefreshStatsEnabled"></a>

```python
is_refresh_stats_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `parallel_degree`<sup>Required</sup> <a name="parallel_degree" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.parallelDegree"></a>

```python
parallel_degree: str
```

- *Type:* str

---

##### `post_masking_script`<sup>Required</sup> <a name="post_masking_script" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.postMaskingScript"></a>

```python
post_masking_script: str
```

- *Type:* str

---

##### `pre_masking_script`<sup>Required</sup> <a name="pre_masking_script" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.preMaskingScript"></a>

```python
pre_masking_script: str
```

- *Type:* str

---

##### `recompile`<sup>Required</sup> <a name="recompile" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.recompile"></a>

```python
recompile: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeMaskingPolicyColumnSource <a name="DataSafeMaskingPolicyColumnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policy

dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource(
  column_source: str,
  sensitive_data_model_id: str = None,
  target_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.columnSource">column_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#sensitive_data_model_id DataSafeMaskingPolicy#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#target_id DataSafeMaskingPolicy#target_id}. |

---

##### `column_source`<sup>Required</sup> <a name="column_source" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.columnSource"></a>

```python
column_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}.

---

##### `sensitive_data_model_id`<sup>Optional</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#sensitive_data_model_id DataSafeMaskingPolicy#sensitive_data_model_id}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#target_id DataSafeMaskingPolicy#target_id}.

---

### DataSafeMaskingPolicyConfig <a name="DataSafeMaskingPolicyConfig" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policy

dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_source: typing.Union[IResolvable, typing.List[DataSafeMaskingPolicyColumnSource]],
  compartment_id: str,
  add_masking_columns_from_sdm_trigger: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  generate_health_report_trigger: typing.Union[int, float] = None,
  id: str = None,
  is_drop_temp_tables_enabled: typing.Union[bool, IResolvable] = None,
  is_redo_logging_enabled: typing.Union[bool, IResolvable] = None,
  is_refresh_stats_enabled: typing.Union[bool, IResolvable] = None,
  parallel_degree: str = None,
  post_masking_script: str = None,
  pre_masking_script: str = None,
  recompile: str = None,
  timeouts: DataSafeMaskingPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.columnSource">column_source</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>]]</code> | column_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#compartment_id DataSafeMaskingPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.addMaskingColumnsFromSdmTrigger">add_masking_columns_from_sdm_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#add_masking_columns_from_sdm_trigger DataSafeMaskingPolicy#add_masking_columns_from_sdm_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#defined_tags DataSafeMaskingPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#description DataSafeMaskingPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#display_name DataSafeMaskingPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#freeform_tags DataSafeMaskingPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.generateHealthReportTrigger">generate_health_report_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#generate_health_report_trigger DataSafeMaskingPolicy#generate_health_report_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#id DataSafeMaskingPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isDropTempTablesEnabled">is_drop_temp_tables_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_drop_temp_tables_enabled DataSafeMaskingPolicy#is_drop_temp_tables_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isRedoLoggingEnabled">is_redo_logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_redo_logging_enabled DataSafeMaskingPolicy#is_redo_logging_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isRefreshStatsEnabled">is_refresh_stats_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_refresh_stats_enabled DataSafeMaskingPolicy#is_refresh_stats_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.parallelDegree">parallel_degree</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#parallel_degree DataSafeMaskingPolicy#parallel_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.postMaskingScript">post_masking_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#post_masking_script DataSafeMaskingPolicy#post_masking_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.preMaskingScript">pre_masking_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#pre_masking_script DataSafeMaskingPolicy#pre_masking_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.recompile">recompile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#recompile DataSafeMaskingPolicy#recompile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_source`<sup>Required</sup> <a name="column_source" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.columnSource"></a>

```python
column_source: typing.Union[IResolvable, typing.List[DataSafeMaskingPolicyColumnSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>]]

column_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#compartment_id DataSafeMaskingPolicy#compartment_id}.

---

##### `add_masking_columns_from_sdm_trigger`<sup>Optional</sup> <a name="add_masking_columns_from_sdm_trigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.addMaskingColumnsFromSdmTrigger"></a>

```python
add_masking_columns_from_sdm_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#add_masking_columns_from_sdm_trigger DataSafeMaskingPolicy#add_masking_columns_from_sdm_trigger}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#defined_tags DataSafeMaskingPolicy#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#description DataSafeMaskingPolicy#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#display_name DataSafeMaskingPolicy#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#freeform_tags DataSafeMaskingPolicy#freeform_tags}.

---

##### `generate_health_report_trigger`<sup>Optional</sup> <a name="generate_health_report_trigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.generateHealthReportTrigger"></a>

```python
generate_health_report_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#generate_health_report_trigger DataSafeMaskingPolicy#generate_health_report_trigger}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#id DataSafeMaskingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_drop_temp_tables_enabled`<sup>Optional</sup> <a name="is_drop_temp_tables_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isDropTempTablesEnabled"></a>

```python
is_drop_temp_tables_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_drop_temp_tables_enabled DataSafeMaskingPolicy#is_drop_temp_tables_enabled}.

---

##### `is_redo_logging_enabled`<sup>Optional</sup> <a name="is_redo_logging_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isRedoLoggingEnabled"></a>

```python
is_redo_logging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_redo_logging_enabled DataSafeMaskingPolicy#is_redo_logging_enabled}.

---

##### `is_refresh_stats_enabled`<sup>Optional</sup> <a name="is_refresh_stats_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isRefreshStatsEnabled"></a>

```python
is_refresh_stats_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_refresh_stats_enabled DataSafeMaskingPolicy#is_refresh_stats_enabled}.

---

##### `parallel_degree`<sup>Optional</sup> <a name="parallel_degree" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.parallelDegree"></a>

```python
parallel_degree: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#parallel_degree DataSafeMaskingPolicy#parallel_degree}.

---

##### `post_masking_script`<sup>Optional</sup> <a name="post_masking_script" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.postMaskingScript"></a>

```python
post_masking_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#post_masking_script DataSafeMaskingPolicy#post_masking_script}.

---

##### `pre_masking_script`<sup>Optional</sup> <a name="pre_masking_script" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.preMaskingScript"></a>

```python
pre_masking_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#pre_masking_script DataSafeMaskingPolicy#pre_masking_script}.

---

##### `recompile`<sup>Optional</sup> <a name="recompile" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.recompile"></a>

```python
recompile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#recompile DataSafeMaskingPolicy#recompile}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.timeouts"></a>

```python
timeouts: DataSafeMaskingPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#timeouts DataSafeMaskingPolicy#timeouts}

---

### DataSafeMaskingPolicyTimeouts <a name="DataSafeMaskingPolicyTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policy

dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#create DataSafeMaskingPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#delete DataSafeMaskingPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#update DataSafeMaskingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#create DataSafeMaskingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#delete DataSafeMaskingPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#update DataSafeMaskingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeMaskingPolicyColumnSourceList <a name="DataSafeMaskingPolicyColumnSourceList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policy

dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeMaskingPolicyColumnSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataSafeMaskingPolicyColumnSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>]]

---


### DataSafeMaskingPolicyColumnSourceOutputReference <a name="DataSafeMaskingPolicyColumnSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policy

dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resetSensitiveDataModelId">reset_sensitive_data_model_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resetTargetId">reset_target_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sensitive_data_model_id` <a name="reset_sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resetSensitiveDataModelId"></a>

```python
def reset_sensitive_data_model_id() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resetTargetId"></a>

```python
def reset_target_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.columnSourceInput">column_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelIdInput">sensitive_data_model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.columnSource">column_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_source_input`<sup>Optional</sup> <a name="column_source_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.columnSourceInput"></a>

```python
column_source_input: str
```

- *Type:* str

---

##### `sensitive_data_model_id_input`<sup>Optional</sup> <a name="sensitive_data_model_id_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelIdInput"></a>

```python
sensitive_data_model_id_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `column_source`<sup>Required</sup> <a name="column_source" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.columnSource"></a>

```python
column_source: str
```

- *Type:* str

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeMaskingPolicyColumnSource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>]

---


### DataSafeMaskingPolicyTimeoutsOutputReference <a name="DataSafeMaskingPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policy

dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeMaskingPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>]

---



