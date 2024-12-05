# `dataOciDataSafeLibraryMaskingFormats` Submodule <a name="`dataOciDataSafeLibraryMaskingFormats` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeLibraryMaskingFormats <a name="DataOciDataSafeLibraryMaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats oci_data_safe_library_masking_formats}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeLibraryMaskingFormatsFilter]] = None,
  id: str = None,
  library_masking_format_id: str = None,
  library_masking_format_source: str = None,
  state: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id DataOciDataSafeLibraryMaskingFormats#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#access_level DataOciDataSafeLibraryMaskingFormats#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id_in_subtree DataOciDataSafeLibraryMaskingFormats#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#display_name DataOciDataSafeLibraryMaskingFormats#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#id DataOciDataSafeLibraryMaskingFormats#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_id DataOciDataSafeLibraryMaskingFormats#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.libraryMaskingFormatSource">library_masking_format_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_source DataOciDataSafeLibraryMaskingFormats#library_masking_format_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#state DataOciDataSafeLibraryMaskingFormats#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_greater_than_or_equal_to DataOciDataSafeLibraryMaskingFormats#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_less_than DataOciDataSafeLibraryMaskingFormats#time_created_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id DataOciDataSafeLibraryMaskingFormats#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#access_level DataOciDataSafeLibraryMaskingFormats#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id_in_subtree DataOciDataSafeLibraryMaskingFormats#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#display_name DataOciDataSafeLibraryMaskingFormats#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#filter DataOciDataSafeLibraryMaskingFormats#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#id DataOciDataSafeLibraryMaskingFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `library_masking_format_id`<sup>Optional</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.libraryMaskingFormatId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_id DataOciDataSafeLibraryMaskingFormats#library_masking_format_id}.

---

##### `library_masking_format_source`<sup>Optional</sup> <a name="library_masking_format_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.libraryMaskingFormatSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_source DataOciDataSafeLibraryMaskingFormats#library_masking_format_source}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#state DataOciDataSafeLibraryMaskingFormats#state}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_greater_than_or_equal_to DataOciDataSafeLibraryMaskingFormats#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_less_than DataOciDataSafeLibraryMaskingFormats#time_created_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatId">reset_library_masking_format_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatSource">reset_library_masking_format_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedGreaterThanOrEqualTo">reset_time_created_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedLessThan">reset_time_created_less_than</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeLibraryMaskingFormatsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_library_masking_format_id` <a name="reset_library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatId"></a>

```python
def reset_library_masking_format_id() -> None
```

##### `reset_library_masking_format_source` <a name="reset_library_masking_format_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatSource"></a>

```python
def reset_library_masking_format_source() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_time_created_greater_than_or_equal_to` <a name="reset_time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedGreaterThanOrEqualTo"></a>

```python
def reset_time_created_greater_than_or_equal_to() -> None
```

##### `reset_time_created_less_than` <a name="reset_time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedLessThan"></a>

```python
def reset_time_created_less_than() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormats resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormats resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeLibraryMaskingFormats to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeLibraryMaskingFormats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeLibraryMaskingFormats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList">DataOciDataSafeLibraryMaskingFormatsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatCollection">library_masking_format_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatIdInput">library_masking_format_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSourceInput">library_masking_format_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualToInput">time_created_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThanInput">time_created_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSource">library_masking_format_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filter"></a>

```python
filter: DataOciDataSafeLibraryMaskingFormatsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList">DataOciDataSafeLibraryMaskingFormatsFilterList</a>

---

##### `library_masking_format_collection`<sup>Required</sup> <a name="library_masking_format_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatCollection"></a>

```python
library_masking_format_collection: DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeLibraryMaskingFormatsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `library_masking_format_id_input`<sup>Optional</sup> <a name="library_masking_format_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatIdInput"></a>

```python
library_masking_format_id_input: str
```

- *Type:* str

---

##### `library_masking_format_source_input`<sup>Optional</sup> <a name="library_masking_format_source_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSourceInput"></a>

```python
library_masking_format_source_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualToInput"></a>

```python
time_created_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_created_less_than_input`<sup>Optional</sup> <a name="time_created_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThanInput"></a>

```python
time_created_less_than_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `library_masking_format_id`<sup>Required</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatId"></a>

```python
library_masking_format_id: str
```

- *Type:* str

---

##### `library_masking_format_source`<sup>Required</sup> <a name="library_masking_format_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSource"></a>

```python
library_masking_format_source: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to`<sup>Required</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_created_less_than`<sup>Required</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeLibraryMaskingFormatsConfig <a name="DataOciDataSafeLibraryMaskingFormatsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeLibraryMaskingFormatsFilter]] = None,
  id: str = None,
  library_masking_format_id: str = None,
  library_masking_format_source: str = None,
  state: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id DataOciDataSafeLibraryMaskingFormats#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#access_level DataOciDataSafeLibraryMaskingFormats#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id_in_subtree DataOciDataSafeLibraryMaskingFormats#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#display_name DataOciDataSafeLibraryMaskingFormats#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#id DataOciDataSafeLibraryMaskingFormats#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_id DataOciDataSafeLibraryMaskingFormats#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatSource">library_masking_format_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_source DataOciDataSafeLibraryMaskingFormats#library_masking_format_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#state DataOciDataSafeLibraryMaskingFormats#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_greater_than_or_equal_to DataOciDataSafeLibraryMaskingFormats#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_less_than DataOciDataSafeLibraryMaskingFormats#time_created_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id DataOciDataSafeLibraryMaskingFormats#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#access_level DataOciDataSafeLibraryMaskingFormats#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id_in_subtree DataOciDataSafeLibraryMaskingFormats#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#display_name DataOciDataSafeLibraryMaskingFormats#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeLibraryMaskingFormatsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#filter DataOciDataSafeLibraryMaskingFormats#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#id DataOciDataSafeLibraryMaskingFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `library_masking_format_id`<sup>Optional</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatId"></a>

```python
library_masking_format_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_id DataOciDataSafeLibraryMaskingFormats#library_masking_format_id}.

---

##### `library_masking_format_source`<sup>Optional</sup> <a name="library_masking_format_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatSource"></a>

```python
library_masking_format_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_source DataOciDataSafeLibraryMaskingFormats#library_masking_format_source}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#state DataOciDataSafeLibraryMaskingFormats#state}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_greater_than_or_equal_to DataOciDataSafeLibraryMaskingFormats#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_less_than DataOciDataSafeLibraryMaskingFormats#time_created_less_than}.

---

### DataOciDataSafeLibraryMaskingFormatsFilter <a name="DataOciDataSafeLibraryMaskingFormatsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#name DataOciDataSafeLibraryMaskingFormats#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#values DataOciDataSafeLibraryMaskingFormats#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#regex DataOciDataSafeLibraryMaskingFormats#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#name DataOciDataSafeLibraryMaskingFormats#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#values DataOciDataSafeLibraryMaskingFormats#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#regex DataOciDataSafeLibraryMaskingFormats#regex}.

---

### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection()
```


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems()
```


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeLibraryMaskingFormatsFilterList <a name="DataOciDataSafeLibraryMaskingFormatsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeLibraryMaskingFormatsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeLibraryMaskingFormatsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>]]

---


### DataOciDataSafeLibraryMaskingFormatsFilterOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeLibraryMaskingFormatsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>]

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endLength">end_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endValue">end_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedNumber">fixed_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedString">fixed_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.groupingColumns">grouping_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.postProcessingFunction">post_processing_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.randomList">random_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.regularExpression">regular_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.replaceWith">replace_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startLength">start_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startPosition">start_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startValue">start_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.userDefinedFunction">user_defined_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `end_length`<sup>Required</sup> <a name="end_length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endLength"></a>

```python
end_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_value`<sup>Required</sup> <a name="end_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endValue"></a>

```python
end_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_number`<sup>Required</sup> <a name="fixed_number" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedNumber"></a>

```python
fixed_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_string`<sup>Required</sup> <a name="fixed_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedString"></a>

```python
fixed_string: str
```

- *Type:* str

---

##### `grouping_columns`<sup>Required</sup> <a name="grouping_columns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.groupingColumns"></a>

```python
grouping_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `library_masking_format_id`<sup>Required</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```python
library_masking_format_id: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `post_processing_function`<sup>Required</sup> <a name="post_processing_function" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.postProcessingFunction"></a>

```python
post_processing_function: str
```

- *Type:* str

---

##### `random_list`<sup>Required</sup> <a name="random_list" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.randomList"></a>

```python
random_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regular_expression`<sup>Required</sup> <a name="regular_expression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.regularExpression"></a>

```python
regular_expression: str
```

- *Type:* str

---

##### `replace_with`<sup>Required</sup> <a name="replace_with" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.replaceWith"></a>

```python
replace_with: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `start_length`<sup>Required</sup> <a name="start_length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startLength"></a>

```python
start_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_position`<sup>Required</sup> <a name="start_position" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startPosition"></a>

```python
start_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_value`<sup>Required</sup> <a name="start_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startValue"></a>

```python
start_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_defined_function`<sup>Required</sup> <a name="user_defined_function" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.userDefinedFunction"></a>

```python
user_defined_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries</a>

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.formatEntries">format_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.sensitiveTypeIds">sensitive_type_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `format_entries`<sup>Required</sup> <a name="format_entries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.formatEntries"></a>

```python
format_entries: DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sensitive_type_ids`<sup>Required</sup> <a name="sensitive_type_ids" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.sensitiveTypeIds"></a>

```python
sensitive_type_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems</a>

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_formats

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection</a>

---



