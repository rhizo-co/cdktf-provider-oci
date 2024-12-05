# `dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords` Submodule <a name="`dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records oci_jms_java_downloads_java_license_acceptance_records}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords(
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
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter]] = None,
  id: str = None,
  license_type: str = None,
  search_by_user: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#compartment_id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#license_type DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.searchByUser">search_by_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#search_by_user DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#search_by_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#status DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#compartment_id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#filter DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.licenseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#license_type DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#license_type}.

---

##### `search_by_user`<sup>Optional</sup> <a name="search_by_user" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.searchByUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#search_by_user DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#search_by_user}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#status DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetLicenseType">reset_license_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetSearchByUser">reset_search_by_user</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license_type` <a name="reset_license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetLicenseType"></a>

```python
def reset_license_type() -> None
```

##### `reset_search_by_user` <a name="reset_search_by_user" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetSearchByUser"></a>

```python
def reset_search_by_user() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.javaLicenseAcceptanceRecordCollection">java_license_acceptance_record_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.searchByUserInput">search_by_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.searchByUser">search_by_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.filter"></a>

```python
filter: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList</a>

---

##### `java_license_acceptance_record_collection`<sup>Required</sup> <a name="java_license_acceptance_record_collection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.javaLicenseAcceptanceRecordCollection"></a>

```python
java_license_acceptance_record_collection: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `search_by_user_input`<sup>Optional</sup> <a name="search_by_user_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.searchByUserInput"></a>

```python
search_by_user_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `search_by_user`<sup>Required</sup> <a name="search_by_user" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.searchByUser"></a>

```python
search_by_user: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter]] = None,
  id: str = None,
  license_type: str = None,
  search_by_user: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#compartment_id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#license_type DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.searchByUser">search_by_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#search_by_user DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#search_by_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#status DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#compartment_id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#filter DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#license_type DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#license_type}.

---

##### `search_by_user`<sup>Optional</sup> <a name="search_by_user" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.searchByUser"></a>

```python
search_by_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#search_by_user DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#search_by_user}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#status DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#status}.

---

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#name DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#values DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#regex DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#name DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#values DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#regex DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#regex}.

---

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection()
```


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems()
```


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy()
```


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>]]

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>]

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy</a>

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy</a>

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.createdBy">created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.lastUpdatedBy">last_updated_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.licenseAcceptanceStatus">license_acceptance_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.timeLastUpdated">time_last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.createdBy"></a>

```python
created_by: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```python
last_updated_by: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList</a>

---

##### `license_acceptance_status`<sup>Required</sup> <a name="license_acceptance_status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.licenseAcceptanceStatus"></a>

```python
license_acceptance_status: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `time_last_updated`<sup>Required</sup> <a name="time_last_updated" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.timeLastUpdated"></a>

```python
time_last_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems</a>

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_license_acceptance_records

dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.items"></a>

```python
items: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection</a>

---



