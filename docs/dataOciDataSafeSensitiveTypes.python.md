# `dataOciDataSafeSensitiveTypes` Submodule <a name="`dataOciDataSafeSensitiveTypes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveTypes <a name="DataOciDataSafeSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types oci_data_safe_sensitive_types}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes(
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
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  default_masking_format_id: str = None,
  display_name: str = None,
  entity_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSensitiveTypesFilter]] = None,
  id: str = None,
  is_common: typing.Union[bool, IResolvable] = None,
  parent_category_id: str = None,
  sensitive_type_id: str = None,
  sensitive_type_source: str = None,
  state: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#compartment_id DataOciDataSafeSensitiveTypes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#access_level DataOciDataSafeSensitiveTypes#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#compartment_id_in_subtree DataOciDataSafeSensitiveTypes#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.defaultMaskingFormatId">default_masking_format_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#default_masking_format_id DataOciDataSafeSensitiveTypes#default_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#display_name DataOciDataSafeSensitiveTypes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#entity_type DataOciDataSafeSensitiveTypes#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter">DataOciDataSafeSensitiveTypesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#id DataOciDataSafeSensitiveTypes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.isCommon">is_common</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#is_common DataOciDataSafeSensitiveTypes#is_common}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.parentCategoryId">parent_category_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#parent_category_id DataOciDataSafeSensitiveTypes#parent_category_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#sensitive_type_id DataOciDataSafeSensitiveTypes#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.sensitiveTypeSource">sensitive_type_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#sensitive_type_source DataOciDataSafeSensitiveTypes#sensitive_type_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#state DataOciDataSafeSensitiveTypes#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveTypes#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#time_created_less_than DataOciDataSafeSensitiveTypes#time_created_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#compartment_id DataOciDataSafeSensitiveTypes#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#access_level DataOciDataSafeSensitiveTypes#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#compartment_id_in_subtree DataOciDataSafeSensitiveTypes#compartment_id_in_subtree}.

---

##### `default_masking_format_id`<sup>Optional</sup> <a name="default_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.defaultMaskingFormatId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#default_masking_format_id DataOciDataSafeSensitiveTypes#default_masking_format_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#display_name DataOciDataSafeSensitiveTypes#display_name}.

---

##### `entity_type`<sup>Optional</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.entityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#entity_type DataOciDataSafeSensitiveTypes#entity_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter">DataOciDataSafeSensitiveTypesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#filter DataOciDataSafeSensitiveTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#id DataOciDataSafeSensitiveTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_common`<sup>Optional</sup> <a name="is_common" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.isCommon"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#is_common DataOciDataSafeSensitiveTypes#is_common}.

---

##### `parent_category_id`<sup>Optional</sup> <a name="parent_category_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.parentCategoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#parent_category_id DataOciDataSafeSensitiveTypes#parent_category_id}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.sensitiveTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#sensitive_type_id DataOciDataSafeSensitiveTypes#sensitive_type_id}.

---

##### `sensitive_type_source`<sup>Optional</sup> <a name="sensitive_type_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.sensitiveTypeSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#sensitive_type_source DataOciDataSafeSensitiveTypes#sensitive_type_source}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#state DataOciDataSafeSensitiveTypes#state}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveTypes#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#time_created_less_than DataOciDataSafeSensitiveTypes#time_created_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetDefaultMaskingFormatId">reset_default_masking_format_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetEntityType">reset_entity_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetIsCommon">reset_is_common</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetParentCategoryId">reset_parent_category_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetSensitiveTypeId">reset_sensitive_type_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetSensitiveTypeSource">reset_sensitive_type_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetTimeCreatedGreaterThanOrEqualTo">reset_time_created_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetTimeCreatedLessThan">reset_time_created_less_than</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSensitiveTypesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter">DataOciDataSafeSensitiveTypesFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_default_masking_format_id` <a name="reset_default_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetDefaultMaskingFormatId"></a>

```python
def reset_default_masking_format_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_entity_type` <a name="reset_entity_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetEntityType"></a>

```python
def reset_entity_type() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_common` <a name="reset_is_common" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetIsCommon"></a>

```python
def reset_is_common() -> None
```

##### `reset_parent_category_id` <a name="reset_parent_category_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetParentCategoryId"></a>

```python
def reset_parent_category_id() -> None
```

##### `reset_sensitive_type_id` <a name="reset_sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetSensitiveTypeId"></a>

```python
def reset_sensitive_type_id() -> None
```

##### `reset_sensitive_type_source` <a name="reset_sensitive_type_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetSensitiveTypeSource"></a>

```python
def reset_sensitive_type_source() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_time_created_greater_than_or_equal_to` <a name="reset_time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetTimeCreatedGreaterThanOrEqualTo"></a>

```python
def reset_time_created_greater_than_or_equal_to() -> None
```

##### `reset_time_created_less_than` <a name="reset_time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.resetTimeCreatedLessThan"></a>

```python
def reset_time_created_less_than() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveTypes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSensitiveTypes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSensitiveTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList">DataOciDataSafeSensitiveTypesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.sensitiveTypeCollection">sensitive_type_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList">DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.defaultMaskingFormatIdInput">default_masking_format_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter">DataOciDataSafeSensitiveTypesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.isCommonInput">is_common_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.parentCategoryIdInput">parent_category_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.sensitiveTypeIdInput">sensitive_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.sensitiveTypeSourceInput">sensitive_type_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.timeCreatedGreaterThanOrEqualToInput">time_created_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.timeCreatedLessThanInput">time_created_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.defaultMaskingFormatId">default_masking_format_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.isCommon">is_common</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.parentCategoryId">parent_category_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.sensitiveTypeSource">sensitive_type_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.filter"></a>

```python
filter: DataOciDataSafeSensitiveTypesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList">DataOciDataSafeSensitiveTypesFilterList</a>

---

##### `sensitive_type_collection`<sup>Required</sup> <a name="sensitive_type_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.sensitiveTypeCollection"></a>

```python
sensitive_type_collection: DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList">DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_masking_format_id_input`<sup>Optional</sup> <a name="default_masking_format_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.defaultMaskingFormatIdInput"></a>

```python
default_masking_format_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSensitiveTypesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter">DataOciDataSafeSensitiveTypesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_common_input`<sup>Optional</sup> <a name="is_common_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.isCommonInput"></a>

```python
is_common_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `parent_category_id_input`<sup>Optional</sup> <a name="parent_category_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.parentCategoryIdInput"></a>

```python
parent_category_id_input: str
```

- *Type:* str

---

##### `sensitive_type_id_input`<sup>Optional</sup> <a name="sensitive_type_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.sensitiveTypeIdInput"></a>

```python
sensitive_type_id_input: str
```

- *Type:* str

---

##### `sensitive_type_source_input`<sup>Optional</sup> <a name="sensitive_type_source_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.sensitiveTypeSourceInput"></a>

```python
sensitive_type_source_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.timeCreatedGreaterThanOrEqualToInput"></a>

```python
time_created_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_created_less_than_input`<sup>Optional</sup> <a name="time_created_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.timeCreatedLessThanInput"></a>

```python
time_created_less_than_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_masking_format_id`<sup>Required</sup> <a name="default_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.defaultMaskingFormatId"></a>

```python
default_masking_format_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_common`<sup>Required</sup> <a name="is_common" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.isCommon"></a>

```python
is_common: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `parent_category_id`<sup>Required</sup> <a name="parent_category_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.parentCategoryId"></a>

```python
parent_category_id: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `sensitive_type_source`<sup>Required</sup> <a name="sensitive_type_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.sensitiveTypeSource"></a>

```python
sensitive_type_source: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to`<sup>Required</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_created_less_than`<sup>Required</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveTypesConfig <a name="DataOciDataSafeSensitiveTypesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  default_masking_format_id: str = None,
  display_name: str = None,
  entity_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSensitiveTypesFilter]] = None,
  id: str = None,
  is_common: typing.Union[bool, IResolvable] = None,
  parent_category_id: str = None,
  sensitive_type_id: str = None,
  sensitive_type_source: str = None,
  state: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#compartment_id DataOciDataSafeSensitiveTypes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#access_level DataOciDataSafeSensitiveTypes#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#compartment_id_in_subtree DataOciDataSafeSensitiveTypes#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.defaultMaskingFormatId">default_masking_format_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#default_masking_format_id DataOciDataSafeSensitiveTypes#default_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#display_name DataOciDataSafeSensitiveTypes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#entity_type DataOciDataSafeSensitiveTypes#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter">DataOciDataSafeSensitiveTypesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#id DataOciDataSafeSensitiveTypes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.isCommon">is_common</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#is_common DataOciDataSafeSensitiveTypes#is_common}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.parentCategoryId">parent_category_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#parent_category_id DataOciDataSafeSensitiveTypes#parent_category_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#sensitive_type_id DataOciDataSafeSensitiveTypes#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.sensitiveTypeSource">sensitive_type_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#sensitive_type_source DataOciDataSafeSensitiveTypes#sensitive_type_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#state DataOciDataSafeSensitiveTypes#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveTypes#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#time_created_less_than DataOciDataSafeSensitiveTypes#time_created_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#compartment_id DataOciDataSafeSensitiveTypes#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#access_level DataOciDataSafeSensitiveTypes#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#compartment_id_in_subtree DataOciDataSafeSensitiveTypes#compartment_id_in_subtree}.

---

##### `default_masking_format_id`<sup>Optional</sup> <a name="default_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.defaultMaskingFormatId"></a>

```python
default_masking_format_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#default_masking_format_id DataOciDataSafeSensitiveTypes#default_masking_format_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#display_name DataOciDataSafeSensitiveTypes#display_name}.

---

##### `entity_type`<sup>Optional</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#entity_type DataOciDataSafeSensitiveTypes#entity_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSensitiveTypesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter">DataOciDataSafeSensitiveTypesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#filter DataOciDataSafeSensitiveTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#id DataOciDataSafeSensitiveTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_common`<sup>Optional</sup> <a name="is_common" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.isCommon"></a>

```python
is_common: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#is_common DataOciDataSafeSensitiveTypes#is_common}.

---

##### `parent_category_id`<sup>Optional</sup> <a name="parent_category_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.parentCategoryId"></a>

```python
parent_category_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#parent_category_id DataOciDataSafeSensitiveTypes#parent_category_id}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#sensitive_type_id DataOciDataSafeSensitiveTypes#sensitive_type_id}.

---

##### `sensitive_type_source`<sup>Optional</sup> <a name="sensitive_type_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.sensitiveTypeSource"></a>

```python
sensitive_type_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#sensitive_type_source DataOciDataSafeSensitiveTypes#sensitive_type_source}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#state DataOciDataSafeSensitiveTypes#state}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveTypes#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesConfig.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#time_created_less_than DataOciDataSafeSensitiveTypes#time_created_less_than}.

---

### DataOciDataSafeSensitiveTypesFilter <a name="DataOciDataSafeSensitiveTypesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#name DataOciDataSafeSensitiveTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#values DataOciDataSafeSensitiveTypes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#regex DataOciDataSafeSensitiveTypes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#name DataOciDataSafeSensitiveTypes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#values DataOciDataSafeSensitiveTypes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_types#regex DataOciDataSafeSensitiveTypes#regex}.

---

### DataOciDataSafeSensitiveTypesSensitiveTypeCollection <a name="DataOciDataSafeSensitiveTypesSensitiveTypeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollection()
```


### DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItems <a name="DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSensitiveTypesFilterList <a name="DataOciDataSafeSensitiveTypesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSensitiveTypesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter">DataOciDataSafeSensitiveTypesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSensitiveTypesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter">DataOciDataSafeSensitiveTypesFilter</a>]]

---


### DataOciDataSafeSensitiveTypesFilterOutputReference <a name="DataOciDataSafeSensitiveTypesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter">DataOciDataSafeSensitiveTypesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSensitiveTypesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesFilter">DataOciDataSafeSensitiveTypesFilter</a>]

---


### DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList <a name="DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference <a name="DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.commentPattern">comment_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.dataPattern">data_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.defaultMaskingFormatId">default_masking_format_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.isCommon">is_common</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.namePattern">name_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.parentCategoryId">parent_category_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.searchType">search_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItems">DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_pattern`<sup>Required</sup> <a name="comment_pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.commentPattern"></a>

```python
comment_pattern: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `data_pattern`<sup>Required</sup> <a name="data_pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.dataPattern"></a>

```python
data_pattern: str
```

- *Type:* str

---

##### `default_masking_format_id`<sup>Required</sup> <a name="default_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.defaultMaskingFormatId"></a>

```python
default_masking_format_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_common`<sup>Required</sup> <a name="is_common" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.isCommon"></a>

```python
is_common: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name_pattern`<sup>Required</sup> <a name="name_pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.namePattern"></a>

```python
name_pattern: str
```

- *Type:* str

---

##### `parent_category_id`<sup>Required</sup> <a name="parent_category_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.parentCategoryId"></a>

```python
parent_category_id: str
```

- *Type:* str

---

##### `search_type`<sup>Required</sup> <a name="search_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.searchType"></a>

```python
search_type: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItems">DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItems</a>

---


### DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList <a name="DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference <a name="DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_types

dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList">DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollection">DataOciDataSafeSensitiveTypesSensitiveTypeCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList">DataOciDataSafeSensitiveTypesSensitiveTypeCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSensitiveTypesSensitiveTypeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveTypes.DataOciDataSafeSensitiveTypesSensitiveTypeCollection">DataOciDataSafeSensitiveTypesSensitiveTypeCollection</a>

---



