# `dataSafeMaskingPoliciesMaskingColumn` Submodule <a name="`dataSafeMaskingPoliciesMaskingColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeMaskingPoliciesMaskingColumn <a name="DataSafeMaskingPoliciesMaskingColumn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column oci_data_safe_masking_policies_masking_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_name: str,
  masking_policy_id: str,
  object: str,
  schema_name: str,
  id: str = None,
  is_masking_enabled: typing.Union[bool, IResolvable] = None,
  masking_column_group: str = None,
  masking_formats: typing.Union[IResolvable, typing.List[DataSafeMaskingPoliciesMaskingColumnMaskingFormats]] = None,
  object_type: str = None,
  sensitive_type_id: str = None,
  timeouts: DataSafeMaskingPoliciesMaskingColumnTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_policy_id DataSafeMaskingPoliciesMaskingColumn#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object DataSafeMaskingPoliciesMaskingColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#id DataSafeMaskingPoliciesMaskingColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.isMaskingEnabled">is_masking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#is_masking_enabled DataSafeMaskingPoliciesMaskingColumn#is_masking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingColumnGroup">masking_column_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_column_group DataSafeMaskingPoliciesMaskingColumn#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingFormats">masking_formats</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>]]</code> | masking_formats block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object_type DataSafeMaskingPoliciesMaskingColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sensitive_type_id DataSafeMaskingPoliciesMaskingColumn#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.columnName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}.

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_policy_id DataSafeMaskingPoliciesMaskingColumn#masking_policy_id}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object DataSafeMaskingPoliciesMaskingColumn#object}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#id DataSafeMaskingPoliciesMaskingColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_masking_enabled`<sup>Optional</sup> <a name="is_masking_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.isMaskingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#is_masking_enabled DataSafeMaskingPoliciesMaskingColumn#is_masking_enabled}.

---

##### `masking_column_group`<sup>Optional</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingColumnGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_column_group DataSafeMaskingPoliciesMaskingColumn#masking_column_group}.

---

##### `masking_formats`<sup>Optional</sup> <a name="masking_formats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingFormats"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>]]

masking_formats block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_formats DataSafeMaskingPoliciesMaskingColumn#masking_formats}

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.objectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object_type DataSafeMaskingPoliciesMaskingColumn#object_type}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.sensitiveTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sensitive_type_id DataSafeMaskingPoliciesMaskingColumn#sensitive_type_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#timeouts DataSafeMaskingPoliciesMaskingColumn#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putMaskingFormats">put_masking_formats</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetIsMaskingEnabled">reset_is_masking_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetMaskingColumnGroup">reset_masking_column_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetMaskingFormats">reset_masking_formats</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetObjectType">reset_object_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetSensitiveTypeId">reset_sensitive_type_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_masking_formats` <a name="put_masking_formats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putMaskingFormats"></a>

```python
def put_masking_formats(
  value: typing.Union[IResolvable, typing.List[DataSafeMaskingPoliciesMaskingColumnMaskingFormats]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putMaskingFormats.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#create DataSafeMaskingPoliciesMaskingColumn#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#delete DataSafeMaskingPoliciesMaskingColumn#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#update DataSafeMaskingPoliciesMaskingColumn#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_masking_enabled` <a name="reset_is_masking_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetIsMaskingEnabled"></a>

```python
def reset_is_masking_enabled() -> None
```

##### `reset_masking_column_group` <a name="reset_masking_column_group" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetMaskingColumnGroup"></a>

```python
def reset_masking_column_group() -> None
```

##### `reset_masking_formats` <a name="reset_masking_formats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetMaskingFormats"></a>

```python
def reset_masking_formats() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetObjectType"></a>

```python
def reset_object_type() -> None
```

##### `reset_sensitive_type_id` <a name="reset_sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetSensitiveTypeId"></a>

```python
def reset_sensitive_type_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeMaskingPoliciesMaskingColumn resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeMaskingPoliciesMaskingColumn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeMaskingPoliciesMaskingColumn to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeMaskingPoliciesMaskingColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeMaskingPoliciesMaskingColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.childColumns">child_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingFormats">masking_formats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference">DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabledInput">is_masking_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroupInput">masking_column_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingFormatsInput">masking_formats_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyIdInput">masking_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeIdInput">sensitive_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabled">is_masking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroup">masking_column_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `child_columns`<sup>Required</sup> <a name="child_columns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.childColumns"></a>

```python
child_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `masking_formats`<sup>Required</sup> <a name="masking_formats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingFormats"></a>

```python
masking_formats: DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeouts"></a>

```python
timeouts: DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference">DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_masking_enabled_input`<sup>Optional</sup> <a name="is_masking_enabled_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabledInput"></a>

```python
is_masking_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `masking_column_group_input`<sup>Optional</sup> <a name="masking_column_group_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroupInput"></a>

```python
masking_column_group_input: str
```

- *Type:* str

---

##### `masking_formats_input`<sup>Optional</sup> <a name="masking_formats_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingFormatsInput"></a>

```python
masking_formats_input: typing.Union[IResolvable, typing.List[DataSafeMaskingPoliciesMaskingColumnMaskingFormats]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>]]

---

##### `masking_policy_id_input`<sup>Optional</sup> <a name="masking_policy_id_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyIdInput"></a>

```python
masking_policy_id_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `sensitive_type_id_input`<sup>Optional</sup> <a name="sensitive_type_id_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeIdInput"></a>

```python
sensitive_type_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeMaskingPoliciesMaskingColumnTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_masking_enabled`<sup>Required</sup> <a name="is_masking_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabled"></a>

```python
is_masking_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `masking_column_group`<sup>Required</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroup"></a>

```python
masking_column_group: str
```

- *Type:* str

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeMaskingPoliciesMaskingColumnConfig <a name="DataSafeMaskingPoliciesMaskingColumnConfig" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_name: str,
  masking_policy_id: str,
  object: str,
  schema_name: str,
  id: str = None,
  is_masking_enabled: typing.Union[bool, IResolvable] = None,
  masking_column_group: str = None,
  masking_formats: typing.Union[IResolvable, typing.List[DataSafeMaskingPoliciesMaskingColumnMaskingFormats]] = None,
  object_type: str = None,
  sensitive_type_id: str = None,
  timeouts: DataSafeMaskingPoliciesMaskingColumnTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_policy_id DataSafeMaskingPoliciesMaskingColumn#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object DataSafeMaskingPoliciesMaskingColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#id DataSafeMaskingPoliciesMaskingColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.isMaskingEnabled">is_masking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#is_masking_enabled DataSafeMaskingPoliciesMaskingColumn#is_masking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingColumnGroup">masking_column_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_column_group DataSafeMaskingPoliciesMaskingColumn#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingFormats">masking_formats</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>]]</code> | masking_formats block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object_type DataSafeMaskingPoliciesMaskingColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sensitive_type_id DataSafeMaskingPoliciesMaskingColumn#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}.

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_policy_id DataSafeMaskingPoliciesMaskingColumn#masking_policy_id}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object DataSafeMaskingPoliciesMaskingColumn#object}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#id DataSafeMaskingPoliciesMaskingColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_masking_enabled`<sup>Optional</sup> <a name="is_masking_enabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.isMaskingEnabled"></a>

```python
is_masking_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#is_masking_enabled DataSafeMaskingPoliciesMaskingColumn#is_masking_enabled}.

---

##### `masking_column_group`<sup>Optional</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingColumnGroup"></a>

```python
masking_column_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_column_group DataSafeMaskingPoliciesMaskingColumn#masking_column_group}.

---

##### `masking_formats`<sup>Optional</sup> <a name="masking_formats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingFormats"></a>

```python
masking_formats: typing.Union[IResolvable, typing.List[DataSafeMaskingPoliciesMaskingColumnMaskingFormats]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>]]

masking_formats block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_formats DataSafeMaskingPoliciesMaskingColumn#masking_formats}

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object_type DataSafeMaskingPoliciesMaskingColumn#object_type}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sensitive_type_id DataSafeMaskingPoliciesMaskingColumn#sensitive_type_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.timeouts"></a>

```python
timeouts: DataSafeMaskingPoliciesMaskingColumnTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#timeouts DataSafeMaskingPoliciesMaskingColumn#timeouts}

---

### DataSafeMaskingPoliciesMaskingColumnMaskingFormats <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats(
  format_entries: typing.Union[IResolvable, typing.List[DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries]],
  condition: str = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.formatEntries">format_entries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>]]</code> | format_entries block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#condition DataSafeMaskingPoliciesMaskingColumn#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}. |

---

##### `format_entries`<sup>Required</sup> <a name="format_entries" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.formatEntries"></a>

```python
format_entries: typing.Union[IResolvable, typing.List[DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>]]

format_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#format_entries DataSafeMaskingPoliciesMaskingColumn#format_entries}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#condition DataSafeMaskingPoliciesMaskingColumn#condition}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}.

---

### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries(
  type: str,
  column_name: str = None,
  description: str = None,
  end_date: str = None,
  end_length: typing.Union[int, float] = None,
  end_value: typing.Union[int, float] = None,
  fixed_number: typing.Union[int, float] = None,
  fixed_string: str = None,
  grouping_columns: typing.List[str] = None,
  length: typing.Union[int, float] = None,
  library_masking_format_id: str = None,
  pattern: str = None,
  post_processing_function: str = None,
  random_list: typing.List[str] = None,
  regular_expression: str = None,
  replace_with: str = None,
  schema_name: str = None,
  sql_expression: str = None,
  start_date: str = None,
  start_length: typing.Union[int, float] = None,
  start_position: typing.Union[int, float] = None,
  start_value: typing.Union[int, float] = None,
  table_name: str = None,
  user_defined_function: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#type DataSafeMaskingPoliciesMaskingColumn#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_date DataSafeMaskingPoliciesMaskingColumn#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endLength">end_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_length DataSafeMaskingPoliciesMaskingColumn#end_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endValue">end_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_value DataSafeMaskingPoliciesMaskingColumn#end_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.fixedNumber">fixed_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#fixed_number DataSafeMaskingPoliciesMaskingColumn#fixed_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.fixedString">fixed_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#fixed_string DataSafeMaskingPoliciesMaskingColumn#fixed_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.groupingColumns">grouping_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#grouping_columns DataSafeMaskingPoliciesMaskingColumn#grouping_columns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.length">length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#length DataSafeMaskingPoliciesMaskingColumn#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#library_masking_format_id DataSafeMaskingPoliciesMaskingColumn#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.pattern">pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#pattern DataSafeMaskingPoliciesMaskingColumn#pattern}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.postProcessingFunction">post_processing_function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#post_processing_function DataSafeMaskingPoliciesMaskingColumn#post_processing_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.randomList">random_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#random_list DataSafeMaskingPoliciesMaskingColumn#random_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.regularExpression">regular_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#regular_expression DataSafeMaskingPoliciesMaskingColumn#regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.replaceWith">replace_with</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#replace_with DataSafeMaskingPoliciesMaskingColumn#replace_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.sqlExpression">sql_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sql_expression DataSafeMaskingPoliciesMaskingColumn#sql_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startDate">start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_date DataSafeMaskingPoliciesMaskingColumn#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startLength">start_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_length DataSafeMaskingPoliciesMaskingColumn#start_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startPosition">start_position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_position DataSafeMaskingPoliciesMaskingColumn#start_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startValue">start_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_value DataSafeMaskingPoliciesMaskingColumn#start_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#table_name DataSafeMaskingPoliciesMaskingColumn#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.userDefinedFunction">user_defined_function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#user_defined_function DataSafeMaskingPoliciesMaskingColumn#user_defined_function}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#type DataSafeMaskingPoliciesMaskingColumn#type}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}.

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_date DataSafeMaskingPoliciesMaskingColumn#end_date}.

---

##### `end_length`<sup>Optional</sup> <a name="end_length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endLength"></a>

```python
end_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_length DataSafeMaskingPoliciesMaskingColumn#end_length}.

---

##### `end_value`<sup>Optional</sup> <a name="end_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endValue"></a>

```python
end_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_value DataSafeMaskingPoliciesMaskingColumn#end_value}.

---

##### `fixed_number`<sup>Optional</sup> <a name="fixed_number" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.fixedNumber"></a>

```python
fixed_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#fixed_number DataSafeMaskingPoliciesMaskingColumn#fixed_number}.

---

##### `fixed_string`<sup>Optional</sup> <a name="fixed_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.fixedString"></a>

```python
fixed_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#fixed_string DataSafeMaskingPoliciesMaskingColumn#fixed_string}.

---

##### `grouping_columns`<sup>Optional</sup> <a name="grouping_columns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.groupingColumns"></a>

```python
grouping_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#grouping_columns DataSafeMaskingPoliciesMaskingColumn#grouping_columns}.

---

##### `length`<sup>Optional</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#length DataSafeMaskingPoliciesMaskingColumn#length}.

---

##### `library_masking_format_id`<sup>Optional</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.libraryMaskingFormatId"></a>

```python
library_masking_format_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#library_masking_format_id DataSafeMaskingPoliciesMaskingColumn#library_masking_format_id}.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#pattern DataSafeMaskingPoliciesMaskingColumn#pattern}.

---

##### `post_processing_function`<sup>Optional</sup> <a name="post_processing_function" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.postProcessingFunction"></a>

```python
post_processing_function: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#post_processing_function DataSafeMaskingPoliciesMaskingColumn#post_processing_function}.

---

##### `random_list`<sup>Optional</sup> <a name="random_list" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.randomList"></a>

```python
random_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#random_list DataSafeMaskingPoliciesMaskingColumn#random_list}.

---

##### `regular_expression`<sup>Optional</sup> <a name="regular_expression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.regularExpression"></a>

```python
regular_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#regular_expression DataSafeMaskingPoliciesMaskingColumn#regular_expression}.

---

##### `replace_with`<sup>Optional</sup> <a name="replace_with" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.replaceWith"></a>

```python
replace_with: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#replace_with DataSafeMaskingPoliciesMaskingColumn#replace_with}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}.

---

##### `sql_expression`<sup>Optional</sup> <a name="sql_expression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sql_expression DataSafeMaskingPoliciesMaskingColumn#sql_expression}.

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_date DataSafeMaskingPoliciesMaskingColumn#start_date}.

---

##### `start_length`<sup>Optional</sup> <a name="start_length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startLength"></a>

```python
start_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_length DataSafeMaskingPoliciesMaskingColumn#start_length}.

---

##### `start_position`<sup>Optional</sup> <a name="start_position" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startPosition"></a>

```python
start_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_position DataSafeMaskingPoliciesMaskingColumn#start_position}.

---

##### `start_value`<sup>Optional</sup> <a name="start_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startValue"></a>

```python
start_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_value DataSafeMaskingPoliciesMaskingColumn#start_value}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#table_name DataSafeMaskingPoliciesMaskingColumn#table_name}.

---

##### `user_defined_function`<sup>Optional</sup> <a name="user_defined_function" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.userDefinedFunction"></a>

```python
user_defined_function: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#user_defined_function DataSafeMaskingPoliciesMaskingColumn#user_defined_function}.

---

### DataSafeMaskingPoliciesMaskingColumnTimeouts <a name="DataSafeMaskingPoliciesMaskingColumnTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#create DataSafeMaskingPoliciesMaskingColumn#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#delete DataSafeMaskingPoliciesMaskingColumn#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#update DataSafeMaskingPoliciesMaskingColumn#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#create DataSafeMaskingPoliciesMaskingColumn#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#delete DataSafeMaskingPoliciesMaskingColumn#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#update DataSafeMaskingPoliciesMaskingColumn#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>]]

---


### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndLength">reset_end_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndValue">reset_end_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetFixedNumber">reset_fixed_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetFixedString">reset_fixed_string</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetGroupingColumns">reset_grouping_columns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetLength">reset_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetLibraryMaskingFormatId">reset_library_masking_format_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetPattern">reset_pattern</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetPostProcessingFunction">reset_post_processing_function</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetRandomList">reset_random_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetRegularExpression">reset_regular_expression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetReplaceWith">reset_replace_with</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetSqlExpression">reset_sql_expression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartDate">reset_start_date</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartLength">reset_start_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartPosition">reset_start_position</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartValue">reset_start_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetUserDefinedFunction">reset_user_defined_function</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_name` <a name="reset_column_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_end_length` <a name="reset_end_length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndLength"></a>

```python
def reset_end_length() -> None
```

##### `reset_end_value` <a name="reset_end_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndValue"></a>

```python
def reset_end_value() -> None
```

##### `reset_fixed_number` <a name="reset_fixed_number" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetFixedNumber"></a>

```python
def reset_fixed_number() -> None
```

##### `reset_fixed_string` <a name="reset_fixed_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetFixedString"></a>

```python
def reset_fixed_string() -> None
```

##### `reset_grouping_columns` <a name="reset_grouping_columns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetGroupingColumns"></a>

```python
def reset_grouping_columns() -> None
```

##### `reset_length` <a name="reset_length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetLength"></a>

```python
def reset_length() -> None
```

##### `reset_library_masking_format_id` <a name="reset_library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetLibraryMaskingFormatId"></a>

```python
def reset_library_masking_format_id() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetPattern"></a>

```python
def reset_pattern() -> None
```

##### `reset_post_processing_function` <a name="reset_post_processing_function" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetPostProcessingFunction"></a>

```python
def reset_post_processing_function() -> None
```

##### `reset_random_list` <a name="reset_random_list" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetRandomList"></a>

```python
def reset_random_list() -> None
```

##### `reset_regular_expression` <a name="reset_regular_expression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetRegularExpression"></a>

```python
def reset_regular_expression() -> None
```

##### `reset_replace_with` <a name="reset_replace_with" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetReplaceWith"></a>

```python
def reset_replace_with() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_sql_expression` <a name="reset_sql_expression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetSqlExpression"></a>

```python
def reset_sql_expression() -> None
```

##### `reset_start_date` <a name="reset_start_date" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartDate"></a>

```python
def reset_start_date() -> None
```

##### `reset_start_length` <a name="reset_start_length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartLength"></a>

```python
def reset_start_length() -> None
```

##### `reset_start_position` <a name="reset_start_position" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartPosition"></a>

```python
def reset_start_position() -> None
```

##### `reset_start_value` <a name="reset_start_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartValue"></a>

```python
def reset_start_value() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_user_defined_function` <a name="reset_user_defined_function" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetUserDefinedFunction"></a>

```python
def reset_user_defined_function() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLengthInput">end_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValueInput">end_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumberInput">fixed_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedStringInput">fixed_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumnsInput">grouping_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.lengthInput">length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatIdInput">library_masking_format_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunctionInput">post_processing_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomListInput">random_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpressionInput">regular_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWithInput">replace_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpressionInput">sql_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLengthInput">start_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPositionInput">start_position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValueInput">start_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunctionInput">user_defined_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLength">end_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValue">end_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumber">fixed_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedString">fixed_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumns">grouping_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunction">post_processing_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomList">random_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpression">regular_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWith">replace_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLength">start_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPosition">start_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValue">start_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunction">user_defined_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `end_length_input`<sup>Optional</sup> <a name="end_length_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLengthInput"></a>

```python
end_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_value_input`<sup>Optional</sup> <a name="end_value_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValueInput"></a>

```python
end_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_number_input`<sup>Optional</sup> <a name="fixed_number_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumberInput"></a>

```python
fixed_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_string_input`<sup>Optional</sup> <a name="fixed_string_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedStringInput"></a>

```python
fixed_string_input: str
```

- *Type:* str

---

##### `grouping_columns_input`<sup>Optional</sup> <a name="grouping_columns_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumnsInput"></a>

```python
grouping_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `length_input`<sup>Optional</sup> <a name="length_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.lengthInput"></a>

```python
length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `library_masking_format_id_input`<sup>Optional</sup> <a name="library_masking_format_id_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatIdInput"></a>

```python
library_masking_format_id_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `post_processing_function_input`<sup>Optional</sup> <a name="post_processing_function_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunctionInput"></a>

```python
post_processing_function_input: str
```

- *Type:* str

---

##### `random_list_input`<sup>Optional</sup> <a name="random_list_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomListInput"></a>

```python
random_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regular_expression_input`<sup>Optional</sup> <a name="regular_expression_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpressionInput"></a>

```python
regular_expression_input: str
```

- *Type:* str

---

##### `replace_with_input`<sup>Optional</sup> <a name="replace_with_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWithInput"></a>

```python
replace_with_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `sql_expression_input`<sup>Optional</sup> <a name="sql_expression_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpressionInput"></a>

```python
sql_expression_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `start_length_input`<sup>Optional</sup> <a name="start_length_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLengthInput"></a>

```python
start_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_position_input`<sup>Optional</sup> <a name="start_position_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPositionInput"></a>

```python
start_position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_value_input`<sup>Optional</sup> <a name="start_value_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValueInput"></a>

```python
start_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_defined_function_input`<sup>Optional</sup> <a name="user_defined_function_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunctionInput"></a>

```python
user_defined_function_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `end_length`<sup>Required</sup> <a name="end_length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLength"></a>

```python
end_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_value`<sup>Required</sup> <a name="end_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValue"></a>

```python
end_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_number`<sup>Required</sup> <a name="fixed_number" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumber"></a>

```python
fixed_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_string`<sup>Required</sup> <a name="fixed_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedString"></a>

```python
fixed_string: str
```

- *Type:* str

---

##### `grouping_columns`<sup>Required</sup> <a name="grouping_columns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumns"></a>

```python
grouping_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `library_masking_format_id`<sup>Required</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```python
library_masking_format_id: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `post_processing_function`<sup>Required</sup> <a name="post_processing_function" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunction"></a>

```python
post_processing_function: str
```

- *Type:* str

---

##### `random_list`<sup>Required</sup> <a name="random_list" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomList"></a>

```python
random_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regular_expression`<sup>Required</sup> <a name="regular_expression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpression"></a>

```python
regular_expression: str
```

- *Type:* str

---

##### `replace_with`<sup>Required</sup> <a name="replace_with" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWith"></a>

```python
replace_with: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `start_length`<sup>Required</sup> <a name="start_length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLength"></a>

```python
start_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_position`<sup>Required</sup> <a name="start_position" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPosition"></a>

```python
start_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_value`<sup>Required</sup> <a name="start_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValue"></a>

```python
start_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_defined_function`<sup>Required</sup> <a name="user_defined_function" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunction"></a>

```python
user_defined_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>]

---


### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataSafeMaskingPoliciesMaskingColumnMaskingFormats]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>]]

---


### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.putFormatEntries">put_format_entries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_format_entries` <a name="put_format_entries" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.putFormatEntries"></a>

```python
def put_format_entries(
  value: typing.Union[IResolvable, typing.List[DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.putFormatEntries.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>]]

---

##### `reset_condition` <a name="reset_condition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntries">format_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntriesInput">format_entries_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format_entries`<sup>Required</sup> <a name="format_entries" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntries"></a>

```python
format_entries: DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `format_entries_input`<sup>Optional</sup> <a name="format_entries_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntriesInput"></a>

```python
format_entries_input: typing.Union[IResolvable, typing.List[DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeMaskingPoliciesMaskingColumnMaskingFormats]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>]

---


### DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference <a name="DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_masking_column

dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeMaskingPoliciesMaskingColumnTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>]

---



