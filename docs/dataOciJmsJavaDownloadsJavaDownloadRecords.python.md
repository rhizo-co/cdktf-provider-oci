# `dataOciJmsJavaDownloadsJavaDownloadRecords` Submodule <a name="`dataOciJmsJavaDownloadsJavaDownloadRecords` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaDownloadsJavaDownloadRecords <a name="DataOciJmsJavaDownloadsJavaDownloadRecords" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records oci_jms_java_downloads_java_download_records}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords(
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
  architecture: str = None,
  family_version: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadRecordsFilter]] = None,
  id: str = None,
  os_family: str = None,
  package_type_detail: str = None,
  release_version: str = None,
  time_end: str = None,
  time_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#compartment_id DataOciJmsJavaDownloadsJavaDownloadRecords#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#architecture DataOciJmsJavaDownloadsJavaDownloadRecords#architecture}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.familyVersion">family_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#family_version DataOciJmsJavaDownloadsJavaDownloadRecords#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter">DataOciJmsJavaDownloadsJavaDownloadRecordsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#id DataOciJmsJavaDownloadsJavaDownloadRecords#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.osFamily">os_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#os_family DataOciJmsJavaDownloadsJavaDownloadRecords#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.packageTypeDetail">package_type_detail</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#package_type_detail DataOciJmsJavaDownloadsJavaDownloadRecords#package_type_detail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.releaseVersion">release_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#release_version DataOciJmsJavaDownloadsJavaDownloadRecords#release_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#time_end DataOciJmsJavaDownloadsJavaDownloadRecords#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#time_start DataOciJmsJavaDownloadsJavaDownloadRecords#time_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#compartment_id DataOciJmsJavaDownloadsJavaDownloadRecords#compartment_id}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.architecture"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#architecture DataOciJmsJavaDownloadsJavaDownloadRecords#architecture}.

---

##### `family_version`<sup>Optional</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.familyVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#family_version DataOciJmsJavaDownloadsJavaDownloadRecords#family_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter">DataOciJmsJavaDownloadsJavaDownloadRecordsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#filter DataOciJmsJavaDownloadsJavaDownloadRecords#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#id DataOciJmsJavaDownloadsJavaDownloadRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.osFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#os_family DataOciJmsJavaDownloadsJavaDownloadRecords#os_family}.

---

##### `package_type_detail`<sup>Optional</sup> <a name="package_type_detail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.packageTypeDetail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#package_type_detail DataOciJmsJavaDownloadsJavaDownloadRecords#package_type_detail}.

---

##### `release_version`<sup>Optional</sup> <a name="release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.releaseVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#release_version DataOciJmsJavaDownloadsJavaDownloadRecords#release_version}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.timeEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#time_end DataOciJmsJavaDownloadsJavaDownloadRecords#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.timeStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#time_start DataOciJmsJavaDownloadsJavaDownloadRecords#time_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetArchitecture">reset_architecture</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetFamilyVersion">reset_family_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetOsFamily">reset_os_family</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetPackageTypeDetail">reset_package_type_detail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetReleaseVersion">reset_release_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetTimeEnd">reset_time_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetTimeStart">reset_time_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadRecordsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter">DataOciJmsJavaDownloadsJavaDownloadRecordsFilter</a>]]

---

##### `reset_architecture` <a name="reset_architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetArchitecture"></a>

```python
def reset_architecture() -> None
```

##### `reset_family_version` <a name="reset_family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetFamilyVersion"></a>

```python
def reset_family_version() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_os_family` <a name="reset_os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetOsFamily"></a>

```python
def reset_os_family() -> None
```

##### `reset_package_type_detail` <a name="reset_package_type_detail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetPackageTypeDetail"></a>

```python
def reset_package_type_detail() -> None
```

##### `reset_release_version` <a name="reset_release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetReleaseVersion"></a>

```python
def reset_release_version() -> None
```

##### `reset_time_end` <a name="reset_time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetTimeEnd"></a>

```python
def reset_time_end() -> None
```

##### `reset_time_start` <a name="reset_time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetTimeStart"></a>

```python
def reset_time_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadRecords resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadRecords resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaDownloadRecords to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsJavaDownloadsJavaDownloadRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaDownloadRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList">DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.javaDownloadRecordCollection">java_download_record_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.familyVersionInput">family_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter">DataOciJmsJavaDownloadsJavaDownloadRecordsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.osFamilyInput">os_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.packageTypeDetailInput">package_type_detail_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.releaseVersionInput">release_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeEndInput">time_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeStartInput">time_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.familyVersion">family_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.packageTypeDetail">package_type_detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.releaseVersion">release_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.filter"></a>

```python
filter: DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList">DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList</a>

---

##### `java_download_record_collection`<sup>Required</sup> <a name="java_download_record_collection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.javaDownloadRecordCollection"></a>

```python
java_download_record_collection: DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList</a>

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `family_version_input`<sup>Optional</sup> <a name="family_version_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.familyVersionInput"></a>

```python
family_version_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadRecordsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter">DataOciJmsJavaDownloadsJavaDownloadRecordsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `os_family_input`<sup>Optional</sup> <a name="os_family_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.osFamilyInput"></a>

```python
os_family_input: str
```

- *Type:* str

---

##### `package_type_detail_input`<sup>Optional</sup> <a name="package_type_detail_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.packageTypeDetailInput"></a>

```python
package_type_detail_input: str
```

- *Type:* str

---

##### `release_version_input`<sup>Optional</sup> <a name="release_version_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.releaseVersionInput"></a>

```python
release_version_input: str
```

- *Type:* str

---

##### `time_end_input`<sup>Optional</sup> <a name="time_end_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeEndInput"></a>

```python
time_end_input: str
```

- *Type:* str

---

##### `time_start_input`<sup>Optional</sup> <a name="time_start_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeStartInput"></a>

```python
time_start_input: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `family_version`<sup>Required</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `package_type_detail`<sup>Required</sup> <a name="package_type_detail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.packageTypeDetail"></a>

```python
package_type_detail: str
```

- *Type:* str

---

##### `release_version`<sup>Required</sup> <a name="release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.releaseVersion"></a>

```python
release_version: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaDownloadsJavaDownloadRecordsConfig <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  architecture: str = None,
  family_version: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadRecordsFilter]] = None,
  id: str = None,
  os_family: str = None,
  package_type_detail: str = None,
  release_version: str = None,
  time_end: str = None,
  time_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#compartment_id DataOciJmsJavaDownloadsJavaDownloadRecords#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#architecture DataOciJmsJavaDownloadsJavaDownloadRecords#architecture}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.familyVersion">family_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#family_version DataOciJmsJavaDownloadsJavaDownloadRecords#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter">DataOciJmsJavaDownloadsJavaDownloadRecordsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#id DataOciJmsJavaDownloadsJavaDownloadRecords#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.osFamily">os_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#os_family DataOciJmsJavaDownloadsJavaDownloadRecords#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.packageTypeDetail">package_type_detail</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#package_type_detail DataOciJmsJavaDownloadsJavaDownloadRecords#package_type_detail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.releaseVersion">release_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#release_version DataOciJmsJavaDownloadsJavaDownloadRecords#release_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#time_end DataOciJmsJavaDownloadsJavaDownloadRecords#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#time_start DataOciJmsJavaDownloadsJavaDownloadRecords#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#compartment_id DataOciJmsJavaDownloadsJavaDownloadRecords#compartment_id}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#architecture DataOciJmsJavaDownloadsJavaDownloadRecords#architecture}.

---

##### `family_version`<sup>Optional</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#family_version DataOciJmsJavaDownloadsJavaDownloadRecords#family_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadRecordsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter">DataOciJmsJavaDownloadsJavaDownloadRecordsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#filter DataOciJmsJavaDownloadsJavaDownloadRecords#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#id DataOciJmsJavaDownloadsJavaDownloadRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#os_family DataOciJmsJavaDownloadsJavaDownloadRecords#os_family}.

---

##### `package_type_detail`<sup>Optional</sup> <a name="package_type_detail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.packageTypeDetail"></a>

```python
package_type_detail: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#package_type_detail DataOciJmsJavaDownloadsJavaDownloadRecords#package_type_detail}.

---

##### `release_version`<sup>Optional</sup> <a name="release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.releaseVersion"></a>

```python
release_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#release_version DataOciJmsJavaDownloadsJavaDownloadRecords#release_version}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#time_end DataOciJmsJavaDownloadsJavaDownloadRecords#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#time_start DataOciJmsJavaDownloadsJavaDownloadRecords#time_start}.

---

### DataOciJmsJavaDownloadsJavaDownloadRecordsFilter <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#name DataOciJmsJavaDownloadsJavaDownloadRecords#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#values DataOciJmsJavaDownloadsJavaDownloadRecords#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#regex DataOciJmsJavaDownloadsJavaDownloadRecords#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#name DataOciJmsJavaDownloadsJavaDownloadRecords#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#values DataOciJmsJavaDownloadsJavaDownloadRecords#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#regex DataOciJmsJavaDownloadsJavaDownloadRecords#regex}.

---

### DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection()
```


### DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter">DataOciJmsJavaDownloadsJavaDownloadRecordsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadRecordsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter">DataOciJmsJavaDownloadsJavaDownloadRecordsFilter</a>]]

---


### DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter">DataOciJmsJavaDownloadsJavaDownloadRecordsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciJmsJavaDownloadsJavaDownloadRecordsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter">DataOciJmsJavaDownloadsJavaDownloadRecordsFilter</a>]

---


### DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.downloadSourceId">download_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.downloadType">download_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.familyDisplayName">family_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.familyVersion">family_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.packageTypeDetail">package_type_detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.releaseVersion">release_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.timeDownloaded">time_downloaded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `download_source_id`<sup>Required</sup> <a name="download_source_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.downloadSourceId"></a>

```python
download_source_id: str
```

- *Type:* str

---

##### `download_type`<sup>Required</sup> <a name="download_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.downloadType"></a>

```python
download_type: str
```

- *Type:* str

---

##### `family_display_name`<sup>Required</sup> <a name="family_display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.familyDisplayName"></a>

```python
family_display_name: str
```

- *Type:* str

---

##### `family_version`<sup>Required</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `package_type_detail`<sup>Required</sup> <a name="package_type_detail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.packageTypeDetail"></a>

```python
package_type_detail: str
```

- *Type:* str

---

##### `release_version`<sup>Required</sup> <a name="release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.releaseVersion"></a>

```python
release_version: str
```

- *Type:* str

---

##### `time_downloaded`<sup>Required</sup> <a name="time_downloaded" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.timeDownloaded"></a>

```python
time_downloaded: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems</a>

---


### DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_records

dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.items"></a>

```python
items: DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection</a>

---



