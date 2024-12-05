# `dataOciJmsJavaDownloadsJavaDownloadReports` Submodule <a name="`dataOciJmsJavaDownloadsJavaDownloadReports` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaDownloadsJavaDownloadReports <a name="DataOciJmsJavaDownloadsJavaDownloadReports" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports oci_jms_java_downloads_java_download_reports}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadReportsFilter]] = None,
  id: str = None,
  java_download_report_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#compartment_id DataOciJmsJavaDownloadsJavaDownloadReports#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#display_name DataOciJmsJavaDownloadsJavaDownloadReports#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter">DataOciJmsJavaDownloadsJavaDownloadReportsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#id DataOciJmsJavaDownloadsJavaDownloadReports#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.javaDownloadReportId">java_download_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#java_download_report_id DataOciJmsJavaDownloadsJavaDownloadReports#java_download_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#state DataOciJmsJavaDownloadsJavaDownloadReports#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#compartment_id DataOciJmsJavaDownloadsJavaDownloadReports#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#display_name DataOciJmsJavaDownloadsJavaDownloadReports#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter">DataOciJmsJavaDownloadsJavaDownloadReportsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#filter DataOciJmsJavaDownloadsJavaDownloadReports#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#id DataOciJmsJavaDownloadsJavaDownloadReports#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `java_download_report_id`<sup>Optional</sup> <a name="java_download_report_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.javaDownloadReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#java_download_report_id DataOciJmsJavaDownloadsJavaDownloadReports#java_download_report_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#state DataOciJmsJavaDownloadsJavaDownloadReports#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.resetJavaDownloadReportId">reset_java_download_report_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadReportsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter">DataOciJmsJavaDownloadsJavaDownloadReportsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_java_download_report_id` <a name="reset_java_download_report_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.resetJavaDownloadReportId"></a>

```python
def reset_java_download_report_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadReports resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadReports resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaDownloadReports to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsJavaDownloadsJavaDownloadReports that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaDownloadReports to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList">DataOciJmsJavaDownloadsJavaDownloadReportsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.javaDownloadReportCollection">java_download_report_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList">DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter">DataOciJmsJavaDownloadsJavaDownloadReportsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.javaDownloadReportIdInput">java_download_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.javaDownloadReportId">java_download_report_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.filter"></a>

```python
filter: DataOciJmsJavaDownloadsJavaDownloadReportsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList">DataOciJmsJavaDownloadsJavaDownloadReportsFilterList</a>

---

##### `java_download_report_collection`<sup>Required</sup> <a name="java_download_report_collection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.javaDownloadReportCollection"></a>

```python
java_download_report_collection: DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList">DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadReportsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter">DataOciJmsJavaDownloadsJavaDownloadReportsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `java_download_report_id_input`<sup>Optional</sup> <a name="java_download_report_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.javaDownloadReportIdInput"></a>

```python
java_download_report_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `java_download_report_id`<sup>Required</sup> <a name="java_download_report_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.javaDownloadReportId"></a>

```python
java_download_report_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReports.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaDownloadsJavaDownloadReportsConfig <a name="DataOciJmsJavaDownloadsJavaDownloadReportsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadReportsFilter]] = None,
  id: str = None,
  java_download_report_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#compartment_id DataOciJmsJavaDownloadsJavaDownloadReports#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#display_name DataOciJmsJavaDownloadsJavaDownloadReports#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter">DataOciJmsJavaDownloadsJavaDownloadReportsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#id DataOciJmsJavaDownloadsJavaDownloadReports#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.javaDownloadReportId">java_download_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#java_download_report_id DataOciJmsJavaDownloadsJavaDownloadReports#java_download_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#state DataOciJmsJavaDownloadsJavaDownloadReports#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#compartment_id DataOciJmsJavaDownloadsJavaDownloadReports#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#display_name DataOciJmsJavaDownloadsJavaDownloadReports#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadReportsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter">DataOciJmsJavaDownloadsJavaDownloadReportsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#filter DataOciJmsJavaDownloadsJavaDownloadReports#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#id DataOciJmsJavaDownloadsJavaDownloadReports#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `java_download_report_id`<sup>Optional</sup> <a name="java_download_report_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.javaDownloadReportId"></a>

```python
java_download_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#java_download_report_id DataOciJmsJavaDownloadsJavaDownloadReports#java_download_report_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#state DataOciJmsJavaDownloadsJavaDownloadReports#state}.

---

### DataOciJmsJavaDownloadsJavaDownloadReportsFilter <a name="DataOciJmsJavaDownloadsJavaDownloadReportsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#name DataOciJmsJavaDownloadsJavaDownloadReports#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#values DataOciJmsJavaDownloadsJavaDownloadReports#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#regex DataOciJmsJavaDownloadsJavaDownloadReports#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#name DataOciJmsJavaDownloadsJavaDownloadReports#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#values DataOciJmsJavaDownloadsJavaDownloadReports#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_reports#regex DataOciJmsJavaDownloadsJavaDownloadReports#regex}.

---

### DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollection <a name="DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollection()
```


### DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItems <a name="DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItems()
```


### DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedBy <a name="DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedBy()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaDownloadsJavaDownloadReportsFilterList <a name="DataOciJmsJavaDownloadsJavaDownloadReportsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter">DataOciJmsJavaDownloadsJavaDownloadReportsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadReportsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter">DataOciJmsJavaDownloadsJavaDownloadReportsFilter</a>]]

---


### DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter">DataOciJmsJavaDownloadsJavaDownloadReportsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciJmsJavaDownloadsJavaDownloadReportsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsFilter">DataOciJmsJavaDownloadsJavaDownloadReportsFilter</a>]

---


### DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList <a name="DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedBy">DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedBy">DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedBy</a>

---


### DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList <a name="DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.checksumType">checksum_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.checksumValue">checksum_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.createdBy">created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList">DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.fileSizeInBytes">file_size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItems">DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `checksum_type`<sup>Required</sup> <a name="checksum_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.checksumType"></a>

```python
checksum_type: str
```

- *Type:* str

---

##### `checksum_value`<sup>Required</sup> <a name="checksum_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.checksumValue"></a>

```python
checksum_value: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.createdBy"></a>

```python
created_by: DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList">DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsCreatedByList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `file_size_in_bytes`<sup>Required</sup> <a name="file_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.fileSizeInBytes"></a>

```python
file_size_in_bytes: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItems">DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItems</a>

---


### DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList <a name="DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_reports

dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList">DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollection">DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.property.items"></a>

```python
items: DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList">DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadReports.DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollection">DataOciJmsJavaDownloadsJavaDownloadReportsJavaDownloadReportCollection</a>

---



