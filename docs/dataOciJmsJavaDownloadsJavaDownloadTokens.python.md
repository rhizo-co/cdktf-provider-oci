# `dataOciJmsJavaDownloadsJavaDownloadTokens` Submodule <a name="`dataOciJmsJavaDownloadsJavaDownloadTokens` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaDownloadsJavaDownloadTokens <a name="DataOciJmsJavaDownloadsJavaDownloadTokens" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens oci_jms_java_downloads_java_download_tokens}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens(
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
  family_version: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadTokensFilter]] = None,
  id: str = None,
  search_by_user: str = None,
  state: str = None,
  value: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#compartment_id DataOciJmsJavaDownloadsJavaDownloadTokens#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#display_name DataOciJmsJavaDownloadsJavaDownloadTokens#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.familyVersion">family_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#family_version DataOciJmsJavaDownloadsJavaDownloadTokens#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#id DataOciJmsJavaDownloadsJavaDownloadTokens#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.searchByUser">search_by_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#search_by_user DataOciJmsJavaDownloadsJavaDownloadTokens#search_by_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#state DataOciJmsJavaDownloadsJavaDownloadTokens#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#value DataOciJmsJavaDownloadsJavaDownloadTokens#value}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#compartment_id DataOciJmsJavaDownloadsJavaDownloadTokens#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#display_name DataOciJmsJavaDownloadsJavaDownloadTokens#display_name}.

---

##### `family_version`<sup>Optional</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.familyVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#family_version DataOciJmsJavaDownloadsJavaDownloadTokens#family_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#filter DataOciJmsJavaDownloadsJavaDownloadTokens#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#id DataOciJmsJavaDownloadsJavaDownloadTokens#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `search_by_user`<sup>Optional</sup> <a name="search_by_user" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.searchByUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#search_by_user DataOciJmsJavaDownloadsJavaDownloadTokens#search_by_user}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#state DataOciJmsJavaDownloadsJavaDownloadTokens#state}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.Initializer.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#value DataOciJmsJavaDownloadsJavaDownloadTokens#value}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetFamilyVersion">reset_family_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetSearchByUser">reset_search_by_user</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetValue">reset_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadTokensFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_family_version` <a name="reset_family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetFamilyVersion"></a>

```python
def reset_family_version() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_search_by_user` <a name="reset_search_by_user" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetSearchByUser"></a>

```python
def reset_search_by_user() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.resetValue"></a>

```python
def reset_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadTokens resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadTokens resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaDownloadTokens to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsJavaDownloadsJavaDownloadTokens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaDownloadTokens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList">DataOciJmsJavaDownloadsJavaDownloadTokensFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.javaDownloadTokenCollection">java_download_token_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.familyVersionInput">family_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.searchByUserInput">search_by_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.familyVersion">family_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.searchByUser">search_by_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.filter"></a>

```python
filter: DataOciJmsJavaDownloadsJavaDownloadTokensFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList">DataOciJmsJavaDownloadsJavaDownloadTokensFilterList</a>

---

##### `java_download_token_collection`<sup>Required</sup> <a name="java_download_token_collection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.javaDownloadTokenCollection"></a>

```python
java_download_token_collection: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `family_version_input`<sup>Optional</sup> <a name="family_version_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.familyVersionInput"></a>

```python
family_version_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadTokensFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `search_by_user_input`<sup>Optional</sup> <a name="search_by_user_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.searchByUserInput"></a>

```python
search_by_user_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `family_version`<sup>Required</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `search_by_user`<sup>Required</sup> <a name="search_by_user" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.searchByUser"></a>

```python
search_by_user: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokens.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaDownloadsJavaDownloadTokensConfig <a name="DataOciJmsJavaDownloadsJavaDownloadTokensConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  family_version: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadTokensFilter]] = None,
  id: str = None,
  search_by_user: str = None,
  state: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#compartment_id DataOciJmsJavaDownloadsJavaDownloadTokens#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#display_name DataOciJmsJavaDownloadsJavaDownloadTokens#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.familyVersion">family_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#family_version DataOciJmsJavaDownloadsJavaDownloadTokens#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#id DataOciJmsJavaDownloadsJavaDownloadTokens#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.searchByUser">search_by_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#search_by_user DataOciJmsJavaDownloadsJavaDownloadTokens#search_by_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#state DataOciJmsJavaDownloadsJavaDownloadTokens#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#value DataOciJmsJavaDownloadsJavaDownloadTokens#value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#compartment_id DataOciJmsJavaDownloadsJavaDownloadTokens#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#display_name DataOciJmsJavaDownloadsJavaDownloadTokens#display_name}.

---

##### `family_version`<sup>Optional</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#family_version DataOciJmsJavaDownloadsJavaDownloadTokens#family_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadTokensFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#filter DataOciJmsJavaDownloadsJavaDownloadTokens#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#id DataOciJmsJavaDownloadsJavaDownloadTokens#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `search_by_user`<sup>Optional</sup> <a name="search_by_user" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.searchByUser"></a>

```python
search_by_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#search_by_user DataOciJmsJavaDownloadsJavaDownloadTokens#search_by_user}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#state DataOciJmsJavaDownloadsJavaDownloadTokens#state}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#value DataOciJmsJavaDownloadsJavaDownloadTokens#value}.

---

### DataOciJmsJavaDownloadsJavaDownloadTokensFilter <a name="DataOciJmsJavaDownloadsJavaDownloadTokensFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#name DataOciJmsJavaDownloadsJavaDownloadTokens#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#values DataOciJmsJavaDownloadsJavaDownloadTokens#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#regex DataOciJmsJavaDownloadsJavaDownloadTokens#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#name DataOciJmsJavaDownloadsJavaDownloadTokens#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#values DataOciJmsJavaDownloadsJavaDownloadTokens#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_tokens#regex DataOciJmsJavaDownloadsJavaDownloadTokens#regex}.

---

### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection()
```


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems()
```


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy()
```


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaDownloadsJavaDownloadTokensFilterList <a name="DataOciJmsJavaDownloadsJavaDownloadTokensFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaDownloadTokensFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>]]

---


### DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciJmsJavaDownloadsJavaDownloadTokensFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensFilter">DataOciJmsJavaDownloadsJavaDownloadTokensFilter</a>]

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedBy</a>

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedBy</a>

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.createdBy">created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.javaVersion">java_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.lastUpdatedBy">last_updated_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.licenseType">license_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeExpires">time_expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeLastUsed">time_last_used</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.createdBy"></a>

```python
created_by: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsCreatedByList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `java_version`<sup>Required</sup> <a name="java_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```python
last_updated_by: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsLastUpdatedByList</a>

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.licenseType"></a>

```python
license_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_expires`<sup>Required</sup> <a name="time_expires" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeExpires"></a>

```python
time_expires: str
```

- *Type:* str

---

##### `time_last_used`<sup>Required</sup> <a name="time_last_used" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeLastUsed"></a>

```python
time_last_used: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItems</a>

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_tokens

dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.items"></a>

```python
items: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadTokens.DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection">DataOciJmsJavaDownloadsJavaDownloadTokensJavaDownloadTokenCollection</a>

---



